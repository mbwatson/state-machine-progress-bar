import styled from 'styled-components'

export const StateList = styled.div(
    ({ theme }) => `
        width: 100%;
        margin: auto;
        color: ${ theme.palette.iron };
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (min-width: 768px) {
            flex-direction: row;
        }
    `
)

export const StateListItem = styled.span(
    ({ theme, active }) => `
        text-align: center;
        padding: calc(${ theme.spacing } / 2);
        margin: calc(${ theme.spacing } / 4) calc(${ theme.spacing } / 2);
        color: ${ theme.palette.moss };
        font-weight: bold;
        letter-spacing: 2px;
        border: 1px solid ${ theme.palette.moss };
        border-radius: ${ theme.borderRadius };
        flex: 1;
        transition: background-color 250ms;
        background-color: ${ theme.palette.snow };
        ${ active ? `
            background-color: ${ theme.palette.moss };
            color: ${ theme.palette.snow };
            transition: opacity 200ms;
            opacity: ${ active ? 1 : 0 };
            content: " *";
        ` : undefined }
    `
)

