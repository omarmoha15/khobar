import Contectus from "../components/Contectus";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Top from "../components/Top";

function Contact() {
    return (
      <>
          <Top
        cName ="top-Contact"
        topImg="https://www.water-technology.net/wp-content/uploads/sites/28/2019/02/Khobar-Water-Tower.jpg"
        title ="Contact Us"
   

        />
       <Navbar/>
       <Contectus/>
       <Footer/>
       
      </>
    );
  }
  
  export default Contact;
  