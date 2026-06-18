$jsonOut = "c:\Users\User\Documents\GitHub\Eapcet1\new-exam-temp-pc-162-grand-test-3.json"
$jsOut = "c:\Users\User\Documents\GitHub\Eapcet1\pc-162-grand-test-3.js"

function New-Mcq($Id,$Section,$Text,$Correct,$Wrong,$Index){
  $opts = @($Correct) + $Wrong
  $shift = $Index % 4
  $rot = @()
  for($i=0;$i -lt 4;$i++){ $rot += $opts[($i+$shift)%4] }
  $letters=@('A','B','C','D')
  $correctPos=$letters[($opts.IndexOf($Correct)-$shift+4)%4]

  [ordered]@{
    id=$Id
    section=$Section
    text=$Text
    options=@(
      @{id='A';text=$rot[0]},
      @{id='B';text=$rot[1]},
      @{id='C';text=$rot[2]},
      @{id='D';text=$rot[3]}
    )
    correct=$correctPos
  }
}

$templates=@(
  'Which option correctly helps you {0}?',
  'To {0}, what should you do?',
  'What is the most suitable step to {0}?',
  'When you need to {0}, choose the correct option.',
  'Which method is best to {0}?'
)

$sections=@(
  [ordered]@{ key='sys-admin'; title='System Setup & Admin Controls'; wrong=@('Insert a slide transition','Apply SUMIFS formula','Enable track changes'); tasks=@('configure user account lock screen timeout','run storage sense cleanup automatically','open local users and groups management','set power plan to balanced mode','enable restore point protection','check event logs for recent errors','configure startup programs review','map a shared folder as drive','flush DNS cache from terminal','view installed app list quickly','configure default apps by file type','open advanced system properties','set taskbar corner icon visibility','create desktop shortcut for control panel','check firewall profile status','set printer as default device','use run dialog for mmc console','open services manager for troubleshooting','enable clipboard history settings','recover previous file versions') },
  [ordered]@{ key='doc-mastery'; title='Document Production Mastery'; wrong=@('Pin app to taskbar','Sort folder by size','Run ipconfig /all'); tasks=@('apply multi-level numbering for chapters','insert section breaks for mixed layout','add table of figures automatically','create internal bookmark hyperlinks','convert selected text into table','lock form fields for data entry','insert auto-updating date fields','compare two document revisions','use citation manager for references','repeat table header across pages','clean line breaks from pasted text','add quick parts reusable block','set paragraph widow orphan control','insert caption with numbering','format page with mirror margins','save final circular as PDF','enable reviewer comments pane','accept only selected tracked changes','replace fonts across document','use find replace for formatting') },
  [ordered]@{ key='sheet-intel'; title='Spreadsheet Intelligence'; wrong=@('Open slide master view','Use meeting invite recall','Enable hidden items in explorer'); tasks=@('calculate conditional totals by department','count records matching two filters','return value by indexed lookup','extract year from date field','trim extra spaces from import','transpose row records to column','highlight top 5 values automatically','protect formula cells from edits','set validation list for status','build pivot summary by category','generate running balance column','round numbers up to next integer','split full name into columns','find duplicate IDs quickly','create sparkline trend inside cell','convert text codes to uppercase','remove duplicate rows safely','apply custom number format for currency','use subtotal for grouped data','create chart for monthly comparison') },
  [ordered]@{ key='present-pro'; title='Presentation Authoring Pro'; wrong=@('Use COUNTIFS for attendance','Create Outlook distribution list','Set default browser in settings'); tasks=@('apply common theme to all slides','insert logo using slide master','align objects with equal spacing','animate chart categories sequentially','configure presenter view monitors','record rehearsal slide timings','replace a font throughout deck','compress media before sharing','insert section zoom navigation','create custom slideshow subset','set transition duration globally','add subtitles during live show','export handout in 3-slide layout','attach action button to jump slide','duplicate animation with painter tool','crop image to shape circle','embed fonts in presentation file','print notes pages for speaker','black out screen during pause','reuse slides from another deck') },
  [ordered]@{ key='mail-collab'; title='Mail, Calendar & Team Coordination'; wrong=@('Use crop to shape circle','Create pivot chart by category','Enable startup impact tab'); tasks=@('set high importance on urgent email','request read receipt from recipient','schedule delayed send for morning','create inbox rule for project mails','attach email item to new message','block sender as junk permanently','propose alternate meeting time','share calendar with view permission','set automatic out of office reply','convert flagged mail to task','ignore noisy conversation thread','forward invite as iCalendar file','search emails by sender and month','set default reminder for meetings','configure automatic email signature','archive old messages safely','check mailbox storage usage','report suspicious email as phishing','recall and replace sent message','export contacts to csv backup') }
)

$all=@()
$secOut=@()
$start=1
$idx=0

foreach($s in $sections){
  $count=$s.tasks.Count
  $secOut += [ordered]@{ key=$s.key; title=$s.title; count=$count; start=$start; end=($start+$count-1) }

  for($i=0;$i -lt $count;$i++){
    $task=$s.tasks[$i]
    $tpl=$templates[$idx % $templates.Count]
    $q=[string]::Format($tpl,$task)
    $all += New-Mcq ("gt3-"+$s.key+"-"+($i+1)) $s.title $q ("Recommended action: " + $task) $s.wrong $idx
    $idx++
  }

  $start += $count
}

$payload=[ordered]@{
  exams=@(
    [ordered]@{
      id='pc-162-grand-test-3'
      title='Paper Code 162 Grand Test 3 - Office Automation (CBT)'
      date='2026-06-06'
      durationMinutes=60
      marksPerQuestion=1
      negativeMark=0
      qualifyingMarks=40
      sections=$secOut
      questions=$all
    }
  )
}

$pretty=$payload|ConvertTo-Json -Depth 100
Set-Content -Path $jsonOut -Value $pretty -Encoding utf8

$min=$payload|ConvertTo-Json -Depth 100 -Compress
$loader=@"
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

Write-Output "Created GT3 with $($all.Count) questions"
