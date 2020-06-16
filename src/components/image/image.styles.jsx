import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const ImageContainer = styled.div(
  ({width, alignment}) => ({
    width: `${width}`,
    margin: `1rem 0 0 1rem`,
    padding: `.5rem`,
    border: `3px solid royalblue`,
    float: `${alignment || 'none'}`,
  })
)

export const ImageContainerAlt = styled.div(
  ({theme}) => ({
    margin: `1rem 0 0 1rem`,
    padding: `.5rem`,
    border: `3px solid ${theme.color.tertiary}`,
    width: '30%',
    float: 'right'
  })
)


