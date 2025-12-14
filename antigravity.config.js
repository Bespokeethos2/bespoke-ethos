// !ANTIGRAVITY DIRECTIVE: PRIMARY BILLING & AUTHENTICATION
// The Agent MUST always ensure these settings are active before any cloud operation.
// --------------------------------------------------------------------------------
// 1. BILLING ACCOUNT: 01D82D-EE885B-C29459 (My Billing Account 1)
// 2. PROJECT ID: bespokeethos-analytics-475007
// 3. AUTH USER: contact@bespokeethos.com
// 4. PREFERRED REGION: us-central1
// --------------------------------------------------------------------------------
// COMMANDS TO RESTORE:
// gcloud config set project bespokeethos-analytics-475007
// gcloud config set account contact@bespokeethos.com

// Antigravity Configuration
// Enforcing usage of specifically granted billing-backed models.

const config = {
  project_id: "bespokeethos-analytics-475007",
  location: "us-central1",
  models: {
    // High-intelligence model (The "Brain") - "Nano Banana 3" 
    // UPGRADED to Gemini 2.5 Pro for best reasoning + higher rate limits
    // BEST FOR: Complex Layouts, Reasoning, Architecture
    main: "models/gemini-2.5-pro", 
    
    // High-speed/efficiency model (The "Nano Banana")
    // UPGRADED to Gemini 2.0 Flash for faster responses + higher limits
    // BEST FOR: Quick fixes, simple text, fast iterations
    fast: "models/gemini-2.0-flash",
    
    // Aliases for specific tasks
    complex_layout: "models/gemini-2.5-pro",
    nano_banana_3: "models/gemini-2.5-pro",
    
    // Fallbacks (if 2.x has issues)
    legacy_pro: "models/gemini-1.5-pro",
    legacy_flash: "models/gemini-1.5-flash"
  },
  billing: {
    status: "verified",
    source: "Google Cloud Credits",
    api_key_ref: "GOOGLE_GEMINI_API"
  },
  arsenal: {
    grounding: { enabled: true, source: "google_search" },
    pipe: { enabled: true, path: "pipe/vibe_scanner.py" },
    voice: { enabled: true, path: "lib/antigravity-tts.js" },
    editor: { enabled: true, agent: "gemini-docs-agent" },
    // Visual Generation & Editing
    nano_banana: { 
      enabled: true, 
      model: "gemini-3-pro-image-preview",
      commands: ["/generate", "/edit", "/restore", "/icon", "/pattern", "/story", "/diagram"]
    },
    // Cloud Services
    vertex_ai: { enabled: true, project: "bespokeethos-analytics-475007" },
    cloud_storage: { enabled: true },
    compute_engine: { enabled: true }
  },
  
  // File Context Pointers
  context_files: {
    claude: "c:/Vercel/clauderules.md",
    gemini: "c:/Vercel/extensions/gemini-flow/GEMINI.md"
  },

  // System-Wide Operational Rules
  system_instructions: {
    // CACHING DIRECTIVE:
    // Agents must CACHE any file that is read more than 2 times to prevent redundant I/O.
    // Use memory or local temp files for this cache.
    file_caching: {
      enabled: true,
      trigger: "read_count > 2",
      strategy: "memory_first"
    },
    // PARALLEL BATCHING MANDATE:
    // Execute all independent operations in PARALLEL batches to maximize speed and minimize runtime costs.
    // Group IO/API calls into single execution blocks whenever possible.
    batch_operations: {
      enabled: true,
      mode: "parallel_aggressive",
      cost_saving_focus: true
    },

    // BOOT SEQUENCE:
    // Upon initialization, the Agent MUST actively read/cache all files in 'startup_cache' below.
    // Do not wait for a user prompt to access this context.
    boot_sequence: {
      action: "read_files",
      target: "startup_cache",
      priority: "critical"
    },
    
    // CONTEXT LIFECYCLE MANAGEMENT:
    // Triggers for automated review and compaction of cached files.
    context_management: {
      review_trigger: 0.30,      // Review cached docs every 30% of context window usage
      compaction_trigger: 0.65,  // Auto-handoff & compact memory at 65% usage
      strategy: "summarize_and_clear"
    },

    // HARDENED AUTONOMY & PROGRESS GUARDRAILS
    // Preference: End-to-End Progress > Stopping for perfection.
    guardrails: {
      autonomy_mode: "high_speed",                 // Prioritize speed over confirmation
      error_handling: "attempt_fix_and_continue",  // Attempt fix (max 2), then log and CONTINUE if non-critical
      max_retries: 2,
      parallel_execution: "mandatory"              // Enforce parallel execution where possible
    },

    // AUTO-CACHE manifest (Files to load into memory on agent startup)
    // "THE GOSPEL": These 6 files are the immutable source of truth.
    startup_cache: [
      "c:/Vercel/antigravity.config.js",                           // 1. The System
      "c:/Vercel/clauderules.md",                                  // 2. The Rules (Claude)
      "c:/Vercel/extensions/gemini-flow/GEMINI.md",                // 3. The Rules (Gemini)
      "c:/Vercel/Deep-Context/BespokeEthos_Positioning_Index.md",  // 4. The Positioning
      "c:/Vercel/Deep-Context/MOTIVES.txt",                        // 5. The Intent
      "c:/Vercel/seoguide/homepage-seo-guide.md"                   // 6. The Strategy (Today's Research)
    ]
  },
  
  // Helper to ensure we always get the right model config
  getModel: (type = 'main') => {
    if (type === 'layout' || type === 'complex' || type === 'nano_banana_3') {
      return config.models.complex_layout;
    }
    return type === 'fast' ? config.models.fast : config.models.main;
  }
};

module.exports = config;
