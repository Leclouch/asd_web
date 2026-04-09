"use client";

import { useEffect, useState } from "react";
import { teamMembers } from "@/app/data/content";

export default function OverviewSection() {
    const [show, setShow] = useState(false);
    useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

    return (
        <div style={{ maxWidth: 860 }}>
            {/* Prompt line */}
            <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>
                <span style={{ color: "var(--green)" }}>guest@proyek-asd</span>
                <span style={{ color: "var(--text-dim)" }}>:</span>
                <span style={{ color: "#4a9eff" }}>~</span>
                <span style={{ color: "var(--text-dim)" }}>$ </span>
                <span>cat README.md</span>
                <span className="cursor-blink" />
            </div>

            {/* Title block */}
            <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 12, color: "var(--green-dim)", letterSpacing: 3, marginBottom: 8 }}>
          // STRUKTUR DATA & ALGORITMA
                </div>
                <h1 style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--green)",
                    lineHeight: 1.2,
                    textShadow: "0 0 20px rgba(0,255,65,0.2)",
                    marginBottom: 8,
                }}>
                    Sistem Peminjaman<br />Ruang Kelas
                </h1>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                    Untuk Kuliah Pengganti — PROYEK AKHIR ALGORITMA DAN STRUKTUR DATA
                </div>
            </div>

            {/* Description */}
            <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--green-dim)",
                padding: "16px 20px",
                marginBottom: 24,
                fontSize: 14,
                lineHeight: 2,
                color: "var(--text-primary)",
            }}>
                <div style={{ color: "var(--green-dim)", fontSize: 12, marginBottom: 8 }}>/* ABSTRAK */</div>
                Sistem ini menggunakan dua struktur data utama untuk menyelesaikan masalah alokasi dan pencatatan.{" "}
                <span style={{ color: "var(--green)" }}>Queue (FIFO)</span> digunakan untuk menyimpan daftar permintaan yang belum diproses berdasarkan urutan kedatangan.{" "}
                Sementara itu, <span style={{ color: "var(--amber)" }}>Stack (LIFO)</span> diterapkan untuk menyimpan riwayat peminjaman yang telah disetujui.{" "}
                Untuk mengatasi batasan alokasi memori statis pada Array, keseluruhan sistem dibangun menggunakan pendekatan{" "}
                <span style={{ color: "var(--cyan)" }}>Linked List</span>.
            </div>

            {/* Data structures */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
                {[
                    {
                        name: "Queue",
                        principle: "FIFO",
                        desc: "First In, First Out",
                        detail: "Antrian permintaan peminjaman berdasarkan urutan masuk.",
                        color: "var(--green)",
                        colorBg: "rgba(0,255,65,0.05)",
                        icon: "▶▶",
                    },
                    {
                        name: "Stack",
                        principle: "LIFO",
                        desc: "Last In, First Out",
                        detail: "Riwayat keputusan admin — terbaru selalu berada di atas.",
                        color: "#ffaa00",
                        colorBg: "rgba(255,179,0,0.05)",
                        icon: "▲▲",
                    },
                    {
                        name: "Linked List",
                        principle: "DYNAMIC",
                        desc: "Dynamic Memory",
                        detail: "Alokasi memori fleksibel, menggantikan array statis.",
                        color: "#00ffff",
                        colorBg: "rgba(0,229,255,0.05)",
                        icon: "◈◈",
                    },
                ].map((ds) => (
                    <div key={ds.name} style={{
                        background: ds.colorBg,
                        border: `1px solid ${ds.color}33`,
                        borderTop: `2px solid ${ds.color}`,
                        padding: "16px",
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                            <span style={{ color: ds.color, fontSize: 16, fontWeight: 700 }}>{ds.name}</span>
                            <span style={{ color: ds.color, fontSize: 16, opacity: 0.5 }}>{ds.icon}</span>
                        </div>
                        <div style={{ color: ds.color, fontSize: 13, letterSpacing: 2, marginBottom: 4 }}>{ds.principle}</div>
                        <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 8 }}>{ds.desc}</div>
                        <div style={{ color: ds.color, fontSize: 13, lineHeight: 1.6 }}>{ds.detail}</div>
                    </div>
                ))}
            </div>

            {/* Team */}
            <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                padding: "16px 20px",
            }}>
                <div style={{ color: "var(--green-dim)", fontSize: 16, marginBottom: 12 }}>// KELOMPOK 1</div>
                <div style={{ display: "grid", gap: 6 }}>
                    {teamMembers.map((m, i) => (
                        <div key={i} style={{ display: "flex", gap: 12, alignItems: "baseline", fontSize: 14 }}>
                            <span style={{ color: "var(--text-dim)", minWidth: 24 }}>{String(i + 1).padStart(2, "0")}.</span>
                            <span style={{ color: "var(--text-primary)", minWidth: 300 }}>{m.name}</span>
                            <span style={{ color: "var(--text-muted)", fontSize: 14 }}>{m.nim}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}