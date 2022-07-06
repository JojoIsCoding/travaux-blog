import StickyNavbar from '/components/elementsTemplates/StickyNavbar'
import Footer from '/components/Footer'
import BottomPageForm from '/components/elementsTemplates/BottomPageForm'
import singlePageStyles from '/styles/elementsTemplates/singlepage.module.css'
import singlePageBannerStyles from '/styles/elementsTemplates/singlePageBanner.module.css'
import BannerForm from '/components/FormBanner'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { NextSeo} from 'next-seo'

// getStaticPaths

export const getStaticPaths = async () => {

  const res = await fetch('https://still-dusk-49483.herokuapp.com/api/blogposts/')
  const data = await res.json()

  const paths = data.data.map((post) => {
    return {
      params: {
        id: post.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

// getStaticProps

export const getStaticProps = async (context) => {

  const id = context.params.id
  const res = await fetch('https://still-dusk-49483.herokuapp.com/api/blogposts/' + id + '?populate=*')
  const data = await res.json()
  const postId = id

  const allposts = await fetch('https://still-dusk-49483.herokuapp.com/api/blogposts/?populate=*')
  const allData = await allposts.json()

  return {
    props: {
      postId: postId,
      post: data,
      everyPost: allData
    }
  }
}

const OnePost = ({ everyPost, post, postId }) => {

  let startSlice = parseInt(postId)
  let endSlice = parseInt(postId) + 3

  const length = everyPost.data.length

  if (startSlice >= length - 3) {
    startSlice = startSlice - length + 3
    endSlice = startSlice + 3
  }

  return (
    <div key={post.data.id}>
      <NextSeo
      title ={`${post.data.attributes.category.data.attributes.Name} | ${post.data.attributes.Title}`}/>
      <StickyNavbar />

      <div className={`${singlePageBannerStyles.main}`}>
        <div className={`${singlePageBannerStyles.style} mx-0`}>

          <div className={`${singlePageBannerStyles.bannerContainer} mx-0`}>
            <img className={`${singlePageBannerStyles.bannerImage} mx-0`}
              src={`${post.data.attributes.imageLink}`} alt="Image" />
          </div>

          <div className={`${singlePageBannerStyles.bannerText} d-flex flex-row`}>
            {/* <div className={`${singlePageBannerStyles.bannerTextCentered}`}></div> */}
      <div id="text-in-banner" className={`offset-1 col-md-5 col-11 d-flex flex-column
            align-items-center py-5`}>
            <h1 className={`${singlePageBannerStyles.bannerTextCentered}`}>{post.data.attributes.Title}</h1>
            </div>
            <div className={`col-12 col-md-6`}>
            <BannerForm/>
            </div>            
          </div>
        </div>
      </div>



      <div className={`container`}>
        <div className={`row`}>
          <div className={`${singlePageStyles.mainContent} col-lg-9 col-12`}>

            <div className={`${singlePageStyles.categoryCard}`}>
              <div key={post.data.id + "post"} className={`${singlePageStyles.smallText}`}> {post.data.attributes.Date} | {post.data.attributes.category.data.attributes.Name}, {post.data.attributes.tags.data.slice(0).map((tag) => {return(<span key={Math.random()}>{tag.attributes.name}</span>)})} </div>
              <ReactMarkdown>{post.data.attributes.Content}</ReactMarkdown>
            </div>
          </div>

          <div className={`${singlePageStyles.sideContent} col-lg-3 col-12`}>
            <div className={`${singlePageStyles.sidecardBox}`}>A lire également</div>

                <div className={`${singlePageStyles.sidecardcontainer} col-12 px-0`}>
            {everyPost.data.slice(startSlice, endSlice).map(function (post) {

              return (
                <div key={post.id} className={`${singlePageStyles.sidecardElement} col-12 px-0`}>
                  <img className={`${singlePageStyles.sidecardImage}`} src={`${post.attributes.imageLink}`} width="100%" alt="image" />
                  <h4><Link href={`/p/${post.id}/${post.attributes.slug}`}><a className={`${singlePageStyles.asideTitle}`}>{post.attributes.Title}</a></Link></h4>
                  <div key={post.id + "smalltext"} className={`${singlePageStyles.smallText}`}>{post.attributes.Date} | {post.attributes.category.data.attributes.Name}, {post.attributes.tags.data.slice(0).map((tag) => {return(<span key={Math.random()}>{tag.attributes.name}</span>)})} </div>
                  <div className={`${singlePageStyles.smallExcerpt}`}>{post.attributes.metadescription}</div> 
                </div>
              )
            }
                )}
            </div>

          </div>
        </div>
      </div>
      <BottomPageForm />
      <Footer />
    </div>
  )
}

export default OnePost
