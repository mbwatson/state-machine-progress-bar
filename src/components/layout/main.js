import styled from 'styled-components'

export const Main = styled.main(
    ({ theme }) => `
        background-color: ${ theme.palette.snow };
        color: ${ theme.palette.iron };
        padding: ${ theme.spacing };
        flex: 1;
    `
)