import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    body: {
      backgroundColor: "#282a36",
      color: "#ff79c6",
    },
    a: {
      color: "#ff79c6",
    },
    small: {
      color: "#6272a4",
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    p: {
      color: "#bd93f9",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
