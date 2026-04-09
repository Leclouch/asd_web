"use client";

interface Props {
    path: string;
}

export default function TopBar({ path }: Props) {
    return (
        <div style={{
            borderBottom: "1px solid var(--border)",
            padding: "8px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "var(--bg-sidebar)",
        }}>
            {/* Traffic lights */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#3a1010", border: "1px solid #5a2020" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2a2510", border: "1px solid #4a4520" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--green)", border: "1px solid var(--green-dim)", boxShadow: "0 0 6px rgba(0,255,65,0.4)" }} />
            </div>

            {/* Path */}
            <div style={{ fontSize: 14, color: "var(--text-dim)", flex: 1 }}>
                <span style={{ color: "var(--text-muted)" }}>~/proyek-ASD/</span>
                <span style={{ color: "var(--green)" }}>{path}</span>
            </div>

            {/* Right badges */}
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "var(--text-dim)", letterSpacing: 1 }}>C++17</span>
                <span style={{ fontSize: 12, color: "var(--text-dim)" }}>|</span>
                <span style={{ fontSize: 12, color: "var(--green-dim)", letterSpacing: 1 }}>● READY</span>
            </div>
        </div>
    );
}