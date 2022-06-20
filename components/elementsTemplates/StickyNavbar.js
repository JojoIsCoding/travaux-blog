import Link from 'next/link'
import stickyNavbarStyles from '/styles/elementsTemplates/stickyNavbar.module.css'
import { useState, useEffect, useRef } from 'react';

  const Navbar = () => { 

// get width of navbar

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = global;
  return {
    width,
    height
  };
}

 const useWindowDimensions = function () {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Component = () => {
  const { height, width } = useWindowDimensions();

  return ({width});
}

const width = Component()
// console.log(width)

// collapse the nav when it's not large

const inputRef = useRef(null);
let change
let isSmall = null

global.onload = () =>{

  isSmall = false

};

let x = inputRef.current
// console.log(x)

change = width.onChange = function() {

// console.log('on change !')
  
   if (width.width > 768) {
// console.log('less small')
  isSmall = false
  }
  
  else if (width.width == undefined) {
    isSmall = false
  }

  else {
// console.log('small')
    isSmall = true
  }}

  const isOpen = true

  const open = e => {
    isOpen = !isOpen
    //console.log("menu Button!")
  }

  const closeNav = e => {

    if (e.clientY > 320 && isOpen) { // when for the whole page, use e.pageY
      document.getElementById('menuIcon').click();
    //console.log("close!")
    isOpen = false
    //console.log(isOpen)
    }

    else {
      //console.log(isOpen)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', closeNav)
    document.getElementById('menuIcon').addEventListener('click', open)
  }, []);


  return (

    <div id="mainDiv" key={14122} className={`${stickyNavbarStyles.mainNavDiv}`}>
        {change()} 
      <div id="navbarSupportedContent" ref={inputRef}
      className={isSmall ? `${stickyNavbarStyles.navbar} collapse` : `${stickyNavbarStyles.navbar} collapse show`}>
        <ul>
          <li><Link href="/" className={`${stickyNavbarStyles.navItem}`}><a>Accueil</a></Link></li>
          <li><Link href="/1/toiture" className={`${stickyNavbarStyles.navItem}`}><a>Toiture</a></Link> </li>
          <li><Link href="/2/facade" className={`${stickyNavbarStyles.navItem}`}><a>Façade</a></Link></li>
          <li><Link href="/3/menuiserie" className={`${stickyNavbarStyles.navItem}`}><a>Menuiserie</a></Link></li>

          <li className={`${stickyNavbarStyles.dropdownResponsive}`}><div className={`${stickyNavbarStyles.dropdown}`}><button className={`${stickyNavbarStyles.dropbtn} ${stickyNavbarStyles.navItem}`}>installations</button>
            <div className={`${stickyNavbarStyles.dropdownContent}`}>
              <Link href="/4/isolation"><a>Isolation</a></Link>
              <Link href="/5/chauffage"><a>Chauffage</a></Link>
              <Link href="/6/ventilation"><a>Ventilation</a></Link>
              <Link href="/7/solaire"><a>Solaire</a></Link></div></div></li>

          <li className={`${stickyNavbarStyles.showAtDropdown}`}> <Link href="/4/isolation"><a>Isolation</a></Link> | <Link href="/5/chauffage"><a>Chauffage</a></Link> | <Link href="/6/ventilation"><a>Ventilation</a></Link> | <Link href="/7/solaire"><a>Solaire</a></Link></li> <br className={`${stickyNavbarStyles.smallBr}`}/>

          <li><Link href="/recents" className={`${stickyNavbarStyles.navItem}`}><a>Récents</a></Link></li>
          <li><a href="#ContactezNous" className={`${stickyNavbarStyles.navItem}`}>Contactez-Nous</a></li>
        </ul>

      </div>

      <div className={`${stickyNavbarStyles.navBlank}`}>‎</div>
      <a className={`${stickyNavbarStyles.ResponsiveIcon}`}  id="menuIcon" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="true" aria-label="Toggle navigation"><img src='/menu-icon.png' width="50px" /></a>

    </div>
  )
}

export default Navbar
