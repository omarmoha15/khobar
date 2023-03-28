import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Top from "../components/Top";
import Aboutk from "../components/About";


function About() {
    return (
      <>
     
     <Top
        cName =".top-mid"
        topImg="https://resizer.wafyapp.com/?source=https://prod-wafy-api.s3.eu-central-1.amazonaws.com/images/articles/909-20210817113624-2104214.jpg&width=900"
        title ="About ALKOBAR"
       
      
        
        />
        <Navbar/>
        <Aboutk/>
        
        <Footer/>
   
      </>
    );
  }
  
  export default About;