import StickyNavStyles from '/styles/homepage/stickyNav.module.css'

const StickyNav = () => {
  return (
    <div>
        <div className={`${StickyNavStyles.scrollMenu}`}>
        <ul>
          <li><a href="#"><span className={`${StickyNavStyles.navItem}`}>Accueil</span><span className={`${StickyNavStyles.navIcon}`}><img src='/assets/r6.png' width='35px'/></span></a></li>
          <li><a href="#Toiture"><span className={`${StickyNavStyles.navItem}`}>Toiture</span><span className={`${StickyNavStyles.navIcon}`}><img src='/assets/r2.png' width='35px'/></span></a></li>
          <li><a href="#Façade"><span className={`${StickyNavStyles.navItem}`}>Façade</span><span className={`${StickyNavStyles.navIcon}`}><img src='/assets/r2.png' width='35px'/></span></a></li>
          <li><a href="#Menuiserie"><span className={`${StickyNavStyles.navItem}`}>Menuiserie</span><span className={`${StickyNavStyles.navIcon}`}><img src='/assets/r2.png' width='35px'/></span></a></li>
          <li><a href="#Installations"><span className={`${StickyNavStyles.navItem}`}>Installations</span><span className={`${StickyNavStyles.navIcon}`}><img src='/assets/r5.png' width='35px'/></span></a></li>
          <li><a href="#Récents"><span className={`${StickyNavStyles.navItem}`}>Récents</span><span className={`${StickyNavStyles.navIcon}`}><img src='/assets/r6.png' width='35px'/></span></a></li>
          <li><a href="#ContactezNous"><span className={`${StickyNavStyles.navItem}`}>Contactez-Nous</span><span className={`${StickyNavStyles.navIcon}`}><img src='/assets/r3.png' width='35px'/></span></a></li>
      </ul>
        </div>
    </div>
  )
}

export default StickyNav
