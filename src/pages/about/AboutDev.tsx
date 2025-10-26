import { FileCode2, ShieldUser } from "lucide-react";
import { TECH_STACK } from "../../constants/techStack";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { useTranslation } from "../../hooks/useTranslation";

export default function AboutDev() {
    const { t } = useTranslation();

    return (
        <>
            <section className="about-section">
                <h2>
                    <span className="about-section-icon">
                        <FileCode2 size={30} strokeWidth={2} />
                    </span>
                    {t.about.techTitle}
                </h2>
                <div className="tech-stack">
                    {TECH_STACK.map((tech) => (
                        <span key={tech} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section className="about-section">
                <h2>
                    <span className="about-section-icon">
                        <ShieldUser  size={30} strokeWidth={2} />
                    </span>
                    {t.about.devTitle}
                </h2>
                <p>
                    {t.about.devDescription}
                </p>
                <div className="social-links">
                    {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
                        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="social-link">
                            <Icon size={18} />
                            <span>{name}</span>
                        </a>
                    ))}
                </div>
            </section>
        </>
    )
}