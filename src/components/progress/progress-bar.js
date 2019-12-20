import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProgressBarWrapper = styled.div(
    ({ theme, percentage, width = '100%' }) => `
        border-bottom: 1px solid ${ theme.palette.moss };
        position: relative;
        height: ${ theme.spacing };
        &::before {
            content: "${ percentage }%";
            position: absolute;
            top: calc(100% + 10px);
            left: 50%;
            transform: translateX(-50%);
            color: ${ theme.palette.silver };
        }
        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: ${ percentage }%;
            background-color: ${ theme.palette.moss };
        }
    `
)
export const ProgressBar = ({ percentage }) => {
    return (
        <ProgressBarWrapper percentage={ percentage } />
    )
}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
}

ProgressBar.defaultProps = {
    percentage: 0,
}
