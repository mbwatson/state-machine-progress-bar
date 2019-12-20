import styled from 'styled-components'

export const Footer = styled.footer(
    ({ theme }) => `
        background-color: ${ theme.palette.iron };
        color: ${ theme.palette.moss };
        padding: ${ theme.spacing };
    `
)
