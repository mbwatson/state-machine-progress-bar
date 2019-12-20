import styled from 'styled-components'

export const ActionButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

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

