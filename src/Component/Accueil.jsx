import { useState } from 'react'
import './Accueil.css'

function Accueil() {

  return (
    <main className='acceuil'>
      <section className='blue'>
        <img src="./src/img/GEORUN.png" alt="" />
        <p>    Notre cabinet de géomètre-expert exerce une profession libéral dont l’activité est encadrée par la loi (loi du 7 mai 1946). L’accès à la profession est protégé (diplôme d’ingénieur de niveau bac + 5 ou diplôme de géomètre-expert foncier DPLG) garantissant la maîtrise de solides compétences à la fois techniques et juridiques. Pour exercer son activité, un géomètre-expert doit être inscrit au tableau de l’Ordre des géomètres-experts. Il est également soumis à de nombreuses obligations : respect de règles déontologiques, formation continue, assurance, transparence du prix de ses prestations…</p>
       
      </section>
      <section className='dark'>
        <h1>Qui somme nous ?</h1>
        <p>Nous sommes un Cabinet de géomètre expert implanté dans le sud de l'île. Nous avons une expèrience de plus de 25 ans dans le domaine de la cortographie, du bornage et de la topographie. Nous avons plus de 25 collobarateur à votre service, la relation client et leur satisfaction est au coeur de notre attention  </p>
        <br />
        <img src="./src/img/images.jpeg" alt="" />
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

    <div className='spacer layer1'></div>


      <section >
        <h1>Garantie et déontologie</h1>
        <p>Voluptates iste porro quo molestiae ea illum minus nesciunt optio vel. Quidem soluta asperiores pariatur architecto. Nesciunt exercitationem, fugiat soluta ab praesentium officia, quae harum fugit quaerat a nam accusantium!</p>
        <br />
        <img src="./src/img/geometre.jpg" alt="" />
      </section>
     
      <div className='spacer layer2'></div>


      <section className='red'>
        <h1>Notre cabinet</h1>
        <p>Qui, recusandae aliquid placeat ex, consequuntur harum eos nulla quaerat accusamus, repudiandae dicta. Aliquid, corporis. Neque, tenetur a. Quo, officiis incidunt eligendi aut atque molestias rem aspernatur possimus libero quia.</p>
        <br />
        <img src="./src/img/bigourdan_geometre_expert.jpg" alt="" />
      </section>

      <section  className='pink'>
        <h1>Nos Activités</h1>
        <p>Vel atque quam vitae molestiae adipisci sapiente ipsa cum alias quibusdam enim repellat, sit, fuga fugit facilis? Magni cumque, cupiditate similique blanditiis sequi quisquam veritatis, repellendus reiciendis explicabo odio corporis.</p>
      </section>
      
      <section>
        <h1>Nous Contacter</h1>
        <p>Quis dolores soluta a magnam iure minima qui numquam blanditiis dolore. Autem fugiat natus doloremque nemo. Esse accusamus impedit, ratione consequuntur amet repudiandae, laborum perferendis enim iste rem, ducimus natus.</p>
      </section>
    </main>
  )
}

export default Accueil
