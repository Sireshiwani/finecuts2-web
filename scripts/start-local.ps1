# Start Django + Next.js in two new PowerShell windows.
# Right-click → Run with PowerShell, or:  powershell -ExecutionPolicy Bypass -File .\scripts\start-local.ps1

$djangoRoot = "F:\Programming\gardencity"
$nextRoot   = "C:\Users\Eshiwani\finecuts2"

if (-not (Test-Path "$djangoRoot\.venv\Scripts\python.exe")) {
    Write-Host "Creating Django venv..." -ForegroundColor Yellow
    Set-Location $djangoRoot
    py -3 -m venv .venv
    .\.venv\Scripts\pip install -r requirements.txt
    .\.venv\Scripts\python.exe manage.py migrate
}

if (-not (Test-Path "$nextRoot\node_modules")) {
    Write-Host "Installing Next.js dependencies..." -ForegroundColor Yellow
    Set-Location $nextRoot
    npm install
}

if (-not (Test-Path "$nextRoot\.env.local")) {
    Copy-Item "$nextRoot\.env.local.example" "$nextRoot\.env.local"
}

Write-Host "Starting Django on http://127.0.0.1:8000 ..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList @(
    "-NoExit", "-Command",
    "Set-Location '$djangoRoot'; .\.venv\Scripts\python.exe manage.py runserver 127.0.0.1:8000"
)

Start-Sleep -Seconds 2

Write-Host "Starting Next.js on http://localhost:3000 ..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList @(
    "-NoExit", "-Command",
    "Set-Location '$nextRoot'; npm run dev"
)

Write-Host ""
Write-Host "Two terminal windows should open." -ForegroundColor Green
Write-Host "  Marketing:  http://localhost:3000"
Write-Host "  Staff login: http://127.0.0.1:8000/login/"
Write-Host ""
Write-Host "Wait ~30s for Next.js first compile, then open the URLs above."
