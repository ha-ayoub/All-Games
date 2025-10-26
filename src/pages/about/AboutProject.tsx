import { Anvil } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

export default function AboutProject() {
    const { t } = useTranslation();

    return (
        <section className="about-section">
            <h2>
                <span className="about-section-icon">
                    <Anvil size={30} strokeWidth={2} />
                </span>
                {t.about.projectTitle}
            </h2>
            <p>
                {t.about.projectDescription1}
            </p>
            <p>
                {t.about.projectDescription2}
            </p>
        </section>
    )
}