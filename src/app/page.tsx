import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <section className="hero animate-fade-in">
        <h1 className="hero-title">Privacy Daily.</h1>
        <p className="hero-subtitle">
          Sophisticated, privacy-first tools for your modern life. 
          Built on the belief that your data belongs exclusively to you.
        </p>
        <div className="hero-actions" style={{ display: "flex", gap: "16px" }}>
          <a href="#products" id="hero-cta-explore" className="btn btn-primary">Explore Products</a>
          <a href="https://accounts.bunorden.com/signup" id="hero-cta-signup" className="btn btn-secondary">Create Account</a>
        </div>
      </section>

      <section id="products" style={{ padding: "120px 0" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontSize: "56px", marginBottom: "16px", fontWeight: 600 }}>The Suite</h2>
          <p style={{ color: "var(--secondary-fg)", fontSize: "22px" }}>One ecosystem. Absolute security.</p>
        </div>

        <div className="products-grid">
          {/* Clavi Card */}
          <div className="product-card">
            <div>
              <div className="product-tag">Personal Finance</div>
              <h3 className="product-name">Clavi</h3>
              <p className="product-desc">
                The gold standard for private personal finance. Track, manage, 
                and master your wealth without compromising your identity.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <a href="/clavi" id="btn-clavi-learn" className="btn btn-secondary" style={{ flex: 1 }}>Learn More</a>
              <a href="https://money.bunorden.com" id="btn-clavi-open" className="btn btn-primary" style={{ flex: 1 }}>Open App</a>
            </div>
          </div>

          {/* Noted Card */}
          <div className="product-card" style={{ opacity: 0.8 }}>
            <div className="coming-soon-badge">Coming Soon</div>
            <div>
              <div className="product-tag">Productivity</div>
              <h3 className="product-name">Noted</h3>
              <p className="product-desc">
                Your thoughts, truly private. End-to-end encrypted note-taking 
                for your daily ideas and inspirations.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <a href="/noted" id="btn-noted-learn" className="btn btn-secondary" style={{ flex: 1 }}>Learn More</a>
              <button disabled className="btn btn-secondary" style={{ flex: 1, opacity: 0.5, cursor: "not-allowed" }}>Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: "100px 80px",
        borderRadius: "48px",
        textAlign: "center",
        marginTop: "60px",
        background: "radial-gradient(circle at top right, rgba(175, 82, 222, 0.1), transparent 70%)",
        border: "1px solid var(--glass-border)",
        position: "relative",
        overflow: "hidden"
      }}>
        <h2 style={{ fontSize: "48px", marginBottom: "24px", fontWeight: 600 }}>Privacy by Design.</h2>
        <p style={{ 
          fontSize: "22px", 
          color: "var(--secondary-fg)", 
          maxWidth: "850px", 
          margin: "0 auto 48px",
          lineHeight: 1.5
        }}>
          Bunorden is dedicated to building products where you own the keys. 
          No middle-men. No data harvesting. Just tools for your life.
        </p>
        <a href="https://accounts.bunorden.com/signup" className="btn btn-primary" style={{ padding: "18px 48px", fontSize: "18px" }}>
          Join Bunorden
        </a>
      </section>
    </div>
  );
}
