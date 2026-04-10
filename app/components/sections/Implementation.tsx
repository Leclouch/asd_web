"use client";

export default function ImplementasiSection() {
    return (
        <div style={{ maxWidth: 860 }}>
            <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>
                <span style={{ color: "var(--green)" }}>guest@proyek-asd</span>
                <span style={{ color: "var(--text-dim)" }}>:~/implementation$ </span>
                <span>cat implementasi.md</span>
            </div>

            <h2 style={{ color: "var(--green)", fontSize: 24, fontWeight: 700, marginBottom: 4 }}>
                Implementation
            </h2>
            <div style={{ color: "var(--text-muted)", fontSize: 16, marginBottom: 28 }}>BAB IV — Implementasi Program</div>

            {/* 4.1 */}
            <Section title="Gambaran Umum">
                <p>
                    Program mengimplementasikan sistem peminjaman ruang kelas berbasis struktur data{" "}
                    <Kw>queue</Kw> dan <Kw>stack</Kw>. Queue menyimpan antrean permohonan dari mahasiswa secara
                    urutan waktu (FIFO). Stack menyimpan riwayat hasil keputusan admin — diterima atau
                    ditolak — secara LIFO.
                </p>
                <p style={{ marginTop: 12 }}>
                    Program menyediakan dua jenis pengguna:{" "}
                    <span style={{ color: "#ffaa00" }}>Peminjam</span> (membuat permohonan, cek status) dan{" "}
                    <span style={{ color: "#00ffff" }}>Admin</span> (melihat antrean, memproses, melihat riwayat).
                </p>
            </Section>

            {/* 4.2 */}
            <Section title="Spesifikasi Perangkat">
                <div style={{ display: "grid", gap: 6 }}>
                    {[
                        ["OS", "Windows / Linux / MacOS"],
                        ["Compiler", "g++ versi 9 atau lebih baru (C++17)"],
                        ["Runtime", "Terminal / Command Prompt"],
                    ].map(([k, v]) => (
                        <div key={k} style={{ display: "flex", gap: 16, fontSize: 13 }}>
                            <span style={{ color: "var(--green-dim)", minWidth: 80 }}>{k}</span>
                            <span style={{ color: "var(--text-primary)" }}>{v}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 4.3 */}
            <Section title="Implementasi Program">
                <p>
                    Rancangan algoritma diubah ke dalam bahasa C++. Program merepresentasikan proses
                    peminjaman ruang kelas dengan memanfaatkan <Kw>queue</Kw> dan <Kw>stack</Kw> yang
                    diimplementasikan menggunakan <span style={{ color: "#00ffff" }}>linked list</span>.
                </p>
                <div style={{ marginTop: 14, display: "grid", gap: 6 }}>
                    {[
                        "Pembuatan struktur data",
                        "Operasi penambahan data ke antrean",
                        "Menyimpan data antrean permintaan",
                        "Menyimpan riwayat peminjaman ruang",
                        "Menampilkan antrean dan riwayat",
                    ].map((item, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, fontSize: 12, alignItems: "baseline" }}>
                            <span style={{ color: "var(--green)" }}>→</span>
                            <span style={{ color: "var(--text-primary)" }}>{item}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 4.4 */}
            <Section title="Struktur Data">
                <div style={{ display: "grid", gap: 12 }}>
                    <SubSection label="struct Data">
                        Berisi informasi peminjaman: <Kw>nama</Kw>, <Kw>NIU</Kw>, <Kw>tanggal</Kw>, <Kw>jam</Kw>,{" "}
                        <Kw>durasi</Kw>, <Kw>alasan</Kw>, <Kw>ruangan</Kw>.
                    </SubSection>
                    <SubSection label="NodeStack">
                        Menyimpan data peminjaman beserta <Kw>status</Kw> (diterima/ditolak),
                        serta pointer ke node berikutnya.
                    </SubSection>
                    <SubSection label="NodeQueue">
                        Menyimpan data peminjaman dalam antrean. Pointer <Kw>next</Kw> menunjuk ke node berikutnya.
                    </SubSection>
                    <SubSection label="Dummy Values">
                        Nilai default jika queue atau stack kosong — mencegah error saat{" "}
                        <Kw>getFront()</Kw> atau <Kw>getTop()</Kw> dipanggil pada kondisi kosong.
                    </SubSection>
                    <SubSection label="Inisialisasi Pointer">
                        <Kw>StackHead</Kw> → puncak stack.{" "}
                        <Kw>QueueHead</Kw> → depan antrean.{" "}
                        <Kw>QueueTail</Kw> → belakang antrean.
                    </SubSection>
                </div>
            </Section>

            {/* 4.4.5 Queue functions */}
            <Section title="Fungsi Queue">
                <FuncTable rows={[
                    ["enqueue()", "Menambahkan permohonan ke belakang antrean."],
                    ["dequeue()", "Mengeluarkan permohonan terdepan untuk diproses admin."],
                    ["displayQueue()", "Menampilkan seluruh isi antrean."],
                    ["getFront()", "Mengambil data paling depan tanpa menghapusnya."],
                ]} />
            </Section>

            {/* 4.4.6 Stack functions */}
            <Section title="Fungsi Stack">
                <FuncTable rows={[
                    ["push()", "Menambahkan hasil keputusan admin ke riwayat."],
                    ["pop()", "Menghapus dan menampilkan riwayat terakhir."],
                    ["displayStack()", "Menampilkan seluruh riwayat."],
                    ["getTop()", "Mengambil riwayat paling atas tanpa menghapusnya."],
                ]} />
            </Section>

            {/* 4.5 Cara kerja */}
            <Section title="Cara Kerja Program">
                <p style={{ marginBottom: 12 }}>
                    Mahasiswa memasukkan data permohonan ke antrean. Admin melihat antrean dan memproses
                    permohonan tersebut. Setelah diproses, data dipindahkan ke stack dengan status diterima
                    atau ditolak. Mahasiswa dapat mengecek status permohonan mereka — apakah masih dalam
                    antrean atau sudah ada di riwayat.
                </p>
                <div style={{ display: "grid", gap: 6 }}>
                    {[
                        "Pilih masuk sebagai peminjam atau admin",
                        "Tindakan yang akan dilakukan",
                        "Masukkan data yang diminta",
                        "Data disimpan ke dalam antrean",
                        "Admin menyetujui permohonan",
                        "Permohonan masuk ke dalam riwayat",
                    ].map((step, i) => (
                        <div key={i} style={{ display: "flex", gap: 10, fontSize: 13, alignItems: "baseline" }}>
                            <span style={{ color: "var(--green-dim)", minWidth: 24, fontSize: 13 }}>
                                {String(i + 1).padStart(2, "0")}.
                            </span>
                            <span style={{ color: "var(--text-primary)" }}>{step}</span>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}

function Kw({ children }: { children: React.ReactNode }) {
    return <span style={{ color: "var(--green)", fontWeight: 600 }}>{children}</span>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div style={{ marginBottom: 24 }}>
            <div style={{
                color: "var(--green)", fontSize: 15, fontWeight: 700,
                marginBottom: 10, paddingBottom: 6,
                borderBottom: "1px solid var(--border)",
            }}>
                {title}
            </div>
            <div style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.8, paddingLeft: 4 }}>
                {children}
            </div>
        </div>
    );
}

function SubSection({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div style={{ display: "flex", gap: 10 }}>
            <span style={{
                color: "#ffaa00", fontSize: 13, minWidth: 120,
                paddingTop: 1,
            }}>{label}</span>
            <span style={{ color: "var(--text-primary)", fontSize: 13, lineHeight: 1.8 }}>{children}</span>
        </div>
    );
}

function FuncTable({ rows }: { rows: [string, string][] }) {
    return (
        <div style={{ display: "grid", gap: 6 }}>
            {rows.map(([fn, desc]) => (
                <div key={fn} style={{ display: "flex", gap: 16, fontSize: 13 }}>
                    <span style={{ color: "#00ffff", minWidth: 160 }}>{fn}</span>
                    <span style={{ color: "var(--text-primary)" }}>{desc}</span>
                </div>
            ))}
        </div>
    );
}