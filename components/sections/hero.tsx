import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WebsiteMockup } from "@/components/shared/website-mockup";

export function Hero() {
  return <section className="relative isolate min-h-[940px] overflow-hidden bg-page pb-[70px] pt-[162px] max-[1100px]:min-h-0 max-[1100px]:pt-[142px] max-[640px]:pt-[122px] max-[640px]:pb-[66px]">
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-[655px] left-[48%] size-[1450px] rounded-full border border-[#aeb0aa70] max-[1100px]:bottom-[-810px] max-[1100px]:left-[30%] max-[640px]:bottom-[-420px] max-[640px]:left-[16%] max-[640px]:size-[760px]"><i className="absolute inset-[67px] rounded-full border-[96px] border-lime opacity-70 max-[640px]:inset-[37px] max-[640px]:border-[50px]" /><b className="absolute inset-[230px] rounded-full border border-[#aeb0aa55] max-[640px]:inset-[120px]" /></div>
    <Container className="grid grid-cols-[minmax(0,.9fr)_minmax(560px,1.1fr)] items-start gap-[4%] max-[1100px]:grid-cols-1 max-[1100px]:gap-[30px]">
      <div className="relative z-[2] pt-[34px] max-[1100px]:pt-0">
        <p className="m-0 text-[12px] font-bold uppercase tracking-[.12em] text-ink-soft">Software house untuk bisnis modern</p>
        <h1 className="my-[34px] max-w-[640px] font-display text-[clamp(60px,5.35vw,80px)] font-bold leading-[.91] tracking-[-.048em] max-[640px]:my-6 max-[640px]:text-[48px]">Kami merancang<br />dan membangun<br />website untuk<br />bisnis <span className="relative whitespace-nowrap text-ink after:absolute after:bottom-[.04em] after:left-[-.05em] after:right-[-.03em] after:-z-10 after:h-[.13em] after:rounded-[100%] after:bg-lime-strong after:content-[''] after:rotate-[-2deg]">bertumbuh.</span></h1>
        <p className="max-w-[555px] text-[19px] font-medium leading-[1.48] text-ink-soft max-[640px]:text-[17px]">Dari company profile dan landing page hingga aplikasi web dan e-commerce, kami membangun pengalaman digital yang cepat, scalable, dan berorientasi konversi.</p>
        <div className="mt-[29px] flex flex-wrap gap-3 max-[640px]:grid max-[640px]:grid-cols-1"><Button href={siteConfig.whatsapp} arrow>Mulai Project</Button><Button href="#portofolio" variant="secondary">Lihat Portofolio</Button></div>
        <div className="mt-[57px] flex flex-wrap gap-x-[22px] gap-y-3 text-[10px] font-bold uppercase tracking-[.17em] text-muted max-[640px]:mt-[35px] max-[640px]:text-[8px]"><span>Next.js</span><span>Laravel</span><span>React</span><span>TypeScript</span><span>Docker</span></div>
        <div className="mt-[69px] flex items-center gap-[15px] text-[10px] font-semibold uppercase tracking-[.2em] text-[#777a74] before:h-[33px] before:w-px before:bg-ink before:content-[''] max-[1100px]:mt-[45px] max-[640px]:hidden">Scroll untuk melihat</div>
      </div>
      <div className="relative z-[1] grid min-h-[660px] place-items-start pt-[46px] max-[1100px]:min-h-[630px] max-[1100px]:place-items-center max-[1100px]:pt-0 max-[640px]:min-h-[330px] max-[640px]:pt-[13px]"><WebsiteMockup /><div className="absolute bottom-9 right-[-17px] flex gap-4 text-[10px] font-semibold uppercase leading-[1.45] tracking-[.2em] text-[#777a74] max-[1100px]:right-[4%] max-[640px]:hidden"><i className="mt-[9px] h-px w-9 bg-ink" />Ide<br />Website<br />Bisnis<br />Bertumbuh</div></div>
    </Container>
  </section>;
}
