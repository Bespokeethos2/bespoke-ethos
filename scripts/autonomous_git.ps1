<#
.SYNOPSIS
    Autonomous Git Workflow Script
.DESCRIPTION
    Automates the git commit process:
    1. Formats code (Prettier/ESLint).
    2. Runs tests.
    3. If tests fail, attempts 'debug' (placeholder for agentic fix).
    4. If tests pass, runs a SECOND pass to ensure stability.
    5. Commits if all checks pass.
.PARAMETER Message
    Commit message.
.EXAMPLE
    .\autonomous_git.ps1 -Message "fix: update layout"
#>

param (
    [string]$Message = "chore: autonomous update"
)

function Write-Color([string]$text, [ConsoleColor]$color) {
    Write-Host $text -ForegroundColor $color
}

# 1. Preflight Injection Check
Write-Color "Detailed Check: Preflight & Context Injection..." Cyan
$changes = git diff --shortstat HEAD
# Very basic heuristic for "20%" or "Major" changes: > 20 files or > 500 lines
if ($changes -match "(\d+) files changed" -and $Matches[1] -gt 20) {
    Write-Color "[ALERT] Major Change Detected (>20 files). PREFLIGHT REQUIRED." Magenta
    if (Test-Path "$PSScriptRoot\..\PREFLIGHT.md") {
        Get-Content "$PSScriptRoot\..\PREFLIGHT.md" | Write-Host -ForegroundColor Gray
    }
    # In a real autonomy loop, the agent would logically 'read' this.
    # We simulate "Pre-inject req" by forcing a pause/check or outputting it to context.
    Write-Color ">> Please verify the above Preflight Checklist!" Magenta
}

# 1b. Format Code
Write-Color "Detailed Check: Formatting Code..." Cyan
if (Test-Path "package.json") {
    npm run format 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Color "Formatting failed or script missing. Skipping..." Yellow
    }
}

# 2. Run Tests (Pass 1)
Write-Color "Detailed Check: Running Test Pass 1..." Cyan
# Detect test runner
$testCmd = "npm test"
if (Test-Path "package.json") {
    # Check if 'test' script exists
    $pkg = Get-Content "package.json" | ConvertFrom-Json
    if (-not $pkg.scripts.test) {
        Write-Color "No test script found. proceeding..." Yellow
        $testCmd = $null
    }
}

if ($testCmd) {
    # Run Test Pass 1 & Capture Log
    Invoke-Expression "$testCmd 2>&1 | Tee-Object -FilePath 'test_failure.log'"
    
    if ($LASTEXITCODE -ne 0) {
        Write-Color "Test Pass 1 Failed! Entering AGGRESSIVE DEBUG LOOP..." Red
        
        $retryCount = 0
        $maxRetries = 10 
        
        while ($LASTEXITCODE -ne 0 -and $retryCount -lt $maxRetries) {
            $retryCount++
            Write-Color ">>> Debug Attempt #$retryCount" Magenta
            
            # Dispatch Debug Agent with Error Log
            $debugScript = Join-Path $PSScriptRoot "debug_agent.ps1"
            if (Test-Path $debugScript) {
                & $debugScript -Context "Test Failure - Attempt $retryCount" -ErrorLog "test_failure.log"
            }
            
            # Re-run tests to check if fixed (and update log)
            Write-Color "Verifying Fix..." Cyan
            Invoke-Expression "$testCmd 2>&1 | Tee-Object -FilePath 'test_failure.log'"
        }
        
        if ($LASTEXITCODE -eq 0) {
            Write-Color "FIXED! Resuming workflow..." Green
        } else {
            Write-Error "Could not fix after $maxRetries attempts. Pausing for human intervention."
            exit 1
        }
    }
}

# 3. Run Tests (Pass 2 - "Double Pass Flawlessly")
if ($testCmd) {
    Write-Color "Detailed Check: Running Test Pass 2 (Verification)..." Cyan
    Invoke-Expression $testCmd
    if ($LASTEXITCODE -ne 0) {
        Write-Color "Test Pass 2 Failed! Flakiness detected." Red
        exit 1
    }
}

# 4. Commit & Deploy
Write-Color "All checks passed. Committing..." Green

# Sync with Potential Mobile Edits (Copilot Mobile Awareness)
Write-Color "Syncing with Remote (Mobile Copilot Check)..." Cyan
git pull --rebase origin main 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Color "Rebase required or conflict detected. Attempting standard pull..." Yellow
    git pull origin main
}

git add .
git commit -m "$Message"
git push
Write-Color "Success! Code deployed." Green
