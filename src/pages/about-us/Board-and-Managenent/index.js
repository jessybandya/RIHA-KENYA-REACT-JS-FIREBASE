import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function BoardAndManagement() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Board and Management</h2>
          </div>  {/* page banner cont */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
  {/*====== PAGE BANNER PART ENDS ======*/}
  {/*====== ABOUT PART START ======*/}
  <section id="teachers-page" className="pt-90 pb-120 gray-bg">
  <div className="container">
    <div className="row">
      <div style={{border: '2px solid #36db00', borderRadius:10}} className="col-lg-3 col-sm-6">
        <div className="singel-teachers mt-30 text-center">
          <div className="image">
            <img src="wp-content/uploads/2020/09/Director.jpg" alt="Teachers" />
          </div>
          <div className="cont">
          <a href="#"><h6>Alexis Bandyatuyaga</h6></a>
          <span>Executive Director</span>
        </div>
        </div> {/* singel teachers */}
      </div>
      <div   style={{border: '2px solid #36db00', borderRadius:10}} className="col-lg-3 col-sm-6">
        <div className="singel-teachers mt-30 text-center">
          <div className="image">
            <img src="wp-content/uploads/2020/09/chairman.jpg" alt="Teachers" />
          </div>
          <div className="cont">
          <a href="#"><h6>Christopher Byamungu</h6></a>
          <span>Asst. Executive Director</span>
        </div>
        </div> {/* singel teachers */}
      </div>
      <div style={{border: '2px solid #36db00', borderRadius:10}} className="col-lg-3 col-sm-6">
      <div className="singel-teachers mt-30 text-center">
        <div className="image">
          <img src="wp-content/uploads/2020/09/secretary.jpg" alt="Teachers" />
        </div>
        <div className="cont">
          <a href="#"><h6>Amos Gerson</h6></a>
          <span>Secretary</span>
        </div>
      </div> {/* singel teachers */}
    </div>
    <div style={{border: '2px solid #36db00', borderRadius:10}} className="col-lg-3 col-sm-6">
      <div className="singel-teachers mt-30 text-center">
        <div className="image">
          <img src="wp-content/uploads/2020/09/img20200904_15021844.jpg" alt="Teachers" />
        </div>
        <div className="cont">
          <a href="#"><h6>Andre Nsaguye</h6></a>
          <span>Asst. Secretary</span>
        </div>
      </div> {/* singel teachers */}
    </div>
      <div style={{border: '2px solid #36db00', borderRadius:10}} className="col-lg-3 col-sm-6">
        <div className="singel-teachers mt-30 text-center">
          <div className="image">
            <img src="wp-content/uploads/2020/09/photo.jpg" alt="Teachers" />
          </div>
          <div className="cont">
          <a href="#"><h6>Nadia Sultana</h6></a>
          <span>Treasurer</span>
        </div>
        </div> {/* singel teachers */}
      </div>
      <div style={{border: '2px solid #36db00', borderRadius:10}} className="col-lg-3 col-sm-6">
        <div className="singel-teachers mt-30 text-center">
          <div className="image">
            <img src="wp-content/uploads/2020/09/IMG-20200905-WA0006-150x150-removebg-preview.png" alt="Teachers" />
          </div>
          <div className="cont">
          <a href="#"><h6>Mireille Kwizera</h6></a>
          <span>Asst. Treasurer</span>
        </div>
        </div> {/* singel teachers */}
      </div>
    </div> {/* row */}

  </div> {/* container */}
</section>
    <Footer />
    </div>
  )
}

export default BoardAndManagement