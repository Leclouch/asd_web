"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/sections/Overview";
import Implementation from "./components/sections/Implementation";
import Flowchart from "./components/sections/Flowchart";
import Pseudocode from "./components/sections/Pseudocode";
import Complexity from "./components/sections/Complexity";
import SourceCode from "./components/sections/SourceCode";
import MobileWarning from "./components/Mobilewarning";
import { navItems } from "./data/content";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections: Record<string, React.ReactNode> = {
    overview: <Overview />,
    implementation: <Implementation />,
    flowchart: <Flowchart />,
    pseudocode: <Pseudocode />,
    complexity: <Complexity />,
    source: <SourceCode />,
  };

  const activeNav = navItems.find(n => n.id === activeSection) || navItems[0];

  const handleSelect = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "var(--bg)" }}>

      <MobileWarning />

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 40,
          }}
        />
      )}

      <Sidebar
        active={activeSection}
        onSelect={handleSelect}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "10px 16px",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-secondary)",
          flexShrink: 0,
        }}>
          <button
            onClick={() => setSidebarOpen(true)}
            style={{
              background: "none", border: "none",
              color: "var(--text-mid)", cursor: "pointer",
              fontFamily: "inherit", fontSize: 18,
              padding: "0 4px", lineHeight: 1,
              display: "var(--hamburger-display, none)",
            }}
            aria-label="Open menu"
          >
            ☰
          </button>

          <div style={{ display: "flex", gap: 6 }} className="hide-mobile">
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#3a1010" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2a2510" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--green-dark)" }} />
          </div>

          <span style={{ color: "var(--text-muted)", fontSize: 12, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            guest@dsa-ft-ugm:
            <span style={{ color: "var(--green)" }}>{activeNav.path}</span>
            <span className="cursor" />
          </span>
        </div>

        <div key={activeSection} className="fade-in"
          style={{ flex: 1, overflowY: "auto", padding: "clamp(16px, 3vw, 32px) clamp(16px, 4vw, 40px)" }}>
          {sections[activeSection] ?? sections["overview"]}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          :root { --hamburger-display: block; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}