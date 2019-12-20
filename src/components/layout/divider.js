import styled from 'styled-components'

export const Divider = styled.div(
    ({ theme }) => `
        height: 10px;
        width: 100%;
        border-bottom: 1px solid ${ theme.palette.silver };
        margin: ${ theme.spacing } auto;
    `
)
