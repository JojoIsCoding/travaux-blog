import BannerStyles from '/styles/homepage/bannerImage.module.css'
import BannerForm from '/components/FormBanner'

const BannerImage = () => {
  return ( 
    <div>
    <div className={`banner element`}>
        <div className={`${BannerStyles.bgImage} bg-image`}
            style={{ position: 'relative', zIndex: '2' }}>
        </div>
        <div className={`${BannerStyles.bannerText} banner-text row`}
        style={{ position: 'absolute', zIndex: '3' }}>

            <div id="text-in-banner" className={`offset-1 col-md-5 col-11 d-flex flex-column
            align-items-center`}>
                <div className={`${BannerStyles.bannerTitle} banner-title`}>A vos travaux !</div>
                <span className={`${BannerStyles.bannerSmallText}
                banner-small-text`}>Prenez en main les travaux pour
                    <br />votre maison à Alençon.
                    <hr/>
                    Contactez-nous via <span className={`formLink`}><a href="#ContactezNous">notre formulaire</a></span>
                    <br />pour un devis concernant vos travaux.</span>

            </div>
            <div className={`col-12 col-md-6`}>
            <BannerForm/>
            </div>
        </div>
    </div>
</div>
  )
}

export default BannerImage
