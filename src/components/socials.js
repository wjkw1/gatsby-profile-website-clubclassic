import React from "react"

import styles from "../styles/footer.module.css"

const Socials = () => {
  var socialsArray = ["Spotify", "Facebook", "Instagram", "Twitter", "Youtube"]
  return (
    <>
      <div>
        <ul className={styles.socials}>
          {socialsArray.map(socialsLink => (
            <li
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                paddingLeft: `1rem`,
                paddingRight: `1rem`,
              }}
            >
              {socialsLink}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Socials
