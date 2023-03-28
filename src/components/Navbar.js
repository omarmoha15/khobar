import { Component } from "react";
import { Link } from "react-router-dom";
import {MenuItems} from "./MenuItems"
import "./Navbar.css";


class Navbar extends Component {
    state ={clicked:false};
    handleclick = ()=>{
        this.setState({clicked : !this.state.clicked })
    }



  render() {
    return (
        <nav className="NavbarItem">
            <h1 className="Logo">AL Khobar</h1>
            <div className="menu-icon" onClick={this.handleclick}>
            <i className={this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars" }></i>
            
            </div>

            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>

            {MenuItems.map((item, index) =>{
                return(
                    <li key={index}>
                    <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>{item.title}
                    </Link>
                </li>

                )
            })}
                
               
                </ul>
            
        </nav>
    );
  }
}

export default Navbar;
