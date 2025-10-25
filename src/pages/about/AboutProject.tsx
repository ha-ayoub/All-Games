import { Anvil } from "lucide-react";

export default function AboutProject() {
    return (
        <section className="about-section">
            <h2>
                <span className="about-section-icon">
                    <Anvil size={30} strokeWidth={2} />
                </span>
                Le Projet
            </h2>
            <p>
                Arcadia, c'est un projet qui me tenait à cœur depuis un moment. J'avais développé plusieurs
                mini-jeux séparément, et je trouvais dommage de les laisser dispersés sans vraie cohérence.
                J'ai donc décidé de créer une plateforme qui leur donne une vraie identité commune, un endroit
                où ils pourraient cohabiter naturellement.
            </p>
            <p>
                Au-delà de l'aspect technique, ce qui m'importait
                vraiment, c'était l'expérience : je voulais que les gens prennent plaisir à naviguer, que
                l'interface soit belle et fonctionnelle, que tout soit fluide. J'ai passé pas mal de temps
                sur les détails, le choix des couleurs, les animations, le responsive... Pour moi, Arcadia
                n'est pas juste une collection de jeux, c'est une petite expérience web soignée, pensée
                pour être accessible et agréable à tous.
            </p>
        </section>
    )
}