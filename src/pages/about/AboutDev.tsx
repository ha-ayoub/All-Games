import { FileCode2, ShieldUser } from "lucide-react";
import { TECH_STACK } from "../../constants/techStack";
import { SOCIAL_LINKS } from "../../constants/socialLinks";

export default function AboutDev() {
    return (
        <>
            <section className="about-section">
                <h2>
                    <span className="about-section-icon">
                        <FileCode2 size={30} strokeWidth={2} />
                    </span>
                    Technologies
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
                    Le Développeur
                </h2>
                <p>
                    Projet développé avec passion par un développeur passionné de jeux et de code propre.
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