---
title:
    page : "XElement/API-@timings"
    api  : "@timings"
    meta : "Control the @timings of XElement Animations "
description: 
    page: "XElement allows you to animate pretty much any XElement you wish. The `@timings` method is the twin to `@animate`. This method informs the Web Animation API of the duration of the animations"
    meta: "Control the timings of the XElement Animations"
page: 
    next     : "api/define_vars"
    previous : "api/animate"

---

# `@timings` : Object

The `@timings` method is the twin to the `@animate` method. These two methods are fully dependent upon each other and hence cannot operate without their counterparts.

Since an animation is a series of movements defined by a set of key-frames over a period of time.

This page seeks to provide you with more information about the properties that are associated with the `@timings` method.


------
## `@timings` : Object

The `@timings` method accepts a single `Object`. Within the object contains the timing parameters for the `@animate` method.

```jsx
//Define the Timing properties 
@timings={
    [delay:number]    : ,
    [direction:string]: ,
    [duration:number] : ,
    [easing:string]   : ,
    [endDelay:number] : ,
    [fill:string]     : ,
    [iterationStart:number] : ,
    [iterations: number | Infinity] : ,
    [composite: string] : ,
    [compositeIteration: string] : ,
}
```

## Properties

The `@timings` properties are very similar to the CSS `animation` property.

Here it accepts the following properties:

- **iterations** : number | Infinity

  Equivalent to `CSS.animation-iteration-count`. To have an animation run forever as long as the element exists simply specify the JS keyword of `Infinity` or it can be a `number`. It defaults to `1`

- **iterationStart** : number
 
    Informs XElement at what point in the iteration the animation should start. defaults to `0.0`

- **delay** : number

    Provides a time delay in milliseconds `ms` (1x10<sup>^-3</sup>seconds)

- **endDelay**
  
    The number of milliseconds to delay after the end of an animation. Used when sequencing animations together based on the end time of another animation

- **direction** : "normal" | "reverse" | "alternate" | "alternate-reverse"

    Determines which direction the animation runs.

- **duration** : number

    The number of `ms` each iteration of the animation takes to complete. Defaults to 0, `duration >= 0` for the animation to run.

- **fill** : "forwards" | "backwards" | "both"

    Determine if the animations effects should be persistent after the animation or should it result in its prior state.

- **easing** 
    Equivalent to `CSS.animation-timing-function`. Here you define the easing properties of the animation. This can take either a string, or a `cubic-bezier` value

- **composite** : "add" | "accumulate" | "replace"

    Instructs how values are combined between animations.

----