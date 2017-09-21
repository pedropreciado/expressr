import React from "react";
import { Link } from "react-router-dom";


const backgroundAuthor = (imgAuthor) => {
  if (imgAuthor) {
    return (
      <p className="footer-text">background posted by: <Link to={`/api/users/${imgAuthor.id}`} value={imgAuthor.username}/></p>
    )
  } else {
    return (
      <p className="footer-text">created by: pedro preciado</p>
    )
  }
}

const Footer = ({imgAuthor}) => {
  return (
    <footer>
      <div className="icons">
        <a href="https://github.com/">github</a>
      </div>
      {backgroundAuthor(imgAuthor)}
    </footer>

  )
}

export default Footer;
