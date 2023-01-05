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

    
    <div class="testimonial">
      <div class="small-container">
        <div class="row">
          <div class="col-3">
            

           
           
            <img src="images/user-1.png" alt="" />
           
          </div>

          <div class="col-3">
            

           
       
            <img src="images/user-2.png" alt="" />
           
          </div>

          <div class="col-3">
            

            
            
           
            <img src="images/user-3.png" alt="" />
            
          </div>
        </div>
      </div>
    </div>

    <div>
     
      </div>
    </div>

   
    
    
     
        
  )
}

export default Activewear