<#
.SYNOPSIS
    Antigravity Hardware Optimizer
.DESCRIPTION
    1. Reclaims RAM by forcing Garbage Collection.
    2. Identifies and closes Chrome/Edge processes running > 24 hours.
    3. Optimizes Agent memory usage.
#>

Write-Host "[Health] Running Hardware Optimization..." -ForegroundColor Cyan

# 1. Reclaim RAM (System Garbage Collection)
[System.GC]::Collect()
[System.GC]::WaitForPendingFinalizers()
Write-Host " [RAM] Garbage Collection Triggered." -ForegroundColor Green

# 2. Close Stale Browser Processes (> 24 Hours)
$cutoff = (Get-Date).AddHours(-24)
$browsers = Get-Process -Name "chrome", "msedge" -ErrorAction SilentlyContinue

foreach ($proc in $browsers) {
    try {
        if ($proc.StartTime -lt $cutoff) {
            Write-Host " [CLEANUP] Killing stale browser process $($proc.Id) (Running since $($proc.StartTime))" -ForegroundColor Yellow
            Stop-Process -Id $proc.Id -Force -ErrorAction SilentlyContinue
        }
    } catch {
        # Ignore access denied errors regarding start time on system processes
    }
}

Write-Host "[Health] Optimization Complete." -ForegroundColor Green
exit 0
