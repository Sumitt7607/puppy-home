import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  PawPrint,
  Heart,
  ShieldCheck,
  Stethoscope,
  Truck,
  Sparkles,
  HeartHandshake,
  Star,
  ChevronDown,
  MapPin,
  Mail,
  Check,
  ArrowRight,
  Search,
  HomeIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import logo from "@/assets/logo.png";
import heroPuppy from "@/assets/hero-puppy.jpg";
import puppy1 from "@/assets/puppy-1.jpg";
import puppy2 from "@/assets/puppy-2.jpg";
import puppy3 from "@/assets/puppy-3.jpg";
import puppy4 from "@/assets/puppy-4.jpg";
import breedGolden from "@/assets/breed-golden.jpg";
import breedLab from "@/assets/breed-labrador.jpg";
import breedShepherd from "@/assets/breed-shepherd.jpg";
import breedShihtzu from "@/assets/breed-shihtzu.jpg";
import breedPug from "@/assets/breed-pug.jpg";
import breedBeagle from "@/assets/breed-beagle.jpg";
import breedHusky from "@/assets/breed-husky.jpg";
import breedPom from "@/assets/breed-pomeranian.jpg";
import breedMaltipoo from "@/assets/breed-maltipoo.png";
import breedGoldenFixed from "@/assets/breed-golden-fixed.png";
import breedTibetanMastiff from "@/assets/breed-tibetan-mastiff.png";
import breedBichonFrise from "@/assets/breed-bichon-frise.png";
import breedToyPoodle from "@/assets/breed-toy-poodle.png";
import breedMaltese from "@/assets/breed-maltese.png";
import breedFrenchBulldog from "@/assets/breed-french-bulldog.png";
import breedDachshund from "@/assets/breed-dachshund.jpg";
import breedCockerSpaniel from "@/assets/breed-cocker-spaniel.jpg";
import breedLabradorNew from "@/assets/breed-labrador-new.jpg";
import breedCavalier from "@/assets/breed-cavalier.png";
import breedRottweiler from "@/assets/breed-rottweiler.png";
import breedBlackGermanShepherd from "@/assets/breed-black-german-shepherd.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonial-8.jpg";
import testimonial9 from "@/assets/testimonial-9.jpg";
import testimonial10 from "@/assets/testimonial-10.jpg";

const PHONE = "+91 92051 22992";
const PHONE_TEL = "+919205122992";
const WHATSAPP = "https://wa.me/919205122992";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Puppy House — Premium Puppies in Delhi NCR" },
      {
        name: "description",
        content:
          "The Puppy House offers healthy, vaccinated, vet-checked puppies in Delhi NCR. Find your perfect companion — Golden Retriever, Labrador, Husky, Shih Tzu and more. Home delivery available.",
      },
      { property: "og:title", content: "The Puppy House — Premium Puppies in Delhi NCR" },
      {
        property: "og:description",
        content:
          "Healthy, vaccinated, playful puppies raised with love. Trusted puppy provider in Delhi NCR. WhatsApp +91 92051 22992.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/* -------------------------------- Helpers --------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <PawPrint className="h-3.5 w-3.5 text-gold" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}

/* --------------------------------- Header --------------------------------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Puppies", href: "#puppies" },
    { label: "Breeds", href: "#breeds" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div
          className={`flex items-center justify-between gap-2 rounded-full px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-6 sm:py-2.5 ${
            scrolled ? "glass-strong shadow-card" : "glass"
          }`}
        >
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--sky)]/30 to-[color:var(--gold)]/30 sm:h-10 sm:w-10 sm:rounded-2xl">
              <img src={logo} alt="" width={28} height={28} className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-sm font-bold text-primary sm:text-base lg:text-lg">
                The Puppy House
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
                Delhi NCR
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-primary/80 transition hover:bg-white/60 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden h-9 items-center gap-1.5 rounded-full bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-card transition hover:scale-[1.03] sm:inline-flex sm:h-10 sm:px-4 sm:text-sm"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Call
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[color:var(--whatsapp)] px-3 text-xs font-semibold text-white shadow-card transition hover:scale-[1.03] sm:h-10 sm:px-4 sm:text-sm"
            >
              <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth, h = window.innerHeight;
      setMouse({ x: (e.clientX / w - 0.5) * 2, y: (e.clientY / h - 0.5) * 2 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  const { scrollY } = useScroll();
  const yBlob = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden bg-hero pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pt-44"
    >
      {/* Mesh + blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ y: yBlob }}
          className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-mesh opacity-50 blur-3xl animate-mesh"
        />
        <motion.div
          style={{ y: yBlob }}
          className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-[color:var(--sky)]/40 to-[color:var(--gold)]/40 blur-3xl animate-drift"
        />
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--primary)_8%,transparent)_1px,transparent_0)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Floating paws */}
      <FloatingPaws />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-primary shadow-card"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--sky)] text-white">
              🐾
            </span>
            Trusted Puppy Provider in Delhi NCR
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl"
          >
            Find Your <span className="text-gradient">Perfect Puppy</span>{" "}
            <span className="relative inline-block">
              Companion
              <svg
                viewBox="0 0 300 18"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold"
                fill="none"
              >
                <path
                  d="M2 13 C 80 2, 220 2, 298 13"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Healthy, vaccinated, playful puppies raised with love and care.
            Discover your new best friend today with The Puppy House.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#puppies"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-card transition hover:scale-[1.03]"
            >
              View Puppies
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 text-sm font-semibold text-white shadow-card transition hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex h-12 items-center gap-2 rounded-full glass-strong px-6 text-sm font-semibold text-primary shadow-card transition hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary/80"
          >
            {[
              "Vaccinated",
              "Vet Checked",
              "Healthy & Active",
              "Home Delivery",
              "Delhi NCR",
            ].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-[color:var(--whatsapp)]" />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 gap-3 sm:max-w-md"
          >
            {[
              { k: "500+", v: "Happy Families" },
              { k: "100%", v: "Healthy Puppies" },
              { k: "24/7", v: "Support" },
            ].map((s) => (
              <div
                key={s.v}
                className="glass rounded-2xl px-3 py-4 text-center shadow-card"
              >
                <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                  {s.k}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          style={{
            transform: reduce ? undefined : `translate3d(${mouse.x * -10}px, ${mouse.y * -10}px, 0)`,
            transition: "transform 0.25s ease-out",
          }}
        >
          {/* Glow ring */}
          <div className="absolute inset-0 -z-10 mx-auto h-full w-full">
            <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-to-br from-[color:var(--sky)]/40 via-[color:var(--gold)]/30 to-transparent blur-3xl" />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] glass-strong shadow-card animate-float">
            <img
              src={heroPuppy}
              alt="Happy golden retriever puppy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
          </div>

          {/* Floating glass cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="absolute -left-3 top-10 w-44 rounded-2xl glass-strong p-3 shadow-card animate-float-slow sm:-left-6"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--whatsapp)]/15 text-[color:var(--whatsapp)]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="text-xs">
                <div className="font-bold text-primary">Vet Verified</div>
                <div className="text-muted-foreground">Health certified</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute -right-2 top-1/3 w-44 rounded-2xl glass-strong p-3 shadow-card animate-float sm:-right-6"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--gold)]/20 text-gold">
                <Star className="h-5 w-5 fill-current" />
              </span>
              <div className="text-xs">
                <div className="font-bold text-primary">4.9 / 5 Rating</div>
                <div className="text-muted-foreground">From 500+ families</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="absolute -bottom-6 left-6 w-56 rounded-2xl glass-strong p-3 shadow-card animate-float-slow sm:left-10"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--sky)]/20 text-[color:var(--primary)]">
                <Truck className="h-5 w-5" />
              </span>
              <div className="text-xs">
                <div className="font-bold text-primary">Home Delivery</div>
                <div className="text-muted-foreground">Across Delhi NCR</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingPaws() {
  const paws = [
    { l: "8%", t: "20%", s: 28, d: 0 },
    { l: "92%", t: "30%", s: 22, d: 1 },
    { l: "18%", t: "70%", s: 34, d: 2 },
    { l: "78%", t: "78%", s: 26, d: 1.5 },
    { l: "50%", t: "12%", s: 18, d: 0.5 },
    { l: "40%", t: "85%", s: 20, d: 2.5 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {paws.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ delay: p.d * 0.2, duration: 1 }}
          className="absolute text-primary/30 animate-float"
          style={{
            left: p.l,
            top: p.t,
            animationDelay: `${p.d}s`,
            animationDuration: `${6 + i}s`,
          }}
        >
          <PawPrint style={{ width: p.s, height: p.s }} />
        </motion.div>
      ))}
    </div>
  );
}

/* ----------------------------- Featured Puppies --------------------------- */

const puppies = [
  {
    breed: "Golden Retriever",
    img: breedGoldenFixed,
    desc: "Affectionate, intelligent, and loyal — the perfect family companion.",
  },
  {
    breed: "Labrador",
    img: breedLabradorNew,
    desc: "Outgoing, playful, and gentle — excellent with children.",
  },
  {
    breed: "Shih Tzu",
    img: breedShihtzu,
    desc: "Charming, lively, and affectionate — perfect lap dog for apartments.",
  },
  {
    breed: "Pomeranian",
    img: breedPom,
    desc: "Tiny, fluffy, and full of personality — a lively companion.",
  },
  {
    breed: "German Shepherd",
    img: breedShepherd,
    desc: "Confident, courageous, and highly trainable loyal protectors.",
  },
  {
    breed: "Beagle",
    img: breedBeagle,
    desc: "Curious, friendly, and merry — a great active family pet.",
  },
  {
    breed: "Siberian Husky",
    img: breedHusky,
    desc: "Stunningly beautiful, social, and energetic adventure companion.",
  },
  {
    breed: "Pug",
    img: breedPug,
    desc: "Charming, mischievous, and loving small companion.",
  },
  {
    breed: "French Bulldog",
    img: breedFrenchBulldog,
    desc: "Playful, adaptable, and low-maintenance — ideal for city living.",
  },
  {
    breed: "Maltese",
    img: breedMaltese,
    desc: "Gentle, trusting, and devoted — a glamorous yet friendly companion.",
  },
  {
    breed: "Dachshund",
    img: breedDachshund,
    desc: "Clever, curious, and spunky — a bold little dog with a big heart.",
  },
  {
    breed: "Cocker Spaniel",
    img: breedCockerSpaniel,
    desc: "Sweet, gentle, and eager to please — wonderful with families.",
  },
  {
    breed: "Maltipoo",
    img: breedMaltipoo,
    desc: "Hypoallergenic, loving, and super intelligent — a joyful companion.",
  },
  {
    breed: "Tibetan Mastiff",
    img: breedTibetanMastiff,
    desc: "Majestic, loyal, and powerful — a noble guardian breed with a lion-like mane.",
  },
  {
    breed: "Bichon Frisé",
    img: breedBichonFrise,
    desc: "Cheerful, gentle, and hypoallergenic — a fluffy cloud of joy and affection.",
  },
  {
    breed: "Toy Poodle",
    img: breedToyPoodle,
    desc: "Brilliant, elegant, and hypoallergenic — one of the most intelligent breeds.",
  },
  {
    breed: "Cavalier King Charles Spaniel",
    img: breedCavalier,
    desc: "Gentle, graceful, and sweet-tempered — the ultimate companion lap dog.",
  },
  {
    breed: "Rottweiler",
    img: breedRottweiler,
    desc: "Loyal, loving, and confident guardian — a devoted family protector.",
  },
  {
    breed: "Black German Shepherd",
    img: breedBlackGermanShepherd,
    desc: "Strikingly beautiful, intelligent, and alert — a rare and loyal companion.",
  },
];

function FeaturedPuppies() {
  return (
    <section id="puppies" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Available Now"
          title={
            <>
              Meet Our <span className="text-gradient">Adorable Puppies</span>
            </>
          }
          subtitle="Each puppy is hand-raised, fully vaccinated, and ready to become part of your family."
        />

        <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {puppies.map((p, i) => (
            <motion.article
              key={p.breed}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass-strong shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_color-mix(in_oklab,var(--sky)_45%,transparent)]"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.breed}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
              <div className="p-3">
                <h3 className="font-display text-sm font-bold text-primary leading-tight sm:text-base">
                  {p.breed}
                </h3>
                <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground sm:text-xs">{p.desc}</p>
                <div className="mt-2.5 grid grid-cols-2 gap-1">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex h-7 items-center justify-center gap-0.5 rounded-full bg-primary text-[10px] font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    <Phone className="h-2.5 w-2.5" /> Call
                  </a>
                  <a
                    href={`${WHATSAPP}?text=Hi%20I'm%20interested%20in%20a%20${encodeURIComponent(p.breed)}%20puppy`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-7 items-center justify-center gap-0.5 rounded-full bg-[color:var(--whatsapp)] text-[10px] font-semibold text-white transition hover:opacity-90"
                  >
                    <MessageCircle className="h-2.5 w-2.5" /> Chat
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Breeds ---------------------------------- */

const breeds = [
  { name: "Golden Retriever", img: breedGoldenFixed, desc: "Friendly, intelligent, devoted family companions." },
  { name: "Labrador", img: breedGolden, desc: "Outgoing, even-tempered, and gentle with kids." },
  { name: "German Shepherd", img: breedShepherd, desc: "Confident, courageous and incredibly loyal." },
  { name: "Shih Tzu", img: breedShihtzu, desc: "Affectionate lap dog — perfect for apartments." },
  { name: "Pug", img: breedPug, desc: "Charming, mischievous, and full of personality." },
  { name: "Beagle", img: breedBeagle, desc: "Curious, friendly, and excellent with families." },
  { name: "Siberian Husky", img: breedHusky, desc: "Energetic, social, and strikingly beautiful." },
  { name: "Pomeranian", img: breedPom, desc: "Tiny, fluffy, and bursting with confidence." },
  { name: "Maltipoo", img: breedMaltipoo, desc: "Playful, hypoallergenic, and extremely affectionate." },
  { name: "Cavalier King Charles Spaniel", img: breedCavalier, desc: "Gentle, graceful, and sweet-tempered companion." },
  { name: "Rottweiler", img: breedRottweiler, desc: "Loyal, loving, and confident family guardian." },
  { name: "Black German Shepherd", img: breedBlackGermanShepherd, desc: "Intelligent, protective, and striking all-black coat." },
];

function Breeds() {
  return (
    <section id="breeds" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-cream" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Popular Breeds"
          title={
            <>
              Discover Your <span className="text-gold-gradient">Favourite Breed</span>
            </>
          }
          subtitle="From cuddly companions to active adventurers — find the breed that matches your lifestyle."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {breeds.map((b, i) => (
            <motion.div
              key={b.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.06 }}
              className="group relative overflow-hidden rounded-3xl glass-strong shadow-card transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={b.img}
                  alt={b.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-xl font-bold">{b.name}</h3>
                  <p className="mt-1 text-xs text-white/85">{b.desc}</p>
                  <a
                    href={`${WHATSAPP}?text=Hi%20I'm%20interested%20in%20a%20${encodeURIComponent(b.name)}%20puppy`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white underline-offset-4 hover:underline"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Why Choose Us ----------------------------- */

const features = [
  { icon: Heart, title: "Healthy Puppies", text: "Hand-raised with love, nutrition, and daily care from day one." },
  { icon: Stethoscope, title: "Vet Checked", text: "Every puppy is examined and certified by licensed veterinarians." },
  { icon: ShieldCheck, title: "Fully Vaccinated", text: "Age-appropriate vaccinations and deworming records included." },
  { icon: Truck, title: "Home Delivery", text: "Safe, comfortable delivery across all of Delhi NCR." },
  { icon: Sparkles, title: "Expert Guidance", text: "Breed selection, training tips, and nutrition advice from experts." },
  { icon: HeartHandshake, title: "Lifetime Support", text: "We stay by your side long after your puppy comes home." },
];

function WhyChoose() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Why The Puppy House"
          title={
            <>
              Trusted by <span className="text-gradient">Delhi NCR Families</span>
            </>
          }
          subtitle="We go beyond selling puppies — we build lifelong relationships."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-7 shadow-card transition hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[color:var(--sky)]/30 to-[color:var(--gold)]/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--sky)]/20 to-[color:var(--gold)]/25 text-primary shadow-card">
                <f.icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-bold text-primary">
                {f.title}
              </h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------ */

const testimonials = [
  {
    name: "Rahul Verma",
    location: "Dwarka, Delhi",
    image: testimonial1,
    rating: 5,
    text: "We brought our adorable Toy Poodle home last month. He is healthy, playful, and has quickly become the heart of our family. The team provided full vaccination records and guide charts.",
  },
  {
    name: "Vikram Singh",
    location: "Sohna Road, Gurgaon",
    image: testimonial2,
    rating: 5,
    text: "Getting a Siberian Husky in Delhi NCR was a big decision, but the guidance from the staff was outstanding. The puppy is extremely active, vet-certified, and a bundle of joy.",
  },
  {
    name: "Amit Sharma",
    location: "Sector 62, Noida",
    image: testimonial3,
    rating: 5,
    text: "Professional service, healthy Shih Tzu puppy, and seamless home delivery. They helped us understand the initial diet, vaccination scheduling, and basic puppy training tips.",
  },
  {
    name: "Kabir, Karan & Ryan",
    location: "Vasant Kunj, South Delhi",
    image: testimonial4,
    rating: 5,
    text: "Highly recommend their services. Our new Labrador puppy is robust, active, and fully vet-checked. The lifetime guidance support they offer makes a massive difference.",
  },
  {
    name: "Anjali Gupta",
    location: "Noida, UP",
    image: testimonial5,
    rating: 5,
    text: "Our Beagle puppy is so friendly and intelligent. The vaccine tracker, diet chart, and constant video updates of the puppy before delivery built complete trust.",
  },
  {
    name: "The Mehta Family",
    location: "Rohini, Delhi",
    image: testimonial6,
    rating: 5,
    text: "We got our adorable little Dachshund from The Puppy House and the entire experience was seamless. The puppy arrived healthy, well-fed, and already socialised. Our whole family is in love!",
  },
  {
    name: "Priya Kapoor",
    location: "Lajpat Nagar, Delhi",
    image: testimonial7,
    rating: 5,
    text: "I fell in love with my fluffy black Pomeranian the moment I held him! The Puppy House team was so warm and patient with all my questions. He came with all vaccination papers and a full diet plan.",
  },
  {
    name: "Arjun Malhotra",
    location: "Greater Kailash, Delhi",
    image: testimonial8,
    rating: 5,
    text: "My tiny Toy Poodle is absolutely brilliant and hypoallergenic — perfect for our apartment. The staff helped me choose the right breed for my lifestyle. Couldn't be happier with this little guy!",
  },
  {
    name: "Shreya Nair",
    location: "Janakpuri, Delhi",
    image: testimonial9,
    rating: 5,
    text: "My Chow Chow puppy is the fluffiest, most regal dog I've ever seen. The Puppy House made the process so smooth — transparent pricing, healthy pup, and genuine post-adoption support.",
  },
  {
    name: "Manav Bhatia",
    location: "Pitampura, Delhi",
    image: testimonial10,
    rating: 5,
    text: "Got my Golden Retriever from The Puppy House and he is everything I hoped for — gentle, playful, and absolutely healthy. The team followed up even after delivery to ensure he was settling in well.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero opacity-70" />
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle
          center
          eyebrow="Happy Families"
          title={
            <>
              Loved by <span className="text-gradient">Real Pet Parents</span>
            </>
          }
        />

        <div className="mt-14 relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={t.name} className="pl-2 md:pl-4 basis-full">
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.1 }}
                    className="rounded-3xl overflow-hidden glass-strong shadow-card"
                  >
                    {/* Mobile: stacked layout, Desktop: side-by-side */}
                    <div className="flex flex-col sm:flex-row">
                      {/* Image - fixed height on mobile, auto on desktop */}
                      <div className="relative w-full sm:w-[280px] md:w-[340px] shrink-0">
                        <div className="relative h-60 sm:h-full min-h-[280px] overflow-hidden">
                          <img
                            src={t.image}
                            alt={`Happy customer ${t.name}`}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover object-top"
                          />
                          {/* Gradient overlay at bottom on mobile */}
                          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent sm:hidden" />
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-10">
                        {/* Stars */}
                        <div className="flex gap-1 text-gold mb-5">
                          {Array.from({ length: t.rating }).map((_, j) => (
                            <Star key={j} className="h-5 w-5 fill-current" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-base sm:text-lg leading-relaxed text-primary/90 font-medium italic mb-6">
                          &ldquo;{t.text}&rdquo;
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                            <img
                              src={t.image}
                              alt={t.name}
                              className="h-full w-full object-cover object-top"
                            />
                          </div>
                          <div>
                            <div className="font-display text-base font-bold text-primary">{t.name}</div>
                            <div className="text-xs font-medium text-muted-foreground">{t.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 text-primary border-primary/20 bg-white/95 hover:bg-primary hover:text-white shadow-md transition-all duration-200" />
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-full bg-primary/20"
                  />
                ))}
              </div>
              <CarouselNext className="static translate-y-0 h-11 w-11 text-primary border-primary/20 bg-white/95 hover:bg-primary hover:text-white shadow-md transition-all duration-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Gallery -------------------------------- */

function Gallery() {
  const imgs = [
    { src: gallery1, h: "row-span-2" },
    { src: puppy1, h: "" },
    { src: gallery2, h: "row-span-2" },
    { src: gallery4, h: "" },
    { src: puppy3, h: "" },
    { src: gallery3, h: "row-span-2 col-span-2" },
    { src: puppy4, h: "" },
    { src: puppy2, h: "" },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Puppy Gallery"
          title={
            <>
              Moments That <span className="text-gold-gradient">Melt Hearts</span>
            </>
          }
        />
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {imgs.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.06, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-3xl shadow-card ${g.h}`}
            >
              <img
                src={g.src}
                alt="Puppy moment"
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- About --------------------------------- */

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-card animate-float-slow">
            <img src={gallery3} alt="Happy family with puppy" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-2 w-52 rounded-3xl glass-strong p-4 shadow-card sm:-right-6">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--gold)]/30 to-[color:var(--sky)]/30 text-gold">
                <Heart className="h-6 w-6 fill-current" />
              </span>
              <div>
                <div className="font-display text-2xl font-bold text-gradient">8+ Yrs</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Of Pure Love
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionTitle
            center={false}
            eyebrow="Our Story"
            title={
              <>
                Passionate About Finding{" "}
                <span className="text-gradient">Loving Homes</span>
              </>
            }
            subtitle="At The Puppy House, we connect loving families with healthy, happy, and well-cared-for puppies. Every puppy receives proper care, vaccinations, health checks, and socialisation before joining its forever home."
          />
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { k: "500+", v: "Families" },
              { k: "20+", v: "Breeds" },
              { k: "100%", v: "Healthy" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl glass-strong p-4 text-center shadow-card">
                <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 text-sm font-semibold text-white shadow-card transition hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" /> Chat with Us
            </a>
            <a
              href="#puppies"
              className="inline-flex h-12 items-center gap-2 rounded-full glass-strong px-6 text-sm font-semibold text-primary shadow-card"
            >
              Browse Puppies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Process -------------------------------- */

const steps = [
  { icon: Search, title: "Browse Puppies", text: "Explore our curated, available litters." },
  { icon: MessageCircle, title: "Contact Us", text: "Chat on WhatsApp or call for instant help." },
  { icon: HomeIcon, title: "Meet Your Puppy", text: "Visit us or get videos and live updates." },
  { icon: HeartHandshake, title: "Take Puppy Home", text: "Safe home delivery with full care kit." },
];

function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-cream to-background" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Adoption Process"
          title={
            <>
              Four <span className="text-gradient">Simple Steps</span> to Joy
            </>
          }
        />
        <div className="relative mt-16 grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-3xl glass-strong shadow-card">
                <s.icon className="h-9 w-9 text-primary" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--sky)] font-display text-xs font-bold text-white shadow-card">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

const faqs = [
  { q: "Are your puppies vaccinated?", a: "Yes — every puppy receives age-appropriate vaccinations and deworming. You'll receive complete vet records when you take your puppy home." },
  { q: "Do you offer home delivery?", a: "Absolutely. We provide safe, comfortable home delivery across all of Delhi NCR — Delhi, Gurgaon, Noida, Ghaziabad and Faridabad." },
  { q: "Can I visit before booking?", a: "Of course! You're welcome to visit, meet the puppies and our team before making any decision. Just book a time via WhatsApp." },
  { q: "What documents are provided?", a: "Every puppy comes with vaccination records, deworming history, a diet chart, breed information and ongoing support." },
  { q: "How do I reserve a puppy?", a: "Reach us on WhatsApp at +91 92051 22992 or call us. A small booking amount confirms your puppy until delivery." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle
          eyebrow="Questions"
          title={
            <>
              Frequently <span className="text-gradient">Asked</span>
            </>
          }
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl glass-strong shadow-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-primary sm:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Contact -------------------------------- */

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Get In Touch"
          title={
            <>
              Bring Home a <span className="text-gradient">New Best Friend</span>
            </>
          }
          subtitle="We're here 24/7 to help you find your perfect puppy."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const msg = `Hi! I'm ${fd.get("name")}. ${fd.get("message") || "I'd like to know more about your puppies."}%0APhone: ${fd.get("phone")}%0AEmail: ${fd.get("email")}`;
              window.open(`${WHATSAPP}?text=${msg}`, "_blank");
            }}
            className="rounded-3xl glass-strong p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Your Name" placeholder="Riya Sharma" required />
              <Field name="phone" label="Phone Number" placeholder="+91 ..." type="tel" required />
            </div>
            <div className="mt-4">
              <Field name="email" label="Email" placeholder="you@email.com" type="email" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary/70">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us which breed you're interested in..."
                className="w-full rounded-2xl border border-border/60 bg-white/60 px-4 py-3 text-sm text-primary outline-none transition focus:border-[color:var(--sky)] focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-card transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> Send via WhatsApp
            </button>
          </motion.form>

          <div className="space-y-4">
            <ContactCard
              icon={Phone}
              title="Call Us"
              value={PHONE}
              href={`tel:${PHONE_TEL}`}
              tint="gold"
            />
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              value={PHONE}
              href={WHATSAPP}
              tint="whatsapp"
              external
            />
            <ContactCard
              icon={MapPin}
              title="Head Office"
              value="Sector 56, Gurgaon, Haryana"
              tint="gold"
            />
            <ContactCard
              icon={MapPin}
              title="Service Area"
              value="Delhi NCR — Delhi, Gurgaon, Noida, Ghaziabad, Faridabad"
              tint="sky"
            />
            <div className="overflow-hidden rounded-3xl glass-strong shadow-card">
              <iframe
                title="Delhi NCR Map"
                src="https://www.google.com/maps?q=Delhi+NCR&output=embed"
                className="h-56 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 w-full rounded-full border border-border/60 bg-white/60 px-4 text-sm text-primary outline-none transition focus:border-[color:var(--sky)] focus:bg-white"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  tint,
  external,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
  tint: "gold" | "sky" | "whatsapp";
  external?: boolean;
}) {
  const tintClass = {
    gold: "from-[color:var(--gold)]/30 to-[color:var(--gold)]/10 text-gold",
    sky: "from-[color:var(--sky)]/30 to-[color:var(--sky)]/10 text-primary",
    whatsapp:
      "from-[color:var(--whatsapp)]/30 to-[color:var(--whatsapp)]/10 text-[color:var(--whatsapp)]",
  }[tint];

  const inner = (
    <div className="flex items-start gap-4 rounded-3xl glass-strong p-5 shadow-card transition hover:-translate-y-0.5">
      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${tintClass}`}>
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="mt-0.5 font-display text-lg font-semibold text-primary">{value}</div>
      </div>
    </div>
  );
  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}

/* ------------------------------ Floating CTAs ----------------------------- */

function FloatingCTAs() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call us"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--gold)]/80 text-white shadow-gold animate-pulse-ring-gold"
      >
        <Phone className="h-6 w-6 transition group-hover:scale-110" />
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-glow animate-pulse-ring"
      >
        <MessageCircle className="h-6 w-6 transition group-hover:scale-110" />
      </a>
    </div>
  );
}

/* --------------------------------- Footer --------------------------------- */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary to-[color:var(--primary)]/95 text-primary-foreground">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--sky)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                <img src={logo} alt="" width={32} height={32} className="h-8 w-8" />
              </span>
              <div>
                <div className="font-display text-xl font-bold">The Puppy House</div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                  Delhi NCR
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-white/75">
              The Puppy House — Delhi NCR's trusted destination for healthy,
              vaccinated, and well-cared-for puppies.
            </p>

          </div>

          <FooterCol
            title="Explore"
            links={[
              { label: "Puppies", href: "#puppies" },
              { label: "Breeds", href: "#breeds" },
              { label: "Gallery", href: "#" },
              { label: "About", href: "#about" },
            ]}
          />
          <FooterCol
            title="Breeds"
            links={[
              { label: "Golden Retriever", href: "#breeds" },
              { label: "Labrador", href: "#breeds" },
              { label: "Shih Tzu", href: "#breeds" },
              { label: "Husky", href: "#breeds" },
            ]}
          />
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {PHONE}
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> {PHONE}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Head Office:</div>
                  Sector 56, Gurgaon, Haryana
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@thepuppyhouse.in
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <span>© {new Date().getFullYear()} The Puppy House. All rights reserved.</span>
          <span className="inline-flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 fill-current text-[color:var(--gold)]" /> in Delhi NCR
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">
        {title}
      </h4>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------------------- Index --------------------------------- */

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <FeaturedPuppies />
      <Breeds />
      <WhyChoose />
      <Testimonials />
      <Gallery />
      <About />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTAs />
    </main>
  );
}
