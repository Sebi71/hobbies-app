import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

import "./style.scss";

export default function CGUPage() {
  return (
    <>
      <NavBar />
      <section className="CGU-container">
        <h1 className="CGU-title">
          Conditions Générales d&apos;Utilisation (CGU)
        </h1>
        <p>
          <strong>Dernière mise à jour :</strong> 09/12/2024
        </p>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent
          l&apos;accès et l&apos;utilisation du site{" "}
          <strong>atelier-passion-de-sebastien.vercel.app</strong> (ci-après «
          le Site »), accessible à l&apos;adresse{" "}
          <Link href={"https://atelier-passion-de-sebastien.vercel.app/"}>
            https://atelier-passion-de-sebastien.vercel.app/
          </Link>
          . En accédant ou en utilisant le Site, vous acceptez sans réserve les
          présentes CGU. Si vous n&apos;acceptez pas ces conditions, vous devez
          cesser immédiatement d&apos;utiliser le Site.
        </p>

        <div className="CGU-content">
          <h2 className="CGU-subtitle">1. Définitions</h2>
          <ul>
            <li>
              Utilisateur : Toute personne qui utilise le Site en tant que
              visiteur.
            </li>
            <li>
              Site : Le blog{" "}
              <strong>atelier-passion-de-sebastien.vercel.app</strong>,
              accessible à l&apos;adresse{" "}
              <Link href={"https://atelier-passion-de-sebastien.vercel.app/"}>
                https://atelier-passion-de-sebastien.vercel.app/
              </Link>
              , permettant aux visiteurs de consulter les créations réalisées
              par l'auteur du site.
            </li>
          </ul>
        </div>

        <div className="CGU-content">
          <h2 className="CGU-subtitle">2. Accès au site</h2>
          <p>
            Le Site est accessible gratuitement à toute personne disposant
            d&apos;une connexion internet. L&apos;utilisateur est responsable de
            l’obtention et du maintien des équipements nécessaires pour accéder
            au Site (ordinateur, smartphone, connexion Internet, etc.).
          </p>
        </div>

        <div className="CGU-content">
          <h2 className="CGU-subtitle">3. Propriété intellectuelle</h2>
          <p>
            Le contenu du Site, incluant notamment les textes, images, logos, et
            autres éléments, est protégé par les droits de propriété
            intellectuelle et est la propriété de l’éditeur du Site ou de ses
            partenaires.
          </p>
        </div>

        <div className="CGU-content">
          <h2 className="CGU-subtitle">4. Responsabilité</h2>
          <p>
            L&apos;éditeur du Site s&apos;engage néanmoins à retirer toute
            information illégale signalée par les utilisateurs. Le Site peut
            contenir des liens vers des sites tiers. L&apos;éditeur du Site
            n&apos;est pas responsable du contenu de ces sites et n&apos;assume
            aucune responsabilité concernant l&apos;accès à ces derniers.
          </p>
        </div>

        <div className="CGU-content">
          <h2 className="CGU-subtitle">5. Données personnelles</h2>
          <p>
            La collecte et le traitement des données personnelles des
            utilisateurs sont régis par la politique de confidentialité
            disponible <Link href={"/politique-de-confidentialite"}>[ici]</Link>{" "}
            (lien vers la politique de confidentialité).
          </p>
        </div>

        <div className="CGU-content">
          <h2 className="CGU-subtitle">6. Cookies</h2>
          <p>
            Le Site utilise des cookies pour améliorer l&apos;expérience
            utilisateur et analyser l’utilisation du Site. En utilisant le Site,
            vous acceptez l&apos;utilisation de cookies, conformément à la
            politique de cookies. Vous pouvez gérer vos préférences via les
            paramètres de votre navigateur.
          </p>
        </div>

        <div className="CGU-content">
          <h2 className="CGU-subtitle">7. Modification des CGU</h2>
          <p>
            L&apos;éditeur du Site se réserve le droit de modifier les présentes
            CGU à tout moment. Les utilisateurs seront informés de toute
            modification significative par une mise à jour de cette page. En
            continuant à utiliser le Site après ces modifications, vous acceptez
            les nouvelles conditions.
          </p>
        </div>

        <div className="CGU-content">
          <h2 className="CGU-subtitle">
            8. Loi applicable et juridiction compétente
          </h2>
          <p>
            Les présentes CGU sont régies par la loi française. En cas de
            litige, les tribunaux compétents seront ceux du lieu où réside
            l&apos;utilisateur, conformément à la législation applicable.
          </p>
        </div>

        <div className="CGU-content">
          <h2 className="CGU-subtitle">12. Contact</h2>
          <p>
            Pour toute question relative aux présentes CGU, vous pouvez nous
            contacter à l’adresse suivante : seb.juillet@outlook.fr
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
