import StickyNavbar from '/components/elementsTemplates/StickyNavbar'
import singlePageBannerStyles from '/styles/elementsTemplates/singlePageBanner.module.css'
import singlePageStyles from '/styles/elementsTemplates/singlepage.module.css'
import Footer from '/components/Footer'
import BottomPageForm from '/components/elementsTemplates/BottomPageForm'
import BannerForm from '/components/FormBanner'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Link from 'next/link'
import { NextSeo} from 'next-seo'

export const getStaticProps = async () => {

  const res = await fetch('https://still-dusk-49483.herokuapp.com/api/blogposts/?populate=*');
  const data = await res.json();

  const length = data.data.length

  return {
    props: { 
      posts: data,
      length: length
    }
  }
}

const Posts = ({ posts, length }) => {

  
  const router = useRouter()

  const [page, setPage] = useState(1)

  function prev() {
    router.push(`/recents?page=${page - 1}`);
    setPage(page - 1)
  }

  function next() {
    router.push(`/recents?page=${page + 1}`);
    setPage(page + 1)
  }

  let startSlice = 0 + ((page - 1) * 9)
  let endSlice = startSlice + 9
  let maxPage = Math.ceil(length / 9)

  return (

    <div key='200'>
      <NextSeo
      title ="A Vos Travaux | Tirez parti au mieux de votre maison à Alençon"/>

      <StickyNavbar />

      <div className={`${singlePageBannerStyles.main}`}>
        <div className={`${singlePageBannerStyles.style} mx-0`}>
          <div className={`${singlePageBannerStyles.bannerContainer} mx-0`}>
            <img className={`${singlePageBannerStyles.bannerImage} mx-0`}
              src={`/assets/aération-1.jpg`} alt="Image" />
              </div>

          <div className={`${singlePageBannerStyles.bannerText} d-flex flex-row`}>
          <div id="text-in-banner" className={`offset-1 col-md-5 col-11 d-flex flex-column
            align-items-start py-5`}>
             <h1 className={`${singlePageBannerStyles.singlePageTitle}`}>Articles Récents</h1>
              <div className={`${singlePageBannerStyles.smallBannerText}`}>Prenez soin de votre maison à Alençon</div>
            </div>
            <div className={`col-12 col-md-6`}>
            <BannerForm/>
            </div> 
          </div>

        </div>
      </div>
 
      <div className={`container`}>
        <div className={`row`}>
          <div className={`container ${singlePageStyles.mainContent}`}>
            <div className={`row ${singlePageStyles.recentPosts}`}>
              {posts.data.slice(startSlice, endSlice).map(post => (
                <div key={post.id} className={`col-12 col-lg-4 col-md-6`}>
                  <img src={`${post.attributes.imageLink}`} width="100%" alt="image"/>
                  <br/>
                  <Link href={'/p/' + post.id + '/' + post.attributes.slug}
                    key={post.id}>
                    <div className={`${singlePageStyles.recentTitle}`}><a>{post.attributes.Title.toString()}</a></div>
                  </Link>
                    <div className={`${singlePageStyles.recentSmallText}`}>
                      {post.attributes.Date} | {post.attributes.category.data.attributes.Name}, {post.attributes.tags.data.slice(0).map((tag) => {return(<> {tag.attributes.name}</>)})}
                    </div>
                    <div className={`${singlePageStyles.recentExerpt}`}>
                      {post.attributes.metadescription}
                    </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className={`pagination`}>

      <input type="image" src="/prev.png" width="50px" id='prev' onClick={() => { prev(); }}
          disabled={page <= 1}></input> <div id="pageNumber" className={`shadow-lg`}> {page} </div> <input type="image" src="/next.png" width="50px" id='next' onClick={() => { next(); }}
            disabled={page == maxPage}></input>
      </div>

      <BottomPageForm />
      <Footer />
    </div>
  )
}

export default Posts