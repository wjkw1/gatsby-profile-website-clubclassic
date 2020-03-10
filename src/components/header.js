import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "../components/navigation"

const Header = ({ siteTitle, menuLinks }) => {
  return (
    <header
      style={{
        background: `#000000`,
        marginBottom: `1.45rem`,
        display: "flex",
        flex: "0 0 auto",
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Navigation menuLinks={menuLinks} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
}

export default Header
