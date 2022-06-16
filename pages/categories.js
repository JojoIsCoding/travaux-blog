import CategoryBanner from '../components/elementsTemplates/CategoryBanner'
import Navbar from '../components/elementsTemplates/Navbar'
import Footer from '../components/Footer'
import BottomPageForm from '../components/elementsTemplates/BottomPageForm'
import categoriesStyles from '../styles/categories.module.css'

const categories = () => {
  return (
    <div>
      <Navbar />
      <CategoryBanner />

      <div className={`container`}>
        <div className={`row`}>
          <div className={`${categoriesStyles.mainContent} offset-1 col-8`}>

            <div className={`${categoriesStyles.categoryCard}`}>
            <h1>Assurez une bonne aération de votre maison</h1>
            <div className={`${categoriesStyles.smallText}`}>20/05/2022 | Aération, Pose de ventilation Alençon </div>
            <img className={`${categoriesStyles.cardImage}`} src="/assets/landscape/aération-ls.jpg" alt="image" />
            <p>Lorsqu’il s’agit de rénover une maison, quelques étapes sont à prendre en compte. 
              En effet, vous pouvez réaliser la rénovation de votre logement par vos propres moyens. 
              Seulement, il y a des interventions qui demandent des avis professionnels.
              <br /><a className='readMore' href="#">Lire la suite</a>
            </p>
            </div>

            <div className={`${categoriesStyles.categoryCard}`}>
            <h1>Préparez le toit pour la saison des pluies</h1>
            <div className={`${categoriesStyles.smallText}`}>20/05/2022 | Aération, Pose de ventilation Alençon </div>
            <img className={`${categoriesStyles.cardImage}`} src="/assets/maison/house-4.jpg" alt="image" />
            <p>Lorsqu’il s’agit de rénover une maison, quelques étapes sont à prendre en compte. 
              En effet, vous pouvez réaliser la rénovation de votre logement par vos propres moyens. 
              Seulement, il y a des interventions qui demandent des avis professionnels.
              <br /><a className='readMore' href="#">Lire la suite</a>
            </p>
            </div>

            <div className={`${categoriesStyles.categoryCard}`}>
            <h1>Choisir la peinture pour repeindre la façade</h1>
            <div className={`${categoriesStyles.smallText}`}>20/05/2022 | Aération, Pose de ventilation Alençon </div>
            <img className={`${categoriesStyles.cardImage}`} src="/assets/maison/house-2.jpg" alt="image" />
            <p>Lorsqu’il s’agit de rénover une maison, quelques étapes sont à prendre en compte. 
              En effet, vous pouvez réaliser la rénovation de votre logement par vos propres moyens. 
              Seulement, il y a des interventions qui demandent des avis professionnels.
              <br /><a className='readMore' href="#">Lire la suite</a>
            </p>
            </div>

            <div className={`${categoriesStyles.categoryCard}`}>
            <h1>Assurez une bonne aération de votre maison</h1>
            <div className={`${categoriesStyles.smallText}`}>20/05/2022 | Aération, Pose de ventilation Alençon </div>
            <img className={`${categoriesStyles.cardImage}`} src="/assets/maison/house-7.jpg" alt="image" />
            <p>Lorsqu’il s’agit de rénover une maison, quelques étapes sont à prendre en compte. 
              En effet, vous pouvez réaliser la rénovation de votre logement par vos propres moyens. 
              Seulement, il y a des interventions qui demandent des avis professionnels.
              <br /><a className='readMore' href="#">Lire la suite</a>
            </p>
            </div>

          </div>

          <div className={`${categoriesStyles.sideContent} col-3`}>
            <div className={`${categoriesStyles.sidecardBox}`}>A lire également</div>

            <div className={`${categoriesStyles.sidecardElement}`}>
              <img className={`${categoriesStyles.sidecardImage}`} src="/assets/landscape/toiture-ls.jpg" alt="image" width="100%" />
              <h4>Une bonne toiture contre les intempéries</h4>
              <div className={`${categoriesStyles.smallText}`}>20/05/2022 | Toiture, Pose de toit Alençon </div>
            </div>

            <div className={`${categoriesStyles.sidecardElement}`}>
              <img className={`${categoriesStyles.sidecardImage}`} src="/assets/landscape/panneaux-solaires-ls.jpg" alt="image" width="100%" />
              <h4>Installez vos panneaux solaires sans tarder</h4>
              <div className={`${categoriesStyles.smallText}`}>20/05/2022 | Panneaux Solaires, Pose de panneaux solaires Alençon </div>
            </div>

            <div className={`${categoriesStyles.sidecardElement}`}>
              <img className={`${categoriesStyles.sidecardImage}`} src="/assets/landscape/chauffage-ls.jpg" alt="image" width="100%" />
              <h4>Installez vos panneaux solaires sans tarder</h4>
              <div className={`${categoriesStyles.smallText}`}>20/05/2022 | Chauffage, Energie écologique Alençon </div>
            </div>


          </div>
        </div>
      </div>

      <div className={`pagination`}>
        <span>Page Précente</span> - <span> 1 </span> - <span>Page Suivante</span>
        </div>
      <BottomPageForm />
      <Footer />
    </div>
  )
}

export default categories
