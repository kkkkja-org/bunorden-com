import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Bunorden",
  description: "Unified, privacy-first products for your daily life. Clavi for finance, Noted for thoughts.",
  keywords: ["privacy", "finance", "notes", "daily products", "secure", "bunorden"],
  authors: [{ name: "Bunorden" }],
  icons: {
    icon: "/bun_icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          background: "transparent", /* Transparent as requested */
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}>
          <div className="container" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <a href="/" className="nav-item-animate" style={{ display: "flex", alignItems: "center" }}>
              <img 
                src="/bun_logo.svg" 
                alt="Bunorden" 
                style={{ height: "64px", width: "auto" }}
              />
            </a>
            
            <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
              <a href="/clavi" id="nav-link-clavi" className="nav-item-animate" style={{ fontSize: "14px", fontWeight: 500 }}>Clavi</a>
              <a href="/noted" id="nav-link-noted" className="nav-item-animate" style={{ fontSize: "14px", fontWeight: 500 }}>Noted</a>
              <div className="nav-item-animate" style={{ width: "1px", height: "20px", background: "var(--glass-border)" }}></div>
              <a href="https://accounts.bunorden.com" id="nav-signin" className="btn btn-secondary nav-item-animate" style={{ padding: "8px 16px", fontSize: "14px" }}>
                Sign In
              </a>
              <a href="https://accounts.bunorden.com/signup" id="nav-signup" className="btn btn-primary nav-item-animate" style={{ padding: "8px 16px", fontSize: "14px" }}>
                Create Account
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer style={{ padding: "80px 24px", borderTop: "1px solid var(--glass-border)", marginTop: "120px", background: "rgba(0,0,0,0.3)" }}>
          <div className="container" style={{ textAlign: "center", color: "var(--secondary-fg)" }}>
            <img 
              src="/bun_logo.svg" 
              alt="Bunorden" 
              style={{ height: "48px", width: "auto", marginBottom: "24px", opacity: 0.8 }}
            />
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "32px", fontSize: "14px" }}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="https://github.com/kkkkja-org">GitHub</a>
            </div>
            <p style={{ fontSize: "12px", marginBottom: "8px" }}>© 2026 Bunorden. Dedicated to your privacy.</p>
            <p style={{ fontSize: "11px", opacity: 0.5 }}>
              Hosted by Cloudflare Workers. May contain <code>static.cloudflareinsights.com</code> for performance monitoring.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
