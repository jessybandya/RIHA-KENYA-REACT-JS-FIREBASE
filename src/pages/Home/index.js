import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


function Home() {
  return (
    <body className='home page-template-default page page-id-15 wp-custom-logo mega-menu-primary no-sidebar'>
    <Header />
    <div> 
    {/*====== SLIDER PART START ======*/}
    <section id="slider-part" className="slider-active">
      <div className="single-slider bg_cover pt-150" style={{backgroundImage: 'url(wp-content/uploads/2020/09/Launching-of-Water-Borehole-at-Nakwamekwi.jpg)'}} data-overlay={4}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9">
              <div className="slider-cont">
                <h1 data-animation="bounceInLeft" data-delay="1s">Water, Sanitation and Hygiene campaigns</h1>
                <p data-animation="fadeInUp" data-delay="1.3s">We improve access to safe and sufficient water and sanitation&hellip;</p>
                <ul>
                  <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Read More</a></li>
                </ul>
              </div>
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </div> {/* single slider */}
      <div className="single-slider bg_cover pt-150" style={{backgroundImage: 'url(wp-content/uploads/2020/09/unnamed.jpg)'}} data-overlay={4}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9">
              <div className="slider-cont">
                <h1 data-animation="bounceInLeft" data-delay="1s">Agricultural Activities Initiatives</h1>
                <p data-animation="fadeInUp" data-delay="1.3s">Riha Kenya champions agricultural activities in marginalized communities to ensure&hellip;</p>
                <ul>
                  <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Read More</a></li>
                </ul>
              </div>
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </div> {/* single slider */}
      <div className="single-slider bg_cover pt-150" style={{backgroundImage: 'url(wp-content/uploads/2020/09/school-children-in-africa-1.jpg)'}} data-overlay={4}>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9">
              <div className="slider-cont">
                <h1 data-animation="bounceInLeft" data-delay="1s">Education Initiatives</h1>
                <p data-animation="fadeInUp" data-delay="1.3s">RIHA KENYA is determined in its tireless effort to oversee&hellip;</p>
                <ul>
                  <li><a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">Read More</a></li>
                </ul>
              </div>
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </div> {/* single slider */}
    </section>
    {/*====== SLIDER PART ENDS ======*/}
    {/*====== CATEGORY PART START ======*/}
    <section id="category-part">
      <div className="container">
        <div className="category pt-40 pb-80">
          <div className="row">
            <div className="col-lg-4">
              <div className="category-text pt-40">
                <h2>Main Objectives!</h2>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
              <div className="row category-slied mt-40">
                <div className="col-lg-4">
                  <a href="#">
                    <span className="singel-category text-center color-1">
                      <span className="icon">
                        <img src="images/all-icon/ctg-1.png" alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Poverty & Hunger</span>
                      </span>
                    </span> {/* singel category */}
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="#">
                    <span className="singel-category text-center color-2">
                      <span className="icon">
                        <img src="images/all-icon/ctg-2.png" alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Agriculture</span>
                      </span>
                    </span> {/* singel category */}
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="#">
                    <span className="singel-category text-center color-3">
                      <span className="icon">
                        <img src="images/all-icon/ctg-3.png" alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Education</span>
                      </span>
                    </span> {/* singel category */}
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="#">
                    <span className="singel-category text-center color-1">
                      <span className="icon">
                        <img src="images/all-icon/ctg-1.png" alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Environment</span>
                      </span>
                    </span> {/* singel category */}
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="#">
                    <span className="singel-category text-center color-2">
                      <span className="icon">
                        <img src="images/all-icon/ctg-2.png" alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>Hygiene</span>
                      </span>
                    </span> {/* singel category */}
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="#">
                    <span className="singel-category text-center color-3">
                      <span className="icon">
                        <img src="images/all-icon/ctg-3.png" alt="Icon" />
                      </span>
                      <span className="cont">
                        <span>H2O & Sanitation</span>
                      </span>
                    </span> {/* singel category */}
                  </a>
                </div>
              </div> {/* category slied */}
            </div>
          </div> {/* row */}
        </div> {/* category */}
      </div> {/* container */}
    </section>
    {/*====== CATEGORY PART ENDS ======*/}
    {/*====== ABOUT PART START ======*/}
    <section id="about-part" className="pt-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50">
              <h5>About us</h5>
              <h2>Welcome to Riha Kenya </h2>
            </div> {/* section title */}
            <div className="about-cont">
              <p>Rural Humanitarian Initiative Association (RIHA) was founded and registered in Kenya in 2011 by Engineer Alexis Bandyatuyaga. The organization seeks to eliminate hunger, poverty and violence in the rural areas through sustainable agriculture, provision of water, sanitation &hygiene, education, healthcare, humanitarian help, food security and environmental conservation.</p>
              <a href="#" className="main-btn mt-55">Learn More</a>
            </div>
          </div> {/* about cont */}
          <div className="col-lg-6 offset-lg-1">
            <div className="about-event mt-50">
              <div className="event-title">
                <h3>Upcoming events</h3>
              </div> {/* event title */}
              <ul>
                <li>
                  <div className="singel-event">
                    <span><i className="fa fa-calendar" /> 2 December 2023</span>
                    <a href="#"><h4>Campus clean workshop</h4></a>
                    <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm (EAT)</span>
                    <span><i className="fa fa-map-marker" /> Turkana West, Kenya</span>
                  </div>
                </li>
                <li>
                  <div className="singel-event">
                    <span><i className="fa fa-calendar" /> 2 December 2023</span>
                    <a href="#"><h4>Eraducating of Poverty</h4></a>
                    <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm (EAT)</span>
                    <span><i className="fa fa-map-marker" /> Rc Auditorim, Nairobi Kenya</span>
                  </div>
                </li>
                <li>
                  <div className="singel-event">
                    <span><i className="fa fa-calendar" /> 2 December 2023</span>
                    <a href="#"><h4>Environment conference</h4></a>
                    <span><i className="fa fa-clock-o" /> 10:00 Am - 3:00 Pm (EAT)</span>
                    <span><i className="fa fa-map-marker" /> Kericho || Kisii, Kenya</span>
                  </div>
                </li>
              </ul> 
            </div> {/* about event */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
      <div className="about-bg">
        <img src="images/about/bg-1.png" alt="About" />
      </div>
    </section>
    {/*====== ABOUT PART ENDS ======*/}
    {/*====== APPLY PART START ======*/}
    <section id="apply-aprt" className="pb-120">
      <div className="container">
        <div className="apply">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="apply-cont apply-color-1">
                <p>Friends of RIHA KENYA are committed, generous and open-hearted people…</p>
                <a href="#" className="main-btn">JOIN US</a>
              </div> {/* apply cont */}
            </div>
            <div className="col-lg-6">
              <div className="apply-cont apply-color-2">
              <p>Friends of RIHA KENYA are committed, generous and open-hearted people…</p>
              <a href="#" className="main-btn">Fundraise for Us</a>
              </div> {/* apply cont */}
            </div> 
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>
    {/*====== APPLY PART ENDS ======*/}

    {/*====== VIDEO FEATURE PART START ======*/}
    <section id="video-feature" className="bg_cover pt-60 pb-110" style={{backgroundImage: 'url(wp-content/uploads/2020/09/WhatsApp-Image-2019-09-25-at-17.08.45-1.jpg)'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-last order-lg-first">
            <div className="video text-lg-left text-center pt-50">
              <a className="Video-popup" href="https://www.youtube.com/watch?v=D9N7QaIOkG8"><i className="fa fa-play" /></a>
            </div> {/* row */}
          </div>
          <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
            <div className="feature pt-50">
              <div className="feature-title">
                <h3>Summury</h3>
              </div>
              <ul>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                    </div>
                    <div className="cont">
                      <h4>Water, Sanitation and Hygiene campaigns</h4>
                      <p>We improve access to safe and sufficient water and sanitation…</p>
                    </div>
                  </div> {/* singel feature */}
                </li>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                    </div>
                    <div className="cont">
                      <h4>Agricultural Activities Initiatives</h4>
                      <p>Riha Kenya champions agricultural activities in marginalized communities to ensure…</p>
                    </div>
                  </div> {/* singel feature */}
                </li>
                <li>
                  <div className="singel-feature">
                    <div className="icon">
                    </div>
                    <div className="cont">
                      <h4>Education Initiatives</h4>
                      <p>RIHA KENYA is determined in its tireless effort to oversee…</p>
                    </div>
                  </div> {/* singel feature */}
                </li>
              </ul>
            </div> {/* feature */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
      <div className="feature-bg" /> {/* feature bg */}
    </section>
    {/*====== VIDEO FEATURE PART ENDS ======*/}
    {/*====== TEACHERS PART START ======*/}
    <section id="teachers-part" className="pt-70 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mt-50">
              <h5>Featured Staffs</h5>
              <h2>Board of Directors</h2>
            </div> {/* section title */}
            <div className="teachers-cont">
              <p>
              This is a body that oversees the activities of the organisation. It considers and discusses all matters related to the strategic direction and operation of RIHA Kenya in pursuing its aim and objectives...
              </p>
              <a href="#" className="main-btn mt-55">see all</a>
            </div> {/* teachers cont */}
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="teachers mt-20">
              <div className="row">
                <div style={{border: '2px solid #36db00', borderRadius:10}} className="col-sm-6">
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
                <div style={{border: '2px solid #36db00', borderRadius:10}} className="col-sm-6">
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
                <div style={{border: '2px solid #36db00', borderRadius:10}} className="col-sm-6">
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

                <div style={{border: '2px solid #36db00', borderRadius:10}} className="col-sm-6">
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
            </div> {/* teachers */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>
    {/*====== TEACHERS PART ENDS ======*/}
    {/*====== PUBLICATION PART START ======*/}
    <section id="publication-part" className="pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 col-md-8 col-sm-7">
            <div className="section-title pb-60">
              <h5>RURAL HUMANITARIAN INITIATIVE CAMPAIGNS</h5>
            </div> {/* section title */}
          </div>

        </div> {/* row */}
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="wp-content/uploads/2020/09/Launching-of-Water-Borehole-at-Nakwamekwi.jpg" alt="Publication" />
              </div>
              <div className="cont">
                <div className="">
                  <a href="#"><h6>Water, Sanitation and Hygiene campaigns</h6></a>
                </div>
              </div>
            </div> {/* singel publication */}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="wp-content/uploads/2020/09/unnamed.jpg" alt="Publication" />
              </div>
              <div className="cont">
                <div className="">
                  <a href="#"><h6>Agricultural Activities Initiatives</h6></a>
                </div>
              </div>
            </div> {/* singel publication */}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="wp-content/uploads/2020/09/school-children-in-africa-1.jpg" alt="Publication" />
              </div>
              <div className="cont">
                <div className="">
                  <a href="#"><h6>Education Initiatives</h6></a>
                </div>
              </div>
            </div> {/* singel publication */}
          </div>
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="singel-publication mt-30">
              <div className="image">
                <img src="wp-content/uploads/2020/09/clinic-1.jpg" alt="Publication" />
              </div>
              <div className="cont">
                <div className="">
                  <a href="#"><h6>Health Campaigns and Initiatives</h6></a>
                </div>
              </div>
            </div> {/* singel publication */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>
    {/*====== PUBLICATION PART ENDS ======*/}
    {/*====== TEASTIMONIAL PART START ======*/}
    <section id="testimonial" className="bg_cover pt-115 pb-115" data-overlay={8} style={{backgroundImage: 'url(wp-content/uploads/2020/09/Launching-of-Water-Borehole-at-Nakwamekwi.jpg)'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-40">
              <h5>Testimonial</h5>
              <h2>What they say</h2>
            </div> {/* section title */}
          </div>
        </div> {/* row */}
        <div className="row testimonial-slied mt-40">
          <div className="col-lg-6">
            <div className="singel-testimonial">
              <div className="testimonial-thum">
                <img style={{height:80}} src="https://www.aacai.com.au/wp-content/plugins/userpro/img/default_avatar_female.jpg" alt="Testimonial" />
                <div className="quote">
                  <i className="fa fa-quote-right" />
                </div>
              </div>
              <div className="testimonial-cont">
                <p>I write to Recommend Riha Kenya for the good work and excellent services they have been serving to me  as a client. Cost effective prices and very friendly staff from the organization.</p>
                <h6>Jessy Bandya</h6>
                <span>Civil & Contruction Engineering Student</span>
              </div>
            </div> {/* singel testimonial */}
          </div>
          <div className="col-lg-6">
            <div className="singel-testimonial">
              <div className="testimonial-thum">
              <img style={{height:80}} src="https://www.aacai.com.au/wp-content/plugins/userpro/img/default_avatar_female.jpg" alt="Testimonial" />
              <div className="quote">
                  <i className="fa fa-quote-right" />
                </div>
              </div>
              <div className="testimonial-cont">
                <p>I have achieved tremendous growth and have built an eminent good will in the community. I am proud to be associated with you. Keep up the good work.</p>
                <h6>Odero Phelix</h6>
                <span>Consultant Engineer at Rothoblaas</span>
              </div>
            </div> {/* singel testimonial */}
          </div>
          <div className="col-lg-6">
            <div className="singel-testimonial">
              <div className="testimonial-thum">
              <img style={{height:80}} src="https://www.aacai.com.au/wp-content/plugins/userpro/img/default_avatar_female.jpg" alt="Testimonial" />
              <div className="quote">
                  <i className="fa fa-quote-right" />
                </div>
              </div>
              <div className="testimonial-cont">
                <p>I wish to acknowledge Riha Kenya as an excellent business partner. Good progress so far. We never regret associating with your institution on matters business and delivery of service.</p>
                <h6>Tony Levis</h6>
                <span>Water Engineering Student</span>
              </div>
            </div> {/* singel testimonial */}
          </div>

          <div className="col-lg-6">
          <div className="singel-testimonial">
            <div className="testimonial-thum">
            <img style={{height:80}} src="https://www.aacai.com.au/wp-content/plugins/userpro/img/default_avatar_female.jpg" alt="Testimonial" />
            <div className="quote">
                <i className="fa fa-quote-right" />
              </div>
            </div>
            <div className="testimonial-cont">
              <p>It is our pleasure having worked with you and best wishes for the future. Thank you for being part of our success over the years.
              We greatly appreciate and value your support.</p>
              <h6>Arnold Sanga</h6>
              <span>Civil & Contruction Engineering Student</span>
              </div>
          </div> {/* singel testimonial */}
        </div>
          
        </div> {/* testimonial slied */}
      </div> {/* container */}
    </section>
    {/*====== TEASTIMONIAL PART ENDS ======*/}
    {/*====== NEWS PART START ======*/}
    <section id="news-part" className="pt-115 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-50">
              <h5>
              SUPPORT RIHA KENYA IN CHANGING LIVES
              </h5>
            </div> {/* section title */}
          </div>
        </div> {/* row */}
        <div className="row">
          <div className="col-lg-6">
            <div className="singel-news mt-30">
              <div className="news-thum pb-25">
                <img src="wp-content/uploads/2020/09/utss4gpspwpg8efy5cff5894dfaf1.jpg" alt="News" />
              </div>
              <div className="news-cont">
                <ul>
                  <li><a href="#"><i className="fa fa-calendar" />2 December 2018 </a></li>
                  <li><a href="#"> <span>By</span> Jessy Bandya</a></li>
                </ul>
                <a href="#"><h3>In Agriculture, Food and Security</h3></a>
                <p>Supporting rural communities to increase leadership and modern agricultural knowledge Supporting rural communities to increase…</p>
              </div>
            </div> {/* singel news */}
          </div>
          <div className="col-lg-6">
            <div className="singel-news news-list">
              <div className="row">
                <div className="col-sm-4">
                  <div className="news-thum mt-30">
                    <img src="wp-content/uploads/2020/09/Launching-of-Water-Borehole-at-Nakwamekwi.jpg" alt="News" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="news-cont mt-30">
                    <ul>
                      <li><a href="#"><i className="fa fa-calendar" />2 December 2018 </a></li>
                      <li><a href="#"> <span>By</span> Jessy Bandya</a></li>
                    </ul>
                    <a href="blog-singel.html"><h3>Water, Sanitation and Hygiene campaigns</h3></a>
                    <p>We improve access to safe and sufficient water and sanitation facilities and promote hygiene awareness.…</p>
                  </div>
                </div>
              </div> {/* row */}
            </div> {/* singel news */}
            <div className="singel-news news-list">
              <div className="row">
                <div className="col-sm-4">
                  <div className="news-thum mt-30">
                    <img src="wp-content/uploads/2020/09/african-rural-girl-child-fetching-water-borehole-small-village-nigeria-manual-pump-boreholes-44695264.jpg" alt="News" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="news-cont mt-30">
                    <ul>
                      <li><a href="#"><i className="fa fa-calendar" />2 December 2018 </a></li>
                      <li><a href="#"> <span>By</span> Jessy Bandya</a></li>
                    </ul>
                    <a href="blog-singel.html"><h3>Water and Sanitation</h3></a>
                    <p>We improve access to safe and sufficient water and sanitation facilities and promote hygiene awareness.…</p>
                  </div>
                </div>
              </div> {/* row */}
            </div> {/* singel news */}
            <div className="singel-news news-list">
              <div className="row">
                <div className="col-sm-4">
                  <div className="news-thum mt-30">
                    <img src="wp-content/uploads/2020/09/farm-people-malawi-fetching-water-farm-people-fetching-water-malawi-136432224.jpg" alt="News" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="news-cont mt-30">
                    <ul>
                      <li><a href="#"><i className="fa fa-calendar" />2 December 2018 </a></li>
                      <li><a href="#"> <span>By</span> Jessy Bandya</a></li>
                    </ul>
                    <a href="blog-singel.html"><h3>Water, Sanitation and Hygiene.</h3></a>
                    <p>Riha Kenya in its quest to improve the living conditions of people from marginalized regions…</p>
                  </div>
                </div>
              </div> {/* row */}
            </div> {/* singel news */}
          </div>
        </div> {/* row */}
      </div> {/* container */}
    </section>
    {/*====== NEWS PART ENDS ======*/}
 <Footer />
  </div>
    </body>
  )
}

export default Home