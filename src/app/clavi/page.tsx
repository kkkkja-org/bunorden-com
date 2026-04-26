import Image from "next/image";

export default function ClaviPage() {
  return (
    <div className="container" style={{ paddingTop: "120px" }}>
      <div className="animate-fade-in" style={{ textAlign: "center", marginBottom: "80px" }}>
        <div className="product-tag">Finance</div>
        <h1 className="hero-title" style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}>Clavi</h1>
        <p className="hero-subtitle" style={{ margin: "0 auto 40px" }}>
          Your financial data is yours. Only you hold the key. 
          Privacy-first, open-source personal finance.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <a href="https://money.bunorden.com" className="btn btn-primary">Start for Free</a>
          <a href="https://github.com/kkkkja-co/money.bunorden.com" className="btn btn-secondary">View Source</a>
        </div>
      </div>



      <div className="products-grid">
        <div className="glass" style={{ padding: "40px", borderRadius: "24px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>Local-First</h3>
          <p style={{ color: "var(--secondary-fg)" }}>
            Your data is stored locally on your device and only synced when you choose, 
            using secure, encrypted channels.
          </p>
        </div>
        <div className="glass" style={{ padding: "40px", borderRadius: "24px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>Zero Trackers</h3>
          <p style={{ color: "var(--secondary-fg)" }}>
            We don't track your spending habits or sell your data to advertisers. 
            Bunorden has no access to your financial history.
          </p>
        </div>
        <div className="glass" style={{ padding: "40px", borderRadius: "24px" }}>
          <h3 style={{ fontSize: "24px", marginBottom: "16px" }}>Open Source</h3>
          <p style={{ color: "var(--secondary-fg)" }}>
            Transparency builds trust. Our code is open for anyone to audit, 
            ensuring your privacy is never compromised.
          </p>
        </div>
      </div>
      
      <section style={{ textAlign: "center", padding: "120px 0" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "32px" }}>Ready to take control?</h2>
        <a href="https://money.bunorden.com" className="btn btn-primary" style={{ padding: "16px 48px" }}>
          Open Clavi App
        </a>
      </section>
    </div>
  );
}
