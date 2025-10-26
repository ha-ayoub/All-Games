import { useTranslation } from "../../hooks/useTranslation";

export default function HelpTrick() {
    const { t } = useTranslation();

    return (
        <section className="help-section">
            <h2>{t.help.tips}</h2>
            <div className="tips-grid">
                <div className="tip-card">
                    <div className="tip-icon">🌘</div>
                    <h3>{t.help.tip_dark}</h3>
                    <p>{t.help.tip_darkDesc}</p>
                </div>

                <div className="tip-card">
                    <div className="tip-icon">📱</div>
                    <h3>{t.help.tip_play}</h3>
                    <p>{t.help.tip_playDesc}</p>
                </div>

                <div className="tip-card">
                    <div className="tip-icon">🔍</div>
                    <h3>{t.help.tip_search}</h3>
                    <p>{t.help.tip_searchDesc}</p>
                </div>
            </div>
        </section>
    )
}