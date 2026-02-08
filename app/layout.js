import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="container navRow">
    <div className="brand">
  <img
    src="/logo.png"
    alt="Healthy Crisps logo"
    style={{ height: 64 }}
  />
</div>

            <nav className="navLinks">
              <a href="/">Home</a>
              <a href="/product/zaatar-crisps">Product</a>
              <a href="/about">About</a>
              <a href="/faq">FAQ</a>
              <a href="/contact">Contact</a>
            </nav>
            <a className="pill" href="/product/zaatar-crisps">Order</a>
          </div>
        </header>

        <main>{children}</main>

        <footer style={{ borderTop: "1px solid var(--border)" }}>
          <div className="container" style={{ padding: "28px 20px" }}>
            <div style={{ fontWeight: 700 }}>Healthy Crisps</div>
            <div className="small" style={{ marginTop: 8 }}>
              Prepared in a licensed kitchen in the UAE.
            </div>
            <div className="small" style={{ marginTop: 8 }}>
              Currently delivering in Dubai. UAE-wide delivery coming soon.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
