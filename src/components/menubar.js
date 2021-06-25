import * as React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Menubar=()=>{
    return(
        <div className="home_menu_bar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Menubar