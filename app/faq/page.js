export default function FAQ() {
  return (
    <div className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
      <div className="card">
        <h1 className="h1" style={{ marginTop: 0 }}>FAQ</h1>

        <div className="card" style={{ marginTop: 16 }}>
          <div style={{ fontWeight: 800 }}>How do I order?</div>
          <p className="p">
            Go to the Zaatar Crisps product page and tap “Order via WhatsApp.” Choose your quantity and send the message. We will confirm your delivery details.
          </p>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 800 }}>What is the price?</div>
          <p className="p">
            AED 19.50 per pack. Bundle offer: Buy 4 packs for AED 60 (AED 15 per pack). The bundle discount is applied automatically when you select 4 or more.
          </p>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 800 }}>Where do you deliver?</div>
          <p className="p">
            Currently delivering in Dubai. UAE-wide delivery is coming soon.
          </p>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 800 }}>What are the ingredients?</div>
          <p className="p">
            You will find the exact ingredients listed on the product page, matching the packaging.
          </p>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 800 }}>Are there allergens?</div>
          <p className="p">
            Yes. Please check the Allergens section on the product page for the exact packaging wording.
          </p>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 800 }}>How are Healthy Crisps prepared?</div>
          <p className="p">
            Healthy Crisps is prepared in a licensed kitchen in the UAE and made in small batches.
          </p>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 800 }}>Do you have more flavors?</div>
          <p className="p">
            Yes. We are launching with Zaatar Crisps and more flavors are coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
