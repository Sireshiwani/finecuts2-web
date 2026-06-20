# Run Garden City Fine Cuts locally (two terminals worth of work in one script).
# Usage: .\scripts\dev-local.ps1
# Or open two terminals and use the commands printed below.

$djangoRoot = "F:\Programming\gardencity"
$nextRoot = "C:\Users\Eshiwani\finecuts2"

Write-Host "=== Garden City Fine Cuts — local dev ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Terminal 1 — Django (port 8000):" -ForegroundColor Yellow
Write-Host "  cd $djangoRoot"
Write-Host "  py -3 -m venv .venv"
Write-Host "  .venv\Scripts\Activate.ps1"
Write-Host "  pip install -r requirements.txt"
Write-Host "  py manage.py migrate"
Write-Host "  py manage.py runserver"
Write-Host ""
Write-Host "Terminal 2 — Next.js (port 3000):" -ForegroundColor Yellow
Write-Host "  cd $nextRoot"
Write-Host "  npm install"
Write-Host "  npm run dev"
Write-Host ""
Write-Host "Then open:" -ForegroundColor Green
Write-Host "  Marketing site:  http://localhost:3000"
Write-Host "  Staff login:     http://127.0.0.1:8000/login/"
Write-Host "  Password reset:  http://127.0.0.1:8000/password-reset/"
Write-Host "  Django admin:    http://127.0.0.1:8000/admin/"
Write-Host ""

if (-not (Test-Path "$nextRoot\.env.local")) {
  Copy-Item "$nextRoot\.env.local.example" "$nextRoot\.env.local"
  Write-Host "Created .env.local" -ForegroundColor Green
}
