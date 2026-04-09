"use client";
import { complexityData } from "../../data/content";

export default function Complexity() {
    const o1Count = complexityData.filter(d => d.type === "constant").length;
    const onCount = complexityData.filter(d => d.type === "linear").length;

    return (
        <div style={{ maxWidth: 900 }}>
            <div style={{ marginBottom: 28 }}>
                <div style={{ color: "var(--text-muted)", fontSize: 12, marginBottom: 8 }}>$ analyze --complexity</div>
                <h1 style={{ fontSize: 24, fontWeight: 700, color: "var(--green)" }}>Complexity Analysis</h1>
                <div style={{ color: "var(--text-muted)", fontSize: 16, marginTop: 4 }}>
                    Analisis kompleksitas waktu setiap operasi
                </div>
            </div>

            {/* Summary cards — 3 col desktop, 1 col mobile */}
            <div className="grid-3col" style={{ marginBottom: 28 }}>
                <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: 4, padding: "16px 18px" }}>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>TOTAL OPERASI</div>
                    <div style={{ fontSize: 26, fontWeight: 700, color: "var(--green)" }}>{complexityData.length}</div>
                </div>
                <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: 4, padding: "16px 18px" }}>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>O(1) — Constant</div>
                    <div style={{ fontSize: 26, fontWeight: 700, color: "#00ff41" }}>{o1Count}</div>
                </div>
                <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: 4, padding: "16px 18px" }}>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>O(n) — Linear</div>
                    <div style={{ fontSize: 26, fontWeight: 700, color: "#ffaa00" }}>{onCount}</div>
                </div>
            </div>

            {/* Table — horizontally scrollable on mobile */}
            <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: 4, overflow: "hidden", marginBottom: 24 }}>
                <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", background: "var(--bg-tertiary)" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: 13 }}>// time complexity per operation</span>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ minWidth: 520 }}>
                        <thead>
                            <tr>
                                <th style={{ width: 40 }}>No</th>
                                <th>Operasi</th>
                                <th>Penjelasan</th>
                                <th style={{ width: 140 }}>Kompleksitas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complexityData.map(row => (
                                <tr key={row.no}>
                                    <td style={{ color: "var(--text-muted)", textAlign: "center" }}>{row.no}</td>
                                    <td><code style={{ color: "#dcdcaa", fontSize: 14 }}>{row.operation}()</code></td>
                                    <td style={{ fontSize: 13, lineHeight: 1.6 }}>{row.description}</td>
                                    <td>
                                        <span className={row.type === "constant" ? "o1" : "on"} style={{
                                            fontSize: 13,
                                            background: row.type === "constant" ? "rgba(0,255,65,0.07)" : "rgba(255,170,0,0.07)",
                                            padding: "3px 8px",
                                            borderRadius: 3,
                                            border: `1px solid ${row.type === "constant" ? "rgba(0,255,65,0.2)" : "rgba(255,170,0,0.2)"}`,
                                        }}>
                                            {row.complexity}
                                        </span>
                                        <span style={{ color: "var(--text-muted)", fontSize: 10, display: "block", marginTop: 3 }}>
                                            ({row.type})
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Legend — 2 col desktop, 1 col mobile */}
            <div className="grid-2col">
                <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: 4, padding: "16px 20px" }}>
                    <div style={{ color: "#00ff41", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>O(1) — Constant Time</div>
                    <div style={{ color: "var(--text-mid)", fontSize: 13, lineHeight: 1.7 }}>
                        Operasi yang waktu eksekusinya tidak bergantung pada jumlah elemen.
                        Berlaku untuk <code style={{ color: "#dcdcaa" }}>enqueue</code>, <code style={{ color: "#dcdcaa" }}>dequeue</code>, <code style={{ color: "#dcdcaa" }}>push</code>, <code style={{ color: "#dcdcaa" }}>pop</code>, <code style={{ color: "#dcdcaa" }}>getFront</code>, dan <code style={{ color: "#dcdcaa" }}>getTop</code>.
                    </div>
                </div>
                <div style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: 4, padding: "16px 20px" }}>
                    <div style={{ color: "#ffaa00", fontSize: 14, fontWeight: 700, marginBottom: 8 }}>O(n) — Linear Time</div>
                    <div style={{ color: "var(--text-mid)", fontSize: 13, lineHeight: 1.7 }}>
                        Operasi yang waktu eksekusinya bertumbuh secara linear seiring bertambahnya jumlah elemen n.
                        Berlaku untuk <code style={{ color: "#dcdcaa" }}>displayQueue</code> dan <code style={{ color: "#dcdcaa" }}>displayStack</code>.
                    </div>
                </div>
            </div>
        </div>
    );
}