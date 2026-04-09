"use client";

import { useState } from "react";
import { pseudocode } from "@/app/data/content";

const pseudoSections = [
    { label: "Main Program", key: "## PseudoCode Utama" },
    { label: "Tambah Permohonan", key: "## Pseudocode — Tambah Permohonan" },
    { label: "Proses Permintaan", key: "## Pseudocode — Proses Permintaan" },
    { label: "Push (Riwayat)", key: "## Pseudocode — Push ke Stack" },
    { label: "Tampilkan Data", key: "## Pseudocode — Tampilkan Data" },
    { label: "Display Queue", key: "## Pseudocode — Display Queue" },
];

function parseSections(raw: string) {
    const parts = raw.split(/^(## .+)$/m).filter(Boolean);
    const result: { title: string; body: string }[] = [];
    for (let i = 0; i < parts.length; i += 2) {
        result.push({ title: parts[i].trim(), body: (parts[i + 1] || "").trim() });
    }
    return result;
}

function colorize(line: string): React.ReactNode {
    // Comments
    if (line.trimStart().startsWith("//")) {
        return <span style={{ color: "var(--text-dim)" }}>{line}</span>;
    }
    // Keywords
    const keywords = ["BEGIN", "END", "IF", "ELSE IF", "ELSE", "END IF", "WHILE", "DO", "END WHILE", "RETURN", "BREAK", "CALL", "CREATE", "SET", "INPUT", "PRINT", "DISPLAY"];
    let result = line;
    // Highlight strings in quotes
    const highlighted = result
        .replace(/"([^"]*)"/g, `<span style="color:var(--amber)">"$1"</span>`)
        .replace(/\b(BEGIN|END IF|END WHILE|END|IF|ELSE IF|ELSE|WHILE DO|WHILE|DO|RETURN|BREAK|CALL|CREATE|SET|INPUT|PRINT|DISPLAY|TO|IS NOT|IS|OF TYPE|OF)\b/g,
            `<span style="color:var(--cyan);font-weight:600">$1</span>`);
    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
}

export default function PseudocodeSection() {
    const [active, setActive] = useState(0);
    const parsed = parseSections(pseudocode);
    const current = parsed[active] || parsed[0];

    return (
        <div style={{ maxWidth: 900 }}>
            <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>
                <span style={{ color: "var(--green)" }}>guest@dsa-project</span>
                <span style={{ color: "var(--text-dim)" }}>:~/pseudocode$ </span>
                <span>cat pseudocode.txt</span>
            </div>

            <h2 style={{ color: "var(--green)", fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Pseudocode</h2>
            <div style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 24 }}>
                6 fungsi — Main loop + operasi Queue &amp; Stack
            </div>

            {/* Tab bar */}
            <div style={{
                display: "flex", gap: 0, marginBottom: 0, overflowX: "auto",
                borderBottom: "1px solid var(--border)",
            }}>
                {parsed.map((sec, i) => {
                    const shortLabel = pseudoSections[i]?.label || sec.title.replace("## ", "");
                    return (
                        <button key={i} onClick={() => setActive(i)} style={{
                            padding: "8px 14px", fontFamily: "inherit", fontSize: 11,
                            background: active === i ? "var(--bg-card)" : "transparent",
                            border: "none",
                            borderTop: active === i ? "2px solid var(--green)" : "2px solid transparent",
                            borderRight: "1px solid var(--border)",
                            color: active === i ? "var(--green)" : "var(--text-muted)",
                            cursor: "pointer", whiteSpace: "nowrap",
                        }}>
                            {shortLabel}
                        </button>
                    );
                })}
            </div>

            {/* Code panel */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderTop: "none" }}>
                {/* File header */}
                <div style={{
                    padding: "8px 16px", borderBottom: "1px solid var(--border)",
                    display: "flex", justifyContent: "space-between",
                    fontSize: 11, color: "var(--text-dim)",
                }}>
                    <span style={{ color: "var(--text-muted)" }}>{current.title}</span>
                    <span>pseudocode.txt</span>
                </div>

                {/* Code */}
                <div style={{ overflowX: "auto" }}>
                    <pre style={{
                        padding: "20px",
                        fontSize: 12,
                        lineHeight: 1.8,
                        tabSize: 4,
                        margin: 0,
                        background: "transparent",
                    }}>
                        <code>
                            {current.body.split("\n").map((line, i) => {
                                const indent = line.match(/^(\s*)/)?.[1].length || 0;
                                return (
                                    <div key={i} style={{ display: "flex", gap: 0, minHeight: "1.8em" }}>
                                        <span style={{
                                            color: "var(--text-dim)", fontSize: 10,
                                            minWidth: 32, textAlign: "right",
                                            paddingRight: 16, userSelect: "none",
                                            lineHeight: 1.8,
                                        }}>
                                            {i + 1}
                                        </span>
                                        <span style={{ flex: 1 }}>{colorize(line)}</span>
                                    </div>
                                );
                            })}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}