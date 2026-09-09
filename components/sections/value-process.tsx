import { processSteps, values } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { OrbitalCurve } from "@/components/shared/orbital-curve";

export function WhyUs() {
  return (
    <section id="tentang" className="why-us">
      <Container>
        <div className="why-intro">
          <SectionHeading
            eyebrow="Kenapa kami"
            title={
              <>
                Bukan sekadar website yang <em>terlihat bagus.</em>
              </>
            }
          />
          <p>
            Kami membangun website yang cepat, mudah digunakan, scalable, dan
            siap mendukung pertumbuhan bisnis.
          </p>
        </div>
        <div className="value-list">
          {values.map((value) => (
            <article key={value.number}>
              <span>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Metrics() {
  return (
    <section className="metrics">
      <Container>
        <p className="metrics-statement">
          Setiap project dimulai dengan memahami <em>masalah</em>, bukan memilih
          template.
        </p>
        <div className="metrics-grid">
          <article>
            <strong>
              Cepat<span>.</span>
            </strong>
            <p>Performa menjadi bagian dari proses, bukan optimasi di akhir.</p>
          </article>
          <article>
            <strong>
              Custom<span>.</span>
            </strong>
            <p>Solusi mengikuti kebutuhan bisnis, bukan batasan template.</p>
          </article>
          <article>
            <strong>
              Siap<span>.</span>
            </strong>
            <p>
              Arsitektur disiapkan untuk digunakan, dipelihara, dan
              dikembangkan.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}

export function Process() {
  return (
    <section id="proses" className="process-section">
      <OrbitalCurve className="process-orbit" />
      <Container>
        <SectionHeading
          eyebrow="Proses kerja"
          title={
            <>
              Proses yang jelas.
              <br />
              <em>Tanpa drama.</em>
            </>
          }
          description="Setiap tahapan memiliki tujuan, output, dan keputusan yang jelas agar project tetap bergerak tanpa komunikasi yang rumit."
        />
        <div className="process-line">
          {processSteps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
