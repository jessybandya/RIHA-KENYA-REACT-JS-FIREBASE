import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function InternshipsAndVacancies() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Internships and Vacancies</h2>
          </div>  {/* page banner cont */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
  {/*====== PAGE BANNER PART ENDS ======*/}
  {/*====== ABOUT PART START ======*/}
  <section id="about-page" className="pt-70 pb-110">
    <div className="container">
      <div className="row">
        <div className="">
          <div className="section-title mt-50">
            <h5>Internships and Vacancies</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-476" className="post-476 page type-page status-publish hentry">
          <div className="entry-content">
            <p><strong>Internship opportunities</strong><br />RIHA KENYA is offering a lot of internship opportunities to the interested candidates in the fields of: Agriculture, Education, Health, Environmental Conservation, Social and Economic Development. We welcome candidates locally, nationally and internationally. Both interns and researchers are welcome. If you want to have an internship with RIHA KENYA, we are available to serve you, kindly contact us.</p>
            <p>Our Internship Officer is waiting to keep in touch with you and make other necessary arrangements including submission of required documents and your subsequent placements in the area of your specialization and interest. Through practical work assignments, you will be directly exposed to our activities under our five core thematic areas of operation.<br />As professionals, we value your presence with us, your learning experiences and your later relationship with our organization is exceptionally important to us and our people.</p>
            <p><strong>Employment Vacancies</strong><br />We appreciate your interest in RIHA KENYA. Apart from the existing internship opportunities and volunteering positions, we have no remuneration employment vacancies at the moment. Please, keep on checking regularly as any remuneration employment opportunity that arises will be posted here for you.</p>
            <p><strong>Note:</strong>&nbsp;RIHA KENYA does not charge fee at all, at any stage of recruitment exercise; whether during application, processing or training.</p>
            <p />
          </div>{/* .entry-content */}
        </article>{/* #post-## */}     </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default InternshipsAndVacancies