import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

import "./style.scss";

export default function RulesPage() {
  return (
    <>
      <NavBar />
      <section className="rules-container">
        <h1 className="rules-title">Mentions Légales</h1>

        <div className="rules-content">
          <h2 className="rules-subtitle">1. Éditeur du site</h2>
          <p>Le site atelier-passion-de-sebastien.vercel.app est édité par :</p>
          <ul>
            <li>Sébastien Juillet</li>
            <li>
              Adresse e-mail :{" "}
              <Link href="mailto:seb.juillet@outlook.fr">
                seb.juillet@outlook.fr
              </Link>
            </li>
          </ul>
        </div>

        <div className="rules-content">
          <h2 className="rules-subtitle">2. Hébergeur du site</h2>
          <p>Le site est hébergé par :</p>
          <ul>
            <li>Nom : Vercel Inc.</li>
            <li>
              Site web :{" "}
              <Link
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com
              </Link>
            </li>
          </ul>
        </div>

        <div className="rules-content">
          <h2 className="rules-subtitle">
            3. Propriété intellectuelle et partage des contenus
          </h2>
          <p>
            Les créations partagées sur cette plateforme sont mises à
            disposition dans un esprit de partage communautaire. Elles peuvent
            être librement copiées dans le respect des droits des auteurs.
          </p>
        </div>

        <div className="rules-content">
          <h2 className="rules-subtitle">4. Cookies</h2>
          <p>Le site utilise des cookies pour :</p>
          <ul>
            <li>Garantir la sécurité de votre session utilisateur.</li>
            <li>Faciliter l&apos;expérience utilisateur sur la plateforme.</li>
          </ul>
          <p>
            Le site utilise Google Analytics pour analyser la fréquentation. Ces
            cookies permettent de collecter des informations anonymes sur les
            pages visitées. Vous pouvez à tout moment gérer vos préférences via
            la bannière de cookies ou les paramètres de votre navigateur.
          </p>
          <p>Aucun cookie publicitaire n&apos;est utilisé.</p>
        </div>

        <div className="rules-content">
          <h2 className="rules-subtitle">5. Responsabilité</h2>
          <p>
            L’éditeur met tout en œuvre pour garantir la fiabilité des
            informations et services proposés sur le site. Cependant, aucune
            garantie n&apos;est donnée quant à l’exactitude des contenus soumis
            par les utilisateurs.
          </p>
        </div>

        <div className="rules-content">
          <h2 className="rules-subtitle">
            6. Modération et contenu utilisateur
          </h2>
          <p>
            Les utilisateurs s’engagent à ne pas publier de contenus illégaux,
            offensants ou inappropriés. L’éditeur se réserve le droit de
            supprimer tout contenu ne respectant pas ces conditions.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
