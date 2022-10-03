import React from 'react'
import Icon from "@mui/material/Icon";
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Footer() {
  return (
    <div>
    <div>
    {/*====== FOOTER PART START ======*/}
    <footer id="footer-part">
      <div className="footer-top pt-40 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-about mt-40">
                <div className="logo">
                <div className="logo">
                <a href="/"  className='header_left'>
                  <img style={{height:50,borderRadius:50/2}} src="/wp-content/uploads/2020/08/download.png" alt="Logo" />
                  
                  <span>
                  <div style={{color:'#36db00',fontWeight:'bold'}}>
                  RURAL HUMANITARIAN INITIATIVE
                  </div>
                  <div style={{color:'#36db00'}}>
                  RIHA KENYA (NON-GOVERNMENTAL ORGANIZATION)
                  </div>
                  </span>
                </a>
              </div>
                </div>
                <p>Rural Humanitarian Initiative (RIHA KENYA) is a Self-Help rural community based development-oriented, non-political, non-governmental, non-profit making and non-denominational organisation.</p>
                <ul className="mt-20">
 
                  <li><a href="#"><FacebookIcon style={{color:'#36db00'}} className="fa fa-facebook-f" /></a></li>
                  <li><a href="#"><TwitterIcon style={{color:'#36db00'}} className="fa fa-twitter" /></a></li>
                  <li><a href="#"><GoogleIcon style={{color:'#36db00'}} className="fa fa-google-plus" /></a></li>
                </ul>
              </div> {/* footer about */}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-link mt-40">
                <div className="footer-title pb-25">
                  <h6>Core Values</h6>
                </div>
                <ul>
                  <li><a href="/"><KeyboardArrowRightIcon style={{color:'#36db00'}}/>Commitment</a></li>
                  <li><a href="#"><KeyboardArrowRightIcon style={{color:'#36db00'}}/>Trust</a></li>
                  <li><a href="#"><KeyboardArrowRightIcon style={{color:'#36db00'}}/>Accountability</a></li>
                  <li><a href="#"><KeyboardArrowRightIcon style={{color:'#36db00'}}/>Solidarity</a></li>
                </ul>
              </div> {/* footer link */}
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-link support mt-40">
                <div className="footer-title pb-25">
                  <h6>What we Embrace</h6>
                </div>
                <ul>
                  <li><a href="#"><KeyboardArrowRightIcon style={{color:'#36db00'}}/>Community</a></li>
                  <li><a href="#"><KeyboardArrowRightIcon style={{color:'#36db00'}}/>development</a></li>
                  <li><a href="#"><KeyboardArrowRightIcon style={{color:'#36db00'}}/>Good stewardship</a></li>
                </ul>
              </div> {/* support */}
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-address mt-40">
                <div className="footer-title pb-25">
                  <h6>Contact Us</h6>
                </div>
                <ul>
                  <li style={{display:'flex',alignItems:'center'}}>
                    <div className="icon">
                      <HomeIcon style={{color:'#36db00'}} className="fa fa-home" />
                    </div>
                    <div className="cont">
                      <p>Nairobi, Kenya <br/>
                      P.O BOX 19623 - 00100 GPO.
                      </p>
                    </div>
                  </li> <br />
                  <li style={{display:'flex',alignItems:'center'}}>
                    <div className="icon">
                      <LocalPhoneIcon style={{color:'#36db00'}} className="fa fa-phone" />
                    </div>
                    <div className="cont">
                      <p>Tel: +254717008977</p>
                    </div>
                  </li><br />
                  <li style={{display:'flex',alignItems:'center'}}>
                    <div className="icon">
                      <EmailIcon style={{color:'#36db00'}} className="fa fa-envelope-o" />
                    </div>
                    <div className="cont">
                      <p>info@rihakenya.org || rihakenya@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div> {/* footer address */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </div> {/* footer top */}
      <div className="footer-copyright pt-10 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright text-center pt-15">
                <p><center><a style={{color:'#fff'}} target="_blank" href="https://laughing-darwin-c668f3.netlify.app">
                &copy; {new Date().getFullYear()}, made with  <FavoriteIcon style={{color:'#36db00'}} />  by <span>&nbsp;Jessy Bandya&nbsp;</span> || Powered by <span style={{color:'#36db00'}}>Riha Kenya</span>
                </a> </center></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="copyright text-md-right text-center pt-15">
              </div>
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </div> {/* footer copyright */}
    </footer>
    {/*====== FOOTER PART ENDS ======*/}
    {/*====== BACK TO TP PART START ======*/}
    <a href="#" className="back-to-top"><KeyboardArrowUpIcon className="fa fa-angle-up" /></a>
  </div>
    </div>
  )
}

export default Footer