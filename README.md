# Finite State Machine

## Overview

Good UI aligns user expectations with application outcomes. Controlling the flow of state in UI components helps prevent unexpected results. This is a first stab at thinking about writing finite-state-machine-powered UI components.

I have built a quick, little timer/progress bar component that can be controlled through buttons in [React](https://reactjs.com).

## Purpose

Although state machine JavaScript libraries exist, the aim of this small project is to understand controlling the structure and flow of state in UI components without an external library.

Any long-term plans to implement this at scale would surely involve abstracting my state machine concept into its own library, but for this trial, it lives in the file in which the component that uses it is defined.

## Approach

Instances of the `StateMachine` class know how to flow between states, as they are initialized with (1) an initial state (a String) and (2) an object describing the actions that signal transitions between states. Additionally, instances of `StateMachine` have a few helper methods to return available actions and possible next states, given the current state. These assist in populating the UI with helpful information.

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

Then the state machine could be invoked with some code like the following.

```js
const [state, setState] = useState('zero')

// ...

setState('running')

machine.transition(state, 'PAUSE') // returns 'paused'

// ...

```

The machine acts kind of like router between states and simply returns a string representation of the state to which the component should transition next. Passing this returned state into `setState` officially transitions the timer component's state in a well-defined manner.

```js
setState(machine.transition(state, 'PAUSE'))
```

Shoving all this into a `handleChangeState` function makes responding to user interactions simple, as it takes care of passing along the component's _current_ state to the machine.

```js
const handleChangeState = action => e => setState(machine.transition(state, action))
```

Now, one simply calls this `handleChangeState` function on buttons with an action (or signal) parameter to pass along to the machine for processing. The machine, then, returns the next state, and React sets the state as dictated by the machine.

For example, the button defined by

```jsx
<button onClick={ handleChangeState('START') }>Start Timer</button>
```

This implementation does feel a little convoluted, but--because this was kind of a proof of concept for me--I'm okay with that for now.

## So What?

The idea is that controlling state flow in this way prevents ever having to think about impossible states. If these four states were all stored as booleans--such as `isZero`, `isRunning`, `isPaused`, and `isComplete`--then this would potentially open the door for our component to have $2^4 = 16$ possible states, many of which are senseless, such as simultaneously having `isRunning = true` and `isPaused = true`.

Not just user experience is controlled with this manner of state control. This also aids improves developer experience, as this alleviates the necessity to write complex conditional logic, such as the following.

```js
if (!isZero && !isRunning && isPaused) {
    //...
}
```

The front-end developer need not bloat her code base with checks for these cases like `isRunning = true` and `isPaused = true` because the state machine simply won't allow those to happen.

## Next Steps and Ponderings

Again, I ignored how convoluted this method felt at first, and now that I have a grasp on this approach, I think future abstractions will feel more natural.

I was torn whether the machine should keep track of state for the component or act more as a router, simply dictating allowed transitions back to React's state-handling capabilities, as it does in this iteration. Seems to work fine, but the other approach feels like it's worth exploring.

## Demo

https://mbwatson.github.io/state-machine-progress-bar

