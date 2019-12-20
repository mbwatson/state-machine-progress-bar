# Finite State Machine

## Overview

Good UI design aligns user expectations with application outcomes. Controlling the flow of state in UI components helps prevent unexpected results. This is a first stab at thinking about writing finite-state-machine-powered UI components.

I have built a quick, little timer/progress bar component that can be controlled through buttons in [React](https://reactjs.com).

## Purpose

Although state machine JavaScript libraries exist, the aim of this small project is to understand controlling the structure and flow of state in UI components without an external library.

Any long-term plans to implement this at scale would surely involve abstracting my state machine concept into its own library, but for this trial, it lives in the file in which the component that uses it is defined.

## Approach

Instances of the class `StateMachine` know how to flow between states, as they are initialized with an initial state (String) and an object describing the actions that signal transitions between states. Additionally, it has a few methods to assist in populating the UI with information about available states and actions based on the current state.


## Example

Consider a timer UI component that may have four states

`running`, `paused', `zero', and `complete`

and four actions

`START`, `PAUSE`, `RESET`, and `FINISH`.

A snippet from a possible stateFlow object for this timer shown below illustrates how transitions may occur from the `running` state.

```js
    running: {
        on: {
            PAUSE: 'paused',
            RESET: 'zero',
            FINISH: 'complete',
        },
    },
```

The above snippet tells the state machine that, when in the `running` state, it should respond to three signals `PAUSE`, `RESET`, and `FINISH` by transitioning to the three states `paused', `zero', and `complete`, respectively.

This prevents from ever responding to, say, `START`, while the timer has already started running. (Of course, there may be instances in which it would make sense to respond to that signal.)

The idea is that controlling state flow in this way prevents ever having to think about impossible states. If these four states were all stored as booleans, this would potentially allow our UI component to have boolean values that describe one of $2^4 = 16$ possible states, many of which are senseless, such as simultaneously having `running = true` and `paused = true`.

## Demo

https://mbwatson.github.io/state-machine-progress-bar

