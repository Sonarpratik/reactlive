import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (

    
    <nav  className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand"  href="/">{props.ti}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/reactlive/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reactlive/about">{props.ab}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reactlive/text">Text</Link>
        </li>
       
      </ul>
      <form className="form-inline my-2 my-lg-0">
         <div className="form-check">
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode}  id="flexSwitchCheckDefault"/>
     <label  className={`form-check-label text-${props.f}`} htmlFor="flexSwitchCheckDefault">Toggle</label>
</div>
      </form>
    </div>
  </nav>
  )
}


Navbar.propTypes = {ti: PropTypes.string,
                        ab: PropTypes.string }


Navbar.defaultProps={
    ti:"Set The Title",
    ab:"Hahahahahaha"
}