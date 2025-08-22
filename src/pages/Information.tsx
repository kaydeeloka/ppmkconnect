import React, { useState } from "react";
import { Download, FileText, HelpCircle, Phone, MapPin, Shield } from "lucide-react";

/* ------------------------- Downloadable Guides (inline) ------------------------- */

type Guide = {
  title: string;
  size: string;
  downloads: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const guides: Guide[] = [
  { title: "BORANG KEBENARAN KE LUAR NEGARA (BKLN) JPA", icon: FileText, size: "2.4 MB", downloads: "1,247" },
  { title: "BORANG TUNTUTAN", icon: FileText, size: "3.1 MB", downloads: "892" },
  { title: "KEAHLIAN PPMK", icon: FileText, size: "1.8 MB", downloads: "2,156" },
  { title: "PERUMAHAN", icon: FileText, size: "4.2 MB", downloads: "1,634" },
  { title: "TABUNG KHAS", icon: FileText, size: "1.2 MB", downloads: "756" },
  { title: "BOOKLET KEBAJIKAN", icon: FileText, size: "2.9 MB", downloads: "1,423" },
];

const DownloadableGuidesSection: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 border border-ppmk-dark/10">
      <h2 className="text-2xl font-bold text-ppmk-dark mb-6 text-center">Downloadable Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide, i) => {
          const Icon = guide.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 border border-ppmk-dark/10 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-ppmk-accent/30 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-ppmk-dark" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ppmk-dark">{guide.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-ppmk-dark/60">
                    <span>{guide.size}</span>
                    <span>•</span>
                    <span>{guide.downloads} downloads</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-ppmk-dark text-ppmk-accent py-3 px-4 rounded-lg hover:bg-ppmk-dark/90 transition-colors flex items-center justify-center gap-2 font-medium">
                <Download className="h-4 w-4" />
                <span>Download Guide</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ---------------------------------- FAQ (inline) -------------------------------- */

const faqs = [
  {
    q: "How do I access the student portal?",
    a: "Use your student ID and password provided during enrollment. If you've forgotten them, use the reset feature on the login page or visit the IT help desk.",
  },
  {
    q: "What documents do I need for course registration?",
    a: "Typically: academic transcript, student ID, proof of prerequisites, and any program-specific certificates (e.g., medical or language).",
  },
  {
    q: "How can I apply for scholarships and financial aid?",
    a: "Apply via the financial aid office before the deadline. You’ll usually submit transcripts, recommendation letters, and financial need documentation.",
  },
  {
    q: "What support services are available for international students?",
    a: "Orientation programs, language assistance, cultural activities, visa guidance, and dedicated international student advisors.",
  },
  {
    q: "How do I book campus facilities and study rooms?",
    a: "Use the online reservation system in the student portal. Study rooms are first-come-first-served or reservable up to 7 days in advance.",
  },
  {
    q: "What should I do if I'm experiencing academic difficulties?",
    a: "Contact your advisor, use tutoring services, join study groups, or visit the academic success center for personalized support.",
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 border border-ppmk-dark/10">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-ppmk-accent/30 p-3 rounded-lg">
          <HelpCircle className="h-6 w-6 text-ppmk-dark" />
        </div>
        <h2 className="text-2xl font-bold text-ppmk-dark">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item, i) => {
          const expanded = open === i;
          return (
            <div key={i} className="border border-ppmk-dark/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(expanded ? null : i)}
                className="w-full px-6 py-4 text-left bg-ppmk-accent/10 hover:bg-ppmk-accent/20 transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-ppmk-dark">{item.q}</span>
                <span className="text-ppmk-dark/60">{expanded ? "−" : "+"}</span>
              </button>
              {expanded && (
                <div className="px-6 py-4 bg-white border-t border-ppmk-dark/10">
                  <p className="text-ppmk-dark/70 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ---------------------------------- Page ---------------------------------- */

const Information: React.FC = () => {
  return (
    <div className="pt-8 pb-12 bg-ppmk-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section (in a container) */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-12 border border-ppmk-dark/10 text-center">
          <h1 className="text-4xl font-bold text-ppmk-dark mb-4">Essential Files & Resources</h1>
          <p className="text-xl text-ppmk-dark/80 max-w-3xl mx-auto">
            Download important documents, guides, and resources to help you navigate your student life in Korea.
          </p>
        </div>

        <div className="space-y-10">
          <DownloadableGuidesSection />
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default Information;
