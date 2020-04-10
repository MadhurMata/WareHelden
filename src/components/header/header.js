import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = () => (
  <header className="container">
    <div className="title">
      <h1>
        <Link to="/"> Ware Helden</Link>
      </h1>
    </div>
    {/* <div className="header-line">
      <hr/>
    </div> */}
    <div className="nav-bar" activeClassName="active-nav-bar">
      <nl>
        <li><Link activeStyle={{color:"#333333"}} to="/">Home</Link></li>
        <li><Link activeStyle={{color:"#333333"}} to="/about/">About</Link></li>
        <li><Link activeStyle={{color:"#333333"}} to="/blog/">Blog</Link></li>
        <li><Link activeStyle={{color:"#333333"}} to="/contact/">Contact</Link></li>
      </nl>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
