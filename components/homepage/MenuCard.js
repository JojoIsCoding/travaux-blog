
import menuCardStyles from '/styles/homepage/menuCard.module.css'
import Installations from './Installations'
import RecentPosts from './RecentPosts'
import BottomForm from './BottomForm'
import BannerImage from './BannerImage'
import Link from 'next/link'

const MenuCard = () => {
    return (
        <div>

            <BannerImage/>

            <div className={`${menuCardStyles.normalDiv}`}>
            <div id='Toiture' className={`${menuCardStyles.blankSpace}`}>‎ </div>
            <div className={`${menuCardStyles.categoryBlock}`}><div>Toiture</div></div>
            <div className={`${menuCardStyles.cardContainer}`}>
                <div className={`${menuCardStyles.cardDiv}`}>
                    <div className={`${menuCardStyles.image}`}  data-aos="fade-left" data-aos-duration="1000">
                        <img src="/assets/landscape/toiture-ls.jpg" className={`${menuCardStyles.image}`} alt="house" />
                    </div>
                    <div className={`${menuCardStyles.text}`}  data-aos="fade-left" data-aos-duration="1000">
                       <h2>Une toiture en bon état est importante</h2>
                        <p>Beaucoup d&apos;aspects du confort au sein de votre domicile sont largement liés
                            à l&apos;état dans lequel votre toiture se trouve. Aussi, vous devez prendre des mesures qui
                            pour que le tout soit bien fonctionnel.</p>
                            <div className='buttonContainer'><div><button className='normalButton'>
                            <Link href="/1/toiture"><a>En lire plus</a></Link></button></div></div>
                    </div> 
                </div>
            </div>
        </div>

            <div className={`${menuCardStyles.alternateDiv}`}>
            <div id='Façade' className={`${menuCardStyles.blankSpace}`}>‎ </div>
            <div className={`${menuCardStyles.categoryBlock}`}>Façade</div>
            <div className={`${menuCardStyles.cardContainer}`}>
                <div className={`${menuCardStyles.cardDiv}`}>
                    <div className={`${menuCardStyles.image}`} data-aos="fade-right" data-aos-duration="1000">
                        <img src="/assets/uncropped/façade-2.jpg" className={`${menuCardStyles.image}`} alt="house" />
                    </div>
                    <div className={`${menuCardStyles.text}`} data-aos="fade-right" data-aos-duration="1000">
                        <h2>Procédez à un ravalement de façade</h2>
                        <p>Les façades de la maison impactent autant l&apos;aspect esthétique de celle-ci que
                            ses performances énergétiques. Aussi, quand cela s&apos;impose, il est nécessaire de procéder
                            à un ravalement de façade en bonne et due forme.</p>
                            <div className='buttonContainer'><div><button className='normalButton'>
                            <Link href="/2/facade"><a>En lire plus</a></Link></button></div></div>
                    </div>
                </div>
            </div>
            </div>

            <div className={`${menuCardStyles.normalDiv}`}>
            <div id='Menuiserie' className={`${menuCardStyles.blankSpace}`}>‎ </div>
            <div className={`${menuCardStyles.categoryBlock}`}>Menuiserie</div>
            <div className={`${menuCardStyles.cardContainer}`}>
                <div className={`${menuCardStyles.cardDiv}`}>
                    <div className={`${menuCardStyles.image}`} data-aos="fade-left" data-aos-duration="1000">
                        <img src="/assets/uncropped/menuiserie-1.jpg" className={`${menuCardStyles.image}`} alt="house" />
                    </div>
                    <div className={`${menuCardStyles.text}`} data-aos="fade-left" data-aos-duration="1000">
                        <h2>Optez pour les meilleures menuiseries</h2>
                        <br />
                        <p>Les éléments tels que les escaliers, portes et fenêtres doivent être choisis
                            avec grand soin. S&apos;ils présentent des signes d&apos;usure, il ne faut pas trop tarder
                            avant de procéder à des travaux pour en faire la rénovation.</p>                            
                            
                            <div className='buttonContainer'><div><button className='normalButton'>
                            <Link href="/3/menuiserie"><a>En lire plus</a></Link></button></div></div>
                    </div>
                </div>
            </div>                
            </div>


            <div className={`${menuCardStyles.installationsContainer}`}>
            <div id='Installations' className={`${menuCardStyles.blankSpace}`}>‎ </div>
            <div className={`${menuCardStyles.categoryBlock}`}>Installations</div>
            <Installations />
            </div>
            
            <div id='Récents' className={`${menuCardStyles.blankSpace}`}>‎ </div>
            <div className={`${menuCardStyles.categoryBlock}`}>Récents</div>

            <RecentPosts />

            <div className={`${menuCardStyles.recentsRoute}`}>
                <div className={`${menuCardStyles.recentsRouteText}`}><Link href="/recents"><a>En lire plus</a></Link></div></div>

            <div id='ContactezNous' className={`${menuCardStyles.blankSpace}`}>‎ </div>
            <div className={`${menuCardStyles.categoryBlock}`}>Contactez-nous</div>

            <BottomForm />            

        </div>
    )
}

export default MenuCard
