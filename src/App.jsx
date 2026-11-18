import React, { useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import {
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  TrendingUp,
  Terminal,
  ArrowRight,
  Sparkles,
  BarChart3,
  Server,
  Lock,
  Globe2,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Code2,
  Activity
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('metrics');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [telemetryFilter, setTelemetryFilter] = useState('all');

  const telemetryLogs = [
    { id: 'TX-902', service: 'LLM Proxy Mesh', latency: '42ms', cost: '$0.00012', status: 'Healthy', time: 'Just now' },
    { id: 'TX-901', service: 'Memory Vector Cache', latency: '6ms', cost: '$0.00003', status: 'Optimal', time: '12s ago' },
    { id: 'TX-900', service: 'Guardrail Evaluator', latency: '18ms', cost: '$0.00008', status: 'Passed', time: '28s ago' },
    { id: 'TX-899', service: 'Tool Routing Gate', latency: '11ms', cost: '$0.00004', status: 'Routed', time: '45s ago' },
  ];

  const filteredLogs = telemetryFilter === 'all' 
    ? telemetryLogs 
    : telemetryLogs.filter(log => log.service.toLowerCase().includes(telemetryFilter.toLowerCase()));

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30">
      {/* Three.js Kinetic 3D Canvas Background (Option A) */}
      <ThreeBackground />

      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar (Mobbin Enterprise SaaS pattern) */}
        <header className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-800/80 bg-[#090b10]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#090b10] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold tracking-tight text-lg text-white font-mono flex items-center gap-1.5">
                NEXUS<span className="text-cyan-400 font-sans">AI</span>
                <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 font-mono">v3.8</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
              <a href="#features" className="hover:text-cyan-400 transition-colors">Architecture</a>
              <a href="#dashboard" className="hover:text-cyan-400 transition-colors">Live Telemetry</a>
              <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
              <a href="#benchmarks" className="hover:text-cyan-400 transition-colors">Benchmarks</a>
            </nav>

            <div className="flex items-center space-x-3">
              <button className="text-xs sm:text-sm font-medium px-4 py-2 rounded-lg text-slate-300 hover:text-white transition-colors">
                Sign in
              </button>
              <button className="text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                <span>Start Free Pilot</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section: 3D Kinetic Canvas + High-Impact Value Proposition */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Autonomous Intelligence & Agentic Mesh Runtime</span>
            <span className="text-cyan-600">|</span>
            <span className="text-slate-400">SOC2 & ISO 27001 Certified</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-6">
            Enterprise AI Infra That Ships <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Zero-Token Overhead & Sub-10ms Latency
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-2xl mb-10 leading-relaxed font-normal">
            Orchestrate multi-agent swarms, cached semantic memory, and deterministic tool execution across cloud workloads with banking-grade circuit breakers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-semibold text-base shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span>Deploy Production Swarm</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800/60 text-slate-200 font-medium text-base backdrop-blur-sm transition-all flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-sm">curl -sL nexus.ai/mesh | sh</span>
            </button>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-14 pt-8 border-t border-slate-800/60 w-full flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-500 text-xs font-mono uppercase tracking-wider">
            <span>Trusted by Engineering Teams At:</span>
            <span className="text-slate-400 font-semibold">Oracle Cloud</span>
            <span className="text-slate-400 font-semibold">Google Cloud</span>
            <span className="text-slate-400 font-semibold">Cloudflare</span>
            <span className="text-slate-400 font-semibold">Vercel</span>
          </div>
        </section>

        {/* Live Interactive SaaS Telemetry Dashboard (Mobbin / CollectUI Pattern) */}
        <section id="dashboard" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden glow-border">
            {/* Header with status badges */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    Mesh Runtime Telemetry
                    <span className="text-xs font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">ONLINE</span>
                  </h3>
                  <p className="text-xs text-slate-400">ARM64 Host Node • 2 OCPU / 12GB RAM containment active</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {['metrics', 'audit', 'topology'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs uppercase tracking-wider font-mono px-3 py-1.5 rounded-lg border transition-all ${
                      activeTab === tab
                        ? 'border-cyan-500/60 bg-cyan-950/60 text-cyan-300 shadow-sm'
                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>P99 Inference Latency</span>
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-white">14.2<span className="text-xs text-slate-400 font-sans ml-1">ms</span></div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                  <TrendingUp className="w-3 h-3" />
                  <span>38% faster than baseline</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Semantic Cache Hit Rate</span>
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-white">94.8<span className="text-xs text-slate-400 font-sans ml-1">%</span></div>
                <div className="text-[11px] text-cyan-400 flex items-center gap-1 mt-1 font-medium">
                  <Activity className="w-3 h-3" />
                  <span>Zero-token local recall</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Daily Compute Cost</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-white">$0.42<span className="text-xs text-slate-400 font-sans ml-1">/day</span></div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                  <span>Always-Free tier contained</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Active MCP Handshakes</span>
                  <Server className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-white">12<span className="text-xs text-slate-400 font-sans ml-1">tools</span></div>
                <div className="text-[11px] text-indigo-400 flex items-center gap-1 mt-1 font-medium">
                  <span>Playwright + Design Scout</span>
                </div>
              </div>
            </div>

            {/* Filterable Real-Time Event Stream Table (CollectUI / Mobbin flow) */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  Live Trace Ingestion
                </h4>
                <div className="flex gap-2">
                  {['all', 'llm', 'cache', 'guardrail'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setTelemetryFilter(f)}
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded transition-colors ${
                        telemetryFilter === f ? 'bg-cyan-900/80 text-cyan-300' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800 text-[11px]">
                    <tr>
                      <th className="py-2.5 px-4">TRACE ID</th>
                      <th className="py-2.5 px-4">MICRO-SERVICE</th>
                      <th className="py-2.5 px-4">LATENCY</th>
                      <th className="py-2.5 px-4">TOKEN COST</th>
                      <th className="py-2.5 px-4">HEALTH STATUS</th>
                      <th className="py-2.5 px-4 text-right">TIMESTAMP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {filteredLogs.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-900/40 transition-colors">
                        <td className="py-2.5 px-4 text-cyan-400 font-medium">{row.id}</td>
                        <td className="py-2.5 px-4 font-sans text-white">{row.service}</td>
                        <td className="py-2.5 px-4">{row.latency}</td>
                        <td className="py-2.5 px-4 text-emerald-400">{row.cost}</td>
                        <td className="py-2.5 px-4">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            {row.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-right text-slate-500">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Core Architecture Highlights (3D + Modular Feature Grid) */}
        <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-semibold">Engineered For Production</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Every Layer Hardened Against Hallucinations & Drift
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Agentic Memory Fabric</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Hierarchical vector caches and persistent session trees provide instant recall without re-injecting 100k context windows.
              </p>
              <div className="text-xs font-mono text-cyan-400 flex items-center gap-1 hover:underline cursor-pointer">
                <span>View Memory Docs</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            <div className="glass-panel glass-panel-hover rounded-2xl p-6 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Banking-Grade Guardrails</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Multi-layer prompt injection defense, PII scrubbing, and pre-execution schema verifiers ensure strict data isolation.
              </p>
              <div className="text-xs font-mono text-indigo-400 flex items-center gap-1 hover:underline cursor-pointer">
                <span>Explore Compliance Matrix</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            <div className="glass-panel glass-panel-hover rounded-2xl p-6 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Universal MCP Gateway</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Native Model Context Protocol connectors bridge databases, headless browser automation, and developer CLI toolsets.
              </p>
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-1 hover:underline cursor-pointer">
                <span>Browse MCP Catalog</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Matrix Section (Clean CollectUI / Mobbin Billing Toggle) */}
        <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 font-semibold">Predictable Infrastructure</h2>
            <p className="text-3xl font-bold tracking-tight text-white mb-4">Transparent Pricing, Zero Hidden Egress</p>
            
            {/* Toggle Switch */}
            <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  billingCycle === 'monthly' ? 'bg-cyan-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                  billingCycle === 'annual' ? 'bg-cyan-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual</span>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-700/60 px-1.5 py-0.2 rounded font-mono font-bold">SAVE 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Developer Tier */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Developer</h3>
                <p className="text-xs text-slate-400 mb-6">Perfect for standalone engineers and prototypes.</p>
                <div className="text-4xl font-extrabold font-mono text-white mb-6">
                  {billingCycle === 'annual' ? '$0' : '$0'}
                  <span className="text-xs text-slate-400 font-sans font-normal ml-2">Always Free</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 1 Hosted Autonomous Agent</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 5,000 Cached Vector Recalls</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Headless Browser MCP connector</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Community Telegram Support</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-all">
                Get Started Free
              </button>
            </div>

            {/* Scale / Production Tier */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between border-2 border-cyan-500/60 shadow-xl shadow-cyan-500/10 relative">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full shadow-md">
                RECOMMENDED
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Production Swarm</h3>
                <p className="text-xs text-slate-400 mb-6">Autonomous multi-agent orchestration for scaling teams.</p>
                <div className="text-4xl font-extrabold font-mono text-white mb-6">
                  {billingCycle === 'annual' ? '$79' : '$99'}
                  <span className="text-xs text-slate-400 font-sans font-normal ml-2">/ month</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Up to 25 Parallel Subagents</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Unlimited Semantic Memory Cache</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Full Playwright & Chromium Cluster</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Banking-Grade Guardrail Mesh</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Sub-10ms Global Edge Routing</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:shadow-lg hover:shadow-cyan-500/30 text-white text-xs font-semibold transition-all">
                Deploy Swarm Now
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Custom Infra / VPC</h3>
                <p className="text-xs text-slate-400 mb-6">Dedicated ARM64 cluster inside your cloud VPC.</p>
                <div className="text-4xl font-extrabold font-mono text-white mb-6">
                  Custom
                  <span className="text-xs text-slate-400 font-sans font-normal ml-2">Billed Annually</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Air-gapped on-prem or VPC install</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Custom LLM / SLM Fine-Tuning</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 99.99% Guaranteed SLA</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 24/7 Dedicated SRE Sentinel</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-all">
                Contact Enterprise
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-slate-800/80 bg-[#090b10] py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 font-mono font-semibold">NEXUS-AI MESH</span>
              <span> -  Autonomous Agent Infrastructure</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Security Audit</a>
              <a href="#" className="hover:text-slate-300 transition-colors">API Reference</a>
              <span className="text-slate-600 font-mono">Built for ARM64 Linux Host</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
