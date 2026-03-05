"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ChevronDown } from "lucide-react";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  {
    label: "Work",
    href: "https://www.creativechannel.in/",
  },
  {
    label: "About",
    href: "https://www.creativechannel.in/about-02/",
    children: [
      { label: "Story", href: "https://www.creativechannel.in/about-02/" },
      { label: "Team", href: "https://www.creativechannel.in/about-02#ourteam" },
      { label: "Clients", href: "https://www.creativechannel.in/about-02#ourclients" },
      { label: "Awards", href: "https://www.creativechannel.in/awards/" },
    ],
  },
  {
    label: "Services",
    href: "https://www.creativechannel.in/services-2/",
  },
  {
    label: "Ideas",
    href: "https://www.creativechannel.in/ideas/",
  },
  {
    label: "Contact",
    href: "https://www.creativechannel.in/contact-us/",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `https://www.creativechannel.in/?s=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header className={`header-area${isScrolled ? " scrolled" : ""}`}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
          <nav className="tracem-navbar">
            {/* Logo */}
            <Link href="https://www.creativechannel.in/" className="navbar-logo" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://www.creativechannel.in/wp-content/uploads/2023/01/new-logo-black-cc-e1713861287886.png"
                alt="Master Frame Production"
                width={160}
                height={40}
                style={{ height: "36px", width: "auto" }}
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="mega-menu desktop-nav">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={`mega-menu-item${item.children ? " mega-menu-item-has-children" : ""}`}
                >
                  <a
                    className="mega-menu-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                    {item.children && <span className="mega-indicator" aria-hidden="true" />}
                  </a>

                  {item.children && (
                    <ul className="mega-sub-menu">
                      {item.children.map((child) => (
                        <li key={child.label} className="mega-menu-item">
                          <a
                            className="mega-menu-link"
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right side: Search + Mobile Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ul className="tracem-search-nav">
                <li>
                  <button
                    id="tracem-search"
                    className="tracem-search-btn"
                    aria-label="Open Search"
                    onClick={() => setSearchOpen(true)}
                  >
                    <Search size={18} strokeWidth={2} />
                  </button>
                </li>
              </ul>

              {/* Mobile hamburger */}
              <button
                className={`mobile-toggle${mobileOpen ? " open" : ""}`}
                aria-label="Toggle Menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="mobile-nav-item">
                <div
                  className="mobile-nav-link"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  style={{ userSelect: "none" }}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transform: mobileAboutOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </div>
                {mobileAboutOpen && (
                  <ul className="mobile-sub-menu">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} target="_blank" rel="noopener noreferrer">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label} className="mobile-nav-item">
                <a
                  className="mobile-nav-link"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Search Overlay */}
      <div
        className={`search-overlay${searchOpen ? " open" : ""}`}
        role="dialog"
        aria-label="Search"
        aria-modal="true"
      >
        <div className="search-overlay-inner">
          <button
            className="search-close"
            aria-label="Close Search"
            onClick={() => setSearchOpen(false)}
          >
            <X size={22} />
          </button>
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              ref={searchInputRef}
              className="search-input"
              type="search"
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              name="s"
            />
            <button className="search-submit" type="submit" aria-label="Submit Search">
              <Search size={18} />
            </button>
          </form>
          <p style={{ fontSize: "13px", color: "#aaa" }}>Press Enter to search or Esc to close</p>
        </div>
      </div>
    </>
  );
}
