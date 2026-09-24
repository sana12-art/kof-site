import React from 'react';
import PageHero from '../components/PageHero';
import heroImg from '../assets/photos/hero-legal.jpg';
import { CONTACT, LEGAL } from '../config';
import './Legal.css';

const Confidentialite = () => (
  <div className="page">
    <title>Politique de confidentialité | KOF-EXPERTS</title>
    <PageHero image={heroImg} label="Vos données" title="Politique de confidentialité" subtitle="Comment nous utilisons les données que vous nous confiez." />

    <section className="section">
      <div className="container legal">
        <h2>Responsable du traitement</h2>
        <p>
          {LEGAL.companyName}, {CONTACT.address}. Contact : <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>

        <h2>Données collectées et finalités</h2>
        <p>Nous collectons uniquement les informations que vous saisissez dans nos formulaires :</p>
        <ul>
          <li>
            <strong>Demande de devis, contact, consultation, création d'entreprise :</strong> nom, email, téléphone,
            chiffre d'affaires annuel, nom d'entreprise, message, ainsi que les informations liées à votre projet.
          </li>
        </ul>
        <p>
          Ces données servent exclusivement à répondre à votre demande et à vous proposer nos services. Elles ne sont
          ni vendues ni cédées à des tiers à des fins commerciales.
        </p>

        <h2>Base légale</h2>
        <p>
          Le traitement repose sur votre consentement au moment de l'envoi du formulaire et sur notre intérêt légitime à
          répondre aux demandes qui nous sont adressées (mesures précontractuelles).
        </p>

        <h2>Durée de conservation</h2>
        <p>
          Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis pendant la durée
          de prospection commerciale admise par la réglementation, sauf si vous devenez client : les données sont alors
          conservées selon les obligations légales applicables.
        </p>

        <h2>Destinataires et hébergement</h2>
        <p>
          Les données sont accessibles uniquement aux personnes habilitées de {LEGAL.companyName}. Le site est hébergé par
          Vercel Inc. Les polices de caractères et les icônes sont chargées depuis des services tiers (Google Fonts,
          Cloudflare), ce qui transmet votre adresse IP à ces prestataires lors de la consultation du site.
        </p>

        <h2>Cookies</h2>
        <p>Ce site n'utilise pas de cookies de mesure d'audience ni de publicité.</p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification,
          d'effacement, d'opposition, de limitation et de portabilité de vos données. Pour l'exercer, écrivez à{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Vous pouvez également introduire une réclamation
          auprès de la CNIL (cnil.fr).
        </p>
      </div>
    </section>
  </div>
);

export default Confidentialite;
