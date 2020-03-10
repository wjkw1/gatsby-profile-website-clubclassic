import React from "react"

import styles from "../styles/footer.module.css"

const Socials = () => {
  var socialsArray = ["Spotify", "Facebook", "Instagram", "Youtube"]
  return (
    <>
      <ul
        className={styles.socials}
        style={{
          alignSelf: `center`,
        }}
      >
        {socialsArray.map((socialsLink, index) => (
          <li
            style={{
              maxWidth: 960,
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
