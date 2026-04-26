export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ paddingTop: "120px", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "32px" }}>Privacy Policy</h1>
      <p style={{ color: "var(--secondary-fg)", marginBottom: "48px" }}>Last Updated: April 26, 2026</p>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>1. Our Privacy Philosophy</h2>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          At Bunorden, we believe privacy is a fundamental human right. Our products are built from the ground up to minimize data collection. We don't want your data, we don't need your data, and we certainly don't sell your data.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>2. Data Collection</h2>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          <strong>Clavi:</strong> Your financial data is stored locally on your device. Any sync features use end-to-end encryption or your own private cloud storage. Bunorden never sees your transactions.
        </p>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          <strong>Noted:</strong> Your notes are encrypted on your device before they ever touch our servers. We hold no keys and have no way to decrypt your content.
        </p>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          <strong>Bunorden Account:</strong> We collect only the minimum information necessary to manage your account (e.g., email address). We do not use trackers like Google Analytics or Facebook Pixel on our websites.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>3. Infrastructure & Hosting</h2>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          Bunorden products are hosted using <strong>Cloudflare Workers</strong>. As part of this infrastructure, our websites may include <code>static.cloudflareinsights.com</code> for privacy-first, non-identifying performance monitoring provided by Cloudflare. This helps us ensure the reliability of our services without tracking individual users.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>4. Your Rights</h2>
        <p style={{ color: "var(--secondary-fg)", marginBottom: "16px" }}>
          You have full control over your data. You can export or delete your account at any time through our centralized account management at accounts.bunorden.com.
        </p>
      </section>

      <section style={{ marginBottom: "64px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>5. Contact Us</h2>
        <p style={{ color: "var(--secondary-fg)" }}>
          If you have questions about our privacy practices, please reach out via GitHub or our official channels.
        </p>
      </section>
    </div>
  );
}
