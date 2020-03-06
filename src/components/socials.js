import React from "react"

import styles from "../styles/footer.module.css"

const Socials = () => {
  var socialsArray = ["Spotify", "Facebook", "Instagram", "Youtube"]
  return (
    <>
      <ul className={styles.socials}>
        {socialsArray.map((socialsLink, index) => (
          <li
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              paddingLeft: `1rem`,
              paddingRight: `1rem`,
              order: { index },
            }}
          >
            {socialsLink}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Socials
