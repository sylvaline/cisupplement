import React from "react";
import product_img from "../assets/image/sct30.png";
import { WhatsappShareButton } from "react-share";
// import Slide from "react-reveal/Slide";
import Contact from './Contact'

function Home() {
  return (
    <div className="home">
      <div className="home_landing">
        <div className="home_landing_inner">
          <h1>Welcome to CI Supplements</h1>
          <p>
            This is the home for everything health, Healthy life begins with
            your habits and suppliments
          </p>
          <div className="cta_btn">
          <button>
            <a
              href="https://wa.me/2347053187744"
              class="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy now
            </a>
          </button>
          </div>
        </div>
      </div>
      <div className="home_product">
        <div className="home_product_inner">
          <div className="product_image">
            <img src={product_img} alt="" />
          </div>
          <div className="product_info">
            <div className="product_name">
              <h4>Superlife Stc30,Boost Immunity,Helps Vision,Anti-Aging,Reduce Joint Pain,Restore Hormonal Level,Boost Bedroom Performance,Stem Cell Supplement,Effective on Several Health Condition(1pk,15sct)</h4>
            </div>
            <p className="superlife">
              A <span>SuperLife </span> Product
            </p>
            
            
            <div className="product_button">
              <div className="left">
                <WhatsappShareButton url={"https://superlife-nigeria.com/"}>
                  <span className="share_icon">
                    <i className="fab fa-whatsapp"></i>
                  </span>
                  <span className="what_span">Share</span>
                </WhatsappShareButton>
              </div>

              <div className="right">
                <span>Buy now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="home_items">
          <div className="title">
          <h2>TESTIMONIALS</h2>
          </div>
          <div className="home_items_inner">
            <div className="testimonials">
              <div className="testimonial_top">
              <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <span>7 months ago</span>
              </div>
              </div>
              <p>Excellent product and the seller was very professional and attentive to my questions. I will definitely buy this product again.</p>
              <h5>- Ode U</h5>
            </div>

            <div className="testimonials">
              <div className="testimonial_top">
              <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>5 months ago</span>
              </div>
              </div>
              <p>Finally, I found something better than anything I've ever tried. It helps boost my energy and immune system.</p>
              <h5>- Nelson C</h5>
            </div>

            <div className="testimonials">
              <div className="testimonial_top">
              <div className="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <span>2 weeks ago</span>
              </div>
              </div>
              <p> My skin looks better, my nails are growing faster, and I'm quite sure many invisible positive changes are happening inside, too!</p>
              <h5>- Vera M</h5>
            </div>
           
          </div>
        </div>

        <div className="home_items">
          <div className="title"><h2>BENEFITS OF SCT30</h2></div>
          <div className="home_items_inner">
            <div className="benefit">
              <h2>EMPOWERED TO ADDRERESS SEVERAL HEALTH CONDITION.</h2>
              <p> Superlife Stc30 is empowered to address several health conditions when taken correctly SLOWS AGEING PROCESS AND PRMOTE CELL REGENERATION. it also regulates the intake of sugar and fat thus CONTROLING BODY WEIGHT.It STRENHTENS YOUR IMMUNE SYTEM AND PROTECT YOUR BODY AGAINST DISEASES</p>
            </div>

            <div className="benefit color">
              <h2>SUPERLIFE IS GOOD FOR EVERYONE TO OPTIMIZE YOUR HEALTH.</h2>
              <p>  Whether you are sick or not, get SUPERLIFE product to optimize your own health. Everyone can take it. In fact, it is recommended everyone takes at least two small boxes of STC30 from SUPERLIFE in your lifetime for your own health. For any health condition take Superlife STC30 product from as a SUPPLEMENT in addition to your regular medications for at least 3 months</p>
            </div>

            <div className="benefit">
              <h2>IT REJUVENATES THE BODY.</h2>
              <p> It gives you a new lease of life, a new strength, a new vigor. Your Youthfulness is restored. You become energetic again. There are so many complementary reports from all our clients worldwide looking younger than they were before and with a sudden boost of strength/energy, vigor & agility.</p>
            </div>

            <div className="benefit color">
              <h2>STC30 IS THE ORIGIN OF STEM CELL IN TREATMENT & PREVENTION OF DISEASES.</h2>
              <p> One of the main characteristics of stem cells is their ability to self-renew or multiply while maintaining the potential to develop into other types of cells. Stem cells can become cells of the heart, kidney, liver, bones, skin, brain, muscle etc. they have the ability to become any kind of cell in the body. Superlife Stc30 Stem cells is can address several diseases conditions</p>
            </div>

            

            <div className="benefit ">
              <h2>IT DETOXIFIES THE BODY.</h2>
              <p> The first assignment of STC30 in your body is Detoxification which includes but no limited to flushing out accumulated bad blood, water and other soluble and insoluble toxins from the body. That is why we advise to drink plenty of water while using STC30, at least 2 Liters of water.</p>
            </div>

            <div className="benefit color">
              <h2>EMPOWERED TO ADDRERESS SEVERAL HEALTH CONDITION.</h2>
              <p> Superlife Stc30 is empowered to address several health conditions when taken correctly SLOWS AGEING PROCESS AND PRMOTE CELL REGENERATION. it also regulates the intake of sugar and fat thus CONTROLING BODY WEIGHT.It STRENHTENS YOUR IMMUNE SYTEM AND PROTECT YOUR BODY AGAINST DISEASES</p>
            </div>
           
          </div>
        </div>

        <div className="home_items">
          <div className="title"><h2>GALLERY</h2></div>
          <div className="home_items_inner">
            <div className="home_items_image">
              <img src="\images\1.jpg" alt="sct30" />
            </div>
            <div className="home_items_image">
              <img src="\images\2.jpg" alt="sct30" />
            </div>
            <div className="home_items_image">
              <img src="\images\3.jpg" alt="sct30" />
            </div>
            <div className="home_items_image">
              <img src="\images\4.jpg" alt="sct30" />
            </div>
            <div className="home_items_image">
              <img src="\images\5.jpeg" alt="sct30" />
            </div>
            <div className="home_items_image">
              <img src="\images\7.jpg" alt="sct30" />
            </div>
           
          </div>
        </div>

        <div className="home_items">
          <div className="title"><h2>CONTACTS</h2></div>
          <div className="home_items_inner">
          <Contact />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
