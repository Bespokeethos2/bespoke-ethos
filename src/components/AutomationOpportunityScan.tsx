"use client";

import { useState } from "react";
import { ButtonLink } from "@/common/button";
import { PremiumContainer } from "@/components/ui/premium-container";
import { AI101Modal } from "@/components/ai-explainer/AI101Modal";
import { Sparkles, Zap, Shield, ArrowRight } from "lucide-react";

interface ScanResult {
  workflow: string;
  timesSaved: string;
  controls: string[];
  recommendation: string;
}

export function AutomationOpportunityScan() {
  const [businessType, setBusinessType] = useState("");
  const [painPoint, setPainPoint] = useState("");
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Generate instant results based on inputs
      const results: Record<string, ScanResult> = {
        email: {
          workflow: "AI Email Triage + Smart Reply System",
          timesSaved: "8-12 hours/week",
          controls: [
            "Human approval required for client-facing messages",
            "Automated responses only for FAQ queries",
            "Daily digest of all AI actions for review"
          ],
          recommendation: "Priority: High - Email overload is the #1 SMB productivity killer"
        },
        scheduling: {
          workflow: "AI Calendar Orchestrator + Booking Agent",
          timesSaved: "5-8 hours/week",
          controls: [
            "Buffer times enforced between meetings",
            "Block out focus time automatically",
            "Require approval for VIP bookings"
          ],
          recommendation: "Priority: Medium - Reduces context switching by 60%"
        },
        leads: {
          workflow: "Lead Qualification Pipeline with RAG",
          timesSaved: "10-15 hours/week",
          controls: [
            "Score leads based on your ideal customer profile",
            "Auto-reject obvious spam (with human override)",
            "Flag high-value opportunities for immediate attention"
          ],
          recommendation: "Priority: High - Stop wasting time on tire-kickers"
        },
        default: {
          workflow: "Custom Workflow Intelligence System",
          timesSaved: "6-10 hours/week",
          controls: [
            "Multi-step approval gates for critical decisions",
            "Audit trail for all AI actions",
            "Human override available at any point"
          ],
          recommendation: "Priority: Medium - Custom solution tailored to your needs"
        }
      };

      // Match pain point to workflow
      const selectedWorkflow = 
        painPoint.toLowerCase().includes("email") ? results.email :
        painPoint.toLowerCase().includes("schedul") || painPoint.toLowerCase().includes("calendar") ? results.scheduling :
        painPoint.toLowerCase().includes("lead") || painPoint.toLowerCase().includes("customer") ? results.leads :
        results.default;

      if (selectedWorkflow) {
        setScanResult(selectedWorkflow);
      }
      setIsScanning(false);
    }, 1500);
  };

  const resetScan = () => {
    setScanResult(null);
    setBusinessType("");
    setPainPoint("");
  };

  return (
    <section className="relative z-10 py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto max-w-6xl">
        <PremiumContainer 
          variant="glass" 
          className="p-6 sm:p-8 md:p-12 lg:p-16 border-orange-500/30 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-950/50 mb-4">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold text-orange-300 uppercase tracking-wider">
                  Free Instant Analysis
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-hero-accent">
                AI Automation Opportunity Scan
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                Tell us your biggest pain point. Get an instant automation blueprint—no email required.
              </p>
            </div>

            {!scanResult ? (
              /* Input Form */
              <div className="space-y-6 max-w-2xl mx-auto">
                <div>
                  <label htmlFor="business-type" className="block text-sm font-medium text-slate-300 mb-2">
                    What type of business do you run?
                  </label>
                  <input
                    id="business-type"
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g., Law firm, Marketing agency, SaaS startup..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="pain-point" className="block text-sm font-medium text-slate-300 mb-2">
                    What&apos;s drowning you in busywork right now?
                  </label>
                  <textarea
                    id="pain-point"
                    value={painPoint}
                    onChange={(e) => setPainPoint(e.target.value)}
                    placeholder="e.g., Spending 3 hours per day in email hell, manually qualifying leads, scheduling chaos..."
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  onClick={handleScan}
                  disabled={!businessType || !painPoint || isScanning}
                  className="w-full min-h-[44px] py-4 px-6 bg-orange-600 hover:bg-orange-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 disabled:shadow-none flex items-center justify-center gap-2"
                >
                  {isScanning ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      <span>Scan for Automation Opportunities</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-slate-500">
                  This is an instant analysis tool powered by pattern matching. For a deep-dive strategy session, 
                  book a consultation below.
                </p>
              </div>
            ) : (
              /* Results Display */
              <div className="space-y-8 max-w-3xl mx-auto">
                {/* Workflow Blueprint */}
                <div className="p-6 bg-slate-800/50 border border-orange-500/30 rounded-xl">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Sparkles className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Recommended Workflow</h3>
                      <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                        {scanResult.workflow}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-medium">
                    <Zap className="w-4 h-4" />
                    <span>Time Savings: {scanResult.timesSaved}</span>
                  </div>
                </div>

                {/* Controls & Guardrails */}
                <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        Built-In Controls{" "}
                        <AI101Modal explainerKey="humanInLoop" triggerText="(What&apos;s this?)" className="text-xs" />
                      </h3>
                      <p className="text-sm text-slate-400">
                        We don&apos;t build &quot;magic buttons.&quot; Every system has guardrails.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {scanResult.controls.map((control, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span className="text-slate-300">{control}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendation */}
                <div className="p-6 bg-orange-950/30 border border-orange-500/30 rounded-xl">
                  <p className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2">
                    Our Take
                  </p>
                  <p className="text-base text-slate-200">
                    {scanResult.recommendation}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <ButtonLink 
                    intent="primary" 
                    href="/book"
                    className="flex-1 min-h-[44px] flex items-center justify-center gap-2"
                  >
                    <span>Book Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </ButtonLink>
                  <button
                    onClick={resetScan}
                    className="flex-1 min-h-[44px] px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg transition-all"
                  >
                    Scan Another Process
                  </button>
                </div>

                <p className="text-xs text-center text-slate-500">
                  This scan uses pattern matching for instant results. Want a human expert to review your specific case?{" "}
                  <a href="/contact" className="text-orange-400 hover:text-orange-300 underline">
                    Let&apos;s talk.
                  </a>
                </p>
              </div>
            )}
          </div>
        </PremiumContainer>
      </div>
    </section>
  );
}
