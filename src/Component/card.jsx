import { useState } from 'react'
import './card.css'

function Card() {

  return (
    <main>
        <section className='card-list'>
            <article className='card'>
                <header className='card-header'>
                    <p>May 25 2022</p>
                    <h2>Aménagement Rural</h2>
                    <p>Par ses missions, le géomètre-expert est au cœur des problématiques d’aménagement des territoires et de la valorisation des zones rurales. Nous accompagnons différents acteurs du domaine – collectivités, propriétaires, exploitants agricoles – dans la réalisation de leurs projets</p>
                </header>
                  <div class="card-author">
                      <a class="author-avatar" href="#">
                          <img src="./src/img/avatar.png" />
                      </a>
                      <svg class="half-circle" viewBox="0 0 106 57">
                          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                      </svg>

                      <div class="author-name">
                          <div class="author-name-prefix">Author</div>
                          Jeff Delaney
                      </div>
                  </div>
            </article>

            <article className='card'>
                <header className='card-header'>
                    <p>May 25 2022</p>
                    <h2>Copropriété</h2>

                    <p>Le géomètre-expert est habilité à établir les documents permettant de régir tout immeuble bâti dont la propriété est répartie par lots comprenant une partie privative et une quote-part de parties communes.
                    Il dresse les plans des intérieurs (immeubles existants) et exploite les plans du maître d’ouvrage (bâtiments à construire) pour rédiger l’ « état descriptif de division » où sont définies les parties privatives et les parties communes.
                    Il calcule ensuite les quotes-parts des parties communes afférentes à chaque partie privative et celles des charges des équipements communs. Il rédige également le règlement de copropriété.
                    </p>
                </header>
               
                  <div class="card-author">
                      <a class="author-avatar" href="#">
                          <img src="./src/img/avatar.png" />
                      </a>
                      <svg class="half-circle" viewBox="0 0 106 57">
                          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                      </svg>

                      <div class="author-name">
                          <div class="author-name-prefix">Author</div>
                          Jeff Delaney
                      </div>
                  </div>
            </article>

            <article className='card'>
                <header className='card-header'>
                    <p>May 25 2022</p>
                    <h2>Topographie</h2>
                    <p>
                        Par sa formation et son savoir-faire, le géomètre-expert est compétent pour réaliser de nombreuses prestations topographiques permettant de répondre aux besoins d’une clientèle diversifiée : particuliers, maîtres d’œuvre, maîtres d’ouvrages, professions immobilières, gestionnaires d’ouvrages…
                    </p>
                </header>
                  <div class="card-author">
                      <a class="author-avatar" href="#">
                          <img src="./src/img/avatar.png" />
                      </a>
                      <svg class="half-circle" viewBox="0 0 106 57">
                          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                      </svg>

                      <div class="author-name">
                          <div class="author-name-prefix">Author</div>
                          Jeff Delaney
                      </div>
                  </div>
            </article>

            <article className='card'>
                <header className='card-header'>
                    <p>May 25 2022</p>
                    <h2>Géomatique</h2>
                    <p>La géomatique est l’ensemble des techniques d’acquisition, d’intégration, de gestion et d’exploitation de l’information géographique. Dans ce cadre, le géomètre-expert accompagne ses clients dans la mise en place, l’exploitation et la maintenance d’un système d’information géographique (SIG).</p>
                </header>
                
                  <div class="card-author">
                      <a class="author-avatar" href="#">
                          <img src="./src/img/avatar.png" />
                      </a>
                      <svg class="half-circle" viewBox="0 0 106 57">
                          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                      </svg>

                      <div class="author-name">
                          <div class="author-name-prefix">Author</div>
                          Jeff Delaney
                      </div>
                  </div>
            </article>

            <article className='card'>
                <header className='card-header'>
                    <p>May 25 2022</p>
                    <h2>ÉVALUATION et ESTIMATION</h2>
                    <p>Par son indépendance et son expertise, le géomètre-expert est en mesure d’évaluer l’état et la valeur des biens immobiliers ou encore d’effectuer des estimations dans le domaine agricole ou forestier. Les géomètres-experts établissent les états des lieux des logements de plus de 20 ans nécessaires à l’obtention d’un prêt à taux zéro destiné à financer leur acquisition. Outre les constats et mesures, il formule les préconisations nécessaires à la mise en conformité du logement. Il peut également réaliser l’état des lieux de tout local, bâtiment ou ensemble de bâtiments.
                    </p>
                </header>
            </article>
        
            <article className='card'>
                <header className='card-header'>
                    <p>May 25 2022</p>
                    <h2>Foncier</h2>
                    <p>Les titres de propriété et le cadastre n’offrent pas toujours des garanties suffisantes. Le géomètre-expert assure de multiples prestations en matière de foncier pour le compte des particuliers, professionnels ou collectivités territoriales. Il les aide à mener à bien leurs projets en respectant la réglementation et les droits de chacun. Il contribue ainsi à prévenir tout litige ultérieur ou à résoudre ceux en cours.</p>
                </header>
            </article>
        </section>
            

    </main>
  )
}

export default Card
