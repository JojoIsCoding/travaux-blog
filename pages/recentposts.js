import Navbar from '../components/elementsTemplates/Navbar'
import Footer from '../components/Footer'
import BottomPageForm from '../components/elementsTemplates/BottomPageForm'
import singlePageBannerStyles from '/styles/elementsTemplates/singlePageBanner.module.css'
import recentPostsStyles from '/styles/elementsTemplates/recentPosts.module.css'
import categoryBannerStyles from '/styles/elementsTemplates/categoryBanner.module.css'

const singlePage = () => {
    return (
        <div>

            <Navbar />

            <div className={`${singlePageBannerStyles.main}`}>
                <div className={`${singlePageBannerStyles.style} mx-0`}>
                    <div className={`${singlePageBannerStyles.bannerContainer} mx-0`}>
                        <img className={`${singlePageBannerStyles.bannerImage} mx-0`}
                            src="./assets/façade-1.jpg" alt="Image" /></div>
                    <div className={`${categoryBannerStyles.bannerText}`}>
                        <div className={`${categoryBannerStyles.bannerTextCentered}`}>
                            <h1>Assurez une bonne aération de votre maison</h1>
              <span className={`${categoryBannerStyles.bannerTextSmall}`}>
              Gardez votre maison bien au chaud
                <br />avec un chauffage adéquat</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`container ${recentPostsStyles.cardContainer}`}>
                <div className={`row`}>

                <div className={`col-4 ${recentPostsStyles.blogcard}`}>
                <img src="/assets/maison/house-1.jpg" alt="image" width="100%"/>
                <div className={`smallText`}>
                20/05/2022 | Toiture, Pose de toit Alençon
                    </div> 
                    <br/>
                <h3>Rénovez votre intérieur</h3>
                <p>Une maison bien rénovée est bien plus esthétique et plaisante</p>
                </div>

                <div className={`col-4 ${recentPostsStyles.blogcard}`}>
                <img src="/assets/maison/house-2.jpg" alt="image" width="100%"/>
                <div className={`smallText`}>
                20/05/2022 | Toiture, Pose de toit Alençon
                    </div> 
                    <br/>
                <h3>Refaites votre toiture</h3>
                <p>Une maison bien rénovée est bien plus esthétique et plaisante</p>
                </div>

                <div className={`col-4 ${recentPostsStyles.blogcard}`}>
                <img src="/assets/maison/house-3.jpg" alt="image" width="100%"/>
                <div className={`smallText`}>
                20/05/2022 | Toiture, Pose de toit Alençon
                    </div> 
                    <br/>
                <h3>Quels matériaux pour le toit ?</h3>
                <p>Une maison bien rénovée est bien plus esthétique et plaisante</p>
                </div>


                <div className={`col-4 ${recentPostsStyles.blogcard}`}>
                <img src="/assets/maison/house-4.jpg" alt="image" width="100%"/>
                <div className={`smallText`}>
                20/05/2022 | Toiture, Pose de toit Alençon
                    </div> 
                    <br/>
                <h3>Bien décorer la fenêtre</h3>
                <p>Une maison bien rénovée est bien plus esthétique et plaisante</p>
                </div>

                <div className={`col-4 ${recentPostsStyles.blogcard}`}>
                <img src="/assets/maison/house-5.jpg" alt="image" width="100%"/>
                <div className={`smallText`}>
                20/05/2022 | Toiture, Pose de toit Alençon
                    </div> 
                    <br/>
                <h3>Aménager votre espace extérieur</h3>
                <p>Une maison bien rénovée est bien plus esthétique et plaisante</p>
                </div>

                <div className={`col-4 ${recentPostsStyles.blogcard}`}>
                <img src="/assets/maison/house-6.jpg" alt="image" width="100%"/>
                <div className={`smallText`}>
                20/05/2022 | Toiture, Pose de toit Alençon
                    </div> 
                    <br/>
                <h3>Décorez la devanture de la maison</h3>
                <p>Une maison bien rénovée est bien plus esthétique et plaisante</p>
                </div>

                
                <div className={`col-4 ${recentPostsStyles.blogcard}`}>
                <img src="/assets/maison/house-7.jpg" alt="image" width="100%"/>
                <div className={`smallText`}>
                20/05/2022 | Toiture, Pose de toit Alençon
                    </div> 
                    <br/>
                <h3>Rénovez votre maison</h3>
                <p>Une maison bien rénovée est bien plus esthétique et plaisante</p>
                </div>

                <div className={`col-4 ${recentPostsStyles.blogcard}`}>
                <img src="/assets/maison/house-8.jpg" alt="image" width="100%"/>
                <div className={`smallText`}>
                20/05/2022 | Toiture, Pose de toit Alençon
                    </div> 
                    <br/>
                <h3>Rénovez votre maison</h3>
                <p>Une maison bien rénovée est bien plus esthétique et plaisante</p>
                </div>

                <div className={`col-4 ${recentPostsStyles.blogcard}`}>
                <img src="/assets/maison/house-9.jpg" alt="image" width="100%"/>
                <div className={`smallText`}>
                20/05/2022 | Toiture, Pose de toit Alençon
                    </div> 
                    <br/>
                <h3>Rénovez votre maison</h3>
                <p>Une maison bien rénovée est bien plus esthétique et plaisante</p>
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

export default singlePage
