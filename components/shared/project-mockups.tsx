type ProjectVariant = "management" | "commerce" | "dental";

function ManagementMockup() {
  return (
    <div className="project-stage management-stage" aria-hidden="true">
      <div className="stage-story">
        <small>Internal system</small>
        <i />
        <strong>
          Operasional
          <br />
          Lebih Ringkas
          <br />
          Dampak Lebih Besar
        </strong>
        <p>Satu platform untuk mengelola tim, project, dan operasional.</p>
        <span>01　/　03</span>
      </div>
      <div className="management-laptop">
        <div className="laptop-screen">
          <aside>
            <b>ManajemenSID</b>
            {[
              "Dashboard",
              "Projects",
              "Employees",
              "Attendance",
              "Leave",
              "Business Trips",
              "Approvals",
              "Documents",
              "Calendar",
              "Users",
              "Reports",
            ].map((item, index) => (
              <span className={index === 0 ? "active" : ""} key={item}>
                {item}
              </span>
            ))}
          </aside>
          <main>
            <header>
              <span className="dashboard-greeting">
                Good morning,
                <br />
                <b>Let&apos;s make today productive.</b>
              </span>
              <span>Raka Sanjaya　●</span>
            </header>
            <div className="dashboard-metrics">
              {[
                ["Total Projects", "24"],
                ["Active Employees", "156"],
                ["Pending Approvals", "18"],
                ["Monthly Reimbursement", "Rp 28.4M"],
              ].map(([label, value]) => (
                <article key={label}>
                  <small>{label}</small>
                  <strong>{value}</strong>
                  <i>+12% bulan ini</i>
                </article>
              ))}
            </div>
            <div className="dashboard-panels">
              <section>
                <b>Project Progress</b>
                <div className="dashboard-bars">
                  {[34, 58, 42, 76, 62, 88, 71, 93].map((height, index) => (
                    <i key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </section>
              <section>
                <b>Aktivitas Terbaru</b>
                {[
                  "Website diperbarui",
                  "Cuti disetujui",
                  "Laporan diterima",
                  "Project baru",
                ].map((item) => (
                  <span key={item}>●　{item}</span>
                ))}
              </section>
            </div>
            <div className="dashboard-table">
              <b>Project Berjalan</b>
              {[
                "Company Website",
                "Mobile App",
                "Internal ERP",
                "Client Dashboard",
              ].map((item, index) => (
                <span key={item}>
                  {item}
                  <i>Berjalan</i>
                  <em>{70 - index * 11}%</em>
                </span>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function CommerceMockup() {
  return (
    <div className="project-stage commerce-stage" aria-hidden="true">
      <nav>
        <b>⌁ AxeGear</b>
        <span>Shop　 Categories　 About　 Journal</span>
        <i>⌕　♡　▢</i>
      </nav>
      <div className="commerce-copy">
        <small>Premium outdoor gear</small>
        <strong>
          Perlengkapan untuk
          <br />
          Petualangan Lebih Besar
        </strong>
        <p>Produk pilihan untuk perjalanan yang lebih jauh.</p>
        <span className="mock-button">Belanja Sekarang　↗</span>
      </div>
      <div className="backpack">
        <i />
        <b />
        <span />
      </div>
      <footer>
        {["Backpacks", "Tents", "Apparel", "Accessories"].map((item) => (
          <span key={item}>
            <i />
            {item}
            <b>↗</b>
          </span>
        ))}
      </footer>
    </div>
  );
}

function DentalMockup() {
  return (
    <div className="project-stage dental-stage" aria-hidden="true">
      <nav>
        <b>Dentalyze AI</b>
        <span>Dashboard　 Patients　 Analysis　 Reports</span>
        <i>DR</i>
      </nav>
      <div className="dental-copy">
        <small>Health intelligence</small>
        <strong>
          Analisis Dental
          <br />
          Berbasis AI
        </strong>
        <p>
          Diagnosis lebih cepat dan akurat untuk layanan pasien yang lebih baik.
        </p>
        <span className="mock-button">Analisis Gambar</span>
      </div>
      <div className="xray">
        <i />
        <i />
        <span className="detect-one" />
        <span className="detect-two" />
      </div>
      <div className="detection-card">
        <b>Hasil Deteksi AI</b>
        <span>
          <i className="danger" />
          Karies<small>Confidence tinggi</small>
        </span>
        <span>
          <i className="warning" />
          Lesi Periapikal<small>Confidence sedang</small>
        </span>
        <span>
          <i className="safe" />
          Gigi Impaksi<small>Confidence tinggi</small>
        </span>
      </div>
      <footer>
        {[
          ["1.248", "Gambar dianalisis"],
          ["96,8%", "Akurasi deteksi"],
          ["320", "Pasien aktif"],
        ].map(([value, label]) => (
          <span key={label}>
            <b>{value}</b>
            <small>{label}</small>
          </span>
        ))}
      </footer>
    </div>
  );
}

export function ProjectMockup({ variant }: { variant: ProjectVariant }) {
  if (variant === "management") return <ManagementMockup />;
  if (variant === "commerce") return <CommerceMockup />;
  return <DentalMockup />;
}
