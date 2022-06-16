import navbarStyles from '/styles/elementsTemplates/navbar.module.css'

const Navbar = () => {
  return (
    <div>
        <div className={`${navbarStyles.navbar}`}>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#Toiture">Toiture</a></li>
          <li><a href="#Façade">Façade</a></li>
          <li><a href="#Menuiserie">Menuiserie</a></li>
          <li><a href="#Installations">Installations</a></li>
          <li><a href="#Récents">Récents</a></li>
          <li><a href="#ContactezNous">Contactez-Nous</a></li>
      </ul>
        </div>
    </div>
  )
}

export default Navbar
