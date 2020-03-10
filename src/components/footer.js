import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Socials from "./socials"
import styles from "../styles/footer.module.css"

const Footer = ({ siteTitle, menuLinks }) => {
  return (
    <footer className={styles.footer}>
      <div className>
        <h1 className={styles.logo}>{siteTitle}</h1>
      </div>
      <div className={styles.container}>
        <nav className={styles.box}>
          <ul>
            {menuLinks.map(link => (
              <li key={link.name}>
                <Link className={styles.leftMenu} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.box}>
          <Socials />
        </div>
        <div className={styles.box}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
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
