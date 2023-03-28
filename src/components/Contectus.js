import "./Contectus.css"

import React from 'react'

export default function Contectus() {
  return (
    <div className="form-container">
        <h1>Send a massage to us!</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Massage" rows="4"></textarea>
            <button>Send</button>
        </form>
        </div>
  )
}
