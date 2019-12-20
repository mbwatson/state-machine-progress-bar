import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProgressBar } from '../progress'
import { Heading } from '../typography'
import { Divider } from '../layout'
import { StateList, StateListItem } from './state-list'
import { ActionButtonGroup, ActionButton } from './action-buttons'

Array.prototype.removeDuplicates = function() {
    return Array.from(new Set(this))
}

const MachineWrapper = styled.div(
    ({ theme }) => `
        // & * {border: 1px solid ${ theme.palette.moss };}
        border: 1px solid ${ theme.palette.moss };
        border-radius: ${ theme.borderRadius };
        text-align: center;
        width: 90%;
        max-width: 768px;
        margin: auto;
        padding: ${ theme.spacing };
    `
)

/**
* StateMachine
* @initalState  String, should be top-level key in `flow` parameter, described next
* @flow         Object describing flow between states, e.g., { state1: { on: { actiona: state2 } }, state2: { on: { actionb: state1 } } }
*/
class StateMachine {
    constructor(initialState, flow) {
        this.state = initialState
        this.flow = flow
        this.states = Object.entries(this.flow).map(([state, flow]) => state).removeDuplicates()
        this.actions = Object.values(this.flow).reduce((allActions, s) => {
            return allActions.concat(Object.entries(s.on).map(([action, nextState]) => action)).removeDuplicates()
        }, [])
    }

    availableStates(currentState) {
        const thisStateFlow = Object.entries(this.flow[currentState].on).map(([signal, nextState]) => nextState)
        return thisStateFlow.removeDuplicates()
    }

    availableActions(currentState) {
        const thisStateFlow = Object.entries(this.flow[currentState].on).map(([signal, nextState]) => signal)
        return thisStateFlow.removeDuplicates()
    }

    transition(currentState, action) {
        if (this.availableStates !== []) {
            if (this.flow[currentState].hasOwnProperty('on') && this.flow[currentState].on.hasOwnProperty(action)) {
                console.log(`transition: ${ currentState } -> ${ this.flow[currentState].on[action] }`)
                return this.flow[currentState].on[action]
            }
        }
        return currentState
    }
}

const INTERVAL = 25 // in milliseconds
const DISABLE_UNAVAILABLE_ACTIONS = true

export const Fsm = props => {
    const machine = new StateMachine('zero', {
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
    const [state, setState] = useState(machine.state)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        switch (state) {
            case 'zero':
                setProgress(0)
                break
            case 'running':
                if (progress === 100) {
                    setState(machine.transition(state, 'END'))
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
    }, [state, progress])

    const handleChangeState = action => e => setState(machine.transition(state, action))

    return (
        <MachineWrapper>
            <ProgressBar percentage={ progress } />

            <Heading>Actions</Heading>
            <ActionButtonGroup>
                {
                    machine.actions.map(action => {
                        // console.log(`available actions: ${ machine.availableActions(state).join(', ') }\navailable states: ${ machine.availableStates(state).join(', ') }`)
                        return (
                            <ActionButton
                                key={ action }
                                onClick={ handleChangeState(action) }
                                disabled={ DISABLE_UNAVAILABLE_ACTIONS && !machine.availableActions(state).includes(action) }
                            >
                                { action }
                            </ActionButton>
                        )
                    })
                }
            </ActionButtonGroup>

            <Divider />

            <Heading>States</Heading>
            <StateList>
                {
                    Object.keys(machine.flow).map(s => (
                        <StateListItem key={ s } active={ state === s }>{ s }</StateListItem>
                    ))
                }   
            </StateList>

        </MachineWrapper>
    )
}

