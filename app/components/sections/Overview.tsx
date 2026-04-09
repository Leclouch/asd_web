"use client";
import { members } from "../../data/content";

export default function Overview() {
    return (
        <div style={{ maxWidth: 860 }}>
            <div style={{ marginBottom: 32 }}>
                <div style={{ color: "var(--text-muted)", fontSize: 12, marginBottom: 8 }}>
                    $ cat README.md
                </div>
                <h1 style={{ fontSize: "clamp(16px, 4vw, 22px)", fontWeight: 700, color: "var(--green)", lineHeight: 1.3, marginBottom: 6 }}>
                    Sistem Peminjaman Ruang Kelas
                </h1>
                <div style={{ fontSize: 14, color: "var(--text-muted)" }}>
                    Untuk Kuliah Pengganti — Proyek Algoritma Struktur Data
                </div>
            </div>

            {/* Description */}
            <div style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--green-dim)",
                borderRadius: 4,
                padding: "20px 24px",
                marginBottom: 28,
            }}>
                <div style={{ color: "var(--text-muted)", fontSize: 12, marginBottom: 12, letterSpacing: "0.1em" }}>
          // DESKRIPSI SISTEM
                </div>
                <p style={{ color: "#cccccc", fontSize: 14, lineHeight: 1.85 }}>
                    Program ini mengimplementasikan <span style={{ color: "var(--green)" }}>sistem peminjaman ruang kelas</span> berbasis
                    struktur data <em style={{ color: "#dcdcaa" }}>queue</em> dan <em style={{ color: "#dcdcaa" }}>stack</em>.
                    Sistem ini menggunakan dua struktur data utama untuk menyelesaikan masalah alokasi dan pencatatan.
                </p>
                <p style={{ color: "#cccccc", fontSize: 14, lineHeight: 1.85, marginTop: 12 }}>
                    <span style={{ color: "#4ec9b0" }}>Queue (FIFO)</span> digunakan untuk menyimpan daftar permintaan yang belum diproses
                    berdasarkan urutan kedatangan. <span style={{ color: "#4ec9b0" }}>Stack (LIFO)</span> diterapkan untuk menyimpan riwayat
                    peminjaman yang telah disetujui. Untuk mengatasi batasan alokasi memori yang bersifat statis pada Array,
                    keseluruhan sistem dibangun menggunakan pendekatan <em style={{ color: "#dcdcaa" }}>Linked List</em>.
                </p>
            </div>

            {/* Data structures — 3 col desktop, 1 col mobile */}
            <div className="grid-3col" style={{ marginBottom: 28 }}>
                {[
                    { label: "Queue (FIFO)", desc: "Antrian permintaan peminjaman berdasarkan urutan kedatangan", color: "#00ff41" },
                    { label: "Stack (LIFO)", desc: "Riwayat peminjaman yang telah diproses oleh admin", color: "#4ec9b0" },
                    { label: "Linked List", desc: "Implementasi dinamis yang menghindari batasan array statis", color: "#dcdcaa" },
                ].map(item => (
                    <div key={item.label} style={{
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        borderRadius: 4,
                        padding: "16px",
                    }}>
                        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: item.color }}>{item.label}</div>
                        <div style={{ fontSize: 13, color: "var(--text-mid)", lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                ))}
            </div>

            {/* Users — 2 col desktop, 1 col mobile */}
            <div style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "20px 24px",
                marginBottom: 28,
            }}>
                <div style={{ color: "var(--text-muted)", fontSize: 12, marginBottom: 14, letterSpacing: "0.1em" }}>
          // JENIS PENGGUNA
                </div>
                <div className="grid-2col">
                    <div>
                        <div style={{ color: "var(--green)", fontSize: 13, marginBottom: 6 }}>Peminjam (Mahasiswa)</div>
                        <div style={{ color: "var(--text-mid)", fontSize: 13, lineHeight: 1.7 }}>
                            • Membuat permohonan peminjaman<br />
                            • Melihat status permohonan terakhir
                        </div>
                    </div>
                    <div>
                        <div style={{ color: "var(--green)", fontSize: 13, marginBottom: 6 }}>Admin</div>
                        <div style={{ color: "var(--text-mid)", fontSize: 13, lineHeight: 1.7 }}>
                            • Melihat antrean permintaan<br />
                            • Memproses &amp; menyetujui permohonan<br />
                            • Menampilkan riwayat keputusan
                        </div>
                    </div>
                </div>
            </div>

            {/* Team */}
            <div style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "20px 24px",
            }}>
                <div style={{ color: "var(--text-muted)", fontSize: 10, marginBottom: 14, letterSpacing: "0.1em" }}>
          // KELOMPOK 1
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {members.map((m, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                            <span style={{ color: "var(--text-muted)", fontSize: 14, minWidth: 16 }}>{i + 1}.</span>
                            <span style={{ color: "var(--green)", fontSize: 13 }}>{m.name}</span>
                            <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{m.nim}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "20px 24px",
                marginTop: 30,
            }}>
                <div style={{ color: "var(--green)", fontSize: 15, marginBottom: 14, textAlign: "center", fontWeight: 600 }}>
                    Ketuk navigasi di sebelah kiri untuk menjelajahi setiap bagian dari sistem.
                </div>
            </div>
        </div>
    );
}