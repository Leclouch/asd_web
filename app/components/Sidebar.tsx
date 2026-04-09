"use client";
import { navItems } from "../data/content";

interface Props {
    active: string;
    onSelect: (id: string) => void;
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ active, onSelect, isOpen, onClose }: Props) {
    return (
        <>
            {/*
        Two render strategies in one component:
        - Desktop (>768px): normal static flex child, always visible
        - Mobile (<=768px): fixed overlay, slides in from left via transform
        We control this with inline styles + a scoped <style> tag.
      */}
            <div
                className="sidebar-root"
                data-open={isOpen}
                style={{
                    width: 230,
                    background: "var(--bg-secondary)",
                    borderRight: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    flexShrink: 0,
                    zIndex: 50,
                }}
            >
                {/* Header */}
                <div style={{
                    padding: "20px 16px 16px",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}>
                    <div>
                        <div style={{ color: "var(--green)", fontSize: 15, letterSpacing: "0.15em", fontWeight: 700 }}>
                            Projek ASD
                        </div>
                        <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>
                            Kelompok 1 <br /> TIF-B // 2026
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="sidebar-close"
                        style={{
                            background: "none", border: "none",
                            color: "var(--text-mid)", cursor: "pointer",
                            fontFamily: "inherit", fontSize: 20,
                            lineHeight: 1, padding: "0 2px",
                            display: "none", // shown via media query below
                        }}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                {/* Section label */}
                <div style={{ padding: "12px 16px 4px", fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.12em" }}>
          // sections
                </div>

                {/* Nav items */}
                <nav style={{ flex: 1 }}>
                    {navItems.map((item, i) => {
                        const isActive = active === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onSelect(item.id)}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    padding: "9px 16px",
                                    background: isActive ? "var(--bg-tertiary)" : "transparent",
                                    border: "none",
                                    borderLeft: isActive ? "2px solid var(--green)" : "2px solid transparent",
                                    cursor: "pointer",
                                    fontSize: 12,
                                    color: isActive ? "var(--green)" : "var(--text-muted)",
                                    fontFamily: "inherit",
                                    textAlign: "left",
                                    transition: "all 0.15s ease",
                                }}
                                onMouseEnter={e => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLButtonElement).style.color = "#888";
                                        (e.currentTarget as HTMLButtonElement).style.background = "#0f0f0f";
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                                    }
                                }}
                            >
                                <span style={{ color: isActive ? "var(--green-dim)" : "#333", fontSize: 12, minWidth: 24 }}>
                                    0{i + 1}.
                                </span>
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div style={{ padding: "12px 16px", borderTop: "1px solid var(--border)" }}>
                    <div style={{ fontSize: 9, color: "var(--text-muted)", lineHeight: 1.6 }}>
                        Algoritma &amp; Struktur Data<br />
                        <span style={{ color: "#333" }}>Universitas Gadjah Mada</span>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          /* On mobile: pull sidebar out of flow, slide in from left */
          .sidebar-root {
            position: fixed !important;
            top: 0;
            left: 0;
            height: 100vh;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
          }
          /* When isOpen=true, data-open="true" is set */
          .sidebar-root[data-open="true"] {
            transform: translateX(0);
          }
          /* Show close button on mobile */
          .sidebar-close {
            display: block !important;
          }
        }
      `}</style>
        </>
    );
}