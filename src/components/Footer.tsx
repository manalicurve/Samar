"use client";

import Link from "next/link";

const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/Creativechannel.in",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/creativechannel.in/",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/creativechannel-in/",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@creativechannelmedia-in",
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
            </svg>
        ),
    },
    {
        label: "X (Twitter)",
        href: "https://x.com/Creat_Channel",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#111111",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                width: "100%",
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minHeight: "64px",
                    flexWrap: "wrap",
                    gap: "12px",
                }}
            >
                {/* Copyright */}
                <p
                    style={{
                        fontSize: "13px",
                        color: "#888888",
                        margin: "0",
                        letterSpacing: "0.01em",
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    ©Copyright 2025. All Rights Reserved.{" "}
                    <Link
                        href="https://www.creativechannel.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#cccccc",
                            textDecoration: "none",
                            fontWeight: 500,
                            transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#e63c2f")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#cccccc")}
                    >
                        Master Frame Production
                    </Link>
                </p>

                {/* Social Icons */}
                <ul
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        listStyle: "none",
                        margin: "0",
                        padding: "0",
                    }}
                    aria-label="Social media links"
                >
                    {socialLinks.map((social) => (
                        <li key={social.label}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "38px",
                                    height: "38px",
                                    color: "#777777",
                                    textDecoration: "none",
                                    borderRadius: "50%",
                                    transition: "color 0.2s ease, background 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#ffffff";
                                    e.currentTarget.style.background = "rgba(255,255,255,0.09)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "#777777";
                                    e.currentTarget.style.background = "transparent";
                                }}
                            >
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
