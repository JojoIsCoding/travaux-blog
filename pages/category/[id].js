import StickyNavbar from '/components/elementsTemplates/StickyNavbar'
import singlePageBannerStyles from '/styles/elementsTemplates/singlePageBanner.module.css'
import singlePageStyles from '/styles/elementsTemplates/singlepage.module.css'
import Footer from '/components/Footer'
import BottomPageForm from '/components/elementsTemplates/BottomPageForm'
import BannerForm from '/components/FormBanner'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { NextSeo} from 'next-seo'

export const getStaticPaths = async () => {

  const res = await fetch('https://still-dusk-49483.herokuapp.com/api/categories/')
  const data = await res.json()

  const paths = data.data.map(category => {
    return {
      params: {
        id: category.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {

  const id = context.params.id
  const res = await fetch('https://still-dusk-49483.herokuapp.com/api/categories/' + id + '?populate=*')
  const data = await res.json()
  const cat = id

  const length = data.data.attributes.blogposts.data.length

  return {
    props: {
      cat: cat,
      category: data,
      length: length
    }
  }
}

const CatSlug = ({ category, length, cat }) => {

  //console.log("we're in !")

  // pagination 

  const router = useRouter()

  const [page, setPage] = useState(1)
  
  useEffect(() => {
      setPage(1)
  }, [cat])


  function prev() {
    router.push(`/${category.data.id}/${category.data.attributes.slug}?page=${page - 1}`);
    setPage(page - 1)
  }

  function next() {
    router.push(`/${category.data.id}/${category.data.attributes.slug}?page=${page + 1}`);
    setPage(page + 1)
  }

  let startSlice = 0 + ((page - 1) * 4)
  let endSlice = startSlice + 4
  let maxPage = Math.ceil(length / 4)

  return (
    <div key={category.data.id}>
      <NextSeo
      title ={`${category.data.attributes.Name} | ${category.data.attributes.description}`}/>
      
      <StickyNavbar />
      <div className={`${singlePageBannerStyles.main}`}>
        <div className={`${singlePageBannerStyles.style} mx-0`}>
          <div className={`${singlePageBannerStyles.bannerContainer} mx-0`}>
            <img className={`${singlePageBannerStyles.bannerImage} mx-0`}
              src={`${category.data.attributes.categoryImageLink}`} alt="Image" />
              </div>

          <div className={`${singlePageBannerStyles.bannerText} d-flex flex-row`}>
          <div id="text-in-banner" className={`offset-1 col-md-5 col-11 d-flex flex-column
            align-items-center py-5`}>
             <h1 className={`${singlePageBannerStyles.singlePageTitle}`}>{category.data.attributes.Name}</h1>
              <div className={`${singlePageBannerStyles.smallBannerText}`}>{category.data.attributes.description}</div>
            </div>
            <div className={`${singlePageBannerStyles.smallBannerForm} col-12 col-md-6`}>
            <BannerForm/>
            </div> 
          </div>


        </div>
      </div>

      <div className={`container`}>
        <div className={`row`}>
          <div className={`${singlePageStyles.mainContent} col-md-9 col-12`}>
            {category.data.attributes.blogposts.data.slice(startSlice, endSlice).map(function (post) {

              return (
                <div key={post.id}>
                  <div className={`${singlePageStyles.largeCardText}`}>{post.attributes.Title}</div>
                  <div className={`${singlePageStyles.smallText}`}> {post.attributes.Date} | {category.data.attributes.Name}</div>
                  <img src={`${post.attributes.imageLink}`} width="100%" alt="image" />

                  <div className={`${singlePageStyles.excerpt}`}><p>{post.attributes.excerpt}
                  </p></div>
                  
                  <div className={`${singlePageStyles.readMore}`}>
                    <Link href={'/p/' + post.id + '/' + post.attributes.slug}><a>En lire plus</a></Link></div><br />
                </div>
              )
            })}
          </div>

          <div className={`${singlePageStyles.sideContent} col-md-3 col-12`}>
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

export default CatSlug
