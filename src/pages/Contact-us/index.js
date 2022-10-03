import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function ContactUs() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Contact Us</h2>
          </div>  {/* page banner cont */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
  {/*====== PAGE BANNER PART ENDS ======*/}
  {/*====== ABOUT PART START ======*/}
  <section id="about-page" className="pt-1 pb-110">
    <div className="container">
      <div className="row">
        <div className="">
          <div className="about-cont">
          <section id="contact-page" className="pt-1 pb-120 gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="contact-from mt-30">
                  <div className="section-title">
                    <h5>Contact Us</h5>
                    <h2>Keep in touch</h2>
                  </div> {/* section title */}
                  <div className="main-form pt-45">
                    <form id="contact-form" action="#" method="post" data-toggle="validator">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="singel-form form-group">
                            <input name="name" type="text" placeholder="Your name" data-error="Name is required." required="required" />
                            <div className="help-block with-errors" />
                          </div> {/* singel form */}
                        </div>
                        <div className="col-md-6">
                          <div className="singel-form form-group">
                            <input name="email" type="email" placeholder="Email" data-error="Valid email is required." required="required" />
                            <div className="help-block with-errors" />
                          </div> {/* singel form */}
                        </div>
                        <div className="col-md-6">
                          <div className="singel-form form-group">
                            <input name="subject" type="text" placeholder="Subject" data-error="Subject is required." required="required" />
                            <div className="help-block with-errors" />
                          </div> {/* singel form */} 
                        </div>
                        <div className="col-md-6">
                          <div className="singel-form form-group">
                            <input name="phone" type="text" placeholder="Phone" data-error="Phone is required." required="required" />
                            <div className="help-block with-errors" />
                          </div> {/* singel form */}
                        </div>
                        <div className="col-md-12">
                          <div className="singel-form form-group">
                            <textarea name="messege" placeholder="Messege" data-error="Please,leave us a message." required="required" defaultValue={""} />
                            <div className="help-block with-errors" />
                          </div> {/* singel form */}
                        </div>
                        <p className="form-message" />
                        <div className="col-md-12">
                          <div className="singel-form">
                            <button type="submit" className="main-btn">Send</button>
                          </div> {/* singel form */}
                        </div> 
                      </div> {/* row */}
                    </form>
                  </div> {/* main form */}
                </div> {/*  contact from */}
              </div>
              <div className="col-lg-5">
                <div className="contact-address mt-30">
                  <ul>
                    <li>
                      <div className="singel-address">
                        <div className="icon">
                          <i className="fa fa-home" />
                        </div>
                        <div className="cont">
                          <p>Nairobi, Kenya
                          P.O BOX 19623 - 00100 GPO.</p>
                        </div>
                      </div> {/* singel address */}
                    </li>
                    <li>
                      <div className="singel-address">
                        <div className="icon">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="cont">
                          <p>+254717008977</p>
                        </div>
                      </div> {/* singel address */}
                    </li>
                    <li>
                      <div className="singel-address">
                        <div className="icon">
                          <i className="fa fa-envelope-o" />
                        </div>
                        <div className="cont">
                          <p>info@rihakenya.org</p>
                          <p>rihakenya@gmail.com</p>
                        </div>
                      </div> {/* singel address */}
                    </li>
                  </ul>
                </div> {/* contact address */}
              </div>
            </div> {/* row */}
          </div> {/* container */}
        </section>    
        </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default ContactUs