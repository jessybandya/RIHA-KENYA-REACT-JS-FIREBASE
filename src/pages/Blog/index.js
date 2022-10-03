import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { db } from "../../firebase"
import Post from './Post'
import SearchBar from "material-ui-search-bar";

function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('blogs').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data(),
            })));
        })
    }, []);

  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Our Blogs</h2>
          </div>  {/* page banner cont */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
  {/*====== PAGE BANNER PART ENDS ======*/}
  {/*====== ABOUT PART START ======*/}

  <section id="about-page" className=" pb-110">
    <div className="container">
      <div className="row">
          <div className="about-cont">
          <section id="event-page" className="pt-1 pb-120 gray-bg">
          <SearchBar
          style={{margin:10}}
         />
          <div className="container">
            <div className="row">
            {
                posts?.map(({id, post}) => (
                   <Post
                   key={id} 
                   blogId={post.blogId}
                   title={post.title}
                   desc={post.desc}
                   timestamp={post.timestamp}
                   author={post.author}
                   />
                 ))
 }
            </div> {/* row */}
          </div> {/* container */}
        </section>
        
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default Blog