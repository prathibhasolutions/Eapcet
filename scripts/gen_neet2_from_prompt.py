import json
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
TRANSCRIPT = Path(
    r"C:\Users\User\AppData\Roaming\Code\User\workspaceStorage\055cbb485ea1aa251514df8ad04bd706\GitHub.copilot-chat\transcripts\4b4f0b57-703b-413b-ab57-ba8f11635826.jsonl"
)
TARGET = ROOT / "neet-2023-data.json"
TEMP_SCRIPT = ROOT / "scripts" / "_tmp_neet2023_source.py"
TEMP_JSON = ROOT / "scripts" / "_tmp_neet2023_source.json"


def extract_generator_source() -> str:
    source = None
    with TRANSCRIPT.open("r", encoding="utf-8") as handle:
        for raw_line in handle:
            line = json.loads(raw_line)
            if line.get("type") != "user.message":
                continue
            content = line.get("data", {}).get("content", "")
            if "cat << 'PYEOF' > /home/claude/gen_neet2.py" not in content:
                continue
            start_marker = "cat << 'PYEOF' > /home/claude/gen_neet2.py"
            end_marker = "\nPYEOF"
            start = content.find(start_marker)
            if start == -1:
                continue
            start = content.find("\n", start)
            end = content.rfind(end_marker)
            if start == -1 or end == -1:
                continue
            source = content[start + 1:end]
    if source is None:
        raise RuntimeError("Could not find the pasted NEET generator in the transcript.")
    return source


def rewrite_output_path(source: str) -> str:
    source = source.replace(
        'with open("/home/claude/neet_final.json", "w", encoding="utf-8") as f:',
        f'with open(r"{TEMP_JSON}", "w", encoding="utf-8") as f:',
    )
    source = source.replace("python3 /home/claude/gen_neet2.py", "")
    return source


def sanitize_text(value: str) -> str:
    value = value.replace("**", "")
    value = value.replace(r"\;^{\circ}", r"\,{}^{\circ}")
    value = value.replace("assets/exams/neet/", "assets/exams/neet-2023/")
    return value


def sanitize_data(value):
    if isinstance(value, str):
        return sanitize_text(value)
    if isinstance(value, list):
        return [sanitize_data(item) for item in value]
    if isinstance(value, dict):
        return {key: sanitize_data(item) for key, item in value.items()}
    return value


def trim_exam(exam: dict) -> dict:
    kept_questions = []
    section_defs = [
        ("physics", "Physics"),
        ("chemistry", "Chemistry"),
        ("botany", "Botany"),
        ("zoology", "Zoology"),
    ]
    start = 1
    sections = []

    for key, title in section_defs:
        section_questions = [
            question
            for question in exam.get("questions", [])
            if question.get("id", "").startswith(key + "-")
        ]
        section_questions.sort(key=lambda q: int(str(q.get("id", "")).split("-")[-1]))

        if key == "chemistry" and len(section_questions) >= 46:
            selected_questions = section_questions[:44] + [section_questions[45]]
        else:
            selected_questions = section_questions[:45]

        renumbered_questions = []
        for index, question in enumerate(selected_questions, start=1):
            qcopy = dict(question)
            qcopy["id"] = f"{key}-{index}"
            qcopy["section"] = title
            renumbered_questions.append(qcopy)

        kept_questions.extend(renumbered_questions)
        end = start + len(renumbered_questions) - 1
        sections.append({"key": key, "title": title, "count": len(renumbered_questions), "start": start, "end": end})
        start = end + 1

    exam["durationMinutes"] = 195
    exam["sections"] = sections
    exam["questions"] = kept_questions
    return exam


def main() -> None:
    source = rewrite_output_path(extract_generator_source())
    TEMP_SCRIPT.write_text(source, encoding="utf-8")
    subprocess.run([sys.executable, str(TEMP_SCRIPT)], check=True)

    with TEMP_JSON.open("r", encoding="utf-8") as handle:
        data = sanitize_data(json.load(handle))

    if data.get("exams"):
        data["exams"][0] = trim_exam(data["exams"][0])

    TARGET.write_text(json.dumps(data, indent=4, ensure_ascii=False) + "\n", encoding="utf-8")

    exam = data["exams"][0]
    print(f"Saved {len(exam['questions'])} questions to {TARGET}")


if __name__ == "__main__":
    main()
