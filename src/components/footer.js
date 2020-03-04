import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle, menuLinks }) => {
  return (
    <footer
      style={{
        background: `#000000`,
        marginBottom: `1.45rem`,
        display: "flex",
        flex: "0 0 auto",
      }}
    >
      <div id="footer">
        <h1 style={{ color: `white` }}>{siteTitle}</h1>
        <nav>
          <ul style={{ color: `white` }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  color: `white`,
                  listStyleType: `none`,
                  padding: `0.15rem`,
                }}
              >
                <Link style={{ color: `white` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <ul style={{ color: `white` }}>
            <li>Spotify</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </nav>
        <p style={{ color: `white` }} id="footer">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Footer.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
}

export default Footer
