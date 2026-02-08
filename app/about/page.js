export default function About() {
  return (
    <div className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <div className="card">
        <h1 className="h1" style={{ marginTop: 0 }}>About</h1>

        <p className="p">
          Healthy Crisps is a small-batch snack brand made in the UAE.
          We’re starting with one launch flavor — Zaatar Crisps — baked for a light, satisfying crunch.
        </p>

        <div className="card" style={{ marginTop: 16 }}>
          <div style={{ fontWeight: 800 }}>Our promise</div>
          <ul style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.8 }}>
            <li>Baked, not fried</li>
            <li>Made in the UAE</li>
            <li>Prepared in a licensed kitchen in the UAE</li>
            <li>More flavors coming soon</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

