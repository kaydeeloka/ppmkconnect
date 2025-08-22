import React, { useRef, useState } from "react";
import { Calendar as CalIcon, MapPin, Users, ExternalLink, Images } from "lucide-react";

const isDirectImageUrl = (url: string) =>
  /\.(jpg|jpeg|png|webp|gif)(\?|#|$)/i.test(url || "");

const toInstagramEmbed = (url: string) => {
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean); 
    const type = parts[0];
    const code = parts[1];
    if (["p", "reel", "tv"].includes(type) && code) {
      return `https://www.instagram.com/${type}/${code}/embed`;
    }
  } catch {}
  return url;
};

const toFacebookEmbed = (url: string) =>
  `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=false&width=900`;

const smartCtaLabel = (url?: string, fallback = "View Gallery") => {
  if (!url) return fallback;
  const videoLike = /(youtube\.com|youtu\.be|vimeo\.com|facebook\.com\/watch|instagram\.com\/(reel|tv)\/)/i;
  return videoLike.test(url) ? "Watch Recap" : fallback;
};

const Media: React.FC<{
  url?: string;
  fit?: "cover" | "contain";
  className?: string; 
  imgClassName?: string; 
}> = ({ url, fit = "cover", className, imgClassName }) => {
  if (!url) {
    return <div className={["absolute inset-0 bg-ppmk-dark/10", className].join(" ")} />;
  }
  const isIG = /instagram\.com/.test(url) && !isDirectImageUrl(url);
  const isFB = /facebook\.com/.test(url) && !isDirectImageUrl(url);

  if (isDirectImageUrl(url)) {
    return (
      <img
        src={url}
        alt=""
        className={["absolute inset-0 w-full h-full", fit === "cover" ? "object-cover" : "object-contain", imgClassName || ""].join(" ")}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop";
        }}
      />
    );
  }
  if (isIG) {
    return (
      <iframe
        src={toInstagramEmbed(url)}
        className={["absolute inset-0 w-full h-full", className || ""].join(" ")}
        loading="lazy"
        frameBorder={0}
        referrerPolicy="no-referrer-when-downgrade"
        scrolling="no"
      />
    );
  }
  if (isFB) {
    return (
      <iframe
        src={toFacebookEmbed(url)}
        className={["absolute inset-0 w-full h-full", className || ""].join(" ")}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allow="encrypted-media; picture-in-picture; web-share"
        loading="lazy"
      />
    );
  }
  return <div className={["absolute inset-0 bg-ppmk-dark/10", className || ""].join(" ")} />;
};

type EventLite = {
  title: string;
  date: string;            
  location?: string;
  attendees?: number;
  image?: string;         
  registerUrl?: string;    
  galleryUrl?: string;     
  ctaLabel?: string;       
};

const PAST_EVENTS: EventLite[] = [
  { title: "CNY Celebration", date: "21/01/2025", image: "https://www.instagram.com/p/DFE6UXET3O7/?hl=en", galleryUrl: "https://www.instagram.com/p/DFbtxdJTM-m/?hl=en&img_index=1" },
  { title: "Orientasi JPA", date: "28/02/2025", image: "https://www.instagram.com/p/DGjxZGXSvj6/?hl=en", galleryUrl: "https://www.facebook.com/media/set/?set=a.690160773671525&type=3" },
  { title: "Bazaar Ramadhan", date: "15/03/2025", image: "https://www.instagram.com/p/DGwxAUUzm31/?hl=en&img_index=1", galleryUrl: "https://www.facebook.com/media/set/?set=a.690176867003249&type=3" },
  { title: "Eid Mubarak", date: "31/03/2025", image: "https://www.instagram.com/p/DH2PAB9THSL/?hl=en", galleryUrl: "https://www.instagram.com/p/DIaV_pCz1nc/?hl=en", ctaLabel: "Watch Recap" },
  { title: "Woo Young Woo", date: "12/04/2025", image: "https://www.instagram.com/p/DIKwSRBJLvK/?hl=en", galleryUrl: "https://www.instagram.com/p/DIYa3uWT8uN/?hl=en&img_index=1" },
  { title: "E-Kasuma", date: "26/04/2025", image: "https://www.instagram.com/p/DIA7y-BzMX1/?hl=en", galleryUrl: "https://www.instagram.com/p/DI-L1yMTyTG/?hl=en&img_index=1" },
  { title: "Hari Kebudayaan", date: "10/05/2025", image: "https://www.instagram.com/p/DJI1n_BTtY-/?hl=en&img_index=1", galleryUrl: "https://www.facebook.com/media/set/?set=a.775519185135683&type=3" },
  { title: "ASEAN SEAmposium", date: "11/05/2025", image: "https://www.instagram.com/p/DJqrTm5ToXW/?hl=en&img_index=2", galleryUrl: "https://www.instagram.com/p/DJqrTm5ToXW/?hl=en&img_index=1" },
  { title: "Kasuma Spring", date: "31/05/2025", image: "https://www.instagram.com/p/DKS5c4hTpZK/?hl=en", galleryUrl: "https://www.instagram.com/stories/highlights/18048741461417824/?hl=en" },
  { title: "Summer Hiking", date: "05/07/2025", image: "https://www.instagram.com/p/DLOeBzaTAA7/?hl=en", galleryUrl: "https://www.instagram.com/p/DL0vJqFoK5j/?hl=en&img_index=1" },
  { title: "Hack PPMK25", date: "10/08/2025", image: "https://www.instagram.com/p/DMrONzhTVxP/?hl=en&img_index=1", galleryUrl: "https://www.instagram.com/stories/highlights/17867650131426932/?hl=en" },
];

const UPCOMING_EVENTS: EventLite[] = [
  { title: "Sambutan Hari Kemerdekaan", date: "30/08/2025", image: "https://www.instagram.com/p/DM7RvSfzsIK/?hl=en", registerUrl: "https://drive.google.com/drive/folders/10JGq0jKtPDPJ5cCPjqE0YGS2ZJoQfi-G" },
  { title: "Larian Madani", date: "01/10/2025", image: "https://www.instagram.com/p/DMWxPyATLw2/?hl=en&img_index=1", registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdrottrY76FmIwlUhINhHULmnVwTmlB24Ckfn5OYccFoj1XbA/closedform?pli=1" },
];

type MonthBlock = { month: string; items: { title: string; date: string; imageUrl?: string }[] };

const yearlyData: MonthBlock[] = [
  { month: "January", items: [
    { title: "Orientasi MARA", date: "06/01/2025" },
    { title: "Chinese New Year Celebration", date: "21/01/2025" }] },
  { month: "February", items: [{ title: "Orientation JPA", date: "28/02/2025" }] },
  { month: "March", items: [
      { title: "Iftar Perdana", date: "08/03/2025" },
      { title: "Bazaar Ramadhan", date: "15/03/2025" },
      { title: "Eid Mubarak", date: "31/03/2025" },],},
  { month: "April", items: [{title: "Woo Young Woo", date: "12/04/2025" },{ title: "E-Kasuma", date: "26/04/2025" },],},
  {
    month: "May", items: [
      { title: "Hari Kebudayaan", date: "10/05/2025" },
      { title: "ASEAN SEAmposium", date: "11/05/2025" },
      { title: "Kasuma Spring", date: "31/05/2025" },],},
  { month: "June", items: [{ title: "Course and Career Talk", date: "28/06/2025" }] },
  { month: "July", items: [{ title: "Summer Hiking", date: "05/07/2025" }] },
  {
    month: "August",items: [
      { title: "Hack PPMK25", date: "10/08/2025" },
      { title: "Sambutan Hari Kemerdekaan", date: "30/08/2025" },],},
  { month: "October", items: [{ title: "Larian Madani", date: "01/10/2025" }] },
  { month: "November", items: [{ title: "Majlis Anugerah Dirgahayu", date: "06/11/2025" }] },
  { month: "December", items: [{ title: "SPRPPMK", date: "01/12/2025" }] },
];

const YearlyActivitiesSection: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByStep = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-month-card]");
    const gap = 24; 
    const step = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.9;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section className="bg-white/70 backdrop-blur rounded-xl shadow-lg p-8 border border-ppmk-dark/10">
      {/* Header + controls */}
      <div className="flex items-center justify-between">
        <div className="text-center mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-ppmk-dark">12 Months of Activities</h2>
          <p className="text-ppmk-dark/70 mt-2">
            We organize a variety of events throughout the year to foster community, culture, and connection among
            Malaysian students in Korea.
          </p>
        </div>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-2 ml-4">
          <button
            onClick={() => scrollByStep(-1)}
            className="px-3 py-2 rounded-lg border border-ppmk-dark/10 bg-white hover:bg-ppmk-light"
            aria-label="Previous"
          >
            ◀
          </button>
          <button
            onClick={() => scrollByStep(1)}
            className="px-3 py-2 rounded-lg border border-ppmk-dark/10 bg-white hover:bg-ppmk-light"
            aria-label="Next"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Horizontal scroller */}
      <div
        ref={scrollerRef}
        className="
          mt-8 grid grid-flow-col auto-cols-[85%] sm:auto-cols-[60%] lg:auto-cols-[33%]
          gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {yearlyData.map((month) => (
          <div
            key={month.month}
            data-month-card
            className="snap-start bg-white rounded-2xl shadow-md p-6 border border-ppmk-dark/10"
          >
            <h3 className="text-lg font-semibold text-ppmk-dark mb-4">{month.month}</h3>
            <div className="space-y-3">
              {month.items.map((ev, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-ppmk-dark/10 px-4 py-3 shadow-sm"
                >
                  <div className="font-semibold text-ppmk-dark">{ev.title}</div>
                  <div className="text-sm text-ppmk-dark/60 flex items-center gap-1 mt-1">
                    <CalIcon className="w-4 h-4" />
                    {ev.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile controls */}
      <div className="mt-4 flex md:hidden justify-center gap-3">
        <button
          onClick={() => scrollByStep(-1)}
          className="px-4 py-2 rounded-lg border border-ppmk-dark/10 bg-white"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={() => scrollByStep(1)}
          className="px-4 py-2 rounded-lg border border-ppmk-dark/10 bg-white"
          aria-label="Next"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

const EventMeta: React.FC<{ event: EventLite }> = ({ event }) => (
  <div className="mt-2 flex flex-wrap gap-4 text-sm text-ppmk-dark/80">
    <span className="inline-flex items-center gap-1">
      <CalIcon className="w-4 h-4" />
      {event.date}
    </span>
    {event.location && (
      <span className="inline-flex items-center gap-1">
        <MapPin className="w-4 h-4" />
        {event.location}
      </span>
    )}
    {typeof event.attendees === "number" && (
      <span className="inline-flex items-center gap-1">
        <Users className="w-4 h-4" />
        {event.attendees}
      </span>
    )}
  </div>
);

const CTAButton: React.FC<{ href?: string; label: string }> = ({ href, label }) => {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-ppmk-dark text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90"
    >
      {label} <ExternalLink className="w-4 h-4" />
    </a>
  );
};

/* Gallery  */
const Gallery: React.FC = () => {
  const images = [
    "https://www.instagram.com/p/DERUVMYz7RS/?hl=en",
    "https://www.instagram.com/p/DFh4l9ZTHrO/?hl=en",
    "https://www.instagram.com/p/DGozT4SzWDQ/?hl=en",
    "https://www.instagram.com/p/DH4oA-ET4ug/?hl=en",
    "https://www.instagram.com/p/DJHL22JTS3M/?hl=en",
    "https://www.instagram.com/p/DKWkmTNseik/?hl=en",
    "https://www.instagram.com/p/DLjQx6TzKz2/?hl=en",
    "https://www.instagram.com/p/DMy6D34T4Yu/?hl=en",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prevImage = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  const current = images[currentIndex];
  const isIG = /instagram\.com\/(p|reel|tv)\//i.test(current);
  const isDirectImg = /\.(jpg|jpeg|png|webp|gif)(\?|#|$)/i.test(current);

  const iframeHeights = "h-[760px] md:h-[860px] lg:h-[940px]";

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-ppmk-dark/10 h-full flex flex-col">
      {}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-ppmk-dark rounded-lg flex items-center justify-center">
            <Images className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-ppmk-dark">Calendar</h2>
        </div>

        {}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={prevImage}
            className="px-3 py-2 rounded-lg border border-ppmk-dark/10 bg-white hover:bg-ppmk-light"
            aria-label="Previous"
          >
            ◀
          </button>
          <button
            onClick={nextImage}
            className="px-3 py-2 rounded-lg border border-ppmk-dark/10 bg-white hover:bg-ppmk-light"
            aria-label="Next"
          >
            ▶
          </button>
        </div>
      </div>

      {}
      <div className="relative w-full rounded-xl bg-white">
        {isIG && !isDirectImg ? (
          <div className={`w-full ${iframeHeights} rounded-xl overflow-hidden pointer-events-none`}>
            <iframe
              key={current}
              src={toInstagramEmbed(current)}
              className="w-full h-full"
              loading="lazy"
              frameBorder={0}
              scrolling="no"
              referrerPolicy="no-referrer-when-downgrade"
              allow="encrypted-media; picture-in-picture; web-share"
            />
          </div>
        ) : (
          <div className="relative w-full h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden bg-ppmk-dark/5">
            <img
              src={current}
              alt={`Gallery ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>

      {}
      <div className="mt-4 flex md:hidden justify-center gap-3">
        <button
          onClick={prevImage}
          className="px-4 py-2 rounded-lg border border-ppmk-dark/10 bg-white"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          className="px-4 py-2 rounded-lg border border-ppmk-dark/10 bg-white"
          aria-label="Next"
        >
          ▶
        </button>
      </div>
    </section>
  );
};


/* Past Events */
const PastEventsCarousel: React.FC<{ events: EventLite[] }> = ({ events }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const pages = React.useMemo(() => {
    const out: EventLite[][] = [];
    for (let i = 0; i < events.length; i += 4) out.push(events.slice(i, i + 4));
    return out;
  }, [events]);

  const scrollByStep = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstPage = el.querySelector<HTMLElement>("[data-page]");
    const gap = 24; 
    const step = firstPage ? firstPage.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section className="rounded-2xl p-8 border border-ppmk-dark/10 bg-white relative h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-ppmk-dark rounded-lg flex items-center justify-center">
            <Images className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-ppmk-dark">Past Events</h2>
        </div>

        {}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollByStep(-1)}
            className="px-3 py-2 rounded-lg border border-ppmk-dark/10 bg-white hover:bg-ppmk-light"
            aria-label="Previous"
          >
            ◀
          </button>
          <button
            onClick={() => scrollByStep(1)}
            className="px-3 py-2 rounded-lg border border-ppmk-dark/10 bg-white hover:bg-ppmk-light"
            aria-label="Next"
          >
            ▶
          </button>
        </div>
      </div>

      {}
      <div
        ref={scrollerRef}
        className="
          grid grid-flow-col gap-6 overflow-x-auto snap-x snap-mandatory
          auto-cols-[100%] scroll-smooth touch-pan-x
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {pages.map((group, pageIdx) => (
          <div key={pageIdx} data-page className="snap-start w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {group.map((ev, idx) => (
                <article
                  key={idx}
                  data-card
                  className="border border-ppmk-dark/10 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                  <div className="relative w-full h-56 md:h-64 bg-ppmk-dark/10">
                    <Media url={ev.image} fit="cover" />
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-ppmk-dark line-clamp-2">{ev.title}</div>
                    <EventMeta event={ev} />
                    <div className="mt-3">
                      <CTAButton href={ev.galleryUrl} label={ev.ctaLabel ?? "View Gallery"} />
                    </div>
                  </div>
                </article>
              ))}

              {}
              {group.length < 4 &&
                Array.from({ length: 4 - group.length }).map((_, i) => (
                  <div key={`ph-${i}`} className="hidden md:block" />
                ))}
            </div>
          </div>
        ))}
      </div>

      {}
      <div className="mt-4 flex md:hidden justify-center gap-3">
        <button
          onClick={() => scrollByStep(-1)}
          className="px-4 py-2 rounded-lg border border-ppmk-dark/10 bg-white"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={() => scrollByStep(1)}
          className="px-4 py-2 rounded-lg border border-ppmk-dark/10 bg-white"
          aria-label="Next"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

/* Upcoming Events */
const UpcomingEventsSection: React.FC<{ events: EventLite[] }> = ({ events }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const isEmbedUrl = (u?: string) =>
    !!u && !isDirectImageUrl(u) && /(instagram\.com|facebook\.com)/i.test(u || "");

  const EMBED_H = "h-[520px] md:h-[620px]"; 
  const IMG_H = "h-56 md:h-64";            

  const scrollByStep = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-ue-card]");
    const gap = 24; 
    const step = firstCard ? firstCard.offsetWidth + gap : el.clientWidth * 0.9;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section className="rounded-2xl p-8 border border-ppmk-dark/10 bg-white relative h-full">
      {}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-ppmk-dark rounded-lg flex items-center justify-center">
            <Images className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-ppmk-dark">Upcoming Events</h2>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollByStep(-1)}
            className="px-3 py-2 rounded-lg border border-ppmk-dark/10 bg-white hover:bg-ppmk-light"
            aria-label="Previous"
          >
            ◀
          </button>
          <button
            onClick={() => scrollByStep(1)}
            className="px-3 py-2 rounded-lg border border-ppmk-dark/10 bg-white hover:bg-ppmk-light"
            aria-label="Next"
          >
            ▶
          </button>
        </div>
      </div>

      {}
      <div
        ref={scrollerRef}
        className="
          grid grid-flow-col gap-6 overflow-x-auto snap-x snap-mandatory
          auto-cols-[80%] sm:auto-cols-[55%] md:auto-cols-[40%] lg:auto-cols-[33%]
          scroll-smooth touch-pan-x
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {events.map((ev, idx) => {
          const embed = isEmbedUrl(ev.image);
          const isIG = /instagram\.com/i.test(ev.image || "");
          const src = embed
            ? (isIG ? toInstagramEmbed(ev.image!) : toFacebookEmbed(ev.image!))
            : undefined;

          return (
            <article
              key={idx}
              data-ue-card
              className="snap-start border border-ppmk-dark/10 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              {/* Media */}
              {embed ? (
                <div className={`w-full ${EMBED_H} rounded-t-xl overflow-hidden pointer-events-none bg-ppmk-dark/5`}>
                  <iframe
                    key={src}
                    src={src}
                    className="w-full h-full"
                    loading="lazy"
                    frameBorder={0}
                    scrolling="no"
                    referrerPolicy="no-referrer-when-downgrade"
                    allow="encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              ) : (
                <div className={`relative w-full ${IMG_H} bg-ppmk-dark/10`}>
                  <img
                    src={ev.image || ""}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              {}
              <div className="p-4">
                <div className="font-semibold text-ppmk-dark line-clamp-2">{ev.title}</div>
                <EventMeta event={ev} />
                <div className="mt-3">
                  <CTAButton href={ev.registerUrl} label="Register Now" />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {}
      <div className="mt-4 flex md:hidden justify-center gap-3">
        <button
          onClick={() => scrollByStep(-1)}
          className="px-4 py-2 rounded-lg border border-ppmk-dark/10 bg-white"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          onClick={() => scrollByStep(1)}
          className="px-4 py-2 rounded-lg border border-ppmk-dark/10 bg-white"
          aria-label="Next"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

/* Page */

const Activities: React.FC = () => {
  return (
    <div className="pt-28 pb-12 bg-ppmk-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        {}
        <YearlyActivitiesSection />

        {}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-stretch">
          <Gallery />
          <PastEventsCarousel events={PAST_EVENTS} />
        </div>

        {}
        <div className="mt-10 ">
          <UpcomingEventsSection events={UPCOMING_EVENTS} />
        </div>
      </div>
    </div>
  );
};

export default Activities;
