import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="">
                <h1>AL Khobar</h1>
                <p>Choose your destination now!</p>
            </div>
            <div>
                <a href="/">
                <i className="fa-brands fa-facebook-square"></i></a>
                <a href="/">
                <i className="fa-brands fa-instagram-square"></i></a>
                <a href="/">
                <i className="fa-brands fa-twitter-square"></i></a>
                <a href="/">
                <i className="fa-brands fa-behance-square"></i></a>
            </div>
        </div>


        <div className="lower">
            <div>
                <h4>Project</h4>
                <a href="/">changelog</a>
                <a href="/">sataus</a>
                <a href="/">Lincese</a>
                <a href="/">All Vesions</a>
            </div>
            <div>
                <h4>Communtiy</h4>
                <a href="/">changelog</a>
                <a href="/">sataus</a>
                <a href="/">Lincese</a>
                <a href="/">All Vesions</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">changelog</a>
                <a href="/">sataus</a>
                <a href="/">Lincese</a>
                <a href="/">All Vesions</a>
            </div>
            <div>
                <h4>Other</h4>
                <a href="/">changelog</a>
                <a href="/">sataus</a>
                <a href="/">Lincese</a>
                <a href="/">All Vesions</a>
            </div>
        </div>
    </div>
  )
}

export default Footer