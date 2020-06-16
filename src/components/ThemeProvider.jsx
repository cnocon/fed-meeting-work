import React from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"

const ThemeProvider = ({ theme, children }) => {
  const GlobalStyles = () => (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          font-family: ${theme.fonts.body.family};
          font-size: ${theme.fonts.sizes.xs};
        }

        * {
          font-family: ${theme.fonts.body.family};
          font-size: ${theme.fonts.sizes.body};
          line-height: 1.25;
        }

        code {
          font-size: ${theme.fonts.sizes.xs};
          line-height: ${theme.fonts.sizes.body}
        }

        ol,
        ul {
          padding-left: ${theme.spacing.med};
          padding-bottom: ${theme.spacing.med};
          display: block;
        }

        li {
          padding-bottom: ${theme.spacing.sm};
        }

        a {
          color: ${theme.color.primary};
          border-bottom: 2px solid ${theme.color.primary};
          text-decoration: none;

          &:hover {
            color: ${theme.color.secondary};
            border-bottom: 2px solid ${theme.color.tertiary};
          }
        }

        [class$='-ImageContainer']:hover,
        [class$='-ImageContainerAlt']:hover {
          border: '3px solid lightgreen';
        }

        footer {
          background-color: ${theme.color.light};
        }
      `}
    />
  )

  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles />
      { children }
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
