import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import heroTeam from "@/assets/hero-team.jpg";
import aboutPerson from "@/assets/about-person.jpg";
import goalPerson from "@/assets/goal-person.jpg";
import ctaPerson from "@/assets/cta-person.jpg";
import iconChecklist from "@/assets/icon-checklist.png";
import iconPresenter from "@/assets/icon-presenter.png";
import iconLab from "@/assets/icon-lab.png";
import iconLaptop from "@/assets/icon-laptop.png";
import iconTeam from "@/assets/icon-team.png";
import iconRocket from "@/assets/icon-rocket.png";
import iconCommunity from "@/assets/icon-community.png";
import iconNetwork from "@/assets/icon-network.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CekAset.com — Ekosistem Komunitas WELIPO" },
      {
        name: "description",
        content:
          "Platform eksklusif milik Member Ekosistem Komunitas WELIPO & Afiliasinya untuk memantau aset masing-masing.",
      },
    ],
  }),
});

function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl bg-card/95 px-6 py-3 shadow-sm backdrop-blur md:mx-6 lg:mx-auto">
        <a href="#" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L2 14.5l10 5 10-5-10-5z" />
            </svg>
          </span>
          CekAset.com
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#siapa" className="transition-colors hover:text-foreground">Siapa Kami</a>
          <a href="#tujuan" className="transition-colors hover:text-foreground">Tujuan</a>
          <a href="#fitur" className="transition-colors hover:text-foreground">Fitur</a>
          <a href="#visi" className="transition-colors hover:text-foreground">Visi & Misi</a>
        </nav>
        <a
          href="#"
          className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-brand-dark hover:shadow-lg"
        >
          Gabung Sekarang
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden">
      <img
        src={heroTeam}
        alt="Tim komunitas WELIPO"
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
        <h1 className="reveal-left max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Ekosistem Komunitas <br /> WELIPO
        </h1>
        <div className="reveal mt-8" style={{ animationDelay: "0.2s" }}>
          <a
            href="#siapa"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:bg-brand-dark hover:translate-x-1"
          >
            Cari Tahu Sekarang <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="siapa" className="bg-section-muted py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
        <div className="reveal-left rounded-3xl bg-card p-10 shadow-xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Siapa CekAset.com?</h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Platform Eksklusif milik Member Ekosistem Komunitas WELIPO &amp; Afiliasinya untuk
            memantau Aset masing-masing.
          </p>
        </div>
        <div className="reveal-right relative -mt-8 md:-mt-0 md:translate-y-6">
          <img
            src={aboutPerson}
            alt="Member memantau aset"
            loading="lazy"
            width={1200}
            height={800}
            className="rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function GoalSection() {
  return (
    <section id="tujuan" className="bg-section-muted pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
        <div className="reveal-left">
          <img
            src={goalPerson}
            alt="Member memikirkan tujuan"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-3xl object-cover shadow-xl"
          />
        </div>
        <div className="reveal-right rounded-3xl bg-card p-10 shadow-xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Tujuan Platform ini ?</h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>Memudahkan Member untuk mengetahui kondisi Aset terkini</li>
            <li>Bisa melakukan kalkulasi sederhana berapa potensi kekayaan bulanan yang bisa dihasilkan</li>
            <li>Sebagai gambaran peningkatan Treasury Anggota dalam kurun waktu tertentu</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

type Feature = { icon: string; title: string };
function FeatureCard({ icon, title, delay }: Feature & { delay: number }) {
  return (
    <div
      className="reveal hover-lift flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-md"
      style={{ animationDelay: `${delay}s` }}
    >
      <img src={icon} alt="" loading="lazy" width={120} height={120} className="h-24 w-24 object-contain float-anim" />
      <p className="mt-4 text-sm font-medium text-foreground">{title}</p>
    </div>
  );
}

function FeaturesSection() {
  const features: Feature[] = [
    { icon: iconChecklist, title: "Aset yang sudah selesai" },
    { icon: iconChecklist, title: "Aset yang sedang berjalan" },
    { icon: iconPresenter, title: "Potensi Gain yang akan dihasilkan" },
    { icon: iconLab, title: "Realisasi Gain yang sudah diraih" },
    { icon: iconLaptop, title: "Kalkulasi gain pada periode tertentu" },
  ];
  return (
    <section id="fitur" className="bg-section-muted pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="reveal text-center text-2xl font-bold text-foreground md:text-3xl">Fitur Platform</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  const items = [
    { icon: iconTeam, title: "Meningkatkan TREASURY tiap Member" },
    { icon: iconRocket, title: 'Menciptakan "Mesin Uang" bagi Member' },
    { icon: iconCommunity, title: "Hadirkan Ekosistem positif dengan kemakmuran yang terus meningkat" },
    { icon: iconNetwork, title: "Menambah High Network diatas rata-rata" },
  ];
  return (
    <section id="visi" className="bg-section-muted pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="reveal text-center text-2xl font-bold text-foreground md:text-3xl">
          Visi &amp; Misi Komunitas WELIPO &amp; Afiliasinya
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="reveal hover-lift flex flex-col items-center rounded-2xl bg-card p-8 text-center shadow-md"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <img src={it.icon} alt="" loading="lazy" width={140} height={140} className="h-28 w-28 object-contain float-anim" />
              <p className="mt-4 text-sm font-medium text-foreground">{it.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-2">
        <div className="reveal-left text-primary-foreground">
          <h2 className="text-3xl font-bold md:text-4xl">Saatnya Bergabung dengan Kami!</h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
            Mulai pantau aset Anda dan tumbuhkan kekayaan bersama komunitas WELIPO.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-card px-5 py-3 text-sm font-medium text-brand transition-all hover:translate-x-1 hover:shadow-lg"
          >
            Gabung Sekarang <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="reveal-right flex justify-center md:justify-end">
          <img
            src={ctaPerson}
            alt="Member tersenyum"
            loading="lazy"
            width={1200}
            height={900}
            className="h-64 w-64 rounded-full object-cover shadow-2xl md:h-80 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-dark py-8 text-center text-sm text-primary-foreground/80">
      © {new Date().getFullYear()} CekAset.com — Ekosistem Komunitas WELIPO
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutSection />
      <GoalSection />
      <FeaturesSection />
      <VisionSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
