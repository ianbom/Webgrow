import { technologyGroups } from "@/data/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Technologies() { return <section className="technologies"><Container><div className="technology-intro"><SectionHeading eyebrow="Teknologi" title={<>Teknologi modern.<br /><em>Dipilih sesuai kebutuhan.</em></>} /><p>Kami memilih teknologi berdasarkan kebutuhan project, bukan mengikuti tren tanpa alasan.</p></div><div className="technology-groups">{technologyGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></Container></section>; }

export function Testimonial() { return <section className="testimonial"><Container><p className="eyebrow">Apa kata klien</p><blockquote>“Timnya tidak hanya mengerjakan apa yang kami minta, tetapi membantu kami menemukan solusi yang <em>lebih sederhana</em> dan lebih efektif.”</blockquote><div className="testimonial-person"><span>AR</span><div><strong>Andi Rahman</strong><small>Founder — Perusahaan Klien</small></div></div><p className="sample-note">Identitas testimonial merupakan data contoh dan dapat diganti melalui konfigurasi konten.</p></Container></section>; }
