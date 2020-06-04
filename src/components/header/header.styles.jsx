import styled from '@emotion/styled'
import { Link } from "gatsby"

// header is the tag we're using
// If you use backticks you can type real css syntax
export const Header = styled.header`
  background: indigo;
  margin-bottom: 1.45rem;
`
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
  font-family: Helvetica;
`

export const Heading1 = styled.h1`
  margin: 0;
`
