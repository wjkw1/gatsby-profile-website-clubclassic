import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Socials from "./socials"
import styles from "../styles/footer.module.css"

const Footer = ({ siteTitle, menuLinks }) => {
  return (
    <footer className={styles.footer}>
      <div>
        <h1 className={styles.header}>{siteTitle}</h1>
      </div>
      <div className={styles.content}>
        <nav className={styles.navigation}>
          <ul>
            {menuLinks.map(link => (
              <li key={link.name}>
                <Link className={styles.menulinks} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Socials />
        <p className={styles.copyright}>
          © {new Date().getFullYear()}. All rights reserved
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
