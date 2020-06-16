import styled from '@emotion/styled'
import { Link } from "gatsby"

// theme is available via context globally
export const subHeader = styled.h5(
  ({theme}) => ({
    backgroundColor: theme.color.tertiary,
    padding: theme.spacing.sm,
    marginTop: theme.spacing.lg,
    color: theme.color.dark,
    padding: theme.spacing.med,
    fontSize: theme.fonts.sizes.body
  })
)

// theme is available via context globally
export const subHeaderDiv = styled.div(
  ({theme}) => ({
    backgroundColor: theme.color.light,
    padding: theme.spacing.med,
    color: theme.color.dark,
    fontFamily: theme.fonts.body.family
  })
)

// header is the tag we're using
// If you use backticks you can type real css syntax
export const Header = styled.header(
  ({theme}) => ({
    backgroundColor: theme.color.primary,
    marginBottom: theme.spacing.lg
  })
);

// You can also use an object, but have to use jsx syntax for css, and you can't use the full set of css/scss features etc
// However, you can use js
export const TitleWrapper = styled.div(
  props => ({
    margin: `0 auto`,
    maxWidth: 960,
    padding: `${props.padding}`,
  })
)

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

export const Heading1 = styled.h1(
  ({theme}) => ({
    margin: 0,
    fontSize: theme.fonts.sizes.xxl,
    lineHeight: 1.5,
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: '2px',
    fontFamily: theme.fonts.heading.family
  })
);
