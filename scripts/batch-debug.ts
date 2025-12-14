import { exec } from 'child_process';

// Batch Debugging Script
// Runs TypeCHeck and Lint in parallel, parses output, and logs critical issues.

async function runCommand(cmd: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(cmd, { cwd: process.cwd() }, (error, stdout, stderr) => {
            if (error) {
                // If checking types/lint, error usually means issues found, which is what we want.
                resolve(stdout + stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}

async function batchDebug() {
    console.log("🐞 Starting Batch Debugging Protocol...");
    
    console.log("1. Running TypeScript Check...");
    const tsOutput = await runCommand('npx tsc --noEmit');
    
    if (tsOutput.trim()) {
        console.log("--- TS Errors Detected ---");
        // Log first 10 lines only to avoid spam
        console.log(tsOutput.split('\n').slice(0, 10).join('\n'));
        console.log("... (check full logs)");
    } else {
        console.log("✅ TypeScript Check Passed.");
    }
    
    console.log("2. Running Linter...");
    const lintOutput = await runCommand('npx next lint --no-cache');
     if (lintOutput.includes('Error')) {
        console.log("--- Lint Errors Detected ---");
        console.log(lintOutput.split('\n').slice(0, 10).join('\n'));
    } else {
        console.log("✅ Lint Check Passed.");
    }
    
    console.log("✅ Batch Debug Cycle Complete.");
}

batchDebug();
