import React from 'react'
 import "./active.css"

const Activewear = () => {
  return (
    <div>
        <div class="header-a">
      <div class="container-a">
        <div class="navbar-b">
          <div class="logo">
          
          </div>
          <nav>
         
            </nav>
            <img src="images/cart.png" alt="" width="30px" height="30px"
          />
          <img
            src="images/menu.png"
            alt=""
            class="menu-icon"
            onclick="menutoggle()"
          />
        </div>
        <div class="row">
          <div class="col-2">
            <h1>
             SHOP NEW VOSS SUPPLEMENTS <br />
             
            </h1>
            <p>
              Voss-Fitness Is Offering 50% Off All Supplements Starting Friday
            </p>
            <a href="" class="btn">Get Deals</a>
          </div>
          <div class="col-2">
            <img src="images/image1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
   
    <div class="categories">
      <div class="small-container">
        <div class="row">
          <div class="col-3">
            <img src="images/category-1.jpg" alt="" />
          </div>
          <div class="col-3">
            <img src="images/category-2.jpg" alt="" />
          </div>
          <div class="col-3">
            <img src="images/category-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
   
    <div class="small-container">
      <h2 class="title">Shop Protein</h2>
      <div class="row">
        <div class="col-4">
          
          <h4>Vanilla Protein Blast</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>

        <div class="col-4">
          <img src="images/product-2.jpg" alt="" />
          <h4>Chocolate Chip Dream</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>

        <div class="col-4">
          <img src="images/product-3.jpg" alt="" />
          <h4>Cheesecake brain</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </div>
          <p>$50.00</p>
        </div>
        <div class="col-4">
          <img src="images/product-4.jpg" alt="" />
          <h4>Red Velvet moon</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>
      </div>
      <h2 class="title">Mass Gainer</h2>
      <div class="row">
        <div class="col-4">
          <img src="images/product-5.jpg" alt="" />
          <h4>Zeus</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>

        <div class="col-4">
          <img src="images/product-6.jpg" alt="" />
          <h4>Mount Olympus</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>

        <div class="col-4">
          <img src="images/product-7.jpg" alt="" />
          <h4>Devils Power</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </div>
          <p>$50.00</p>
        </div>
        <div class="col-4">
          <img src="images/product-8.jpg" alt="" />
          <h4>Hardstyle Plus</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <img src="images/product-9.jpg" alt="" />
          <h4>We Go JIM</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>

        <div class="col-4">
          <img src="images/product-10.jpg" alt="" />
          <h4>Red Printed T-shirt</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>

        <div class="col-4">
          <img src="images/product-11.jpg" alt="" />
          <h4>Red Printed T-shirt</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </div>
          <p>$50.00</p>
        </div>
        <div class="col-4">
          <img src="images/product-12.jpg" alt="" />
          <h4>Red Printed T-shirt</h4>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>$50.00</p>
        </div>
      </div>
    </div>

    <div class="offer">
      <div class="small-container">
        <div class="row">
          <div class="col-2">
            <img src="images/exclusive.png" class="offer-img" alt="" />
          </div>
          <div class="col-2">
            <p>Exclusively available on RedStore</p>
            <h1>Smart Band 4</h1>
            <small
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi rerum maiores eveniet minus ut deserunt vitae
            </small>
            <a href="" class="btn">Buy Now &#8594;</a>
          </div>
        </div>
      </div>
    </div>

    
    <div class="testimonial">
      <div class="small-container">
        <div class="row">
          <div class="col-3">
            <i class="fa fa-quote-left"></i>

           
           
            <img src="images/user-1.png" alt="" />
           
          </div>

          <div class="col-3">
            <i class="fa fa-quote-left"></i>

           
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <img src="images/user-2.png" alt="" />
           
          </div>

          <div class="col-3">
            <i class="fa fa-quote-left"></i>

            
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <img src="images/user-3.png" alt="" />
            
          </div>
        </div>
      </div>
    </div>

  

    <div class="brands">
      <div class="small-container">
        <div class="row">
          <div class="col-5">
            <img src="images/logo-godrej.png" alt="" />
          </div>
          <div class="col-5">
            <img src="images/logo-oppo.png" alt="" />
          </div>
          <div class="col-5">
            <img src="images/logo-paypal.png" alt="" />
          </div>
          <div class="col-5">
            <img src="images/logo-philips.png" alt="" />
          </div>
          <div class="col-5">
            <img src="images/logo-coca-cola.png" alt="" />
          </div>
        </div>
      </div>
    </div>

   
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col-1">
            <h3>Download Our App</h3>
            <p>
              Download App for Android <br />
              and ios mobile phone
            </p>
            <div class="app-logo">
              <img src="images/play-store.png" alt="" />
              <img src="images/app-store.png" alt="" />
            </div>
          </div>
          <div class="footer-col-2">
            <img src="images/logo-white.png" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur <br />adipisicing elit.
              Porro, eum?
            </p>
          </div>
          <div class="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>

          <div class="footer-col-4">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p class="copyright">Copyright 2020 - introidx</p>
      </div>
    </div>

    </div>
     
        
  )
}

export default Activewear