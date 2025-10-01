"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ===================== 3D-lite Avatar ===================== */
function TiltAvatar({ src, alt }: { src: string; alt: string }) {
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "rotateX(0deg) rotateY(0deg) scale(1)",
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    const ROT = 10;
    setStyle({
      transform: `rotateX(${y * -ROT}deg) rotateY(${x * ROT}deg) scale(1.04)`,
    });
  }
  function onLeave() {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" });
  }

  return (
    <motion.div
      className="relative rounded-md border border-[var(--line)]"
      style={{ perspective: 900 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="pointer-events-none absolute -inset-4 rounded-xl bg-[#A8E6F0] opacity-20 blur-2xl" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 h-[260px] w-full rounded-md object-cover transition-transform duration-200 will-change-transform"
        style={style}
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </motion.div>
  );
}

/* ===================== Rotating Roles ===================== */
const roles = ["Ambassador", "Moderator", "Content Creator"];
function RotatingText() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="font-mono text-sm text-[#A8E6F0]"
    >
      {roles[index]}
    </motion.span>
  );
}

/* ===================== Rotating Badge ===================== */
const badgeLines = [
  "AMBASSADOR • MODERATOR • CONTENT CREATOR",
  "NEXT.JS • TAILWIND • SUPABASE • WEB3",
  "UNION BUILDER — OPEN TO COLLABS",
];
function RotatingBadge() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % badgeLines.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="h-5 select-none font-mono text-[11px] tracking-widest text-[#A8E6F0] text-center">
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-block"
      >
        — {badgeLines[i]} —
      </motion.span>
    </div>
  );
}

/* ===================== Rotating Word Headline (sejajar + soft) ===================== */
const headWords = [
  "Ecosystem",
  "Blockchain",
  "Developer",
  "Builder",
  "Community",
  "Research",
];
function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % headWords.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.4 }}
      className="glow-text-tint text-[#6fcbd6]"
      style={{ display: "inline-block", minWidth: "12ch" }}
    >
      {headWords[i]}
    </motion.span>
  );
}

/* ===================== DATA ===================== */
const profile = {
  name: "DevLabs",
  bio: "Connecting dots across Web3 with community-first execution. Governance, decentralization, and AI-powered tooling.",
  avatar: "/avatar.png", // letakkan di /public
  telegram: "https://t.me/DevLabss",
  twitter: "https://x.com/DevLabsss",
  email: "mailto:syahrilfauzi17@gmail.com",
};

type Project = { name: string; blurb: string; x: string; tags: string[] };
const projects: Project[] = [
  {
    name: "Sentient",
    blurb: "Aligning AI innovations toward a community-built open AGI.",
    x: "https://x.com/SentientAGI",
    tags: ["Regional-Moderator", "Developer"],
  },
  {
    name: "FogoChain",
    blurb: "Real-time at scale. SVM L1 • Firedancer Client.",
    x: "#",
    tags: ["Regional-Moderator"],
  },
  {
    name: "DoubleZero",
    blurb: "Institutional-grade infra: bandwidth↑ latency↓.",
    x: "#",
    tags: ["Regional-Moderator"],
  },
  { name: "Recall", blurb: "—", x: "#", tags: [] },
  { name: "Glider", blurb: "—", x: "#", tags: [] },
  { name: "Chronicle Protocol", blurb: "—", x: "#", tags: [] },
];

type Service = { t: string; d: string };
const services: Service[] = [
  {
    t: "Community Moderation",
    d: "Keep channels healthy, spam-free, and on-guideline.",
  },
  {
    t: "Ambassador Representation",
    d: "Represent projects at AMAs, events, and forums.",
  },
  {
    t: "Content Creation",
    d: "Articles, tutorials, videos, infographics for complex topics.",
  },
  {
    t: "Community Building",
    d: "Grow engaged communities via programs & events.",
  },
  {
    t: "Translation Services",
    d: "Localized content to reach global audiences.",
  },
  {
    t: "Program Management",
    d: "Design & run contributor programs that scale.",
  },
];

/* ===================== EXPERIENCE / CLIENTS ===================== */
type Client = { name: string; url: string; logo?: string };
const clients: Client[] = [
  {
    name: "Sentient",
    url: "https://x.com/SentientAGI",
    logo: "/logos/sentient.svg",
  },
  { name: "FogoChain", url: "#", logo: "/logos/fogo.svg" },
  { name: "DoubleZero", url: "#", logo: "/logos/doublezero.svg" },
  { name: "Recall", url: "#", logo: "/logos/recall.svg" },
  { name: "Glider", url: "#", logo: "/logos/glider.svg" },
  { name: "Chronicle Protocol", url: "#", logo: "/logos/chronicle.svg" },
];
function ClientGrid() {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {clients.map((c) => (
        <a
          key={c.name}
          href={c.url}
          target="_blank"
          rel="noreferrer"
          className="card group flex h-20 items-center justify-center p-3 transition hover:scale-[1.02]"
        >
          {c.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={c.logo}
              alt={c.name}
              className="max-h-8 opacity-80 contrast-125 group-hover:opacity-100"
              onError={(e) => {
                (
                  e.currentTarget.parentElement as HTMLElement
                ).innerHTML = `<span class="font-mono text-xs text-[#A8E6F0]">${c.name}</span>`;
              }}
            />
          ) : (
            <span className="font-mono text-xs text-[#A8E6F0]">{c.name}</span>
          )}
        </a>
      ))}
    </div>
  );
}

/* ===================== CASE STUDIES ===================== */
type Case = {
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  link?: string;
};
const cases: Case[] = [
  {
    title: "Union XP Allocation Checker",
    summary:
      "Estimator XP & token allocation dengan UI ringkas. Integrasi chart, filter, dan shareable link.",
    stack: ["Next.js", "Tailwind", "Chart.js"],
    impact: "Dipakai komunitas untuk simulasi alokasi & edukasi tokenomics.",
    link: "https://union-xp-allocation-checker.vercel.app/",
  },
  {
    title: "UNPAM E-Learning MVP",
    summary:
      "Sistem unggah mingguan + email notify. Supabase + Edge Function (Resend) siap deploy.",
    stack: ["Next.js", "Supabase", "Resend"],
    impact: "Mempermudah distribusi materi kuliah & notifikasi real-time.",
    link: "#",
  },
];
function CaseCards() {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      {cases.map((cs) => (
        <div key={cs.title} className="card p-5">
          <div className="flex items-start justify-between">
            <h3 className="font-display text-lg text-white">{cs.title}</h3>
            {cs.link && (
              <a href={cs.link} target="_blank" className="link-cyan text-xs">
                [OPEN]
              </a>
            )}
          </div>
          <p className="mt-2 text-sm text-zinc-300">{cs.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {cs.stack.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-[var(--line)] px-2 py-[2px] text-[11px] text-[#A8E6F0] font-mono"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-3 font-mono text-[12px] text-[#A8E6F0]">
            Impact: {cs.impact}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ===================== PAGE ===================== */
export default function Page() {
  return (
    <main className="relative">
      {/* Top nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest">
          <span className="u-dot rounded-sm" />
          <span className="text-[#A8E6F0]">DevLabs</span>
        </div>
        <div className="hidden gap-6 font-mono text-[12px] text-[#A8E6F0] md:flex">
          <a href="#skills" className="hover:underline">
            SKILLS
          </a>
          <a href="#clients" className="hover:underline">
            CLIENTS
          </a>
          <a href="#projects" className="hover:underline">
            PROJECTS
          </a>
          <a href="#contact" className="hover:underline">
            CONTACT
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 pt-6 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display flex flex-wrap items-baseline gap-3 md:gap-4 text-6xl md:text-7xl font-black leading-[0.9] tracking-tight"
          >
            <span className="glow-text-soft text-white whitespace-nowrap">
              WEB&nbsp;3.0
            </span>
            <RotatingWord />
          </motion.h1>

          {/* roles rotating */}
          <div className="mt-3 h-5">
            <RotatingText />
          </div>

          <div className="card mt-6 p-5 text-zinc-200">{profile.bio}</div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={profile.telegram}
              target="_blank"
              className="btn-ghost px-4 py-2 font-mono text-xs text-[#A8E6F0]"
            >
              TELEGRAM
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              className="btn-ghost px-4 py-2 font-mono text-xs text-[#A8E6F0]"
            >
              X/TWITTER
            </a>
            <a
              href={profile.email}
              className="btn-primary px-4 py-2 font-mono text-xs"
            >
              CONTACT
            </a>
          </div>
        </div>

        {/* Avatar panel */}
        <div className="card glow-border-soft grid place-items-center p-6">
          <div className="w-full max-w-xl">
            <TiltAvatar src={profile.avatar} alt={profile.name} />
          </div>
          <div className="mt-3">
            <RotatingBadge />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="font-mono text-[12px] tracking-widest text-[#A8E6F0]">
          <span className="u-dot rounded-sm" /> SKILLS
        </h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-[1fr_1fr]">
          {/* Primary */}
          <div className="card p-5">
            <h3 className="font-display text-lg text-white mb-2">
              Primary Skills
            </h3>
            <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
              <li>Web3 Development (Smart Contracts, DApps)</li>
              <li>Frontend Engineering (Next.js, React, Tailwind)</li>
              <li>Supabase & Realtime Applications</li>
            </ul>
          </div>
          {/* Secondary */}
          <div className="card p-5">
            <h3 className="font-display text-lg text-white mb-2">
              Secondary Skills
            </h3>
            <ul className="list-disc pl-5 text-sm text-zinc-300 space-y-1">
              <li>Community Management & Moderation</li>
              <li>Content Creation & Branding</li>
              <li>Translation & Localization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE / CLIENTS */}
      <section id="clients" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-mono text-[12px] tracking-widest text-[#A8E6F0]">
          <span className="u-dot rounded-sm" /> EXPERIENCE / CLIENTS
        </h2>
        <ClientGrid />
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <h2 className="font-mono text-[12px] tracking-widest text-[#A8E6F0]">
          <span className="u-dot rounded-sm" /> CASE STUDIES
        </h2>
        <CaseCards />
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-mono text-[12px] tracking-widest text-[#A8E6F0]">
          <span className="u-dot rounded-sm" /> SERVICES
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="card p-5">
              <div className="font-display text-xl text-white">{s.t}</div>
              <p className="mt-2 text-sm text-zinc-300">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-mono text-[12px] tracking-widest text-[#A8E6F0]">
          <span className="u-dot rounded-sm" /> FEATURED PROJECTS
        </h2>
        <p className="mt-2 font-mono text-[12px] text-[#A8E6F0]">
          only 2025 year
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.name} className="card p-5">
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg text-white">{p.name}</h3>
                <a href={p.x} target="_blank" className="link-cyan text-xs">
                  [OPEN]
                </a>
              </div>
              <p className="mt-2 text-sm text-zinc-300">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-[var(--line)] px-2 py-[2px] text-[11px] text-[#A8E6F0] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-mono text-[12px] tracking-widest text-[#A8E6F0]">
          <span className="u-dot rounded-sm" /> CONTACT
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="card p-5">
            <div className="font-display text-xl text-white">Working Hours</div>
            <p className="mt-2 text-sm text-zinc-300">
              Mon–Fri: 9am–10pm (UTC) <br /> Weekend: urgent only
            </p>
          </div>
          <div className="card flex items-center gap-3 p-5">
            <a
              href={profile.telegram}
              target="_blank"
              className="btn-ghost px-3 py-2 font-mono text-xs text-[#A8E6F0]"
            >
              TELEGRAM
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              className="btn-ghost px-3 py-2 font-mono text-xs text-[#A8E6F0]"
            >
              X/TWITTER
            </a>
            <a
              href={profile.email}
              className="btn-primary px-3 py-2 font-mono text-xs"
            >
              EMAIL
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--line)] py-6 text-center font-mono text-[11px] text-[#A8E6F0]">
        © {new Date().getFullYear()} {profile.name} — Web3 Ambassador & Frontend
        Engineer
      </footer>

      {/* ===== Styles (inline biar langsung jalan) ===== */}
      <style jsx global>{`
        :root {
          --line: rgba(168, 230, 240, 0.18);
        }
        body {
          background: #0b0f10;
          color: #eaeef0;
        }

        .card {
          border: 1px solid var(--line);
          background: rgba(8, 12, 14, 0.65);
          backdrop-filter: blur(4px);
          border-radius: 12px;
        }

        .btn-primary {
          background: #a8e6f0;
          color: #0a1113;
          border-radius: 10px;
        }
        .btn-primary:hover {
          filter: brightness(0.95);
        }

        .btn-ghost {
          border: 1px solid var(--line);
          border-radius: 10px;
        }
        .btn-ghost:hover {
          background: rgba(168, 230, 240, 0.06);
        }

        .link-cyan {
          color: #9fe7f1;
        }
        .link-cyan:hover {
          text-decoration: underline;
        }

        .u-dot {
          width: 6px;
          height: 6px;
          display: inline-block;
          background: #a8e6f0;
          box-shadow: 0 0 8px rgba(168, 230, 240, 0.5);
        }

        @keyframes textGlowKeepColorSoft {
          0%,
          100% {
            text-shadow: 0 0 2px rgba(255, 255, 255, 0.35),
              0 0 6px rgba(168, 230, 240, 0.25);
          }
          50% {
            text-shadow: 0 0 3px rgba(255, 255, 255, 0.4),
              0 0 10px rgba(168, 230, 240, 0.28);
          }
        }
        .glow-text-soft {
          animation: textGlowKeepColorSoft 3s infinite ease-in-out;
        }

        .glow-text-tint {
          text-shadow: 0 0 1px rgba(125, 214, 224, 0.25),
            0 0 4px rgba(125, 214, 224, 0.18);
        }

        @keyframes borderGlowSoft {
          0%,
          100% {
            box-shadow: 0 0 14px rgba(168, 230, 240, 0.18),
              0 0 28px rgba(168, 230, 240, 0.1);
          }
          50% {
            box-shadow: 0 0 18px rgba(168, 230, 240, 0.22),
              0 0 36px rgba(168, 230, 240, 0.14);
          }
        }
        .glow-border-soft {
          animation: borderGlowSoft 3.2s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
