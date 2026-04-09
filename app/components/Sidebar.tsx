"use client";

import { SectionId } from "@/app/page";

interface Props {
    sections: { id: SectionId; label: string; prefix: string }[];
    active: SectionId;
    onNavigate: (id: SectionId) => void;
}

export default function Sidebar({ sections, active, onNavigate }: Props) {
    return (
        <div style={{
            width: 220,
            minWidth: 220,
            background: "var(--bg-sidebar)",
            borderRight: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            padding: "16px 0",
            userSelect: "none",
        }}>
            {/* Header */}
            <div style={{ padding: "0 16px 16px", borderBottom: "1px solid var(--border)", marginBottom: 8 }}>
                <div style={{ color: "var(--green)", fontSize: 16, letterSpacing: 2, fontWeight: 700 }}>
                    PROYEK-ASD
                </div>
                <div style={{ color: "var(--text-dim)", fontSize: 14, marginTop: 4 }}>
                    PEMINJAMAN RUANG KELAS
                </div>
                <div style={{ color: "var(--text-dim)", fontSize: 14, marginTop: 2 }}>
                    TIF-B // KELOMPOK 1
                </div>
            </div>

            {/* Section label */}
            <div style={{ padding: "10px 16px 4px", fontSize: 9, color: "var(--text-dim)", letterSpacing: 2 }}>
        // SECTIONS
            </div>

            {/* Nav items */}
            {sections.map((s) => {
                const isActive = s.id === active;
                return (
                    <button
                        key={s.id}
                        onClick={() => onNavigate(s.id)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "9px 16px",
                            cursor: "pointer",
                            background: "none",
                            border: "none",
                            borderLeft: isActive ? "2px solid var(--green)" : "2px solid transparent",
                            fontSize: 14,
                            color: isActive ? "var(--green)" : "var(--text-muted)",
                            fontFamily: "inherit",
                            textAlign: "left",
                            width: "100%",
                            transition: "color 0.15s, background 0.15s",
                            backgroundColor: isActive ? "rgba(0,255,65,0.04)" : "transparent",
                        }}
                        onMouseEnter={e => {
                            if (!isActive) {
                                (e.currentTarget as HTMLElement).style.color = "#888";
                                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-hover)";
                            }
                        }}
                        onMouseLeave={e => {
                            if (!isActive) {
                                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                            }
                        }}
                    >
                        <span style={{ fontSize: 10, minWidth: 24, color: isActive ? "var(--green-dim)" : "var(--text-dim)" }}>
                            {s.prefix}
                        </span>
                        {s.label}
                    </button>
                );
            })}

            {/* Bottom info */}
            <div style={{ marginTop: "auto", padding: "12px 16px", borderTop: "1px solid var(--border)" }}>
                <div style={{ color: "var(--text-dim)", fontSize: 10, lineHeight: 1.7 }}>
                    <span style={{ color: "var(--green-dim)" }}>$</span> g++ main.cpp -o app<br />
                    <span style={{ color: "var(--green-dim)" }}>$</span> ./app <br />
                    <span style={{ color: "var(--green-dim)" }}>$</span> Website by Wafdan & Claude
                </div>
            </div>
        </div>
    );
}