import singlePageBannerStyles from '/styles/elementsTemplates/singlePageBanner.module.css'

const CategoryBanner = () => {
  return (
    <div className={`${singlePageBannerStyles.main}`}>
      <div className={`${singlePageBannerStyles.style} mx-0`}>
            <div className={`${singlePageBannerStyles.bannerContainer} mx-0`}>
              <img className={`${singlePageBannerStyles.bannerImage} mx-0`}
            src="./assets/landscape/chauffage-ls.jpg" alt="Image" /></div>
            <div className={`${singlePageBannerStyles.bannerText}`}>
              <div className={`${singlePageBannerStyles.bannerTextCentered}`}>Chauffage
              <br /><br />
              <span className={`${singlePageBannerStyles.bannerTextSmall}`}>
              Gardez votre maison bien au chaud
                <br />avec un chauffage adéquat</span>
              </div>
              
              </div>
      </div>
    </div>
  )
}

export default CategoryBanner
