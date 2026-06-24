import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useTransform, r as useScroll, t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as Sparkles, a as Search, c as MessageCircle, d as Heart, f as HeartHandshake, g as ArrowLeft, h as ArrowRight, i as ShieldCheck, l as MapPin, m as Check, n as Stethoscope, o as Phone, p as ChevronDown, r as Star, s as PawPrint, t as Truck, u as Mail, v as House } from "../_libs/lucide-react.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Be07LYRW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var logo_default = "/assets/logo-C0-3IjOU.png";
var hero_puppy_default = "/assets/hero-puppy-DQ1X8xYi.jpg";
var puppy_1_default = "/assets/puppy-1-L9g7jrkv.jpg";
var puppy_2_default = "/assets/puppy-2-CnBJc2VM.jpg";
var puppy_3_default = "/assets/puppy-3-BVHvtEiq.jpg";
var puppy_4_default = "/assets/puppy-4-DfhSC-XH.jpg";
var breed_golden_default = "/assets/breed-golden-Dwny9R4D.jpg";
var breed_labrador_default = "/assets/breed-labrador-CVyiyJIk.jpg";
var breed_shepherd_default = "/assets/breed-shepherd-42FD9JMD.jpg";
var breed_shihtzu_default = "/assets/breed-shihtzu-B9SSRXHH.jpg";
var breed_pug_default = "/assets/breed-pug-C0tK1qMb.jpg";
var breed_beagle_default = "/assets/breed-beagle-B3VCVoMh.jpg";
var breed_husky_default = "/assets/breed-husky-C5gLhfy1.jpg";
var breed_pomeranian_default = "/assets/breed-pomeranian-ChRE3cE-.jpg";
var gallery_1_default = "/assets/gallery-1-CQNDRH2j.jpg";
var gallery_2_default = "/assets/gallery-2-C62eiXXP.jpg";
var gallery_3_default = "/assets/gallery-3-CoA8uiMD.jpg";
var gallery_4_default = "/assets/gallery-4-BWZmyr_H.jpg";
var testimonial_1_default = "/assets/testimonial-1-N-Eo420d.jpg";
var testimonial_2_default = "/assets/testimonial-2-Bk8F7_bg.jpg";
var testimonial_3_default = "/assets/testimonial-3-zWv_mSzO.jpg";
var testimonial_4_default = "/assets/testimonial-4-C91EVlHw.jpg";
var testimonial_5_default = "/assets/testimonial-5-BxfQZPiL.jpg";
var PHONE = "+91 92051 22992";
var PHONE_TEL = "+919205122992";
var WHATSAPP = "https://wa.me/919205122992";
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function SectionTitle({ eyebrow, title, subtitle, center = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: fadeUp,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		className: `max-w-3xl ${center ? "mx-auto text-center" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint, { className: "h-3.5 w-3.5 text-gold" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base text-muted-foreground sm:text-lg",
				children: subtitle
			})
		]
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-3 sm:px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center justify-between gap-2 rounded-full px-3 py-2 transition-all duration-500 sm:gap-4 sm:px-6 sm:py-2.5 ${scrolled ? "glass-strong shadow-card" : "glass"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex min-w-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--sky)]/30 to-[color:var(--gold)]/30 sm:h-10 sm:w-10 sm:rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "",
								width: 28,
								height: 28,
								className: "h-6 w-6 sm:h-7 sm:w-7"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-display text-sm font-bold text-primary sm:text-base lg:text-lg",
								children: "The Puppy House"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block",
								children: "Delhi NCR"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: [
							{
								label: "Puppies",
								href: "#puppies"
							},
							{
								label: "Breeds",
								href: "#breeds"
							},
							{
								label: "About",
								href: "#about"
							},
							{
								label: "Process",
								href: "#process"
							},
							{
								label: "Contact",
								href: "#contact"
							}
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: n.href,
							className: "rounded-full px-4 py-2 text-sm font-medium text-primary/80 transition hover:bg-white/60 hover:text-primary",
							children: n.label
						}, n.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 sm:gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "hidden h-9 items-center gap-1.5 rounded-full bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-card transition hover:scale-[1.03] sm:inline-flex sm:h-10 sm:px-4 sm:text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" }), " Call"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex h-9 items-center gap-1.5 rounded-full bg-[color:var(--whatsapp)] px-3 text-xs font-semibold text-white shadow-card transition hover:scale-[1.03] sm:h-10 sm:px-4 sm:text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden xs:inline sm:inline",
								children: "WhatsApp"
							})]
						})]
					})
				]
			})
		})
	});
}
function Hero() {
	const reduce = useReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const [mouse, setMouse] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		if (reduce) return;
		const onMove = (e) => {
			const w = window.innerWidth, h = window.innerHeight;
			setMouse({
				x: (e.clientX / w - .5) * 2,
				y: (e.clientY / h - .5) * 2
			});
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, [reduce]);
	const { scrollY } = useScroll();
	const yBlob = useTransform(scrollY, [0, 600], [0, 120]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative isolate overflow-hidden bg-hero pb-24 pt-32 sm:pb-32 sm:pt-40 lg:pt-44",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 -z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: { y: yBlob },
						className: "absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-mesh opacity-50 blur-3xl animate-mesh"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: { y: yBlob },
						className: "absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-[color:var(--sky)]/40 to-[color:var(--gold)]/40 blur-3xl animate-drift"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklab,var(--primary)_8%,transparent)_1px,transparent_0)] [background-size:32px_32px] opacity-40" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingPaws, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.05fr_1fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: "hidden",
					animate: "show",
					variants: { show: { transition: { staggerChildren: .1 } } },
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
							variants: fadeUp,
							className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-primary shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--sky)] text-white",
								children: "🐾"
							}), "Trusted Puppy Provider in Delhi NCR"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							variants: fadeUp,
							className: "mt-6 text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl",
							children: [
								"Find Your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Perfect Puppy"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									children: ["Companion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 300 18",
										className: "absolute -bottom-2 left-0 h-3 w-full text-gold",
										fill: "none",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M2 13 C 80 2, 220 2, 298 13",
											stroke: "currentColor",
											strokeWidth: "3",
											strokeLinecap: "round"
										})
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeUp,
							className: "mt-6 max-w-xl text-base text-muted-foreground sm:text-lg",
							children: "Healthy, vaccinated, playful puppies raised with love and care. Discover your new best friend today with The Puppy House."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#puppies",
									className: "group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-card transition hover:scale-[1.03]",
									children: ["View Puppies", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex h-12 items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 text-sm font-semibold text-white shadow-card transition hover:scale-[1.03]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp Now"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${PHONE_TEL}`,
									className: "inline-flex h-12 items-center gap-2 rounded-full glass-strong px-6 text-sm font-semibold text-primary shadow-card transition hover:scale-[1.03]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
										" Call ",
										PHONE
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
							variants: fadeUp,
							className: "mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary/80",
							children: [
								"Vaccinated",
								"Vet Checked",
								"Healthy & Active",
								"Home Delivery",
								"Delhi NCR"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[color:var(--whatsapp)]" }), t]
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							className: "mt-10 grid grid-cols-3 gap-3 sm:max-w-md",
							children: [
								{
									k: "500+",
									v: "Happy Families"
								},
								{
									k: "100%",
									v: "Healthy Puppies"
								},
								{
									k: "24/7",
									v: "Support"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl px-3 py-4 text-center shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl font-bold text-gradient sm:text-3xl",
									children: s.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
									children: s.v
								})]
							}, s.v))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .92
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .9,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "relative mx-auto w-full max-w-md lg:max-w-none",
					style: {
						transform: reduce ? void 0 : `translate3d(${mouse.x * -10}px, ${mouse.y * -10}px, 0)`,
						transition: "transform 0.25s ease-out"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 -z-10 mx-auto h-full w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-to-br from-[color:var(--sky)]/40 via-[color:var(--gold)]/30 to-transparent blur-3xl" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] overflow-hidden rounded-[2.5rem] glass-strong shadow-card animate-float",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_puppy_default,
								alt: "Happy golden retriever puppy",
								width: 1024,
								height: 1280,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								x: -30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								delay: .6,
								duration: .7
							},
							className: "absolute -left-3 top-10 w-44 rounded-2xl glass-strong p-3 shadow-card animate-float-slow sm:-left-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--whatsapp)]/15 text-[color:var(--whatsapp)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-primary",
										children: "Vet Verified"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: "Health certified"
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								x: 30
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								delay: .8,
								duration: .7
							},
							className: "absolute -right-2 top-1/3 w-44 rounded-2xl glass-strong p-3 shadow-card animate-float sm:-right-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--gold)]/20 text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 fill-current" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-primary",
										children: "4.9 / 5 Rating"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: "From 500+ families"
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: 1,
								duration: .7
							},
							className: "absolute -bottom-6 left-6 w-56 rounded-2xl glass-strong p-3 shadow-card animate-float-slow sm:left-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--sky)]/20 text-[color:var(--primary)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-primary",
										children: "Home Delivery"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground",
										children: "Across Delhi NCR"
									})]
								})]
							})
						})
					]
				})]
			})
		]
	});
}
function FloatingPaws() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 -z-10",
		children: [
			{
				l: "8%",
				t: "20%",
				s: 28,
				d: 0
			},
			{
				l: "92%",
				t: "30%",
				s: 22,
				d: 1
			},
			{
				l: "18%",
				t: "70%",
				s: 34,
				d: 2
			},
			{
				l: "78%",
				t: "78%",
				s: 26,
				d: 1.5
			},
			{
				l: "50%",
				t: "12%",
				s: 18,
				d: .5
			},
			{
				l: "40%",
				t: "85%",
				s: 20,
				d: 2.5
			}
		].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				scale: .5
			},
			animate: {
				opacity: .25,
				scale: 1
			},
			transition: {
				delay: p.d * .2,
				duration: 1
			},
			className: "absolute text-primary/30 animate-float",
			style: {
				left: p.l,
				top: p.t,
				animationDelay: `${p.d}s`,
				animationDuration: `${6 + i}s`
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PawPrint, { style: {
				width: p.s,
				height: p.s
			} })
		}, i))
	});
}
var puppies = [
	{
		breed: "Golden Retriever",
		img: breed_labrador_default,
		desc: "Affectionate, intelligent, and loyal — the perfect family companion."
	},
	{
		breed: "Labrador",
		img: breed_golden_default,
		desc: "Outgoing, playful, and gentle — excellent with children."
	},
	{
		breed: "Shih Tzu",
		img: breed_shihtzu_default,
		desc: "Charming, lively, and affectionate — perfect lap dog for apartments."
	},
	{
		breed: "Pomeranian",
		img: breed_pomeranian_default,
		desc: "Tiny, fluffy, and full of personality — a lively companion."
	},
	{
		breed: "German Shepherd",
		img: breed_shepherd_default,
		desc: "Confident, courageous, and highly trainable loyal protectors."
	},
	{
		breed: "Beagle",
		img: breed_beagle_default,
		desc: "Curious, friendly, and merry — a great active family pet."
	},
	{
		breed: "Siberian Husky",
		img: breed_husky_default,
		desc: "Stunningly beautiful, social, and energetic adventure companion."
	},
	{
		breed: "Pug",
		img: breed_pug_default,
		desc: "Charming, mischievous, and loving small companion."
	},
	{
		breed: "French Bulldog",
		img: puppy_1_default,
		desc: "Playful, adaptable, and low-maintenance — ideal for city living."
	},
	{
		breed: "Maltese",
		img: puppy_2_default,
		desc: "Gentle, trusting, and devoted — a glamorous yet friendly companion."
	},
	{
		breed: "Dachshund",
		img: puppy_3_default,
		desc: "Clever, curious, and spunky — a bold little dog with a big heart."
	},
	{
		breed: "Cocker Spaniel",
		img: puppy_4_default,
		desc: "Sweet, gentle, and eager to please — wonderful with families."
	}
];
function FeaturedPuppies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "puppies",
		className: "relative py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Available Now",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Meet Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Adorable Puppies"
				})] }),
				subtitle: "Each puppy is hand-raised, fully vaccinated, and ready to become part of your family."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
				children: puppies.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					variants: fadeUp,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: { delay: i * .06 },
					className: "group relative overflow-hidden rounded-2xl glass-strong shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_color-mix(in_oklab,var(--sky)_45%,transparent)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.breed,
							width: 400,
							height: 400,
							loading: "lazy",
							className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-sm font-bold text-primary leading-tight sm:text-base",
								children: p.breed
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-2 text-[11px] text-muted-foreground sm:text-xs",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 grid grid-cols-2 gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${PHONE_TEL}`,
									className: "inline-flex h-7 items-center justify-center gap-0.5 rounded-full bg-primary text-[10px] font-semibold text-primary-foreground transition hover:opacity-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-2.5 w-2.5" }), " Call"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `${WHATSAPP}?text=Hi%20I'm%20interested%20in%20a%20${encodeURIComponent(p.breed)}%20puppy`,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex h-7 items-center justify-center gap-0.5 rounded-full bg-[color:var(--whatsapp)] text-[10px] font-semibold text-white transition hover:opacity-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-2.5 w-2.5" }), " Chat"]
								})]
							})
						]
					})]
				}, p.breed))
			})]
		})
	});
}
var breeds = [
	{
		name: "Golden Retriever",
		img: breed_labrador_default,
		desc: "Friendly, intelligent, devoted family companions."
	},
	{
		name: "Labrador",
		img: breed_golden_default,
		desc: "Outgoing, even-tempered, and gentle with kids."
	},
	{
		name: "German Shepherd",
		img: breed_shepherd_default,
		desc: "Confident, courageous and incredibly loyal."
	},
	{
		name: "Shih Tzu",
		img: breed_shihtzu_default,
		desc: "Affectionate lap dog — perfect for apartments."
	},
	{
		name: "Pug",
		img: breed_pug_default,
		desc: "Charming, mischievous, and full of personality."
	},
	{
		name: "Beagle",
		img: breed_beagle_default,
		desc: "Curious, friendly, and excellent with families."
	},
	{
		name: "Siberian Husky",
		img: breed_husky_default,
		desc: "Energetic, social, and strikingly beautiful."
	},
	{
		name: "Pomeranian",
		img: breed_pomeranian_default,
		desc: "Tiny, fluffy, and bursting with confidence."
	}
];
function Breeds() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "breeds",
		className: "relative py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-cream via-background to-cream" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Popular Breeds",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Discover Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold-gradient",
					children: "Favourite Breed"
				})] }),
				subtitle: "From cuddly companions to active adventurers — find the breed that matches your lifestyle."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: breeds.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeUp,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: { delay: i % 4 * .06 },
					className: "group relative overflow-hidden rounded-3xl glass-strong shadow-card transition-all duration-500 hover:-translate-y-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: b.img,
								alt: b.name,
								width: 640,
								height: 640,
								loading: "lazy",
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-90" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5 text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold",
										children: b.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-white/85",
										children: b.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `${WHATSAPP}?text=Hi%20I'm%20interested%20in%20a%20${encodeURIComponent(b.name)}%20puppy`,
										target: "_blank",
										rel: "noreferrer",
										className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white underline-offset-4 hover:underline",
										children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})
						]
					})
				}, b.name))
			})]
		})]
	});
}
var features = [
	{
		icon: Heart,
		title: "Healthy Puppies",
		text: "Hand-raised with love, nutrition, and daily care from day one."
	},
	{
		icon: Stethoscope,
		title: "Vet Checked",
		text: "Every puppy is examined and certified by licensed veterinarians."
	},
	{
		icon: ShieldCheck,
		title: "Fully Vaccinated",
		text: "Age-appropriate vaccinations and deworming records included."
	},
	{
		icon: Truck,
		title: "Home Delivery",
		text: "Safe, comfortable delivery across all of Delhi NCR."
	},
	{
		icon: Sparkles,
		title: "Expert Guidance",
		text: "Breed selection, training tips, and nutrition advice from experts."
	},
	{
		icon: HeartHandshake,
		title: "Lifetime Support",
		text: "We stay by your side long after your puppy comes home."
	}
];
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Why The Puppy House",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Trusted by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Delhi NCR Families"
				})] }),
				subtitle: "We go beyond selling puppies — we build lifelong relationships."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: { delay: i * .06 },
					className: "group relative overflow-hidden rounded-3xl glass-strong p-7 shadow-card transition hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[color:var(--sky)]/30 to-[color:var(--gold)]/30 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--sky)]/20 to-[color:var(--gold)]/25 text-primary shadow-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "relative mt-5 font-display text-xl font-bold text-primary",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative mt-2 text-sm text-muted-foreground",
							children: f.text
						})
					]
				}, f.title))
			})]
		})
	});
}
var testimonials = [
	{
		name: "Rahul Verma",
		location: "Dwarka, Delhi",
		image: testimonial_1_default,
		rating: 5,
		text: "We brought our adorable Toy Poodle home last month. He is healthy, playful, and has quickly become the heart of our family. The team provided full vaccination records and guide charts."
	},
	{
		name: "Vikram Singh",
		location: "Sohna Road, Gurgaon",
		image: testimonial_2_default,
		rating: 5,
		text: "Getting a Siberian Husky in Delhi NCR was a big decision, but the guidance from the staff was outstanding. The puppy is extremely active, vet-certified, and a bundle of joy."
	},
	{
		name: "Amit Sharma",
		location: "Sector 62, Noida",
		image: testimonial_3_default,
		rating: 5,
		text: "Professional service, healthy Shih Tzu puppy, and seamless home delivery. They helped us understand the initial diet, vaccination scheduling, and basic puppy training tips."
	},
	{
		name: "Kabir, Karan & Ryan",
		location: "Vasant Kunj, South Delhi",
		image: testimonial_4_default,
		rating: 5,
		text: "Highly recommend their services. Our new Labrador puppy is robust, active, and fully vet-checked. The lifetime guidance support they offer makes a massive difference."
	},
	{
		name: "Anjali Gupta",
		location: "Noida, UP",
		image: testimonial_5_default,
		rating: 5,
		text: "Our Beagle puppy is so friendly and intelligent. The vaccine tracker, diet chart, and constant video updates of the puppy before delivery built complete trust."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-24 sm:py-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-hero opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				center: true,
				eyebrow: "Happy Families",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Loved by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Real Pet Parents"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
					opts: {
						align: "center",
						loop: true
					},
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
						className: "-ml-2 md:-ml-4",
						children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							className: "pl-2 md:pl-4 basis-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: fadeUp,
								initial: "hidden",
								whileInView: "show",
								viewport: {
									once: true,
									margin: "-60px"
								},
								transition: { delay: .1 },
								className: "rounded-3xl overflow-hidden glass-strong shadow-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative w-full sm:w-[280px] md:w-[340px] shrink-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative h-60 sm:h-full min-h-[280px] overflow-hidden",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: t.image,
												alt: `Happy customer ${t.name}`,
												loading: "lazy",
												className: "absolute inset-0 h-full w-full object-cover object-top"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent sm:hidden" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex gap-1 text-gold mb-5",
												children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 fill-current" }, j))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
												className: "text-base sm:text-lg leading-relaxed text-primary/90 font-medium italic mb-6",
												children: [
													"“",
													t.text,
													"”"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: t.image,
														alt: t.name,
														className: "h-full w-full object-cover object-top"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-display text-base font-bold text-primary",
													children: t.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs font-medium text-muted-foreground",
													children: t.location
												})] })]
											})
										]
									})]
								})
							})
						}, t.name))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static translate-y-0 h-11 w-11 text-primary border-primary/20 bg-white/95 hover:bg-primary hover:text-white shadow-md transition-all duration-200" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: testimonials.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-primary/20" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static translate-y-0 h-11 w-11 text-primary border-primary/20 bg-white/95 hover:bg-primary hover:text-white shadow-md transition-all duration-200" })
						]
					})]
				})
			})]
		})]
	});
}
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Puppy Gallery",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Moments That ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold-gradient",
					children: "Melt Hearts"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 lg:grid-cols-4 lg:gap-4",
				children: [
					{
						src: gallery_1_default,
						h: "row-span-2"
					},
					{
						src: puppy_1_default,
						h: ""
					},
					{
						src: gallery_2_default,
						h: "row-span-2"
					},
					{
						src: gallery_4_default,
						h: ""
					},
					{
						src: puppy_3_default,
						h: ""
					},
					{
						src: gallery_3_default,
						h: "row-span-2 col-span-2"
					},
					{
						src: puppy_4_default,
						h: ""
					},
					{
						src: puppy_2_default,
						h: ""
					}
				].map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						delay: i % 4 * .06,
						duration: .6
					},
					className: `group relative overflow-hidden rounded-3xl shadow-card ${g.h}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g.src,
						alt: "Puppy moment",
						loading: "lazy",
						className: "h-full w-full object-cover transition duration-700 group-hover:scale-110"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" })]
				}, i))
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					margin: "-80px"
				},
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-card animate-float-slow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: gallery_3_default,
						alt: "Happy family with puppy",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-6 -right-2 w-52 rounded-3xl glass-strong p-4 shadow-card sm:-right-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[color:var(--gold)]/30 to-[color:var(--sky)]/30 text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-6 w-6 fill-current" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl font-bold text-gradient",
							children: "8+ Yrs"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-wider text-muted-foreground",
							children: "Of Pure Love"
						})] })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					center: false,
					eyebrow: "Our Story",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Passionate About Finding",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Loving Homes"
						})
					] }),
					subtitle: "At The Puppy House, we connect loving families with healthy, happy, and well-cared-for puppies. Every puppy receives proper care, vaccinations, health checks, and socialisation before joining its forever home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-3 gap-3",
					children: [
						{
							k: "500+",
							v: "Families"
						},
						{
							k: "20+",
							v: "Breeds"
						},
						{
							k: "100%",
							v: "Healthy"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl glass-strong p-4 text-center shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-bold text-gradient",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[11px] uppercase tracking-wider text-muted-foreground",
							children: s.v
						})]
					}, s.v))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex h-12 items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 text-sm font-semibold text-white shadow-card transition hover:scale-[1.03]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Chat with Us"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#puppies",
						className: "inline-flex h-12 items-center gap-2 rounded-full glass-strong px-6 text-sm font-semibold text-primary shadow-card",
						children: "Browse Puppies"
					})]
				})
			] })]
		})
	});
}
var steps = [
	{
		icon: Search,
		title: "Browse Puppies",
		text: "Explore our curated, available litters."
	},
	{
		icon: MessageCircle,
		title: "Contact Us",
		text: "Chat on WhatsApp or call for instant help."
	},
	{
		icon: House,
		title: "Meet Your Puppy",
		text: "Visit us or get videos and live updates."
	},
	{
		icon: HeartHandshake,
		title: "Take Puppy Home",
		text: "Safe home delivery with full care kit."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "process",
		className: "relative py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background via-cream to-background" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Adoption Process",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Four ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Simple Steps"
					}),
					" to Joy"
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16 grid gap-6 lg:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" }), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: { delay: i * .1 },
					className: "relative text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto grid h-20 w-20 place-items-center rounded-3xl glass-strong shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-9 w-9 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--sky)] font-display text-xs font-bold text-white shadow-card",
								children: i + 1
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl font-bold text-primary",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.text
						})
					]
				}, s.title))]
			})]
		})]
	});
}
var faqs = [
	{
		q: "Are your puppies vaccinated?",
		a: "Yes — every puppy receives age-appropriate vaccinations and deworming. You'll receive complete vet records when you take your puppy home."
	},
	{
		q: "Do you offer home delivery?",
		a: "Absolutely. We provide safe, comfortable home delivery across all of Delhi NCR — Delhi, Gurgaon, Noida, Ghaziabad and Faridabad."
	},
	{
		q: "Can I visit before booking?",
		a: "Of course! You're welcome to visit, meet the puppies and our team before making any decision. Just book a time via WhatsApp."
	},
	{
		q: "What documents are provided?",
		a: "Every puppy comes with vaccination records, deworming history, a diet chart, breed information and ongoing support."
	},
	{
		q: "How do I reserve a puppy?",
		a: "Reach us on WhatsApp at +91 92051 22992 or call us. A small booking amount confirms your puppy until delivery."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Questions",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Frequently ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Asked"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-3",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						initial: "hidden",
						whileInView: "show",
						viewport: {
							once: true,
							margin: "-40px"
						},
						transition: { delay: i * .05 },
						className: "overflow-hidden rounded-2xl glass-strong shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(isOpen ? null : i),
							className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base font-semibold text-primary sm:text-lg",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}` })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-5 pb-5 text-sm leading-relaxed text-muted-foreground",
									children: f.a
								})
							})
						})]
					}, i);
				})
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-hero" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Get In Touch",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Bring Home a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "New Best Friend"
				})] }),
				subtitle: "We're here 24/7 to help you find your perfect puppy."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					variants: fadeUp,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						margin: "-60px"
					},
					onSubmit: (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						const msg = `Hi! I'm ${fd.get("name")}. ${fd.get("message") || "I'd like to know more about your puppies."}%0APhone: ${fd.get("phone")}%0AEmail: ${fd.get("email")}`;
						window.open(`${WHATSAPP}?text=${msg}`, "_blank");
					},
					className: "rounded-3xl glass-strong p-6 shadow-card sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "name",
								label: "Your Name",
								placeholder: "Riya Sharma",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "phone",
								label: "Phone Number",
								placeholder: "+91 ...",
								type: "tel",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "email",
								label: "Email",
								placeholder: "you@email.com",
								type: "email"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary/70",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								rows: 4,
								placeholder: "Tell us which breed you're interested in...",
								className: "w-full rounded-2xl border border-border/60 bg-white/60 px-4 py-3 text-sm text-primary outline-none transition focus:border-[color:var(--sky)] focus:bg-white"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-card transition hover:scale-[1.02]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Send via WhatsApp"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
							icon: Phone,
							title: "Call Us",
							value: PHONE,
							href: `tel:${PHONE_TEL}`,
							tint: "gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
							icon: MessageCircle,
							title: "WhatsApp",
							value: PHONE,
							href: WHATSAPP,
							tint: "whatsapp",
							external: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
							icon: MapPin,
							title: "Service Area",
							value: "Delhi NCR — Delhi, Gurgaon, Noida, Ghaziabad, Faridabad",
							tint: "sky"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl glass-strong shadow-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Delhi NCR Map",
								src: "https://www.google.com/maps?q=Delhi+NCR&output=embed",
								className: "h-56 w-full border-0",
								loading: "lazy"
							})
						})
					]
				})]
			})]
		})]
	});
}
function Field({ name, label, placeholder, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary/70",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		placeholder,
		required,
		className: "h-11 w-full rounded-full border border-border/60 bg-white/60 px-4 text-sm text-primary outline-none transition focus:border-[color:var(--sky)] focus:bg-white"
	})] });
}
function ContactCard({ icon: Icon, title, value, href, tint, external }) {
	const tintClass = {
		gold: "from-[color:var(--gold)]/30 to-[color:var(--gold)]/10 text-gold",
		sky: "from-[color:var(--sky)]/30 to-[color:var(--sky)]/10 text-primary",
		whatsapp: "from-[color:var(--whatsapp)]/30 to-[color:var(--whatsapp)]/10 text-[color:var(--whatsapp)]"
	}[tint];
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-4 rounded-3xl glass-strong p-5 shadow-card transition hover:-translate-y-0.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${tintClass}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 font-display text-lg font-semibold text-primary",
				children: value
			})]
		})]
	});
	if (!href) return inner;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: external ? "_blank" : void 0,
		rel: external ? "noreferrer" : void 0,
		className: "block",
		children: inner
	});
}
function FloatingCTAs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: `tel:${PHONE_TEL}`,
			"aria-label": "Call us",
			className: "group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[color:var(--gold)] to-[color:var(--gold)]/80 text-white shadow-gold animate-pulse-ring-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-6 w-6 transition group-hover:scale-110" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: WHATSAPP,
			target: "_blank",
			rel: "noreferrer",
			"aria-label": "WhatsApp us",
			className: "group relative grid h-14 w-14 place-items-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-glow animate-pulse-ring",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6 transition group-hover:scale-110" })
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-gradient-to-br from-primary to-[color:var(--primary)]/95 text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[color:var(--sky)]/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-12 w-12 place-items-center rounded-2xl bg-white/10 backdrop-blur",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "",
									width: 32,
									height: 32,
									className: "h-8 w-8"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl font-bold",
								children: "The Puppy House"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.18em] text-white/70",
								children: "Delhi NCR"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm text-white/75",
							children: "The Puppy House — Delhi NCR's trusted destination for healthy, vaccinated, and well-cared-for puppies."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Explore",
							links: [
								{
									label: "Puppies",
									href: "#puppies"
								},
								{
									label: "Breeds",
									href: "#breeds"
								},
								{
									label: "Gallery",
									href: "#"
								},
								{
									label: "About",
									href: "#about"
								}
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Breeds",
							links: [
								{
									label: "Golden Retriever",
									href: "#breeds"
								},
								{
									label: "Labrador",
									href: "#breeds"
								},
								{
									label: "Shih Tzu",
									href: "#breeds"
								},
								{
									label: "Husky",
									href: "#breeds"
								}
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-sm font-bold uppercase tracking-wider text-white/90",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm text-white/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
										" ",
										PHONE
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
										" ",
										PHONE
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Delhi NCR"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " hello@thepuppyhouse.in"]
								})
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" The Puppy House. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [
							"Made with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5 fill-current text-[color:var(--gold)]" }),
							" in Delhi NCR"
						]
					})]
				})]
			})
		]
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "font-display text-sm font-bold uppercase tracking-wider text-white/90",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-2 text-sm text-white/75",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: l.href,
			className: "transition hover:text-white",
			children: l.label
		}) }, l.label))
	})] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedPuppies, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breeds, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCTAs, {})
		]
	});
}
//#endregion
export { Index as component };
