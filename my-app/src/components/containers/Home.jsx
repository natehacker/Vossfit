import React from 'react';
 import Footer from "./Footer"
 import Header from "./Header";
 import Possibility from '../../Possibility';
import Blog from "./Blog"


const Home = () => {
  return (
   <div>
    <Header/>
       <Possibility/>
       <Blog/>
       <Footer/>
      
   </div>
  )
}

export default Home