"use client";
import { useState, useEffect } from "react";

export default function MobileWarning() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        // Only show on actual phone-sized screens
        const check = () => {
            if (window.innerWidth <= 480) {
                setShow(true);
            }
        };
        check();
    }, []);

    if (!show || dismissed) return null;

    return (
        <div style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
        }}>
            <div style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
                borderTop: "2px solid var(--green-dim)",
                maxWidth: 320,
                width: "100%",
                padding: "24px 20px",
                fontFamily: "inherit",
            }}>
                {/* Header */}
                <div style={{ marginBottom: 16 }}>
                    <div style={{ color: "var(--text-muted)", fontSize: 10, letterSpacing: "0.1em", marginBottom: 8 }}>
            // WARNING
                    </div>
                    <div style={{ color: "var(--green)", fontSize: 14, fontWeight: 700 }}>
                        Desktop Recommended
                    </div>
                </div>

                {/* Body */}
                <div style={{ color: "#999", fontSize: 12, lineHeight: 1.8, marginBottom: 24 }}>
                    Website ini dioptimalkan untuk layar desktop atau laptop.{" "}
                    Tampilan mungkin tidak optimal di perangkat mobile.
                    <br /><br />
                    <span style={{ color: "var(--text-mid)" }}>
                        For best experience, open on a desktop or laptop browser.
                    </span>
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <button
                        onClick={() => setDismissed(true)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            background: "rgba(0,255,65,0.08)",
                            border: "1px solid var(--green-dim)",
                            color: "var(--green)",
                            fontFamily: "inherit",
                            fontSize: 12,
                            cursor: "pointer",
                        }}
                    >
                        Lanjutkan di mobile →
                    </button>
                    <div style={{ color: "var(--text-muted)", fontSize: 10, textAlign: "center" }}>
                        tampilan mungkin tidak sempurna
                    </div>
                </div>
            </div>
        </div>
    );
}