import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProgressBar } from '../progress'
import { States, StatesListItem } from './state-list'
import { ActionButtonGroup, ActionButton } from './action-buttons'
import { useStateMachine } from '../../hooks'

const MachineWrapper = styled.div(
    ({ theme }) => `
        // & * {border: 1px solid ${ theme.palette.moss };}
        border: 1px solid ${ theme.palette.moss };
        border-radius: ${ theme.borderRadius };
        text-align: center;
        width: 90%;
        max-width: 768px;
        margin: auto;
        // padding: ${ theme.spacing };
    `
)

const INTERVAL = 25 // in milliseconds
const DISABLE_UNAVAILABLE_ACTIONS = true

export const Fsm = props => {
    const machine = useStateMachine('zero', {
        zero: {
            on: {
                START: 'running',
            },
        },
        running: {
            on: {
                PAUSE: 'paused',
                RESET: 'zero',
                END: 'complete',
            },
        },
        paused: {
            on: {
                START: 'running',
                RESET: 'zero',
            },
        },
        complete: {
            on: {
                RESET: 'zero',
            },
        },
    })
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        switch (machine.state) {
            case 'zero':
                setProgress(0)
                break
            case 'running':
                if (progress === 100) {
                    machine.transition('END')
                    return
                }
                const interval = setInterval(() => {
                    setProgress(progress + 1)
                }, INTERVAL)
                return () => clearInterval(interval)
            case 'complete':
                setProgress(100)
                break
            default: // 'paused'
                return
        }
    }, [machine, progress])

    const handleChangeState = action => e => machine.transition(action)

    return (
        <MachineWrapper>
            <ProgressBar percentage={ progress } />

            <ActionButtonGroup>
                {
                    machine.actions.map(action => {
                        return (
                            <ActionButton
                                key={ action }
                                onClick={ handleChangeState(action) }
                                disabled={ DISABLE_UNAVAILABLE_ACTIONS && !machine.availableActions.includes(action) }
                            >
                                { action }
                            </ActionButton>
                        )
                    })
                }
            </ActionButtonGroup>

            <States>
                {
                    Object.keys(machine.flow).map(s => (
                        <StatesListItem key={ s } active={ machine.state === s }>{ s }</StatesListItem>
                    ))
                }   
            </States>

        </MachineWrapper>
    )
}

