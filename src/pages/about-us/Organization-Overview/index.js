import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function OrganizationOverview() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Organisation’s Overview</h2>
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
            <h5>Organisation’s Overview</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <p>Rural Humanitarian Initiative Association (RIHA) is a self-help rural community based development-oriented organization, non-political, non-governmental, non-profit making and non-denominational organization. <br/>The organization was founded in 2011 by Engineer Alexis Bandyatuyaga and is registered in Kenya in accordance to Section 10 of the Non-governmental Organizations Co-ordination Act, Cap 19 of the laws of Kenya and was issued with Registration Number R.34882.<br/> It seeks to improve the lives of the vulnerable communities in the rural areas through poverty reduction, economic growth and social transformation. It creates programs and projects with the community and for the community that improve the lives of those in need like rural women, people with disabilities (PWD), the sick and HIV/AIDS patients, orphans and vulnerable children (OVC).<br/> In doing this, the organization seeks to eliminate hunger, poverty and violence in the rural areas through sustainable agriculture, provision of water, sanitation &amp;hygiene, education, healthcare, humanitarian help, food security and environmental conservation.<br/> All its initiatives do not discriminate on the basis of religion, politics, ethnicity, race, color, creed, national origin, age, disability, marital status, gender, language or any reason whatsoever. It believes that everyone regardless of any status should be treated equally with respect and dignity.</p>
          </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default OrganizationOverview