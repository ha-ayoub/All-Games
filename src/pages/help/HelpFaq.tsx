import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

export default function HelpFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    return (
        <section className="help-section">
            <h2>{t.help.faq} (FAQ)</h2>
            <div className="faq-list">
                {t.help.faqItems.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question-content">
                                    <span>{item.question}</span>
                                </div>
                                <ChevronDown
                                    size={20}
                                    className={`faq-chevron ${openIndex === index ? 'rotated' : ''}`}
                                />
                            </button>
                            <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}