import styled from '@emotion/styled'

// export const ImageContainer = styled.div`
//   margin-bottom: 1.45rem;
//   max-width: 300px;
//   padding: .5rem;
//   border: 1px solid gray;
// `

export const ImageContainer = styled.div(
  props => ({
    width: `${props.width}`,
    margin: `1rem 0 0 1rem`,
    padding: `.5rem`,
    border: `1px solid gray`,
    float: `${props.alignment || 'none'}`,
  })
)

