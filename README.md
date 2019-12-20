# Finite State Machine

## Overview

Good UI aligns user expectations with application outcomes. Controlling the flow of state in UI components helps prevent unexpected results. This is a first stab at thinking about writing finite-state-machine-powered UI components.

I have built a quick, little timer/progress bar component that can be controlled through buttons in [React](https://reactjs.com).

## Purpose

Although state machine JavaScript libraries exist, the aim of this small project is to understand controlling the structure and flow of state in UI components without an external library.

Any long-term plans to implement this at scale would surely involve abstracting my state machine concept into its own library, but for this trial, it lives in the file in which the component that uses it is defined.

## Approach

Although this will be specific to React, I've built out a custom `useStateMachine` hook, which abstracts away how to flow between states, as it is invoked with (1) an initial state (a String) and (2) an object describing the actions that signal transitions between states. Additionally, it exports a few helper functions to return available actions and possible next states, given the current state. These assist in populating the UI with helpful information.

## Example

Consider a timer UI component that may have four states

`zero`, `running`, `paused`, and `complete`

and four actions

`START`, `PAUSE`, `RESET`, and `END`.

A snippet from a possible stateFlow object for such a timer is shown below, and it illustrates how transitions may occur from the `running` state.

```js
    running: {
        on: {
            PAUSE: 'paused',
            RESET: 'zero',
            END: 'complete',
        },
    },
```

The above snippet tells the state machine that, when in the `running` state, it should respond to three signals `PAUSE`, `RESET`, and `END` by transitioning to the three states `paused`, `zero`, and `complete`, respectively.

Then the state machine could be invoked as follows.

```js
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

// ...

machine.transition('PAUSE') // sets the machine's internal state to 'paused'

// ...

```

The machine acts kind of like router between states and simply returns a string representation of the state to which the component should transition next. As such, it behaves quite similarly to React's useState hook.

I'm not sure how to get around the 'too many renders' error of just using `machine.transition(action)` inside of `onClick`, so I've abstracted away the stripping out of the event parameter by defining a `handleChangeState` function like so.

```js
const handleChangeState = action => e => setState(machine.transition(state, action))
```

Now, one simply calls this `handleChangeState` function on buttons with an action (or signal) parameter to change (or not change) the state accordingly.

For example, the button my be defined as follows.

```jsx
<button onClick={ handleChangeState('START') }>Start Timer</button>
```

## So What?

The idea is that controlling state flow in this way prevents ever having to think about impossible states. If these four states were all stored as booleans--such as `isZero`, `isRunning`, `isPaused`, and `isComplete`--then this would potentially open the door for our component to have $2^4 = 16$ possible states, many of which are senseless, such as simultaneously having `isRunning = true` and `isPaused = true`.

Not just user experience is controlled with this manner of state control. This also aids improves developer experience, as this alleviates the necessity to write complex conditional logic, such as the following.

```js
if (!isZero && !isRunning && isPaused) {
    //...
}
```

The front-end developer need not bloat her code base with checks for these cases like `isRunning = true` and `isPaused = true` because the state machine simply won't allow those to happen.

## Demo

https://mbwatson.github.io/state-machine-progress-bar

