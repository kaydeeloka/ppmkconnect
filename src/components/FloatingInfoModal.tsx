import React, { useState } from 'react'
import { HelpCircle, X, Download, FileText } from 'lucide-react'

const FloatingInfoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const guides = [
    { title: "BORANG KEBENARAN KE LUAR NEGARA (BKLN) JPA", icon: FileText, size: "2.4 MB", downloads: "1,247" },
    { title: "BORANG TUNTUTAN", icon: FileText, size: "3.1 MB", downloads: "892" },
    { title: "KEAHLIAN PPMK", icon: FileText, size: "1.8 MB", downloads: "2,156" },
    { title: "PERUMAHAN", icon: FileText, size: "4.2 MB", downloads: "1,634" },
    { title: "TABUNG KHAS", icon: FileText, size: "1.2 MB", downloads: "756" },
  ]

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
  ]

  return (
    <>
      {/* Floating Question Icon Button - Bottom Right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-ppmk-accent hover:bg-ppmk-accent/90 text-ppmk-dark p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Open information modal"
      >
        <HelpCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-ppmk-dark/10 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-ppmk-dark">Essential Files & Resources</h2>
                <p className="text-ppmk-dark/70 mt-1">Quick access to important information and downloads</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-ppmk-dark" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6 space-y-8">
              {/* Introduction Section */}
              <div className="bg-ppmk-accent/10 rounded-xl p-6 border border-ppmk-dark/10 text-center">
                <p className="text-lg text-ppmk-dark/80 leading-relaxed">
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

              {/* Downloadable Guides Section */}
              <div>
                <h3 className="text-xl font-bold text-ppmk-dark mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Downloadable Guides
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guides.map((guide, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-md p-4 border border-ppmk-dark/10 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-ppmk-accent/30 p-2 rounded-lg">
                          <guide.icon className="h-5 w-5 text-ppmk-dark" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-ppmk-dark text-sm leading-tight">{guide.title}</h4>
                          <div className="flex items-center gap-3 text-xs text-ppmk-dark/60 mt-1">
                            <span>{guide.size}</span>
                            <span>•</span>
                            <span>{guide.downloads} downloads</span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-ppmk-dark text-white py-2 px-3 rounded-lg hover:bg-ppmk-dark/90 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-xl font-bold text-ppmk-dark mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {faqs.map((item, i) => {
                    const expanded = openFaq === i
                    return (
                      <div key={i} className="border border-ppmk-dark/10 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(expanded ? null : i)}
                          className="w-full px-4 py-3 text-left bg-ppmk-accent/10 hover:bg-ppmk-accent/20 transition-colors flex items-center justify-between"
                        >
                          <span className="font-semibold text-ppmk-dark text-sm">{item.question}</span>
                          <span className="text-ppmk-dark/60 text-lg">{expanded ? "−" : "+"}</span>
                        </button>
                        {expanded && (
                          <div className="px-4 py-3 bg-white border-t border-ppmk-dark/10">
                            <p className="text-ppmk-dark/70 text-sm leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingInfoModal
