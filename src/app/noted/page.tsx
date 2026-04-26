import Image from "next/image";

export default function NotedPage() {
  return (
    <div className="container" style={{ paddingTop: "120px" }}>
      <div className="animate-fade-in" style={{ textAlign: "center", marginBottom: "80px" }}>
        <div className="product-tag">Productivity</div>
        <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}>Noted</h1>
        <p className="hero-subtitle" style={{ margin: "0 auto 40px" }}>
          Your thoughts, truly private. End-to-end encrypted note-taking 
          for your daily ideas and inspirations.
          <br/>
          <span style={{ color: "var(--accent-primary)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", marginTop: "12px", display: "inline-block" }}>
            Developing • Coming Soon
          </span>
        </p>
        {/* GitHub link removed per request */}
      </div>

      <div className="products-grid">
        <div className="glass" style={{ padding: "40px", borderRadius: "24px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>E2E Encryption</h3>
          <p style={{ color: "var(--secondary-fg)" }}>
            Notes are encrypted on your device before being synced. 
            Even Bunorden cannot read your content.
          </p>
        </div>
        <div className="glass" style={{ padding: "40px", borderRadius: "24px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>Minimalist Editor</h3>
          <p style={{ color: "var(--secondary-fg)" }}>
            Focus on your writing with a clean, distraction-free interface 
            that stays out of your way.
          </p>
        </div>
        <div className="glass" style={{ padding: "40px", borderRadius: "24px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>Sync Everywhere</h3>
          <p style={{ color: "var(--secondary-fg)" }}>
            Access your notes across all your devices securely, 
            powered by your Bunorden account.
          </p>
        </div>
      </div>

      <section style={{ textAlign: "center", padding: "120px 0" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "16px" }}>The future of notes.</h2>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          We are building a privacy-first note-taking experience. Subscribe to be notified when we launch.
        </p>
        <div className="glass" style={{ display: "inline-flex", padding: "8px", borderRadius: "20px", gap: "8px", alignItems: "center" }}>
          <input type="email" placeholder="Enter your email" style={{ background: "transparent", border: "none", color: "white", padding: "0 16px", outline: "none", width: "240px", fontSize: "16px" }} />
          <button className="btn btn-primary" style={{ padding: "12px 24px" }}>Notify Me</button>
        </div>
      </section>
    </div>
  );
}
