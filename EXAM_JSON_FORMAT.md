# Exam JSON Format

Use this file shape when importing from the Home screen using the Import JSON button.

## Accepted root formats

1. Single exam object
2. Array of exam objects
3. Object with exams array: `{ "exams": [ ... ] }`

## Exam object

```json
{
  "id": "eapcet-daily-002",
  "title": "EAPCET Daily Mock Test - 002",
  "date": "2026-04-29",
  "durationMinutes": 180,
  "sectionWiseFlow": false,
  "marksPerQuestion": 1,
  "negativeMark": 0,
  "sections": [
    { "key": "maths", "title": "Maths", "count": 80, "start": 1, "end": 80, "durationMinutes": 60 },
    { "key": "physics", "title": "Physics", "count": 40, "start": 81, "end": 120, "durationMinutes": 60 },
    { "key": "chemistry", "title": "Chemistry", "count": 40, "start": 121, "end": 160, "durationMinutes": 60 }
  ],
  "questions": []
}
```

## Question object

```json
{
  "id": "maths-1",
  "section": "Maths",
  "text": "Solve: $x^2 - 5x + 6 = 0$",
  "image": "assets/exams/eapcet-daily-002/maths/q1.jpg",
  "options": [
    { "id": "A", "text": "$x=2$" },
    { "id": "B", "text": "$x=3$" },
    { "id": "C", "text": "$x=4$", "image": "assets/exams/eapcet-daily-002/maths/q1-opt-c.jpg" },
    { "id": "D", "text": "$x=5$" }
  ],
  "correct": "A"
}
```

## Notes

- `text` supports LaTeX inline with `$...$` and display math with `$$...$$`.
- `image` is optional for both question and option.
- If options are provided as simple strings like `["A","B","C","D"]`, the app still works (backward compatibility).
- Set `sectionWiseFlow: true` to enforce section-by-section progression.
- When `sectionWiseFlow` is enabled, set `durationMinutes` on each section. The next section unlocks only after submitting or timing out the current section.
- Imported exams are saved in browser localStorage and appear in exam list after refresh.
- If imported exam ID matches existing exam ID, imported exam replaces it.
