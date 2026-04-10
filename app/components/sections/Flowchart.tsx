"use client";

import { useState } from "react";
import Image from "next/image";

const flowcharts = [
    { id: "main", label: "Main Flow", file: "/flowcharts/MainFlow_ASDProjek(1)_fixed.jpg", desc: "Alur utama program — pemilihan role & navigasi menu" },
    { id: "enqueue", label: "Permintaan Peminjaman", file: "/flowcharts/tambahPermintaanUser(1).jpg", desc: "Menambahkan permintaan peminjaman sebagai user" },
    { id: "dequeue", label: "Proses Peminjaman", file: "/flowcharts/flowchart_prosespermintaan.jpg", desc: "Memproses permintaan peminjaman selanjutnya" },
    { id: "push", label: "Simpan Riwayat", file: "/flowcharts/simpandata.jpg", desc: "Menyimpan data ke riwayat" },
    { id: "pop", label: "Show History", file: "/flowcharts/Menampilkandataterakhiryangtelahdiproses.drawio.jpg", desc: "menampilkan data terakhir yang telah diproses" },
    { id: "display", label: "Show Queue", file: "/flowcharts/FlowchartMenampilkanAntreanPermintaan.drawio.jpg", desc: "Menampilkan antrean permintaan" },
];

export default function FlowchartSection() {
    const [active, setActive] = useState(0);
    const current = flowcharts[active];

    return (
        <div style={{ maxWidth: 900 }}>
            <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>
                <span style={{ color: "var(--green)" }}>guest@dsa-project</span>
                <span style={{ color: "var(--text-dim)" }}>:~/flowchart$ </span>
                <span>ls -la *.png</span>
            </div>

            <h2 style={{ color: "var(--green)", fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Flowchart</h2>
            <div style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 24 }}>
                6 diagram — Main flow + 5 fungsi utama
            </div>

            {/* Tab selector */}
            <div style={{
                display: "flex", gap: 4, marginBottom: 20, flexWrap: "wrap",
            }}>
                {flowcharts.map((fc, i) => (
                    <button key={fc.id} onClick={() => setActive(i)} style={{
                        padding: "6px 14px", fontSize: 12, fontFamily: "inherit",
                        background: active === i ? "rgba(0,255,65,0.08)" : "transparent",
                        border: active === i ? "1px solid var(--green-dim)" : "1px solid var(--border)",
                        color: active === i ? "var(--green)" : "var(--text-muted)",
                        cursor: "pointer",
                        transition: "all 0.15s",
                    }}>
                        {fc.label}
                    </button>
                ))}
            </div>

            {/* Image panel */}
            <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderTop: "2px solid var(--green-dark)",
            }}>
                {/* Panel header */}
                <div style={{
                    padding: "10px 16px", borderBottom: "1px solid var(--border)",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                    <span style={{ color: "var(--green)", fontSize: 15, fontWeight: 700 }}>{current.label}</span>
                    <span style={{ color: "var(--text-muted)", fontSize: 11 }}>{current.file}</span>
                </div>

                {/* Description */}
                <div style={{ padding: "8px 16px", borderBottom: "1px solid var(--border)", fontSize: 13, color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--green-dim)" }}>#</span> {current.desc}
                </div>

                {/* Image area */}
                <div style={{
                    padding: "24px",
                    minHeight: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}>
                    <img
                        src={current.file}
                        alt={current.label}
                        style={{ maxWidth: "100%", maxHeight: 500, objectFit: "contain" }}
                    />

                </div>
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                <button
                    onClick={() => setActive(a => Math.max(0, a - 1))}
                    disabled={active === 0}
                    style={{
                        padding: "8px 16px", fontFamily: "inherit", fontSize: 12,
                        background: "transparent", border: "1px solid var(--border)",
                        color: active === 0 ? "var(--text-dim)" : "var(--text-muted)",
                        cursor: active === 0 ? "default" : "pointer",
                    }}
                >
                    ← prev
                </button>
                <span style={{ color: "var(--text-dim)", fontSize: 11, alignSelf: "center" }}>
                    {active + 1} / {flowcharts.length}
                </span>
                <button
                    onClick={() => setActive(a => Math.min(flowcharts.length - 1, a + 1))}
                    disabled={active === flowcharts.length - 1}
                    style={{
                        padding: "8px 16px", fontFamily: "inherit", fontSize: 12,
                        background: "transparent", border: "1px solid var(--border)",
                        color: active === flowcharts.length - 1 ? "var(--text-dim)" : "var(--text-muted)",
                        cursor: active === flowcharts.length - 1 ? "default" : "pointer",
                    }}
                >
                    next →
                </button>
            </div>
        </div>
    );
}