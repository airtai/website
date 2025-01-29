import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

import RobotFooterIcon from "@site/src/components/RobotFooterIcon";

import styles from "./styles.module.css";

export default function Hello() {
  return (
    <Layout title="Monotone.ai" description="Monotone.ai">
      <section className={clsx("hero hero--primary", styles.sectionContainer)}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h2 className={styles.header}>Naziv projekta</h2>
              <p>
                Ulaganje u inovaciju monotone.ai i spremnost poduzeća na
                investicije. Šifra projekta: NPOO.C1.1.2.R2-I3.02.0175.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col--12">
              <h2 className={styles.header}>Kratki opis projekta</h2>
              <p>
                Projekt ima za cilj postizanje TRL8 inovativnog
                visokotehnološkog rješenja monotone.ai, koje omogućava izradu
                dokazivih monotonih modela s jednostavnom procedurom treniranja,
                iznimno visokom točnošću te vrlo malim zahtjevima na memorijske
                i procesorske resurse.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col--12">
              <h2 className={styles.header}>
                Cilj projekta i očekivani rezultati
              </h2>
              <p>
                Finalni projektni rezultati bit će dva inovativna proizvoda na
                razini TRL8.
              </p>
              <p>
                Monotone.ai je platforma koja objedinjava 9 modula od kojih 4
                predtavljaju usko tehnološke module i srž inovacije, dok
                preostali moduli čine korisničke module nužne za kreiranje
                finalnih produkata. Njihova kombinacija rezultira s buduća 2
                proizvoda:
              </p>
              <ol>
                <li>
                  Sagi.ai - platforma za adaptivnu procjenu vjerojatnosti
                  sigurnosnih incidenata za financijske institucije (banke,
                  kartični procesori, fintech tvrtke)
                </li>
                <li>
                  Shougan.ai - platforma za procjenu vjerojatnosti štete za
                  osiguravajuću industriju
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col col--12">
              <h2 className={styles.header}>Vrijednost projekta</h2>
              <ul>
                <li>Ukupna vrijednost projekta: 177.022,46 EUR</li>
                <li>Ukupni prihvatljivi troškovi: 143.175,72 EUR</li>
                <li>Iznos EU potpore: 121.699,36 EUR</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col col--12">
              <h2 className={styles.header}>Razdoblje provedbe projekta</h2>
              <p>01.07.2023.-01.01.2025.</p>
            </div>
          </div>
          <div className="row">
            <div className="col col--12">
              <h2 className={styles.header}>Kontakt</h2>
              <p>e-mail: hajdi@airt.ai</p>
            </div>
          </div>
          <div className="row">
            <div className="col col--12">
              <img
                className={styles.img}
                src={useBaseUrl("/img/news/eu-financed-2.png")}
                alt="EU Financed"
              />
            </div>
          </div>
        </div>
      </section>
      <RobotFooterIcon />
    </Layout>
  );
}
