import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function BlogSingle() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Single blog</h2>
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
          <div className="about-cont">
          <section id="blog-singel" className="pt-1 pb-120 gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-details mt-30">
                  <div className="thum">
                    <img src="/images/blog/b-1.jpg" alt="Blog Details" />
                  </div>
                  <div className="cont">
                    <h3>Few tips for get better results in examination</h3>
                    <ul style={{display:'flex', alignItems:'center',marginBottom:-30}}>
                      <li style={{display:'flex', alignItems:'center'}}><CalendarMonthIcon style={{color:'#36db00'}}/>25 Dec 2018</li> 
                      <li style={{display:'flex', alignItems:'center'}}><a href="#"><AccountCircleOutlinedIcon style={{color:'#36db00'}}/> by Jessy Bandya</a></li>                    </ul>
                    <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .
                      <br />
                      gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .
                      <br />
                      gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .
                    </p>
                    <ul style={{display:'flex', alignItems:'center'}}>
                    <li style={{display:'flex', alignItems:'center'}}><ThumbUpAltOutlinedIcon style={{color:'#36db00'}}/> 1.5K</li>
                    <li><ForumIcon style={{color:'#36db00'}}/> 102</li>
                  </ul>
                    <ul className="share">
                      <li className="title">Share :</li>
                      <li><a href="#"><FacebookIcon style={{color:'#36db00'}} className="fa fa-facebook-f" /></a></li>
                      <li><a href="#"><TwitterIcon style={{color:'#36db00'}} className="fa fa-twitter" /></a></li>
                      <li><a href="#"><GoogleIcon style={{color:'#36db00'}} className="fa fa-google-plus" /></a></li>
                      <li><a href="#"><LinkedInIcon style={{color:'#36db00'}} className="fa fa-linkedin" /></a></li>
                    </ul>
                  <div className="comment-form">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-singel">
                            <textarea placeholder="Leave a comment..." defaultValue={""} />
                          </div> {/* form singel */}
                        </div>
                        <div className="col-md-12">
                          <div className="form-singel">
                            <button className="main-btn">Submit</button>
                          </div> {/* form singel */}
                        </div>
                      </div> {/* row */}
                    </form>
                  </div>  {/* comment-form */}
                    <div className="blog-comment pt-45">
                       <ul>
                        <li>
                          <div className="comment">
                            <div className="comment-author">
                              <div className="author-thum">
                                <img src="https://www.aacai.com.au/wp-content/plugins/userpro/img/default_avatar_female.jpg" style={{height:80}} alt="Reviews" />
                              </div>
                              <div className="comment-name">
                                <h6>Jessy Bandya</h6>
                                <span>April 03, 2021</span>
                              </div>
                            </div>
                            <div className="comment-description pt-20">
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                            </div>
                          </div> {/* comment */}
                        </li>
                      </ul>

                    </div> {/* blog comment */}
                  </div> {/* cont */}
                </div> {/* blog details */}
              </div>
              <div className="col-lg-4">
                <div className="saidbar">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="saidbar-post mt-30">
                        <h4>Latest Blogs</h4>
                        <ul>
                          <li>
                            <a href="#">
                              <div className="singel-post">
                                <div className="thum">
                                  <img src="/images/blog/blog-post/bp-1.jpg" alt="Blog" />
                                </div>
                                <div className="cont">
                                  <h6>Introduction to languages</h6>
                                  <span>20 Dec 2018</span>
                                </div>
                              </div> {/* singel post */}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="singel-post">
                                <div className="thum">
                                  <img src="/images/blog/blog-post/bp-2.jpg" alt="Blog" />
                                </div>
                                <div className="cont">
                                  <h6>How to build a game with java</h6>
                                  <span>10 Dec 2018</span>
                                </div>
                              </div> {/* singel post */}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="singel-post">
                                <div className="thum">
                                  <img src="/images/blog/blog-post/bp-1.jpg" alt="Blog" />
                                </div>
                                <div className="cont">
                                  <h6>Basic accounting from primary</h6>
                                  <span>07 Dec 2018</span>
                                </div>
                              </div> {/* singel post */}
                            </a>
                          </li>
                        </ul>
                      </div> {/* saidbar post */}
                    </div>
                  </div> {/* row */}
                </div> {/* saidbar */}
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

export default BlogSingle