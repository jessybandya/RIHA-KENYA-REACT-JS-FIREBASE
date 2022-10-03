import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function FundRaiseForUs() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Fundraise for Us</h2>
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
            <h5>Fundraise for Us</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-470" className="post-470 page type-page status-publish hentry">
          <div className="entry-content">
            <p><strong>Fundraise for us</strong><br />One by one makes a bundle and unity is strength. When you take action to fundraise for us today, you will be taking direct action to impact the life of a rural disadvantaged child, a widow, a single mother, a jilted wandering woman, a sickler and a poor person who is struggling with the challenges of life.</p>
            <p><strong>Take action and fundraise.</strong><br />Bring together your family and friends to support RIHA KENYA to fight hunger, poverty and violence in the rural areas. You can sacrifice your time and use the power of your voice, talents, social status and social networks to make a positive difference for RIHA KENYA.</p>
            <p><strong>Here is how:</strong><br />Take courage; organize an interesting event in your neighborhood to raise awareness about RIHA KENYA and the need for funds. Share ideas and let your creativity shine! Event ideas can include: a contest like interesting sports, a concert, car wash, documentary viewing, extraordinary dinner, weekly yoga class for health etc.</p>
            <p><strong>-OR ELSE-</strong><br />Create your own online campaign for RIHA KENYA in honor of your birthday or of your beloved birthday, anniversaries of achievements like graduation or personally decide how you want to raise funds and set your goal. Then share with your family, friends and workmates, club, social group or your Church; let them know why RIHA KENYA is important to you and humanity. You can make a big difference in the lives of the poorest, the oppressed and the disadvantaged people in the world.</p>
          </div>{/* .entry-content */}
        </article>{/* #post-## */}    </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default FundRaiseForUs