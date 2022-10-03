import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function VolunteerWithUs() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Volunteer with Us</h2>
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
            <h5>Volunteer with Us</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-473" className="post-473 page type-page status-publish hentry">
          <div className="entry-content">
            <p><strong>Volunteerism</strong><br />Volunteerism is one of the most powerful means of engaging people in tackling development challenges. It does not only create opportunities for active participation in development but also builds solidarity and trust, lasting friendship or relationship between the volunteers and the beneficiaries.<br />A considerable number of our works are undertaken by volunteers to fill the gaps of employment in the organisation. We value our volunteers and treat them with high esteem.</p>
            <p>Please, consider Volunteering with us to fight hunger, poverty and violence …in the rural areas. By sharing your time, knowledge and skills, you help to make a big positive difference in the lives of the poorest, the oppressed and the disadvantaged people in the rural areas.<br />For volunteering arrangements, feel free to contact us at&nbsp;<a href="mailto:partnership[at]sorudeo.org.ug">info@rihakenya.org</a></p>
            <p><strong>Urgent volunteer opportunities</strong></p>
            <p><strong>Pro pono Lawyers and Legal aid advocates</strong></p>
            <p>The need for legal services among the poorest, the oppressed and the disadvantaged people in the rural areas is overwhelming. According to our survey, there are a big number of widows and other vulnerable women including children whose properties are being seized unjustly by irresponsible people every year. This is just a single case among others. These disadvantaged people cannot afford a lawyer to represent them in court.<br />Please, volunteer with us to help these disadvantaged women, children and other persons in need to attain justice.</p>
            <p><strong>Online Fundraisers</strong></p>
            <p>We believe that online fundraising is a powerful tool to raise funds for our activities and yet it is no easy task if not planned properly. It takes a good preparation, creativity and patience. You can help us meet our fundraising needs; contact us to volunteer in our online fundraising campaign.</p>
            <p><strong>Projects Designers and Projects writers</strong></p>
            <p>We have great work in our secretariat, more especially on planning and designing projects. Our Gender &amp; Projects Officer is in need of help in the field of projects planning and management. Your contributions like an architect in projects’ planning will help our projects to get down quickly, efficiently, safely and successfully.</p>
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

export default VolunteerWithUs