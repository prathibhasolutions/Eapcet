$jsonPath = "c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-pc-162-grand-test-3.json"
$jsPath = "c:\Users\User\Documents\GitHub\Eapcet1\pc-162-grand-test-3.js"

$data = Get-Content -Raw -Path $jsonPath | ConvertFrom-Json
$exam = $data.exams | Where-Object { $_.id -eq 'pc-162-grand-test-3' } | Select-Object -First 1
if (-not $exam) {
  throw "GT3 exam not found in JSON"
}

$targetSections = @(
  [ordered]@{ key='os-workspace'; title='Operating System & Digital Workspace Management'; count=20; start=1; end=20 },
  [ordered]@{ key='word-processing'; title='Word Processing'; count=20; start=21; end=40 },
  [ordered]@{ key='spreadsheet-skills'; title='Spreadsheet Skills'; count=20; start=41; end=60 },
  [ordered]@{ key='presentation-skills'; title='Presentation Skills'; count=20; start=61; end=80 },
  [ordered]@{ key='email-calendar'; title='Email & Calendar Management'; count=20; start=81; end=100 }
)

$exam.sections = $targetSections

for ($i = 0; $i -lt $exam.questions.Count; $i++) {
  $qNo = $i + 1
  if ($qNo -le 20) {
    $exam.questions[$i].section = 'Operating System & Digital Workspace Management'
  } elseif ($qNo -le 40) {
    $exam.questions[$i].section = 'Word Processing'
  } elseif ($qNo -le 60) {
    $exam.questions[$i].section = 'Spreadsheet Skills'
  } elseif ($qNo -le 80) {
    $exam.questions[$i].section = 'Presentation Skills'
  } else {
    $exam.questions[$i].section = 'Email & Calendar Management'
  }
}

$pretty = $data | ConvertTo-Json -Depth 100
Set-Content -Path $jsonPath -Value $pretty -Encoding utf8

$min = $data | ConvertTo-Json -Depth 100 -Compress
$loader = @"
(function () {
  window.BUNDLED_EXAMS = window.BUNDLED_EXAMS || { exams: [] };

  var payload = $min;
  var incoming = Array.isArray(payload) ? payload : (Array.isArray(payload.exams) ? payload.exams : [payload]);
  var existing = Array.isArray(window.BUNDLED_EXAMS.exams) ? window.BUNDLED_EXAMS.exams : [];
  var map = {};

  existing.forEach(function (exam) { if (exam && exam.id) map[String(exam.id)] = exam; });
  incoming.forEach(function (exam) { if (exam && exam.id) map[String(exam.id)] = exam; });
  window.BUNDLED_EXAMS.exams = Object.keys(map).map(function (id) { return map[id]; });
})();
"@
Set-Content -Path $jsPath -Value $loader -Encoding utf8

Write-Output "GT3 syllabus aligned to GT1/GT2"
