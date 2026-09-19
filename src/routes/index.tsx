import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Flower2,
  HeartHandshake,
  Home,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import enhancementBeforeAfter from "@/assets/result.png";
import therapistTeam from "@/assets/our_therapist.png";
import silverTreatment1 from "@/assets/silver-treatment-1.jpg";
import silverTreatment2 from "@/assets/silver-treatment-2.jpg";
import silverTreatment3 from "@/assets/silver-treatment-3.jpg";
import silverTreatment4 from "@/assets/silver-treatment-4.jpg";
import silverTreatment5 from "@/assets/silver-treatment-5.jpg";
import diamondTreatment1 from "@/assets/diamond-treatment-1.jpg";
import diamondTreatment2 from "@/assets/diamond-treatment-2.jpg";
import diamondTreatment3 from "@/assets/diamond-treatment-3.jpg";
import diamondTreatment4 from "@/assets/diamond-treatment-4.jpg";
import platinumTreatment1 from "@/assets/platinum-treatment-1.jpg";
import platinumTreatment2 from "@/assets/platinum-treatment-2.jpg";
import platinumTreatment3 from "@/assets/platinum-treatment-3.jpg";
import platinumTreatment4 from "@/assets/platinum-treatment-4.jpg";
import platinumTreatment5 from "@/assets/platinum-treatment-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sukoon Wellness for Women | Home Spa Lahore" },
      {
        name: "description",
        content:
          "Premium women-only home massage and spa packages in Lahore, with private in-home service and direct WhatsApp booking.",
      },
      { property: "og:title", content: "Sukoon Wellness for Women | Home Spa Lahore" },
      {
        property: "og:description",
        content: "Private, women-focused home spa experiences in Lahore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whatsappNumber = "923400187002";

const packages = [
  {
    id: "silver",
    tier: "Silver Package",
    name: "Essential Glow",
    price: "Rs. 7,999",
    summary: "60 minutes · 5 signature massages · Aromatherapy base oils",
    highlights: [
      { icon: "✦", label: "Ideal for first-time clients" },
      { icon: "✦", label: "Full-body stress relief" },
      { icon: "✦", label: "Aromatherapy base oils included" },
      { icon: "✦", label: "Safe for sensitive body types" },
    ],
    steps: [
      { num: "01", title: "Consultation", desc: "Therapist checks your comfort, pressure preference & health notes." },
      { num: "02", title: "Warm-up & Oil Application", desc: "Gentle strokes applied with warm aromatherapy oil to prepare muscles." },
      { num: "03", title: "Full-Body Treatment", desc: "5 targeted massages performed in sequence for complete relaxation." },
      { num: "04", title: "Cool-down & Wrap-up", desc: "Session ends with calming techniques and aftercare guidance." },
    ],
    treatments: [
      { name: "Swedish Relaxation Massage", benefit: "Everyday stress relief", description: "A full-body classic using long, flowing strokes to ease muscle tension and encourage everyday relaxation. Perfect for first-time spa visitors.", image: silverTreatment1 },
      { name: "Aromatherapy Body Massage", benefit: "Calm mood & soft skin", description: "Warm lavender and chamomile oil blends worked in with gentle kneading for a deeply calming experience and silky-soft skin.", image: silverTreatment2 },
      { name: "Head, Neck & Shoulder Relief", benefit: "Releases upper-body tension", description: "Targeted pressure on common tension areas, ideal after long hours at a desk or a demanding day.", image: silverTreatment3 },
      { name: "Back & Spine Comfort Massage", benefit: "Comfortable, freer movement", description: "Focused pressure along the back and lower back to ease built-up tension and support comfortable movement.", image: silverTreatment4 },
      { name: "Foot Reflexology Massage", benefit: "Soothes tired feet & legs", description: "Pressure-point foot therapy designed to encourage relaxation and ease the feeling of tired, heavy legs.", image: silverTreatment5 },
    ],
    oils: "Lavender Essential Oil, Chamomile Blend Oil, Sweet Almond Base Oil",
  },
  {
    id: "diamond",
    tier: "Diamond Package",
    name: "Luxury Bloom",
    price: "Rs. 10,999",
    summary: "90 minutes · 5 premium massages",
    highlights: [
      { icon: "✦", label: "Deep muscle & tension relief" },
      { icon: "✦", label: "Himalayan salt stone therapy" },
      { icon: "✦", label: "Lymphatic drainage techniques" },
      { icon: "✦", label: "Herbal steam towel included" },
    ],
    steps: [
      { num: "01", title: "Welcome Ritual", desc: "Therapist sets up your space with calming ambiance and reviews your needs." },
      { num: "02", title: "Deep Warm-up", desc: "Herbal steam towel applied to open pores and soften deep muscle tissue." },
      { num: "03", title: "Premium Treatment Sequence", desc: "Four expert massages targeting deep tension, circulation & facial renewal." },
      { num: "04", title: "Herbal Tea & Rest", desc: "Session closes with complimentary herbal tea and 5-minute guided rest." },
    ],
    treatments: [
      { name: "Deep Tissue Therapeutic Massage", benefit: "Deep muscle release", description: "Firm, slow strokes work into deeper muscle layers to address persistent tension and postural strain.", image: diamondTreatment1 },
      { name: "Himalayan Salt Stone Massage", benefit: "Warming relaxation", description: "Warm pink Himalayan salt stones glide across the skin for a soothing, warming treatment.", image: diamondTreatment2 },
      { name: "Contour & Circulation Massage", benefit: "Encourages circulation", description: "Rhythmic lymphatic-style movements and deep kneading across the thighs, hips, and abdomen.", image: diamondTreatment3 },
      { name: "Face & Scalp Revive Massage", benefit: "A refreshed, rested feeling", description: "Firm scalp stimulation paired with gentle facial lymphatic movements for a refreshed, rested feeling.", image: diamondTreatment4 },
    ],
    oils: "Rose Hip Seed Oil, Argan Gold Oil, Ylang Ylang Blend, Jasmine Infused Oil, Eucalyptus Relief Oil, Jojoba Carrier Oil",
    extras: "Herbal Steam Towel Wrap · Complimentary Herbal Tea",
  },
  {
    id: "platinum",
    tier: "Platinum Package",
    name: "Royal Ritual",
    price: "Rs. 17,999",
    summary: "120 minutes · 5 premium massages · Ultra-luxury oils · Full experience",
    highlights: [
      { icon: "✦", label: "24K Gold & Oud luxury oils" },
      { icon: "✦", label: "Full body sugar scrub included" },
      { icon: "✦", label: "Rose foot bath on arrival" },
      { icon: "✦", label: "Luxury aftercare kit gifted" },
    ],
    steps: [
      { num: "01", title: "Rose Foot Bath", desc: "Your ritual begins with a warm rose-petal foot soak to relax and ground." },
      { num: "02", title: "Full Body Sugar Scrub", desc: "Exfoliating scrub applied head to toe to polish and prepare the skin." },
      { num: "03", title: "Royal Treatment Sequence", desc: "Five signature massages using 24K gold, oud and saffron luxury oils." },
      { num: "04", title: "Face Compress & Aftercare", desc: "Hot & cold face compress, then your luxury aftercare kit to take home." },
    ],
    treatments: [
      { name: "Balinese Royal Body Ritual", benefit: "Head-to-toe renewal", description: "A complete two-hour ceremony combining acupressure, skin rolling, long strokes, and reflexology.", image: platinumTreatment1 },
      { name: "Gold Leaf Luxe Body Massage", benefit: "Exceptional indulgence", description: "24K colloidal gold oil applied with heated jade rollers for an exceptionally indulgent ritual.", image: platinumTreatment2 },
      { name: "Thai Herbal Compress Therapy", benefit: "Herbal warmth & comfort", description: "Steamed herbal pouches of lemongrass, turmeric, ginger, and kaffir lime pressed rhythmically across the body.", image: platinumTreatment3 },
      { name: "Prenatal & Postnatal Wellness Massage", benefit: "Gentle, supported comfort", description: "A cushioned side-lying session using pregnancy-safe oils, designed around comfort and gentle support.", image: platinumTreatment4 },
      { name: "Chakra Balancing Energy Massage", benefit: "Deep meditative rest", description: "A restful Ayurvedic Marma-point ritual with sound and crystal placement.", image: platinumTreatment5 },
    ],
    oils: "24K Gold Colloidal Oil, Bulgarian Rose Absolute, Cleopatra’s Milk & Honey Blend, Saffron & Sandalwood Oil, Pure Oud & Amber Blend, Marula Miracle Oil",
    extras: "Private VIP Suite ambiance · Welcome Rose Foot Bath · Full Body Sugar Scrub · Hot & Cold Face Compress · Luxury Aftercare Kit · Premium Refreshment Tray",
  },
] as const;

const reviews = [
  { name: "Ayesha Khan", area: "DHA Phase 5", packageName: "Platinum Package", stars: 5, text: "Bohat zabardast experience tha! Therapist waqt par ghar pohancha, bilkul professional aur Mannerly usny massage kiya. Platinum package mein full body relaxation mei maza agaya. Highly recommended for working women." },
  { name: "Fatima Siddiqui", area: "Gulberg III", packageName: "Diamond Package", stars: 5, text: "Main pehle ghar par massage service se thori hesitant thi, lekin Sukoon ne trust bana diya. Sab kuch hygienic tha, apni clean sheets aur oils laaye. Diamond package worth every rupee hai. Ab monthly book karwati hoon." },
  { name: "Hira Malik", area: "Model Town", packageName: "Silver Package", stars: 4, text: "Silver package budget mein perfect hai. Neck aur shoulder pain bohat din se thi, ek session ke baad kaafi relief mila. Thora late aaye thay but call kar ke inform kar diya tha. Overall achi service. recomended for safety and privacy" },
  { name: "Zainab Raza", area: "Bahria Town", packageName: "Platinum Package", stars: 5, text: "Meri shadi se pehle Platinum package book kiya tha. Full body, scrub, hair spa — sab kuch ghar par. Ghar walo py bilkul comfortable feel hua . Platinum package ke liye highly recommend hy !" },
  { name: "Mahnoor Sheikh", area: "Johar Town", packageName: "Diamond Package", stars: 5, text: "Do bachon ke baad apne liye time nikalna mushkil tha. Sukoon ne ghar par hi sab arrange kar diya. Therapist bohat polite tha aur pressure exactly waisa hi rakha jaisa maine kaha. Diamond package mein aroma therapy best part hai." },
  { name: "Sana Tariq", area: "Askari 11", packageName: "Silver Package", stars: 4, text: "Affordable aur reliable. Booking WhatsApp par hi ho gayi, koi jhanjhat nahi. Silver package amazing hai jo daily stress ke liye kaafi hai. Agli baar Diamond try karungi InshaAllah." },
  { name: "Amna Javed", area: "Cantt, Sarwar Road", packageName: "Diamond Package", stars: 5, text: "Office ke baad kahin jaane ki himmat nahi hoti, isliye at-home service perfect hai. Team ne poori privacy maintain ki. Diamond package mein foot massage bhi included tha jo bohat relaxing tha. 10/10." },
  { name: "Rabia Aslam", area: "Faisal Town", packageName: "Platinum Package", stars: 5, text: "Ammi ke liye Platinum package gift kiya tha unki salgirah par. Wo bohat khush hui! Therapist ne unke ghutno ka khayal rakha aur gentle pressure use kiya. Elderly ladies ke liye bhi bilkul suitable hai." },
  { name: "Iqra Bhatti", area: "Wapda Town", packageName: "Silver Package", stars: 4, text: "Pehli baar try kiya aur mayoos nahi hui. Saaf suthra kaam, waqt ki pabandi, aur rates bhi reasonable. Silver package students aur housewives ke liye best option hai. Shukriya Sukoon team!" },
  { name: "Noor Fatima Qureshi", area: "Garden Town", packageName: "Diamond Package", stars: 5, text: "Back pain ki wajah se raat ko neend nahi aati thi. Diamond package ke deep tissue massage ne kamaal kar diya. Therapist ne ghar par hi sab set up kar liya, mujhe kuch karna hi nahi para. Ab regular customer hoon." },
] as const;

const enhancementReviews = [
  { name: "Ayesha", text: "Treatment se pehle mujhe apni shape aur firmness ko lekar confidence kam tha. Sessions ke baad mujhe apni appearance mein noticeable difference feel hua. Shape pehle se zyada defined aur skin firmer mehsoos hui. Home service aur privacy ne experience ko aur comfortable bana diya." },
  { name: "Hira", text: "Before treatment mujhe honestly itni expectation nahi thi, lekin sessions ke baad mujhe apni appearance mein clear difference nazar aaya. Pehle ke muqable mein firmness better feel hui aur overall shape bhi mujhe zyada achi lagi. Sab se achi baat privacy aur home service thi." },
  { name: "Sana", text: "Treatment se pehle mujhe apni body shape ke hawale se confidence issue tha. Treatment ke baad mujhe noticeable improvement feel hui aur mujhe laga ke overall appearance pehle se better hai. Therapist ka behaviour bohat respectful tha aur meri privacy ka poora khayal rakha gaya." },
  { name: "Maham", text: "Before aur after mein mujhe apni appearance ka kaafi difference feel hua. Pehle firmness kam mehsoos hoti thi, jab ke sessions ke baad mujhe zyada firm aur improved shape feel hui. Ghar par treatment lena mere liye bohat convenient aur private raha." },
  { name: "Iqra", text: "Shuru mein mujhe laga ke shayad difference itna noticeable na ho, lekin sessions complete karne ke baad mujhe apni appearance mein clear change feel hua. Firmness aur shape dono pehle se better mehsoos hue. Poora treatment comfortable aur discreet raha." },
  { name: "Mehwish", text: "Treatment se pehle main thori uncomfortable aur nervous thi. After sessions mujhe apni appearance mein noticeable difference feel hua aur confidence bhi better laga. Home service ki wajah se mujhe salon jane ki tension nahi hui aur privacy bhi properly maintain hui." },
  { name: "Zara", text: "Before treatment meri main concern firmness aur overall shape thi. Kuch sessions ke baad mujhe dono mein noticeable improvement feel hui. Treatment ghar par hona mere liye sab se convenient part tha aur therapist ne bohat professionally handle kiya." },
  { name: "Anam", text: "Pehle mujhe apni appearance itni satisfying nahi lagti thi, lekin treatment ke baad mujhe noticeable difference feel hua. Overall shape aur firmness pehle ke muqable mein better mehsoos hui. Privacy, hygiene aur professional behaviour sab bohat achay thay." },
  { name: "Komal", text: "Before treatment mujhe lagta tha ke meri shape thori uneven aur firmness kam hai. Sessions ke baad mujhe apni appearance mein kaafi noticeable difference feel hua. Home treatment ki wajah se poora experience relaxed aur private raha." },
  { name: "Rabia", text: "Treatment se pehle mujhe confidence nahi tha ke mujhe koi noticeable difference milega. Lekin sessions ke baad mujhe apni shape aur firmness mein clear improvement feel hui. Ghar par treatment hone ki wajah se main completely comfortable rahi." },
  { name: "Nimra", text: "Before aur after ka experience mere liye kaafi different raha. Pehle mujhe firmness aur shape ko lekar concern tha, jab ke treatment ke baad mujhe zyada improved appearance feel hui. Therapist bohat decent aur respectful thi aur privacy ka specially khayal rakha." },
  { name: "Eman", text: "Main ne treatment start karte waqt expect nahi kiya tha ke difference itna noticeable feel hoga. Sessions ke baad mujhe apni overall shape aur firmness mein clear change mehsoos hua aur confidence bhi better laga. Home service aur complete privacy mere liye biggest plus point thay." },
] as const;

const therapists = [
  {
    name: "Asad Mehmood",
    credential: "Certified Spa & Massage Therapist — NVQF Level 3",
    specialty: "Pain Relief & Deep Relaxation Specialist",
    experience: "2 Years Experience",
    description:
      "Asad focuses on slow, pressure-controlled work for clients carrying everyday aches and stiffness. He is known for a calm, unhurried session and for checking pressure at every stage.",
  },
  {
    name: "Hassan Raza",
    credential: "Certified Massage Therapist — NVQF Level 3",
    specialty: "Deep Tissue & Muscle Tension Specialist",
    experience: "3 Years Experience",
    description:
      "Hassan works into deeper muscle layers for clients with long-standing tension from desk work or long standing hours. He tailors firmness to each client's comfort level.",
  },
  {
    name: "Bilal Ahmed",
    credential: "Certified Spa Therapist — NVQF Level 3",
    specialty: "Stress Relief & Relaxation Massage Specialist",
    experience: "2 Years Experience",
    description:
      "Bilal specialises in gentle aromatherapy-led relaxation sessions. His flowing, rhythmic technique suits clients who want a quiet, restful experience at home.",
  },
  {
    name: "Hamza Farooq",
    credential: "Certified Massage Therapist — NVQF Level 3",
    specialty: "Sports Recovery & Muscle Recovery Specialist",
    experience: "4 Years Experience",
    description:
      "Our most experienced therapist, Hamza works with active clients on post-workout recovery, stretching support, and tired, overworked muscle groups.",
  },
  {
    name: "Usman Tariq",
    credential: "Certified Spa & Massage Therapist — NVQF Level 3",
    specialty: "Neck, Shoulder & Back Tension Specialist",
    experience: "3 Years Experience",
    description:
      "Usman concentrates on the upper body — neck, shoulders, and back — with precise targeted pressure for clients who spend long hours at a screen or on the move.",
  },
] as const;


const whyItems: Array<{ icon: LucideIcon; label: string }> = [
  { icon: HeartHandshake, label: "100% Female-Focused Service" },
  { icon: UserRoundCheck, label: "Certified, Experienced Therapists" },
  { icon: Sparkles, label: "Premium Imported Oils" },
  { icon: ShieldCheck, label: "Fully Private, In-Home Comfort" },
  { icon: CalendarDays, label: "Flexible Scheduling" },
];

function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-mark" aria-label="Sukoon Wellness for Women">
      <div className="brand-icon" aria-hidden="true"><Flower2 /></div>
      <div>
        <span className={compact ? "brand-name brand-name-small" : "brand-name"}>Sukoon</span>
        <span className="brand-sub">Wellness for Women</span>
      </div>
    </div>
  );
}

function Index() {
  const [activePackage, setActivePackage] = useState("silver");
  const [bookingPackage, setBookingPackage] = useState("");
  const [bookingTherapist, setBookingTherapist] = useState("");

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Hello Sukoon Wellness, I would like to book an appointment.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Package: ${data.get("package")}`,
      `Massage / treatment: ${data.get("treatment")}`,
      `Preferred therapist: ${data.get("therapist")}`,
      `Preferred date: ${data.get("date")}`,
      `Preferred time: ${data.get("time")}`,
      `Address: ${data.get("address")}`,
      `Area / city: ${data.get("area")}`,
    ];
    const notes = data.get("notes");
    if (notes) lines.push(`Notes: ${notes}`);
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="logo-link"><BrandMark compact /></a>
        <nav aria-label="Main navigation">
          <a href="#packages">Packages</a>
          <a href="#enhancement">Enhancement</a>
          <a href="#therapists">Therapists</a>
          <a href="#why-us">Why us</a>
          <a href="#booking">Contact</a>
        </nav>
        <a className="button button-small" href="#booking">
          <CalendarDays /> Book now
        </a>
      </header>

      <section id="top" className="hero">
        <video src="/massage_video.mp4" autoPlay muted loop playsInline className="hero-video" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-emblem"><BrandMark /></div>
          <p className="eyebrow">Women-only home spa · Lahore</p>
          <h1>Sukoon Wellness for Women — Premium Home Spa Experiences in Lahore</h1>
          <p className="hero-copy">Relax in the comfort of your own home with professional, women-focused massage therapy.</p>
          <div className="hero-actions">
            <a className="button" href="#booking"><CalendarDays /> Book Your Session</a>
            <a className="button button-ghost" href="#packages">View Packages <ChevronDown /></a>
          </div>
          <p className="tagline">Relax <i /> Rejuvenate <i /> Restore</p>
        </div>
      </section>

      <section id="packages" className="section packages-section">
        <div className="section-heading">
          <p className="eyebrow">A ritual for every need</p>
          <h2>Our Signature Packages</h2>
          <p>Thoughtfully composed treatments, premium oils, and unhurried care in the privacy of your home.</p>
        </div>
        <div className="package-tabs" role="tablist" aria-label="Spa packages">
          {packages.map((item) => (
            <button key={item.id} className={`package-tab package-${item.id} ${activePackage === item.id ? "active" : ""}`} onClick={() => setActivePackage(item.id)} role="tab" aria-selected={activePackage === item.id}>
              <span>{item.tier}</span><strong>{item.name}</strong><b>{item.price}</b>
            </button>
          ))}
        </div>
        {packages.map((item) => activePackage === item.id && (
          <article key={item.id} className={`package-detail package-${item.id}`}>
            <div className="package-intro">
              <p className="eyebrow">{item.tier}</p>
              <h3>{item.name}</h3>
              <div className="package-price">{item.price}</div>
              <p className="package-summary"><Clock3 /> {item.summary}</p>
              <div className="package-highlights">
                {item.highlights.map((h) => (
                  <div className="package-highlight" key={h.label}>
                    <span className="highlight-icon">{h.icon}</span>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>
              <div className="package-steps">
                <p className="steps-label">How your session unfolds</p>
                {item.steps.map((s) => (
                  <div className="package-step" key={s.num}>
                    <span className="step-num">{s.num}</span>
                    <div><strong>{s.title}</strong><p>{s.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="oil-note"><Sparkles /><div><strong>Oils selected for this ritual</strong><p>{item.oils}</p></div></div>
              {"extras" in item && <div className="oil-note"><Flower2 /><div><strong>Experience includes</strong><p>{item.extras}</p></div></div>}
              <a className="button" href="#booking" onClick={() => setBookingPackage(`${item.tier} — ${item.name}`)}><CalendarDays /> Book This Package</a>
            </div>
            <div className="treatment-grid">
              {item.treatments.map((treatment, index) => (
                <article className="treatment-card" key={treatment.name}>
                  <div className="treatment-image">
                    <img src={treatment.image} alt={`${treatment.name} spa setting`} width={380} height={1024} loading="lazy" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="treatment-card-copy">
                    <p className="treatment-benefit">Primary benefit · {treatment.benefit}</p>
                    <h4>{treatment.name}</h4>
                    <p>{treatment.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="botanical-divider"><span /><Flower2 /><span /></div>

      <section className="section charges-section">
        <div className="section-heading compact"><p className="eyebrow">Clear, simple pricing</p><h2>Additional Charges</h2></div>
        <div className="charge-grid">
          <article><Home /><div><h3>Room Facility</h3><p>Dedicated private room setup for your session.</p></div><strong>Rs. 5,000</strong></article>
          <article><CalendarDays /><div><h3>Out-of-Lahore Service</h3><p>Additional fee for bookings outside Lahore city.</p></div><strong>Rs. 5,000</strong></article>
        </div>
      </section>

      <section id="enhancement" className="enhancement-section">
        <div className="enhancement-media">
          <img
            className="enhancement-result"
            src={enhancementBeforeAfter}
            alt="Illustrative before and after comparison for the breast enhancement massage service"
            width={1152}
            height={768}
            loading="lazy"
          />
          <div className="result-labels" aria-hidden="true"><span>Before</span><span>After</span></div>
        </div>
        <div className="enhancement-copy">
          <p className="eyebrow">Natural care for confidence</p>
          <h2>Breast Enhancement Massage Treatment</h2>
          <p className="enhancement-lead">A private, women-only massage treatment using herbal oils and gentle hands-on techniques in the comfort of your home.</p>
          <div className="enhancement-price"><span>Per session</span><strong>Rs. 4,500</strong><small>2 sessions per month</small></div>
          <ul className="enhancement-points">
            <li><Check /> Zero advance payment</li>
            <li><Check /> No medicine</li>
            <li><Check /> Herbal oil massage</li>
            <li><Check /> Provider-stated zero side effects</li>
            <li><Check /> 45+ satisfied clients</li>
          </ul>
          <a className="button" href="#booking" onClick={() => setBookingPackage("Breast Enhancement Massage Treatment — Rs. 4,500 per session")}><CalendarDays /> Book This Treatment</a>
        </div>
      </section>

      <section className="enhancement-reviews-section" aria-label="Breast enhancement client reviews">
        <div className="section-heading compact">
          <p className="eyebrow">Real results, real voices</p>
          <h2>What our clients share</h2>
          <p>Authentic reviews from our Trustpilot and Google Maps listings.</p>
        </div>
        <div className="enhancement-marquee">
          <div className="enhancement-marquee-track">
            {enhancementReviews.concat(enhancementReviews).map((review, index) => (
              <figure className="enhancement-review-chip" key={index}>
                <div className="enhancement-review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>"{review.text}"</blockquote>
                <figcaption>— {review.name}, Lahore</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="therapists" className="section therapists-section" aria-label="Our therapists">
        <div className="section-heading">
          <p className="eyebrow">The hands behind the calm</p>
          <h2>Our Therapists</h2>
          <p>Certified, NVQF Level 3 qualified therapists — each with their own area of specialisation. Choose the therapist you prefer when you book.</p>
        </div>
        <img className="therapist-team-photo" src={therapistTeam} alt="The Sukoon therapist team in uniform" width={1298} height={1200} loading="lazy" />
        <div className="therapist-grid">
          {therapists.map((therapist) => (
            <article className={`therapist-card ${bookingTherapist.startsWith(therapist.name) ? "selected" : ""}`} key={therapist.name}>
              <span className="therapist-initials" aria-hidden="true">{therapist.name.split(" ").map((part) => part[0]).join("")}</span>
              <h3>{therapist.name}</h3>
              <p className="therapist-credential"><UserRoundCheck /> {therapist.credential}</p>
              <p className="therapist-specialty">{therapist.specialty}</p>
              <p className="therapist-experience"><Clock3 /> {therapist.experience}</p>
              <p className="therapist-description">{therapist.description}</p>
              <a
                className="button button-small"
                href="#booking"
                onClick={() => setBookingTherapist(`${therapist.name} — ${therapist.specialty}`)}
              >
                <CalendarDays /> Choose {therapist.name.split(" ")[0]}
              </a>
            </article>
          ))}
        </div>
      </section>


      <section id="why-us" className="why-section">
        <div className="section-heading light"><p className="eyebrow">Care, considered</p><h2>Why women choose Sukoon</h2></div>
        <div className="why-grid">
          {whyItems.map(({ icon: Icon, label }) => <div key={label}><Icon /><p>{label}</p></div>)}
        </div>
      </section>

      <section id="reviews" className="section reviews-section" aria-label="Client reviews">
        <div className="section-heading"><p className="eyebrow">Shared from our platforms</p><h2>Real stories from Sukoon clients</h2><p>Words from women across Lahore who welcomed Sukoon into their homes.</p></div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-stars" aria-label={`${review.stars} out of 5 stars`}>{"★".repeat(review.stars)}<span>{"★".repeat(5 - review.stars)}</span></div>
              <blockquote>“{review.text}”</blockquote>
              <footer className="review-author">
                <span aria-hidden="true">{review.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
                <div><strong>{review.name}</strong><small>{review.area} · {review.packageName}</small></div>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section id="booking" className="contact-section">
        <div className="contact-copy" id="contact">
          <p className="eyebrow">Your time to unwind</p><h2>Book your Sukoon experience</h2>
          <p>Choose your package, your massage, your therapist, and your time. Fill in your address and we’ll confirm everything privately on WhatsApp.</p>
          <div className="contact-facts"><a href="tel:+923400187002"><Phone /> 0340-0187002</a><a href={whatsappUrl("Hello Sukoon Wellness, I would like to book an appointment.")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp 0340-0187002</a><p><Home /> Home Service Only — Lahore<br /><small>Out-of-city available for additional fee</small></p></div>
        </div>
        <form className="booking-form" onSubmit={submitBooking}>
          <h3>Complete your booking</h3>
          <label>Full name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label>
          <label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="03XX-XXXXXXX" /></label>
          <label>Select package<select name="package" required value={bookingPackage} onChange={(event) => setBookingPackage(event.target.value)}><option value="" disabled>Choose a package</option>{packages.map((item) => <option key={item.id} value={`${item.tier} — ${item.name}`}>{item.tier} — {item.name} · {item.price}</option>)}<option value="Breast Enhancement Massage Treatment — Rs. 4,500 per session">Breast Enhancement Massage Treatment · Rs. 4,500</option></select></label>
          <label>Select massage / treatment<select name="treatment" required defaultValue=""><option value="" disabled>Choose a massage</option>{packages.map((item) => (
            <optgroup key={item.id} label={`${item.tier} — ${item.name}`}>
              {item.treatments.map((treatment) => <option key={treatment.name} value={treatment.name}>{treatment.name}</option>)}
            </optgroup>
          ))}<option value="Breast Enhancement Massage Treatment">Breast Enhancement Massage Treatment</option><option value="Therapist's recommendation">Not sure — recommend for me</option></select></label>
          <label>Select therapist<select name="therapist" required value={bookingTherapist} onChange={(event) => setBookingTherapist(event.target.value)}><option value="" disabled>Choose a therapist</option>{therapists.map((therapist) => <option key={therapist.name} value={`${therapist.name} — ${therapist.specialty}`}>{therapist.name} · {therapist.specialty}</option>)}<option value="No preference — assign any available therapist">No preference</option></select></label>
          <label>Preferred date<input name="date" type="date" required /></label>
          <label>Preferred time<input name="time" type="time" required /></label>
          <label className="field-wide">Full address<input name="address" type="text" autoComplete="street-address" required placeholder="House / street / landmark" /></label>
          <label className="field-wide">Area &amp; city<input name="area" type="text" required placeholder="e.g. DHA Phase 5, Lahore" /></label>
          <label className="field-wide">Anything else we should know<input name="notes" type="text" placeholder="Optional — preferences, health notes, parking, etc." /></label>
          <button className="button form-submit" type="submit"><MessageCircle /> Confirm on WhatsApp</button>
          <p className="form-note"><ShieldCheck /> Your details are only used to prepare your WhatsApp message.</p>
        </form>
      </section>

      <footer>
        <BrandMark />
        <p className="footer-tagline">Relax · Rejuvenate · Restore</p>
        <div className="footer-links"><a href="#packages">Packages</a><a href="#why-us">Why Us</a><a href="#contact">Contact</a></div>
        <div className="footer-contact"><a href={whatsappUrl("Hello Sukoon Wellness.")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a><a href="tel:+923400187002"><Phone /> 0340-0187002</a></div>
        <p className="copyright">© 2026 Sukoon Wellness for Women. All rights reserved.</p>
      </footer>
    </main>
  );
}