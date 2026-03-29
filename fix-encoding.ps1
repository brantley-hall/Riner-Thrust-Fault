# Fix encoding issues in HTML
$content = Get-Content "index.html" -Raw
$content = $content -replace "â€”", "—"
$content = $content -replace "â€\"", '"'
$content = $content -replace "Â·", "·"
$content = $content -replace "â€™", "'"
$content | Out-File "index.html" -Encoding UTF8
Write-Host "Fixed encoding issues"
