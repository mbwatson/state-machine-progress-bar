import styled from 'styled-components'

export const Header = styled.footer(
    ({ theme }) => `
        background-color: ${ theme.palette.iron };
        color: ${ theme.palette.moss };
        padding: ${ theme.spacing };
    `
)
