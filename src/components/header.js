import React from "react"
import {Link} from "react-router-dom"

const Header = (props) => {

    const img = {
        height: "2%",
        width: "3.5%",
    }

    const h1 = {
        fontFamily: "Play, Sans Serif",
        color: "white",
        display: "inline-block",
        width: "90%",
    }

    return (
        <h1 style={h1}><Link to="/posts" style={h1}>V<img style={img} src="https://www.seekpng.com/png/full/13-134284_the-largest-collection-of-overwatch-shirts-hoodies-overwatch.png"/>D Hub</Link></h1>
    )
}

export default Header