export function WebsiteMockup({
  variant = "hero",
}: {
  variant?: "hero" | "commerce" | "dashboard" | "booking";
}) {
  if (variant === "commerce")
    return (
      <div className="mockup project-mockup commerce-mockup">
        <div className="mockup-top">
          <i />
          <i />
          <i />
          <span />
        </div>
        <div className="store-grid">
          <div className="store-copy">
            <b>
              Natural
              <br />
              setiap hari.
            </b>
            <small>Produk sederhana untuk keseharian.</small>
          </div>
          <div className="store-product" />
          <div className="store-product second" />
          <div className="store-product third" />
        </div>
      </div>
    );
  if (variant === "dashboard")
    return (
      <div className="mockup project-mockup dashboard-mockup">
        <div className="mockup-top">
          <i />
          <i />
          <i />
          <span />
        </div>
        <div className="dashboard-body">
          <aside>
            <b>◒</b>
            <i />
            <i />
            <i />
            <i />
          </aside>
          <main>
            <header>
              <strong>Ringkasan</strong>
              <small>September 2026</small>
            </header>
            <div className="metric-row">
              <b>Rp 24,8 jt</b>
              <b>+18,2%</b>
            </div>
            <div className="chart">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="data-lines">
              <span />
              <span />
              <span />
            </div>
          </main>
        </div>
      </div>
    );
  if (variant === "booking")
    return (
      <div className="mockup project-mockup booking-mockup">
        <div className="mockup-top">
          <i />
          <i />
          <i />
          <span />
        </div>
        <div className="booking-body">
          <div>
            <small>Tersedia hari ini</small>
            <b>
              Temukan jadwal
              <br />
              terbaik Anda.
            </b>
            <button>Pilih jadwal</button>
          </div>
          <div className="calendar">
            <span>September 2026</span>
            <div>
              {["S", "S", "R", "K", "J", "S", "M"].map((day, index) => (
                <i key={`${day}-${index}`}>{day}</i>
              ))}
            </div>
            <div className="days">
              12　13　14
              <br />
              15　16　17
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="mockup hero-mockup">
      <div className="mockup-top">
        <i />
        <i />
        <i />
        <span />
      </div>
      <div className="reference-screen">
        <div className="reference-nav">
          <b>Webgrow.</b>
          <span>Produk　Solusi　Harga　Resources⌄</span>
          <small>Masuk</small>
          <button>Mulai</button>
        </div>
        <div className="reference-content">
          <div className="reference-copy">
            <p>BUILT FOR BUSINESS</p>
            <h3>
              Produk digital untuk masa depan yang <em>lebih cerah.</em>
            </h3>
            <span>
              Kami membantu bisnis mengubah ide menjadi produk digital yang
              menghasilkan dampak nyata.
            </span>
            <div>
              <button>
                Mulai <b>↗</b>
              </button>
              <small>◉　Lihat video</small>
            </div>
            <footer>
              <b>Modern</b>
              <b>Scalable</b>
              <b>Purposeful</b>
            </footer>
          </div>
          <div className="reference-photo">
            <div className="photo-plant" />
            <div className="photo-room" />
            <div className="photo-copy">
              Website
              <br />
              <em>lebih</em>
              <br />
              bermakna.
            </div>
            <div className="photo-card">
              <strong>↗</strong>
              <span>
                Ide menjadi
                <br />
                dampak
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="phone-preview">
        <header>
          <b>Webgrow.</b>
          <span>☰</span>
        </header>
        <small>BUILT FOR BUSINESS</small>
        <strong>
          Produk digital untuk masa depan yang <em>lebih cerah.</em>
        </strong>
        <p>Kami membantu bisnis membangun produk digital yang relevan.</p>
        <button>Mulai　↗</button>
      </div>
    </div>
  );
}
