import React from 'react';
 import Footer from "./Footer"
 import Header from "./Header";
 import Possibility from '../../Possibility';
import Blog from "./Blog"
import SignUp from '../../information/SignUp';


const Home = () => {
  return (
   <div>
    <Header/>
       <Possibility/>
       <Blog/>
       <Footer/>
         <SignUp/> 
   </div>
  )
}

export default Home