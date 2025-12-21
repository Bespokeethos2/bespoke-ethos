# Antigravity Multi-Workspace Agent Control
# Launch script for managing agents across all 3 workspaces

param(
    [switch]$Parallel
)

# Workspace paths
$workspaces = @(
    @{ Name = "firebase"; Path = "C:\firebase"; Project = "bespokeethos-analytics-475007" },
    @{ Name = "bespoke-ethos"; Path = "C:\vercel"; Project = "bespokeethos-analytics-475007" },
    @{ Name = "GMFG"; Path = "C:\GMFG-Vercel"; Project = "bespokeethos-analytics-475007" }
)

# Agent configuration
$maxAgentsPerWorkspace = 3
$totalMaxAgents = if ($Parallel) { 9 } else { 3 }

Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  ANTIGRAVITY AGENT CONTROL CENTER" -ForegroundColor Cyan
Write-Host "  Max agents per workspace: $maxAgentsPerWorkspace" -ForegroundColor Gray
Write-Host "  Total max agents: $totalMaxAgents" -ForegroundColor Gray
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Launch VS Code for each workspace
foreach ($ws in $workspaces) {
    Write-Host "[LAUNCHING] $($ws.Name) @ $($ws.Path)" -ForegroundColor Green

    # Check if manifest exists
    $manifestPath = Join-Path $ws.Path ".antigravity\manifest.json"
    if (Test-Path $manifestPath) {
        Write-Host "  ✓ Manifest found" -ForegroundColor Gray
    } else {
        Write-Host "  ✗ Manifest missing" -ForegroundColor Yellow
    }

    # Check playbooks
    $playbooksPath = Join-Path $ws.Path ".antigravity\playbooks"
    if (Test-Path $playbooksPath) {
        $playbooks = Get-ChildItem $playbooksPath -Filter "*.json" | Measure-Object
        Write-Host "  ✓ $($playbooks.Count) playbooks loaded" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  AGENT STATUS: READY" -ForegroundColor Green
Write-Host "  Mode: Autonomous | Parallel | Async" -ForegroundColor Gray
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "Commands:" -ForegroundColor Yellow
Write-Host "  • Open all workspaces: code C:\firebase C:\vercel C:\GMFG-Vercel" -ForegroundColor White
Write-Host "  • Open Antigravity panel: View system metrics/tools" -ForegroundColor White
Write-Host "  • Notifications will appear when action is required" -ForegroundColor White
Write-Host ""
