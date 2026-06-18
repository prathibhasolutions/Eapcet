$jsonOut = "c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-pc-162-grand-test-3.json"
$jsOut = "c:\Users\User\Documents\GitHub\Eapcet1\pc-162-grand-test-3.js"

function New-Mcq {
  param(
    [string]$Id,
    [string]$Section,
    [string]$Text,
    [string]$Correct,
    [string[]]$Distractors,
    [int]$Index
  )

  $pool = @($Correct) + $Distractors
  $shift = $Index % 4
  $rot = @()
  for ($i = 0; $i -lt 4; $i++) {
    $rot += $pool[($i + $shift) % 4]
  }

  $letters = @('A', 'B', 'C', 'D')
  $correctPos = $letters[($pool.IndexOf($Correct) - $shift + 4) % 4]

  return [ordered]@{
    id = $Id
    section = $Section
    text = $Text
    options = @(
      @{ id = 'A'; text = $rot[0] },
      @{ id = 'B'; text = $rot[1] },
      @{ id = 'C'; text = $rot[2] },
      @{ id = 'D'; text = $rot[3] }
    )
    correct = $correctPos
  }
}

function Get-Distractors {
  param(
    [string[]]$WrongPool,
    [int]$QuestionIndex
  )

  if ($WrongPool.Count -lt 3) {
    throw 'Need at least 3 distractors in pool'
  }

  # Pick different distractors per question by rotating deterministic offsets.
  $size = $WrongPool.Count
  $offsets = @($QuestionIndex, $QuestionIndex + 7, $QuestionIndex + 13)
  $chosen = @()

  foreach ($off in $offsets) {
    $idx = $off % $size
    $candidate = $WrongPool[$idx]
    if (-not ($chosen -contains $candidate)) {
      $chosen += $candidate
    }
  }

  if ($chosen.Count -lt 3) {
    foreach ($item in $WrongPool) {
      if (-not ($chosen -contains $item)) {
        $chosen += $item
      }
      if ($chosen.Count -eq 3) { break }
    }
  }

  return @($chosen | Select-Object -First 3)
}

$templates = @(
  'Which action is best to {0}?',
  'To {0}, which option should be used?',
  'What is the correct method to {0}?',
  'When you need to {0}, choose the right step.',
  'Which option correctly helps you {0}?'
)

$sections = @(
  [ordered]@{
    key = 'os-workspace'
    title = 'Operating System & Digital Workspace Management'
    tasks = @(
      [ordered]@{ q = 'check storage usage by app in Windows'; a = 'Open Settings > System > Storage' },
      [ordered]@{ q = 'create a restore point before major update'; a = 'Use System Protection to create a restore point' },
      [ordered]@{ q = 'open advanced startup options'; a = 'Hold Shift while clicking Restart' },
      [ordered]@{ q = 'map a shared network drive letter'; a = 'Use Map Network Drive in File Explorer' },
      [ordered]@{ q = 'disable a startup app that slows boot'; a = 'Disable it from Task Manager Startup tab' },
      [ordered]@{ q = 'switch keyboard language quickly'; a = 'Press Windows + Space' },
      [ordered]@{ q = 'capture a custom screen area'; a = 'Press Windows + Shift + S' },
      [ordered]@{ q = 'view reliability history of system issues'; a = 'Open Reliability Monitor' },
      [ordered]@{ q = 'clear DNS cache after network change'; a = 'Run ipconfig /flushdns' },
      [ordered]@{ q = 'show hidden folders in Explorer'; a = 'Enable Hidden items in Explorer View' },
      [ordered]@{ q = 'pin an app on taskbar for quick launch'; a = 'Right-click app and choose Pin to taskbar' },
      [ordered]@{ q = 'sort files by size in a folder'; a = 'Use Sort by Size in Explorer' },
      [ordered]@{ q = 'open Device Manager quickly'; a = 'Use Win+X menu and select Device Manager' },
      [ordered]@{ q = 'remove USB drive safely'; a = 'Use Safely Remove Hardware option' },
      [ordered]@{ q = 'check full IP configuration details'; a = 'Run ipconfig /all' },
      [ordered]@{ q = 'set a printer as default'; a = 'Select printer and click Set as default' },
      [ordered]@{ q = 'open emoji panel in Windows'; a = 'Press Windows + . (dot)' },
      [ordered]@{ q = 'open clipboard history'; a = 'Press Windows + V' },
      [ordered]@{ q = 'rename file extension correctly'; a = 'Enable file extensions and rename the full filename' },
      [ordered]@{ q = 'restore an older version of a file'; a = 'Use Restore previous versions from file properties' }
    )
  },
  [ordered]@{
    key = 'word-processing'
    title = 'Word Processing'
    tasks = @(
      [ordered]@{ q = 'apply chapter numbering that updates automatically'; a = 'Use multilevel list formatting' },
      [ordered]@{ q = 'set different layout for a new chapter'; a = 'Insert a Next Page section break' },
      [ordered]@{ q = 'generate list of figures automatically'; a = 'Use References > Insert Table of Figures' },
      [ordered]@{ q = 'create clickable links within same document'; a = 'Use bookmarks with hyperlinks' },
      [ordered]@{ q = 'convert selected text into a table'; a = 'Use Convert Text to Table' },
      [ordered]@{ q = 'lock only form fields for filling'; a = 'Restrict editing to filling in forms' },
      [ordered]@{ q = 'insert current date that can auto-update'; a = 'Insert Date and Time with update option' },
      [ordered]@{ q = 'compare two versions of document'; a = 'Use Review > Compare' },
      [ordered]@{ q = 'insert citation in selected reference style'; a = 'Use References citation tools' },
      [ordered]@{ q = 'repeat table header on each page'; a = 'Enable Repeat Header Rows' },
      [ordered]@{ q = 'clean manual line breaks in pasted text'; a = 'Find ^l and replace with space' },
      [ordered]@{ q = 'reuse a standard clause repeatedly'; a = 'Insert it via Quick Parts' },
      [ordered]@{ q = 'avoid single last line at top/bottom page'; a = 'Enable widow/orphan control' },
      [ordered]@{ q = 'insert numbered caption under an image'; a = 'Use References > Insert Caption' },
      [ordered]@{ q = 'format pages for mirror margins in booklet'; a = 'Set Mirror margins in Page Setup' },
      [ordered]@{ q = 'share final circular without layout changes'; a = 'Save or export as PDF' },
      [ordered]@{ q = 'review all comments in one place'; a = 'Open the Comments/Reviewing pane' },
      [ordered]@{ q = 'accept only one tracked edit'; a = 'Use Accept on the selected change only' },
      [ordered]@{ q = 'replace one font everywhere in file'; a = 'Use Replace Fonts command' },
      [ordered]@{ q = 'replace only bold text formatting'; a = 'Use Find and Replace with format filters' }
    )
  },
  [ordered]@{
    key = 'spreadsheet-skills'
    title = 'Spreadsheet Skills'
    tasks = @(
      [ordered]@{ q = 'sum values matching one condition'; a = 'Use SUMIF' },
      [ordered]@{ q = 'sum values matching multiple conditions'; a = 'Use SUMIFS' },
      [ordered]@{ q = 'count rows matching criteria set'; a = 'Use COUNTIFS' },
      [ordered]@{ q = 'lookup value by key with exact match'; a = 'Use XLOOKUP (or VLOOKUP exact match)' },
      [ordered]@{ q = 'extract month name from a date'; a = 'Use TEXT(date,"mmmm")' },
      [ordered]@{ q = 'join first and last name columns'; a = 'Use CONCAT or & operator' },
      [ordered]@{ q = 'get first three letters from code'; a = 'Use LEFT(text,3)' },
      [ordered]@{ q = 'locate position of delimiter in text'; a = 'Use FIND' },
      [ordered]@{ q = 'replace substring inside a cell value'; a = 'Use SUBSTITUTE' },
      [ordered]@{ q = 'limit entry to numbers from 1 to 100'; a = 'Use Data Validation with whole number rule' },
      [ordered]@{ q = 'protect formula cells from accidental edit'; a = 'Lock cells and protect sheet' },
      [ordered]@{ q = 'show subtotal after sorting by category'; a = 'Use Subtotal feature' },
      [ordered]@{ q = 'highlight top values automatically'; a = 'Use Conditional Formatting Top Items rule' },
      [ordered]@{ q = 'remove extra spaces from imported text'; a = 'Use TRIM' },
      [ordered]@{ q = 'convert row data into column'; a = 'Use Paste Special > Transpose' },
      [ordered]@{ q = 'compute running total down rows'; a = 'Use cumulative SUM formula with expanding range' },
      [ordered]@{ q = 'round value upward to next integer'; a = 'Use ROUNDUP(number,0)' },
      [ordered]@{ q = 'return value at row and column intersection'; a = 'Use INDEX (and MATCH if needed)' },
      [ordered]@{ q = 'remove duplicate records'; a = 'Use Remove Duplicates' },
      [ordered]@{ q = 'visualize category share in percentages'; a = 'Insert pie or doughnut chart' }
    )
  },
  [ordered]@{
    key = 'presentation-skills'
    title = 'Presentation Skills'
    tasks = @(
      [ordered]@{ q = 'apply one design to all slides'; a = 'Choose a theme from Design tab' },
      [ordered]@{ q = 'place same logo on every slide'; a = 'Add logo in Slide Master' },
      [ordered]@{ q = 'animate chart by each series'; a = 'Set animation sequence by series' },
      [ordered]@{ q = 'present only selected slide set'; a = 'Create and run Custom Slide Show' },
      [ordered]@{ q = 'set one transition time for full deck'; a = 'Apply transition timing to all slides' },
      [ordered]@{ q = 'crop image into circle'; a = 'Use Crop to Shape > Oval/Circle' },
      [ordered]@{ q = 'avoid font mismatch on another PC'; a = 'Embed fonts in presentation file' },
      [ordered]@{ q = 'create section-based clickable navigation'; a = 'Insert Section Zoom' },
      [ordered]@{ q = 'copy animation from one object to another'; a = 'Use Animation Painter' },
      [ordered]@{ q = 'distribute objects with equal spacing'; a = 'Use Align > Distribute' },
      [ordered]@{ q = 'temporarily blank screen during show'; a = 'Press B during slideshow' },
      [ordered]@{ q = 'jump directly to a specific slide number'; a = 'Type slide number and press Enter' },
      [ordered]@{ q = 'print speaker notes for each slide'; a = 'Print Notes Pages layout' },
      [ordered]@{ q = 'record rehearsal timing for slides'; a = 'Use Rehearse Timings' },
      [ordered]@{ q = 'show subtitles while presenting'; a = 'Enable subtitles in Slide Show settings' },
      [ordered]@{ q = 'reduce presentation size with videos'; a = 'Use Compress Media' },
      [ordered]@{ q = 'replace one font throughout deck'; a = 'Use Replace Fonts' },
      [ordered]@{ q = 'prevent accidental movement of recurring objects'; a = 'Keep them in Slide Master layout' },
      [ordered]@{ q = 'print handout with three slides per page'; a = 'Choose Handouts 3 Slides in Print' },
      [ordered]@{ q = 'add clickable object to open another slide'; a = 'Assign Action settings to shape' }
    )
  },
  [ordered]@{
    key = 'email-calendar'
    title = 'Email & Calendar Management'
    tasks = @(
      [ordered]@{ q = 'mark urgent mail with priority'; a = 'Set message as High Importance' },
      [ordered]@{ q = 'ask recipient confirmation after reading'; a = 'Enable read receipt request' },
      [ordered]@{ q = 'schedule email delivery for later time'; a = 'Use Delay Send / Send Later' },
      [ordered]@{ q = 'block spam sender permanently'; a = 'Add sender to Blocked Senders list' },
      [ordered]@{ q = 'share your calendar view with manager'; a = 'Set calendar sharing permissions' },
      [ordered]@{ q = 'suggest another meeting time'; a = 'Use Propose New Time' },
      [ordered]@{ q = 'attach one email inside another email'; a = 'Insert Outlook item as attachment' },
      [ordered]@{ q = 'find sender emails from this month'; a = 'Use search filters for sender and date' },
      [ordered]@{ q = 'auto-label project mails'; a = 'Create inbox rule with category action' },
      [ordered]@{ q = 'send meeting as calendar file'; a = 'Forward as iCalendar' },
      [ordered]@{ q = 'convert flagged email to task'; a = 'Add flagged mail to To-Do/Tasks' },
      [ordered]@{ q = 'stop updates from noisy thread'; a = 'Ignore conversation' },
      [ordered]@{ q = 'set work hours for scheduling assistant'; a = 'Configure work hours in calendar options' },
      [ordered]@{ q = 'view two calendars together'; a = 'Open calendars side by side or overlay' },
      [ordered]@{ q = 'check current mailbox storage usage'; a = 'Use mailbox cleanup tools' },
      [ordered]@{ q = 'save email as PDF copy'; a = 'Print email to PDF' },
      [ordered]@{ q = 'insert reusable response block'; a = 'Use Quick Parts/template text' },
      [ordered]@{ q = 'set default signature for new emails'; a = 'Configure default signature settings' },
      [ordered]@{ q = 'recall and replace a sent internal email'; a = 'Use Recall This Message and resend' },
      [ordered]@{ q = 'backup contacts list offline'; a = 'Export contacts to CSV' }
    )
  }
)

$allQuestions = @()
$sectionsOut = @()
$start = 1
$globalIndex = 0

foreach ($s in $sections) {
  $count = $s.tasks.Count
  $sectionsOut += [ordered]@{
    key = $s.key
    title = $s.title
    count = $count
    start = $start
    end = $start + $count - 1
  }

  $answers = @($s.tasks | ForEach-Object { $_.a })

  for ($i = 0; $i -lt $count; $i++) {
    $task = $s.tasks[$i]
    $correct = [string]$task.a
    $wrongPool = @($answers | Where-Object { $_ -ne $correct })
    $distractors = Get-Distractors -WrongPool $wrongPool -QuestionIndex $i

    if ($distractors.Count -lt 3) {
      throw 'Not enough distractors generated'
    }

    $tpl = $templates[$globalIndex % $templates.Count]
    $qText = [string]::Format($tpl, [string]$task.q)
    $qid = 'gt3-' + $s.key + '-' + ($i + 1)

    $allQuestions += New-Mcq -Id $qid -Section $s.title -Text $qText -Correct $correct -Distractors $distractors -Index $globalIndex
    $globalIndex++
  }

  $start += $count
}

$payload = [ordered]@{
  exams = @(
    [ordered]@{
      id = 'pc-162-grand-test-3'
      title = 'Paper Code 162 Grand Test 3 - Office Automation (CBT)'
      date = '2026-06-06'
      durationMinutes = 60
      marksPerQuestion = 1
      negativeMark = 0
      qualifyingMarks = 40
      sections = $sectionsOut
      questions = $allQuestions
    }
  )
}

$pretty = $payload | ConvertTo-Json -Depth 100
Set-Content -Path $jsonOut -Value $pretty -Encoding utf8

$min = $payload | ConvertTo-Json -Depth 100 -Compress
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
Set-Content -Path $jsOut -Value $loader -Encoding utf8

Write-Output "GT3 rebuilt with proper varied options and key mapping"
