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
];

const DownloadableGuidesSection: React.FC = () => {
  return (
    // ID for the "Downloadable Guide" section
    <section id="downloadableGuide" className="bg-white rounded-xl shadow-lg p-8 border border-ppmk-dark/10">
      <h2 className="text-2xl font-bold text-ppmk-dark mb-6 text-center">Downloadable Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide, i) => {
          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 border border-ppmk-dark/10 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-ppmk-accent/30 p-3 rounded-lg">
                  <guide.icon className="h-6 w-6 text-ppmk-dark" />
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
    question: 'How do I apply for a student visa to Korea?',
    answer: 'You need to obtain a Certificate of Admission from a Korean university first, then apply for a D-2 student visa at the Korean embassy or consulate in Malaysia.'
  },
  {
    question: 'What documents do I need for university application?',
    answer: 'Typically required documents include academic transcripts, language proficiency certificates (TOPIK/IELTS), personal statement, recommendation letters, and passport copy.'
  },
  {
    question: 'How can I find accommodation in Korea?',
    answer: 'Options include university dormitories, goshiwon (study rooms), hasukjib (boarding houses), and regular apartments. University housing is often the most convenient for new students.'
  },
  {
    question: 'What healthcare options are available for international students?',
    answer: 'International students are required to enroll in National Health Insurance (NHI). This provides coverage for most medical services at a reasonable cost.'
  },
  {
    question: 'How do I open a bank account in Korea?',
    answer: 'You can open a bank account with your passport, Alien Registration Card (ARC), and proof of enrollment. Major banks include KB, Shinhan, and Woori Bank.'
  }
];


const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    // ID for the "FAQ" section
    <section id="faq" className="bg-white rounded-2xl shadow-lg p-8 border border-ppmk-dark/10">
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
                <span className="font-semibold text-ppmk-dark">{item.question}</span>
                <span className="text-ppmk-dark/60">{expanded ? "−" : "+"}</span>
              </button>
              {expanded && (
                <div className="px-6 py-4 bg-white border-t border-ppmk-dark/10">
                  <p className="text-ppmk-dark/70 leading-relaxed">{item.answer}</p>
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
    <div className="pt-8 pb-12 bg-gray-50t min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section (in a container) */}
        <div className="bg-white rounded-xl shadow-lg p-12 mb-12 border border-ppmk-dark/10 text-center">
          <h1 className="text-4xl font-bold text-ppmk-dark mb-4">Essential Files & Resources</h1>
          <p className="text-lg text-ppmk-dark/80 max-w-3xl mx-auto text-center">
            Explore downloadable forms, guides, and official documents to support your academic and personal journey in Korea. For a comprehensive overview of student welfare, housing, financial aid, and emergency contacts, refer to the{' '}
            <a
              href="https://ppmkonline.com/wp-content/uploads/2025/03/Booklet-Kebajikan-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ppmk-dark underline hover:text-ppmk-dark/80 transition-colors"
            >
              Booklet Kebajikan
            </a>.
          </p>
        </div>

        <div className="space-y-10 ">
          <DownloadableGuidesSection />
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default Information;
