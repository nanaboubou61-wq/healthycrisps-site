export default function Page() {
  return (
    <div className="container" style={{ paddingTop: 34, paddingBottom: 40 }}>
      <div className="grid2">
        <div>
          <div className="small">Healthy Crisps</div>
          <h1 className="h1">Zaatar Crisps — baked, not fried.</h1>
          <p className="p">
            Made in small batches. No preservatives. Made in the UAE.
          </p>

          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn" href="/product/zaatar-crisps">Order Now</a>
            <a className="pill" href="/product/zaatar-crisps">View Product</a>
          </div>

          <div className="grid3" style={{ marginTop: 18 }}>
            <div className="card">Baked not fried</div>
            <div className="card">Made with olive oil</div>
            <div className="card">No preservatives</div>
            <div className="card">Made in UAE</div>
          </div>
        </div>

        <div className="card">
          <div className="small">Products</div>

          <a href="/product/zaatar-crisps" className="card" style={{ display: "block", marginTop: 12 }}>
            <div style={{ fontWeight: 800 }}>Zaatar Crisps</div>
            <div className="small" style={{ marginTop: 6 }}>AED 19.50 / pack</div>
            <div className="small" style={{ marginTop: 6 }}>Buy 4 packs for AED 60 (auto-applied)</div>
          </a>

          <div className="card" style={{ marginTop: 12, opacity: 0.85 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 800 }}>New Flavor</div>
              <span className="badge">Coming Soon</span>
            </div>
            <div className="small" style={{ marginTop: 8 }}>More flavors are on the way.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
