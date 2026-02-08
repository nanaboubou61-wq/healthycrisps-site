export default function Contact() {
  const phone = "971585735011";
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hi! I have a question about Healthy Crisps."
  )}`;

  return (
    <div className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <div className="card">
        <h1 className="h1" style={{ marginTop: 0 }}>Contact</h1>

        <p className="p">
          The fastest way to reach us is WhatsApp. We usually respond quickly during the day.
        </p>

        <div style={{ marginTop: 16 }}>
          <a className="btn" href={whatsapp} target="_blank" rel="noreferrer">
            Message us on WhatsApp
          </a>
        </div>

        <div className="small" style={{ marginTop: 12 }}>
          WhatsApp: +{phone}
        </div>
      </div>
    </div>
  );
}
<div className="small" style={{ marginTop: 8 }}>
  Instagram:{" "}
  <a
    href="https://instagram.com/YOURINSTAGRAM"
    target="_blank"
    rel="noreferrer"
    style={{ fontWeight: 700 }}
  >
    @YOURINSTAGRAM
  </a>
</div>
