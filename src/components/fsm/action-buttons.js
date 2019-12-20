import styled from 'styled-components'

export const ActionButtonGroup = styled.div(
    ({ theme }) => `
        display: flex;
        min-height: 200px;
        flex-direction: column;
        justify-content: center;
        margin: calc(${ theme.spacing } * 2) calc(${ theme.spacing }) calc(${ theme.spacing }) calc(${ theme.spacing });
        align-items: stretch;
        @media (min-width: 768px) {
            margin: calc(${ theme.spacing } / 4);
            flex-direction: row;
            align-items: center;
        }
    `
)

export const ActionButton = styled.button(
    ({ theme }) => `
        margin: 0.5rem 0.5rem;
        padding: 0.25rem 0.5rem;
        cursor: pointer;
        &:disabled {
            cursor: default;
        }
    `
)

