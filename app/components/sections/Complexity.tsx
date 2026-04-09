"use client";

import { complexityData } from "@/app/data/content";

export default function KompleksitasSection() {
    const o1 = complexityData.filter(d => d.type === "constant");
    const on = complexityData.filter(d => d.type === "linear");

    return (
        <div style={{ maxWidth: 860 }}>
            <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>
                <span style={{ color: "var(--green)" }}>guest@dsa-project</span>
                <span style={{ color: "var(--text-dim)" }}>:~/analisis$ </span>
                <span>cat kompleksitas.csv | column -t -s,</span>
            </div>

            <h2 style={{ color: "var(--green)", fontSize: 24, fontWeight: 700, marginBottom: 4 }}>
                Complexity Analysis
            </h2>
            <div style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 28 }}>
                Analisis kompleksitas waktu (time complexity) per operasi
            </div>

            {/* Summary cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                <div style={{
                    background: "rgba(0,255,65,0.05)", border: "1px solid var(--green-dark)",
                    borderTop: "2px solid var(--green)", padding: "16px 20px",
                }}>
                    <div style={{ fontSize: 11, color: "var(--green-dim)", letterSpacing: 2, marginBottom: 8 }}>O(1) — CONSTANT</div>
                    <div style={{ fontSize: 28, color: "var(--green)", fontWeight: 700, marginBottom: 6 }}>
                        {o1.length}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>operasi dengan waktu konstan</div>
                    <div style={{ fontSize: 11, color: "var(--text-dim)", marginTop: 8 }}>
                        {o1.map(d => d.operation).join(", ")}
                    </div>
                </div>
                <div style={{
                    background: "rgba(255,170,0,0.05)",
                    border: "1px solid rgba(255,170,0,0.2)",
                    borderTop: "2px solid #ffaa00",
                    padding: "16px 20px",
                }}>
                    <div style={{ fontSize: 11, color: "#ffaa00", letterSpacing: 2, marginBottom: 8 }}>O(n) — LINEAR</div>
                    <div style={{ fontSize: 28, color: "#ffaa00", fontWeight: 700, marginBottom: 6 }}>
                        {on.length}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>operasi dengan waktu linear</div>
                    <div style={{ fontSize: 11, color: "#ffaa00", marginTop: 8 }}>
                        {on.map(d => d.operation).join(", ")}
                    </div>
                </div>
            </div>

            {/* Table */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <div style={{
                    padding: "10px 16px", borderBottom: "1px solid var(--border)",
                    fontSize: 11, color: "var(--text-dim)",
                    display: "flex", justifyContent: "space-between",
                }}>
                    <span>analisis_kompleksitas.csv</span>
                    <span>{complexityData.length} operasi</span>
                </div>

                <table className="complexity-table">
                    <thead>
                        <tr>
                            <th style={{ width: 36 }}>#</th>
                            <th style={{ width: 160 }}>Operasi</th>
                            <th>Penjelasan</th>
                            <th style={{ width: 140, textAlign: "center" }}>Kompleksitas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complexityData.map((row) => (
                            <tr key={row.no}>
                                <td style={{ color: "var(--text-dim)", fontSize: 11 }}>{String(row.no).padStart(2, "0")}</td>
                                <td style={{ color: "var(--cyan)", fontWeight: 600 }}>{row.operation}</td>
                                <td style={{ fontSize: 12, lineHeight: 1.6 }}>{row.description}</td>
                                <td style={{ textAlign: "center" }}>
                                    {row.type === "constant"
                                        ? <span className="badge-o1">{row.complexity}</span>
                                        : <span className="badge-on">{row.complexity}</span>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Explanation */}
            <div style={{
                marginTop: 24, background: "var(--bg-card)",
                border: "1px solid var(--border)", borderLeft: "3px solid var(--text-dim)",
                padding: "16px 20px", fontSize: 12, lineHeight: 1.9,
            }}>
                <div style={{ color: "var(--green-dim)", fontSize: 12, marginBottom: 8 }}>/* ANALISIS */</div>
                <p>
                    Operasi <span style={{ color: "var(--green)" }}>enqueue</span>,{" "}
                    <span style={{ color: "var(--green)" }}>dequeue</span>,{" "}
                    <span style={{ color: "var(--green)" }}>push</span>,{" "}
                    <span style={{ color: "var(--green)" }}>pop</span>,{" "}
                    <span style={{ color: "var(--green)" }}>getFront</span>, dan{" "}
                    <span style={{ color: "var(--green)" }}>getTop</span> semuanya berjalan dalam{" "}
                    <span style={{ color: "var(--green)", fontWeight: 700 }}>O(1)</span> karena hanya mengakses
                    atau memodifikasi elemen di ujung struktur (head/tail) tanpa perlu traversal.
                </p>
                <p style={{ marginTop: 10 }}>
                    Operasi <span style={{ color: "var(--amber)" }}>displayQueue</span> dan{" "}
                    <span style={{ color: "var(--amber)" }}>displayStack</span> berjalan dalam{" "}
                    <span style={{ color: "var(--amber)", fontWeight: 700 }}>O(n)</span> karena
                    harus melakukan traversal terhadap seluruh node dalam linked list untuk menampilkan data.
                </p>
            </div>
        </div>
    );
}