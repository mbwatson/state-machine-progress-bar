import React from 'react'
import styled from 'styled-components'

const ClockWrapper = styled.div(
    ({ theme }) => `
    `
)

const Time = styled.h2(
    ({ theme }) => `
        color: ${ theme.palette.moss };
        font-size: 300%;
        font-family: Ubuntu Mono, monospace;
    `
)

export const Clock = ({ seconds }) => {
    const secondsCount = parseInt(seconds, 10)
    const ms = (seconds % 1).toFixed(2).replace(/^0\./, '')
    const hh = Math.floor(secondsCount / 3600).toString().padStart(2, '0')
    const mm = Math.floor((secondsCount - (hh * 3600)) / 60).toString().padStart(2, '0')
    const ss = (secondsCount - (hh * 3600) - (mm * 60)).toString().padStart(2, '0')
    return (
        <ClockWrapper>
            <Time>{ hh }:{ mm }:{ ss }.{ ms }</Time>
        </ClockWrapper>
    )
}
