"use client";

import { useState } from "react";
import { sourceCode } from "@/app/data/content";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Custom dark terminal theme
const terminalTheme: { [key: string]: React.CSSProperties } = {
    'code[class*="language-"]': { color: "#ccc", background: "none", fontFamily: "JetBrains Mono, monospace", fontSize: "12px", lineHeight: "1.8" },
    'pre[class*="language-"]': { background: "transparent", margin: 0, padding: 0 },
    comment: { color: "#444" },
    prolog: { color: "#444" },
    doctype: { color: "#444" },
    cdata: { color: "#444" },
    punctuation: { color: "#666" },
    namespace: { opacity: 0.7 },
    property: { color: "#00e5ff" },
    tag: { color: "#00e5ff" },
    boolean: { color: "#00ff41" },
    number: { color: "#ffb300" },
    constant: { color: "#00e5ff" },
    symbol: { color: "#00e5ff" },
    deleted: { color: "#ff3333" },
    selector: { color: "#00ff41" },
    "attr-name": { color: "#00ff41" },
    string: { color: "#ffb300" },
    char: { color: "#ffb300" },
    builtin: { color: "#00e5ff" },
    inserted: { color: "#00ff41" },
    operator: { color: "#888" },
    entity: { color: "#ffb300", cursor: "help" },
    url: { color: "#00e5ff" },
    variable: { color: "#ccc" },
    atrule: { color: "#00ff41" },
    "attr-value": { color: "#ffb300" },
    function: { color: "#00e5ff", fontWeight: "600" },
    "class-name": { color: "#00e5ff" },
    keyword: { color: "#00ff41", fontWeight: "600" },
    regex: { color: "#ffb300" },
    important: { color: "#ff3333", fontWeight: "bold" },
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
};

const codeSections = [
    { label: "Full File", start: 0, end: -1 },
    { label: "struct Data", start: 0, end: 25 },
    { label: "Queue ops", start: 26, end: 90 },
    { label: "Stack ops", start: 91, end: 160 },
    { label: "main()", start: 161, end: -1 },
];

export default function SourceCodeSection() {
    const [activeSection, setActiveSection] = useState(0);
    const [copied, setCopied] = useState(false);

    const lines = sourceCode.split("\n");
    const sec = codeSections[activeSection];
    const displayCode = sec.end === -1
        ? lines.slice(sec.start).join("\n")
        : lines.slice(sec.start, sec.end + 1).join("\n");

    const handleCopy = () => {
        navigator.clipboard.writeText(sourceCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ maxWidth: 900 }}>
            <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 24 }}>
                <span style={{ color: "var(--green)" }}>guest@dsa-project</span>
                <span style={{ color: "var(--text-dim)" }}>:~/src$ </span>
                <span>cat main.cpp</span>
            </div>

            <h2 style={{ color: "var(--green)", fontSize: 24, fontWeight: 700, marginBottom: 4 }}>
                Source Code
            </h2>
            <div style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 24 }}>
                C++ — Queue + Stack + Linked List implementation
            </div>

            {/* File header bar */}
            <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderBottom: "none",
                padding: "10px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "var(--green-dim)", fontSize: 11 }}>●</span>
                    <span style={{ color: "var(--text-primary)", fontSize: 12 }}>main.cpp</span>
                    <span style={{ color: "var(--text-dim)", fontSize: 11 }}>
                        ({lines.length} lines)
                    </span>
                </div>
                <button onClick={handleCopy} style={{
                    padding: "4px 12px", fontFamily: "inherit", fontSize: 11,
                    background: copied ? "rgba(0,255,65,0.1)" : "transparent",
                    border: `1px solid ${copied ? "var(--green-dim)" : "var(--border)"}`,
                    color: copied ? "var(--green)" : "var(--text-muted)",
                    cursor: "pointer", transition: "all 0.15s",
                }}>
                    {copied ? "✓ copied" : "copy"}
                </button>
            </div>

            {/* Section tabs */}
            <div style={{
                display: "flex", background: "var(--bg)",
                borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border-bright)",
                overflowX: "auto",
            }}>
                {codeSections.map((s, i) => (
                    <button key={i} onClick={() => setActiveSection(i)} style={{
                        padding: "6px 14px", fontFamily: "inherit", fontSize: 11,
                        background: activeSection === i ? "var(--bg-card)" : "transparent",
                        border: "none",
                        borderTop: activeSection === i ? "2px solid var(--green)" : "2px solid transparent",
                        borderRight: "1px solid var(--border)",
                        color: activeSection === i ? "var(--green)" : "var(--text-muted)",
                        cursor: "pointer", whiteSpace: "nowrap",
                    }}>
                        {s.label}
                    </button>
                ))}
            </div>

            {/* Code block */}
            <div style={{
                background: "#0d0d0d",
                border: "1px solid var(--border)",
                borderTop: "none",
                overflowX: "auto",
                maxHeight: 520,
                overflowY: "auto",
            }}>
                <div style={{ display: "flex" }}>
                    {/* Line numbers */}
                    <div style={{
                        padding: "20px 12px",
                        minWidth: 48,
                        textAlign: "right",
                        borderRight: "1px solid var(--border)",
                        userSelect: "none",
                    }}>
                        {displayCode.split("\n").map((_, i) => (
                            <div key={i} style={{
                                fontSize: 11, lineHeight: 1.8,
                                color: "var(--text-dim)",
                            }}>
                                {(sec.start + i + 1)}
                            </div>
                        ))}
                    </div>

                    {/* Code */}
                    <div style={{ padding: "20px 20px 20px 16px", flex: 1, minWidth: 0 }}>
                        <SyntaxHighlighter
                            language="cpp"
                            style={terminalTheme}
                            customStyle={{ background: "transparent", margin: 0, padding: 0 }}
                            showLineNumbers={false}
                            wrapLines={false}
                        >
                            {displayCode}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>

            {/* Stats bar */}
            <div style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderTop: "none",
                padding: "6px 16px",
                display: "flex",
                gap: 24,
                fontSize: 11,
                color: "var(--text-dim)",
            }}>
                <span><span style={{ color: "var(--green-dim)" }}>lang</span> C++</span>
                <span><span style={{ color: "var(--green-dim)" }}>lines</span> {lines.length}</span>
                <span><span style={{ color: "var(--green-dim)" }}>structs</span> Data, NodeStack, NodeQueue</span>
                <span><span style={{ color: "var(--green-dim)" }}>ops</span> enqueue, dequeue, push, pop, display*, getTop, getFront</span>
            </div>
        </div>
    );
}