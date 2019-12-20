import React from 'react'
import styled from 'styled-components'

const StatesWrapper = styled.div(
    ({ theme }) => `
        width: 100%;
        margin: auto;
    `
)

const StatesTitle = styled.div(
    ({ theme }) => `
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${ theme.palette.moss };
        font-size: 80%;
        background-color: ${ theme.palette.snow };
        padding: calc(${ theme.spacing } / 4);
        border-top: 1px solid ${ theme.palette.moss };
        border-bottom: 1px solid ${ theme.palette.moss };
    `
)

const StatesList = styled.div(
    ({ theme }) => `
        display: flex;
        flex-direction: column;
        min-height: ${ theme.spacing };
        @media (min-width: 768px) {
            flex-direction: row;
        }
        justify-content: center;
    `
)

export const StatesListItem = styled.span(
    ({ theme, active }) => `
        text-align: center;
        padding: calc(${ theme.spacing } / 4);
        color: ${ theme.palette.moss };
        font-size: 80%;
        letter-spacing: 2px;
        flex: 1;
        transition: background-color 250ms;
        background-color: ${ theme.palette.silver }22;
        ${ active ? `
            background-color: ${ theme.palette.moss };
            color: ${ theme.palette.snow };
            transition: opacity 200ms;
            opacity: ${ active ? 1 : 0 };
            content: " *";
        ` : undefined }
    `
)

export const States = ({ children }) => {
    return (
        <StatesWrapper>
            <StatesTitle>STATE</StatesTitle>
            <StatesList>
                { children }
            </StatesList>
        </StatesWrapper>
    )
}