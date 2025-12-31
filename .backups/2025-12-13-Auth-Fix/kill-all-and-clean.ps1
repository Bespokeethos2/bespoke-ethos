#!/usr/bin/env pwsh
# Kill all Git processes and local servers, then clean up Git lock

Write-Host "🔪 Killing all Git processes..." -ForegroundColor Yellow
Get-Process | Where-Object {$_.ProcessName -like "*git*"} | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host "🔪 Killing all Node/npm processes..." -ForegroundColor Yellow
Get-Process | Where-Object {$_.ProcessName -like "*node*" -or $_.ProcessName -like "*npm*"} | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host "🔪 Killing local dev servers (port 3000)..." -ForegroundColor Yellow
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    Stop-Process -Id $port3000.OwningProcess -Force -ErrorAction SilentlyContinue
}

Write-Host "🧹 Removing Git lock file..." -ForegroundColor Yellow
Remove-Item -Force "C:\Vercel\.git\index.lock" -ErrorAction SilentlyContinue

Write-Host "✅ Cleanup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Now you can run:" -ForegroundColor Cyan
Write-Host "  git pull origin main" -ForegroundColor White
Write-Host "  vercel --prod" -ForegroundColor White
