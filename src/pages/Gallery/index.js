import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { db } from "../../firebase";

function Gallery1() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
      db.collection('datas').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map((doc) => doc.data()))
      })
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
 
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
 
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Our Gallery</h2>
          </div>  {/* page banner cont */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
  {/*====== PAGE BANNER PART ENDS ======*/}
  {/*====== ABOUT PART START ======*/}
  <section id="about-page" className="pt-1 pb-110">
    <div className="container">
    <Gallery photos={posts} onClick={openLightbox} />
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={posts.map(x => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default Gallery1