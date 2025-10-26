import { HelpCircle } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

export default function HelpHeader() {
    const { t } = useTranslation();

    return (
        <>
            <header className="help-header">
                <div className="help-icon">
                    <HelpCircle size={48} strokeWidth={1.5} />
                </div>
                <h1>{t.help.title}</h1>
                <p className="help-subtitle">
                    {t.help.subtitle} <strong>{t.title}</strong> {t.help.subtitle2}
                </p>
            </header>

            <section className="help-section">
                <h2>{t.help.quickStart}</h2>
                <div className="quick-start-grid">
                    <div className="quick-start-card">
                        <div className="step-number">1</div>
                        <h3>{t.help.step1}</h3>
                        <p>{t.help.step1_subtitle}</p>
                    </div>

                    <div className="quick-start-card">
                        <div className="step-number">2</div>
                        <h3>{t.help.step2}</h3>
                        <p>{t.help.step2_subtitle}</p>
                    </div>

                    <div className="quick-start-card">
                        <div className="step-number">3</div>
                        <h3>{t.help.step3}</h3>
                        <p>{t.help.step3_subtitle}</p>
                    </div>
                </div>
            </section>
        </>
    )
}