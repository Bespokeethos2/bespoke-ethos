#!/usr/bin/env node

/**
 * Multi-Agent Web Research Orchestrator
 * Deploys 5 parallel agents to conduct 12 research areas
 * Uses cloud-billed Gemini API for premium rate limits
 */

import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';

dotenv.config({ path: '.env.local' });

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

// Agent configurations
const AGENTS = {
  competitive: {
    name: 'Competitive Intelligence Agent',
    model: 'models/gemini-2.0-flash', // Fast for research
    areas: [
      'Top 5 AI automation competitors analysis',
      'Cleveland-specific automation providers',
      'Market gaps and opportunities'
    ]
  },
  seo: {
    name: 'SEO & Content Strategy Agent',
    model: 'models/gemini-2.0-flash',
    areas: [
      'Current SEO performance audit',
      'Cleveland small business search trends',
      'Content opportunities for blog/case studies'
    ]
  },
  technical: {
    name: 'Technical Performance Agent',
    model: 'models/gemini-2.5-pro', // Complex analysis
    areas: [
      'Core Web Vitals analysis',
      'Performance bottlenecks identification',
      'Next.js 16 optimization best practices'
    ]
  },
  conversion: {
    name: 'Conversion Optimization Agent',
    model: 'models/gemini-2.0-flash',
    areas: [
      'User journey and conversion funnel analysis',
      'CRO best practices for SaaS pricing',
      'Friction points in contact/signup flows'
    ]
  },
  pricing: {
    name: 'Product & Pricing Strategy Agent',
    model: 'models/gemini-2.5-pro', // Complex reasoning
    areas: [
      'Optimal pricing for Cleveland market',
      'Competitor pricing models',
      'Upsell/cross-sell opportunities'
    ]
  }
};

// Research prompts for each area
const RESEARCH_PROMPTS = {
  competitive: `
You are a competitive intelligence analyst for BespokeEthos, an AI automation platform in Cleveland, OH.

Research and analyze:
1. Top 5 AI automation competitors (Zapier, Make, Lindy.ai, n8n, Vellum)
   - Pricing models
   - Feature sets
   - Market positioning
   - Strengths/weaknesses

2. Cleveland-specific automation providers
   - Local competitors
   - Regional market dynamics
   - Cleveland tech ecosystem

3. Market gaps and opportunities
   - Underserved segments
   - Unique positioning angles
   - Competitive advantages

Provide actionable insights with specific recommendations.
`,

  seo: `
You are an SEO strategist for BespokeEthos.com, targeting Cleveland small businesses.

Research and analyze:
1. Current SEO performance
   - Keyword rankings for "Cleveland small business automation"
   - Backlink profile analysis
   - Domain authority assessment

2. Cleveland small business search trends
   - High-volume local keywords
   - Search intent analysis
   - Seasonal trends

3. Content opportunities
   - Blog topics with high search volume
   - Case study angles
   - Local SEO optimization

Provide specific keyword targets and content recommendations.
`,

  technical: `
You are a technical performance analyst for BespokeEthos.com (Next.js 16, React 19, Vercel).

Research and analyze:
1. Core Web Vitals across all pages
   - LCP (target: <2.5s)
   - INP (target: <200ms)
   - CLS (target: <0.1)

2. Performance bottlenecks
   - Bundle size analysis
   - Image optimization opportunities
   - Server-side rendering efficiency

3. Next.js 16 optimization best practices
   - Turbopack configuration
   - Edge runtime optimization
   - Caching strategies

Provide specific technical recommendations with code examples.
`,

  conversion: `
You are a conversion rate optimization specialist for BespokeEthos.com.

Research and analyze:
1. User journey and conversion funnels
   - Homepage → Services → Contact flow
   - Pricing page effectiveness
   - Call-to-action performance

2. CRO best practices for SaaS pricing pages
   - Pricing transparency
   - Social proof placement
   - Free trial optimization

3. Friction points
   - Form abandonment analysis
   - Mobile usability issues
   - Trust signal gaps

Provide specific CRO recommendations with A/B test ideas.
`,

  pricing: `
You are a pricing strategist for BespokeEthos, targeting Cleveland small businesses.

Research and analyze:
1. Optimal pricing for Cleveland market
   - Local purchasing power
   - Competitor pricing comparison
   - Value-based pricing opportunities

2. Competitor pricing models
   - Zapier: $20-$599/mo
   - Make: $9-$299/mo
   - Lindy.ai: $97/mo+
   - Our current: Cadence $997/mo, Flowstack $1,497

3. Upsell/cross-sell opportunities
   - Product bundling strategies
   - Tiered pricing optimization
   - LGBTQ+ discount positioning (25% off)

Provide specific pricing recommendations with revenue projections.
`
};

// Execute research for a single agent
async function executeAgentResearch(agentKey, config) {
  console.log(`\n🤖 Starting ${config.name}...`);
  console.log(`📋 Research Areas: ${config.areas.length}`);
  
  const startTime = Date.now();
  
  try {
    const { text, usage } = await generateText({
      model: google(config.model),
      prompt: RESEARCH_PROMPTS[agentKey],
      maxTokens: 4000,
      temperature: 0.3, // Lower for factual research
    });

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    console.log(`✅ ${config.name} completed in ${duration}s`);
    console.log(`📊 Tokens: ${usage.totalTokens} (input: ${usage.promptTokens}, output: ${usage.completionTokens})`);

    return {
      agent: config.name,
      model: config.model,
      areas: config.areas,
      findings: text,
      duration,
      usage
    };

  } catch (error) {
    console.error(`❌ ${config.name} failed:`, error.message);
    return {
      agent: config.name,
      error: error.message
    };
  }
}

// Main orchestrator
async function runMultiAgentResearch() {
  console.log('🚀 Multi-Agent Web Research Orchestrator');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📅 Started: ${new Date().toISOString()}`);
  console.log(`🔑 Project: bespokeethos-analytics-475007`);
  console.log(`👥 Agents: ${Object.keys(AGENTS).length}`);
  console.log(`📊 Research Areas: 12`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Execute all agents in parallel
  const results = await Promise.all(
    Object.entries(AGENTS).map(([key, config]) => 
      executeAgentResearch(key, config)
    )
  );

  // Generate summary report
  const report = {
    timestamp: new Date().toISOString(),
    project: 'bespokeethos-analytics-475007',
    totalAgents: Object.keys(AGENTS).length,
    totalAreas: 12,
    results: results,
    summary: {
      successful: results.filter(r => !r.error).length,
      failed: results.filter(r => r.error).length,
      totalTokens: results.reduce((sum, r) => sum + (r.usage?.totalTokens || 0), 0),
      totalDuration: results.reduce((sum, r) => sum + parseFloat(r.duration || 0), 0).toFixed(2)
    }
  };

  // Save report to file
  const outputDir = 'research-reports';
  await fs.mkdir(outputDir, { recursive: true });
  
  const reportPath = path.join(outputDir, `multi-agent-research-${Date.now()}.json`);
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

  // Generate markdown report
  const mdReport = generateMarkdownReport(report);
  const mdPath = path.join(outputDir, `multi-agent-research-${Date.now()}.md`);
  await fs.writeFile(mdPath, mdReport);

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 RESEARCH COMPLETE');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Successful: ${report.summary.successful}/${report.summary.successful + report.summary.failed}`);
  console.log(`📝 Total Tokens: ${report.summary.totalTokens.toLocaleString()}`);
  console.log(`⏱️  Total Duration: ${report.summary.totalDuration}s`);
  console.log(`📄 JSON Report: ${reportPath}`);
  console.log(`📄 Markdown Report: ${mdPath}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  return report;
}

// Generate markdown report
function generateMarkdownReport(report) {
  let md = `# Multi-Agent Web Research Report\n\n`;
  md += `**Generated:** ${report.timestamp}\n`;
  md += `**Project:** ${report.project}\n`;
  md += `**Agents:** ${report.totalAgents}\n`;
  md += `**Research Areas:** ${report.totalAreas}\n\n`;
  md += `---\n\n`;

  md += `## Summary\n\n`;
  md += `- ✅ Successful: ${report.summary.successful}\n`;
  md += `- ❌ Failed: ${report.summary.failed}\n`;
  md += `- 📝 Total Tokens: ${report.summary.totalTokens.toLocaleString()}\n`;
  md += `- ⏱️ Total Duration: ${report.summary.totalDuration}s\n\n`;
  md += `---\n\n`;

  report.results.forEach((result, index) => {
    md += `## ${index + 1}. ${result.agent}\n\n`;
    
    if (result.error) {
      md += `**Status:** ❌ Failed\n`;
      md += `**Error:** ${result.error}\n\n`;
    } else {
      md += `**Status:** ✅ Success\n`;
      md += `**Model:** ${result.model}\n`;
      md += `**Duration:** ${result.duration}s\n`;
      md += `**Tokens:** ${result.usage.totalTokens}\n\n`;
      md += `### Research Areas\n\n`;
      result.areas.forEach(area => {
        md += `- ${area}\n`;
      });
      md += `\n### Findings\n\n`;
      md += `${result.findings}\n\n`;
    }
    
    md += `---\n\n`;
  });

  return md;
}

// Run the orchestrator
runMultiAgentResearch().catch(console.error);
