import installationsStyles from '/styles/homepage/installations.module.css'
import Link from 'next/link'

const Installations = () => {
  return (

    <div className={`${installationsStyles.container} row mx-auto`}>

      <div className={`${installationsStyles.installCards} col-6 shadow-lg`} data-aos="fade-up" data-aos-duration="1000">
      <div>
        <img src="/assets/isolation-1.jpg" className={`${installationsStyles.bgImage}`} alt="isolation" />
      </div>
      <div className={`${installationsStyles.textInCard}`}>
      <h2>Isolation</h2>
      <p>Les isolants placés à des endroits stratégiques de la maison
        assurent qu&apos;on ne soit pas sujets à des pertes de chaleur. 
        Leur intégrité doit donc être assurée en tout temps.
      </p>
      
      <div className='buttonContainer'><div><button className='normalButton'>
       <Link href="/4/isolation"><a>En lire plus</a></Link></button></div></div> 
      </div>
      
      </div>

      <div className={`${installationsStyles.installCards} col-6 shadow-lg`}  data-aos="fade-up" data-aos-duration="1000">
      <div>
        <img src="/assets/chauffage-2.jpg" className={`${installationsStyles.bgImage}`} alt="isolation" />
      </div>
      <div className={`${installationsStyles.textInCard}`}>
      <h2>Chauffage</h2>
      <p>Un système optimisé de chauffage est votre meilleur
        allié lors des baisses de températures, que ce soit la nuit ou en hiver.
        En cas de panne, ou de baisse de performances, des mesures peuvent être à prendre.
      </p>  
      <div className='buttonContainer'><div><button className='normalButton'>
       <Link href="/5/chauffage"><a>En lire plus</a></Link></button></div></div> 
      </div>
      </div>

      <div className={`${installationsStyles.installCards} col-6 shadow-lg`}  data-aos="fade-up" data-aos-duration="1000">
      <div>
        <img src="/assets/aération-1.jpg" className={`${installationsStyles.bgImage}`} alt="isolation" />
      </div>
      <div className={`${installationsStyles.textInCard}`}>
      <h2>Ventilation</h2>
      <p>Une bonne ventilation vous assure de l&apos;air frais pendant
        les saisons chaudes. si vous avez besoin d&apos;une réparation de ventilation,
        il est mieux de se tourner vers un professionnel.</p>
        
      <div className='buttonContainer'><div><button className='normalButton'>
       <Link href="/6/ventilation"><a>En lire plus</a></Link></button></div></div> 
      </div>   
      </div>
 
      <div className={`${installationsStyles.installCards} col-6 shadow-lg`} data-aos="fade-up" data-aos-duration="1000">
      <div>
        <img src="/assets/panneaux-solaires-1.jpg" className={`${installationsStyles.bgImage}`} alt="isolation" />
      </div>
      <div className={`${installationsStyles.textInCard}`}>
      <h2>Energie Solaire</h2>
      <p>L&apos;utilisation de panneaux solaires est une des options
        à moyen et long terme pour faire des économies d&apos;énergie.
        C&apos;est également une solution écologique, qui ne nuira pas à l&apos;environnement. </p>
        
      <div className='buttonContainer'><div><button className='normalButton'>
       <Link href="/7/solaire"><a>En lire plus</a></Link></button></div></div> 
      </div>   
      </div>    

    </div>


  )
}

export default Installations