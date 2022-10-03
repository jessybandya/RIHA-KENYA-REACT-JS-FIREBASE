import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function Education() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Education</h2>
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
            <h5>Education</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-440" className="post-440 page type-page status-publish hentry">
          <div className="entry-content">
            <p>We provide displaced and vulnerable children and youth with basic education in Dadaab, Kakuma refugee camps and other marginalized areas. Our education teams in both refugee and host community schools:</p>
            <ul>-<li>provide vocational training where students receive professional certification in trades like computer skills, journalism, media and photography, electrical and solar installation, hairdressing and beauty therapy and tailoring and dress making</li>-<li>make sure that children and youth who have missed out on education can catch up with their peers, through accelerated learning and youth programmes</li>-<li>provide children and teachers with learning and teaching materials</li>-<li>conduct continuous professional development for teachers</li>-<li>Orphans and Vulnerable Children care and education</li>-<li>Girls education.</li>-<li>Support to rural schools.</li>-<li>Trainings of disadvantaged rural youths on vocational knowledge and practical skills for employment as well as economic and human development in the rural areas.</li>-<li>Trainings  to promote gender equality and women empowerment, prevention of Gender Based Violence in the rural areas. Uniting rural men and women to eradicate violence and become peace makers.</li>-<li>Educating on issues that affect community life and creating a stronger sense of community spirit.</li></ul>
            <p />
          </div>{/* .entry-content */}
        </article>{/* #post-## */}        </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default Education