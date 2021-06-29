import * as React from "react"
import {Link} from "gatsby"
import "./layout.css"

const Menubar = () => {
  return (
    <div className="home-menu-bar">
      <Link className="home-menu-item" to="/">Home</Link>
      <Link className="home-menu-item" to="/about">About</Link>
      <Link className="home-menu-item" to="/tags">Tags</Link>
    </div>
  )
}

export default Menubar
