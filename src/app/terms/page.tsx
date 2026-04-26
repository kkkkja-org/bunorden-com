export default function TermsOfService() {
  return (
    <div className="container" style={{ paddingTop: "120px", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "32px" }}>Terms of Service</h1>
      <p style={{ color: "var(--secondary-fg)", marginBottom: "48px" }}>Last Updated: April 26, 2026</p>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>1. Acceptance of Terms</h2>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          By using Bunorden products (Clavi, Noted, etc.), you agree to be bound by these terms. If you do not agree, please do not use our services.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>2. Use of Services</h2>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          You are responsible for maintaining the security of your Bunorden account and any encryption keys you generate. We cannot recover lost encryption keys for Noted or Clavi.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>3. Intellectual Property</h2>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          The Bunorden brand and software are the property of Bunorden. Many of our products are open-source and governed by their respective licenses (e.g., MIT).
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>4. Limitation of Liability</h2>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          Bunorden provides services "as is" without any warranty. We are not liable for any data loss resulting from forgotten passwords or encryption keys.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>5. Changes to Terms</h2>
        <p style={{ color: "var(--secondary-fg)" }}>
          We may update these terms occasionally. We will notify you of significant changes via the website or your account.
        </p>
      </section>
    </div>
  );
}
