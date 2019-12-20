import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ProgressBarWrapper = styled.div(
    ({ theme, percentage, width = '100%' }) => `
        border: 1px solid ${ theme.palette.moss };
        // width: ${ width };
        position: relative;
        height: 10px;
        margin: ${ theme.spacing } calc(${ theme.spacing } / 2);
        &::before {
            content: "${ percentage }%";
            position: absolute;
            bottom: 100%;
            left: calc(${ percentage }% / 2);
            transform: translateX(-50%);
            color: ${ theme.palette.moss };
            font-weight: bold;
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
