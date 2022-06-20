import StickyNav from '../components/homepage/StickyNav'
import MenuCard from '../components/homepage/MenuCard'
import Footer from '../components/Footer'
import { NextSeo} from 'next-seo'

const index = () => {
  return (
    <div>
      <NextSeo
      title="A Vos Travaux : L'essentiel Pour Votre Maison À Alençon"/>
        <StickyNav/>
        <MenuCard/>
        <Footer/>
    </div>
  )
}

export default index