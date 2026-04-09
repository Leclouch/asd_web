"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/app/components/Sidebar";
import TopBar from "@/app/components/TopBar";
import OverviewSection from "@/app/components/sections/Overview";
import ImplementasiSection from "@/app/components/sections/Implementation";
import FlowchartSection from "@/app/components/sections/Flowchart";
import PseudocodeSection from "@/app/components/sections/Pseudocode";
import KompleksitasSection from "@/app/components/sections/Complexity";
import SourceCodeSection from "@/app/components/sections/SourceCode";

export type SectionId = "overview" | "implementasi" | "flowchart" | "pseudocode" | "kompleksitas" | "source-code";

export const sections: { id: SectionId; label: string; prefix: string }[] = [
  { id: "overview", label: "Overview", prefix: "00." },
  { id: "implementasi", label: "Implementation", prefix: "01." },
  { id: "flowchart", label: "Flowchart", prefix: "02." },
  { id: "pseudocode", label: "Pseudocode", prefix: "03." },
  { id: "kompleksitas", label: "Complexity", prefix: "04." },
  { id: "source-code", label: "Source Code", prefix: "05." },
];

export default function Home() {
  const [active, setActive] = useState<SectionId>("overview");
  const [key, setKey] = useState(0);

  const navigate = (id: SectionId) => {
    setActive(id);
    setKey(k => k + 1);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { navigate("overview"); return; }
      const idx = sections.findIndex(s => s.id === active);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        navigate(sections[Math.min(idx + 1, sections.length - 1)].id);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(sections[Math.max(idx - 1, 0)].id);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active]);

  const renderSection = () => {
    switch (active) {
      case "overview": return <OverviewSection />;
      case "implementasi": return <ImplementasiSection />;
      case "flowchart": return <FlowchartSection />;
      case "pseudocode": return <PseudocodeSection />;
      case "kompleksitas": return <KompleksitasSection />;
      case "source-code": return <SourceCodeSection />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--bg)", overflow: "hidden" }}>
      <Sidebar sections={sections} active={active} onNavigate={navigate} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <TopBar path={active} />
        <main key={key} className="fade-in"
          style={{ flex: 1, overflowY: "auto", padding: "32px 40px" }}>
          {renderSection()}
        </main>
        <div style={{
          borderTop: "1px solid var(--border)", padding: "6px 40px",
          display: "flex", gap: 24, alignItems: "center"
        }}>
          <span style={{ color: "var(--text-dim)", fontSize: 11 }}>
            <span style={{ color: "var(--green-dim)" }}>↑↓</span> navigate
          </span>
          <span style={{ color: "var(--text-dim)", fontSize: 11 }}>
            <span style={{ color: "var(--green-dim)" }}>ESC</span> overview
          </span>
          <span style={{ marginLeft: "auto", color: "var(--text-dim)", fontSize: 11 }}>
            Kelompok 1 — Struktur Data &amp; Algoritma — TIF_B
          </span>
        </div>
      </div>
    </div>
  );
}
