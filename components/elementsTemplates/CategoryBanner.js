import categoryBannerStyles from '/styles/elementsTemplates/categoryBanner.module.css'

const CategoryBanner = () => {
  return (
    <div className={`${categoryBannerStyles.main}`}>
      <div className={`${categoryBannerStyles.style} mx-0`}>
            <div className={`${categoryBannerStyles.bannerContainer} mx-0`}>
              <img className={`${categoryBannerStyles.bannerImage} mx-0`}
            src="./assets/landscape/chauffage-ls.jpg" alt="Image" /></div>
            <div className={`${categoryBannerStyles.bannerText}`}>
              <div className={`${categoryBannerStyles.bannerTextCentered}`}>Chauffage
              <br /><br />
              <span className={`${categoryBannerStyles.bannerTextSmall}`}>
              Gardez votre maison bien au chaud
                <br />avec un chauffage adéquat</span>
              </div>
              
              </div>
      </div>
    </div>
  )
}

export default CategoryBanner
