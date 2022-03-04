---
title:
    page : "XElement/API-@visible"
    api  : "@visible"
    meta : "@visible Intersection Observer with XElement"
description: 
    page: "The `@visible` method allows you to observe for interactions between the XElement and its target element or the viewport. With full control over the application of the Intersection observer, you can control you Elements behavior on and off the screen"
    meta: "XElements Intersection Observer, letting you control your XElements behavior, on and off the viewport."
page: 
    next     : "api/animate"
    previous : "api/resize"

---
# `@visible`  XElement's Intersection Observer

XElement has its own implementation of the the Browsers native [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver), this is provided through the  `@visible` method.

`@visible` is the equivalent of Astro's `client:visible` partial hydration selector.

This method allows you to execute client side interactivity as the XElement becomes **visible** to the viewport.

XElement allows you to apply fine grained controls over the observation itself, letting you target different roots, adjust the margins of the observation, and the *thresholds* for when to capture the observations.

------

## Arguments

Let us first explain the three optional parameters that are available on the `@visible` method.

```js
@visible={(entry,store,options={...})=>{
  // Fire when visible
}}
```

### entry : IntersectionObserverEntry

XElement provides you the most recent entry to the observer, giving access to the [`IntersectionObserverEntry`]('https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry') instance, which contains the information describing the *intersection* between the XElement and its target container during a transition.

The properties attached to the `entry` that are available to you are as you would expect from the `IntersectionObserver` API.

- [entry.boundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/boundingClientRect)
  Returns the bounding box of the XElement
- [entry.intersectionRatio](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRatio)
  Returns the ratio of the `intersectionRect` in relation to the `boundingClientRect`
- [entry.intersectionRect](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/intersectionRect)
  Returns a `DOMRectReadOnly` object that represents the **targets visible area**
- [entry.isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting)
  Returns a Boolean, if `true` the XElement intersects with the root observer.
- [entry.rootBounds](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/rootBounds)
  Returns a `DOMReactOnly` object for the intersecting observer's **root**
- [entry.target](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target)
  Returns the XElement
- [entry.time](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/target)
  Returns [`DOMHighResTimeStamp`](https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp) with the time from when the intersection was recorded, relative to the `IntersectionObserver`'s time origin

### store : Object

Access to XElements internal data-store. We have a page dedicated to describing the `store` in more detail, you can visit it [here](/docs/api/methods/store).

The `store` allows for data to be stored and accessed from inside the callback function. Allowing for data and state to be exchanged between other XElements more easily.

### `options={...}` : Object

The `@visible` observer is setup by default to accept only the basic values that the observe requires.

These can be overwritten by passing in your own set of controls that you wish to exert over the XElement.

```js

options={
  [root : HTMLElement] : document.querySelector('#someElement'), //Defaults to document viewport
  [rootMargin : string] : "10px 10px 10px 10px" || "10%", // 0px 0px 0px 0px
  [threshold : number[]] : [0,0.25,0.5,1] // [0]
}
```

These defaults would cause triggering the callback function even on the slightest change to the viewport. By providing your own options into the function as the third optional parameter, gives you finer control over the execution of the callback function.

- **root : HTMLElement**
  This is the root element used for the observation. Here you define the bounding box of the `Element` or if no `Element` is provided, the bounds of the viewport is used to test for the intersection. To apply another element simply use any of the `document` methods to obtain the element that is on the DOM that you wish to observe.

- **rootMargin : string**
  Offset applied to the bounding box when calculating the intersections. Either growing (postive interger) or shrinking (negative interger) the root for calculation purposes. The offset can be written in either as percentages (`%`) or pixels (`px`). It can also accept shorthand values as well. 

- **thresholds : number[]**
  A numbered list, written in incremental order, where each threshold is a ratio of the intersection between the `Element` and its observed target. Observations are generated when the thresholds are crossed for that target. It defaults to `0`.

### `this`

`this` refers to the XElement itself.

------

## Methods

There is two `@visible` methods that are available to use.

The `@visible` method can accept callback functions written in the following manner, to use `await` within the scope of the function, you would need to wrap the function within its `async` wrapper.

```js
@visible={(entry,store,options={})=>{ }}

@visible={async(entry,store,options={})=>{ }}

@visible={function(entry,store,options={})=>{ }}

@visible={async function(entry,store,options={})=>{ }}
```

### `@visible` : CallBack ( event, store, options)

This indicates that the given function should only run when the element is visible to the viewport.

```js
@visible={() => {
  console.log('Im Visible and Active')
}}
```

### `@visible:once` : CallBack ( event, store, options)

`@visible:once` method only runs once when it becomes visible on the viewport, it then removes and disconnects itself from the Element.

```js
@visible:once={() => {
  console.log('See me Once, run me Once')
}}
```

-------

## Notes on Usage

The `@visible` method allows for developers to perform their own deferred execution of client-side interactivity based on the elements respective distance to the viewport and once it enters, have it execute your instructions.

Within the `@visible` method you are free to [dynamically import](/docs/api/methods/import) scripts from across the internet, make [fetch](/docs/api/methods/fetch) calls to other API's, and be free to interact with any of the `document` API's of the browser.

Since the code is only executed when it is intersecting the viewport. This deferred behavior allows you to do amazing things like preform `lazy` loading of content, delay execution of animations, retrieval of data as and when its needed.
