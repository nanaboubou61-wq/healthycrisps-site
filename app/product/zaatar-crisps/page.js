"use client";

import { useMemo, useState } from "react";

const PRICE_SINGLE = 19.5;
const PRICE_BUNDLE_EACH = 15;
const BUNDLE_QTY = 4;

function formatAED(n) {
  return `AED ${Number(n).toFixed(2)}`;
}

function unitPrice(qty) {
  return qty >= BUNDLE_QTY ? PRICE_BUNDLE_EACH : PRICE_SINGLE;
}

function totalPrice(qty) {
  return unitPrice(qty) * qty;
}

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  const unit = unitPrice(qty);
  const total = totalPrice(qty);
  const bundleApplied = qty >= BUNDLE_QTY;

  const whatsappUrl = useMemo(() => {
    const msg =
`Hi, I’d like to order Healthy Crisps – Zaatar Crisps.
Quantity: ${qty} pack${qty > 1 ? "s" : ""}
Total: ${formatAED(total)}${bundleApplied ? " (bundle applied)" : ""}
Delivery: Dubai
Payment:`;
    const phone = "971585735011";
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }, [qty, total, bundleApplied]);

  return (
    <div className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <div className="grid2">
        <div className="card">
          <div className="small">Healthy Crisps</div>
          <h1 className="h1">Zaatar Crisps</h1>
          <p className="p">Classic zaatar flavor, baked to a light and satisfying crunch.</p>

          <div style={{ marginTop: 18 }} className="card">
            <div className="kv">
              <div>
                <div className="small">Price</div>
                <div style={{ fontSize: 26, fontWeight: 800, marginTop: 6 }}>
                  {formatAED(unit)} <span className="small">/ pack</span>
                </div>
                <div className="small" style={{ marginTop: 6 }}>
                  Buy 4 packs for AED 60 <span style={{ color: "var(--muted)" }}>(auto-applied)</span>
                </div>
              </div>

              <div className="qty">
                <button className="qtyBtn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <div style={{ minWidth: 32, textAlign: "center", fontWeight: 800 }}>{qty}</div>
                <button className="qtyBtn" onClick={() => setQty(q => q + 1)}>+</button>
              </div>
            </div>

            <div
              style={{
                marginTop: 14,
                background: "#f9fafb",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <div className="small">
                Total {bundleApplied ? <span>(bundle applied)</span> : null}
              </div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>{formatAED(total)}</div>
            </div>

            <a className="btn" style={{ marginTop: 14, textAlign: "center", width: "100%" }} href={whatsappUrl} target="_blank" rel="noreferrer">
              Order via WhatsApp
            </a>

            <div className="small" style={{ marginTop: 10 }}>
              Delivery: currently Dubai. UAE-wide delivery coming soon.
            </div>
          </div>

          <div style={{ marginTop: 18 }} className="card">
            <div style={{ fontWeight: 800 }}>Ingredients (exact as on packaging)</div>
            <div className="small" style={{ marginTop: 10 }}>
              PASTE EXACT INGREDIENTS TEXT FROM JAR HERE
            </div>
          </div>

   <div style={{ marginTop: 18 }} className="card">
  <div style={{ fontWeight: 800 }}>Ingredients (exact as on packaging)</div>
  <div className="small" style={{ marginTop: 10 }}>
    Wheat flour rolls, zaatar (thyme, sesame seeds, sumac, salt), olive oil.
  </div>
</div>
<div style={{ marginTop: 12 }} className="card">
  <div style={{ fontWeight: 800 }}>Allergens (exact as on packaging)</div>
  <div className="small" style={{ marginTop: 10 }}>
    Contains wheat (gluten) and sesame. May contain traces of nuts.
  </div>
</div>


          <div style={{ marginTop: 12 }} className="card">
            <div style={{ fontWeight: 800 }}>Disclaimer</div>
            <div className="small" style={{ marginTop: 10 }}>
              Prepared in a licensed kitchen in the UAE.
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontWeight: 800 }}>More flavors</div>
            <span className="badge">Coming Soon</span>
          </div>
          <p className="p" style={{ marginTop: 10 }}>
            We’re starting with Zaatar. New flavors are on the way.
          </p>

          <div style={{ marginTop: 16 }} className="card">
            <div className="small">Product</div>
            <div style={{ fontWeight: 800, marginTop: 6 }}>New Flavor</div>
            <div className="small" style={{ marginTop: 6 }}>Coming soon</div>
          </div>
        </div>
      </div>
    </div>
  );
}
