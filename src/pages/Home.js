import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Top from "../components/Top";

function Home() {
    return (
      <>
       
        <Top
        cName ="hero"
        topImg="https://images.unsplash.com/photo-1642762890357-910e7be63d82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
        title ="Welcom , to ALKOBAR"
        disc="Choose your destination now!"
        btnname="Discover"
        url ="./"
        btmclass="show"

        />
        <Navbar/>
        <Destination/>
        <Footer/>
      </>
    );
  }
  
  export default Home;