# Observations with XElement

There are four `Observer` API's that were added to the browsers in recent history. These API's came about to address several problems that were becoming apparent with using `Events` to react to changes on the DOM.

The main problem was that as Web applications were becoming increasingly complex and they began to rely on the client a lot more. The need for more richer experiences to do more, and ultimately perform better was paramount in the shift away from using native DOM `Events` to a more native browser implementations.

The need to avoid the cyclic dependencies and infinite loops that were caused by the `Observers` former counterparts were addressed by these newer `asynchronous` API's. Having received full browser support, these Observers have helped empower frameworks and developers to help manage the burden of performance in their applications with these controllable `async` observer API's.

Of the four API's XElement gives you access to three of these API's. These are:

- [`@resize` : Resize Observer](#resize)
- [`@observe` : Mutation Observer](#observe)
- [`@visible` : Intersection Observer](#visible)

The remaining [Performance Observer](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver) we felt was not really needed with XElement, since all the execution times of XElement components are extremely infinitesimal. If demand requires, we can always seek to revisit this decision.

Each Observer carries out their respective observation. The `@resize` observer focuses on the changing sizes to the Elements bounding box size. The `@visible` observer focuses on when the Element is intersecting with the target element. Lastly the `@observe` method is the DOM's mutation observer, this watches for changes being made to the element.

All these observers execute your code in a non-blocking manner, keeping performance close to what the browsers provide. With each observation being made is an opportunity for you to determine what code you wish to execute and when. With XElement, liberty in your choice is at the core what XElement is about. This way you can create truly responsive, performant, components with little ease.  

Each observer is ready setup for you, you just need to provide it a callback function to execute on whatever condition you wish to observe.

They also come with their own set of options to provide an extra level of control over the observations made on the element.

These `[options={...}]` vary between observers, for instance, the  "Resize Observer" accepts no additional properties, where as the 'Mutation Observer'  can accept up to seven different properties from which to cast your observations on.

There is more information on each observer and their respective properties together in their allotted sections.

-------

## Overview

This section seeks to give you a very broad understanding to using the observations and their API. Each API is of a similar implementation however there are differences which we do explore in more detail in their respective api pages.

Firstly each Observation accepts a callback function, which is executed solely on the client. These functions can be `asynchronous` letting you `await` promises within the function body to `import` or `fetch` data from external sources.

Each observation is written out in the a similar fashion.


```jsx
@Observation={(ObservableEvent, store, options={})=>{
    // Act upon an observation
}}
@Observation={async(ObservableEvent, store, options={})=>{
    // Await upon an observation
}}
```

As you may noticed there are three arguments present, in the above example. These are explained in the following section.

## Arguments

Observations can accept the following optional arguments:

- `Observation`: This is the observable `event` that is attached to the element.
- [`store`](): Provides access to XElements internal data object `{}`
- `options={...}`, Pass observational instruction to the observer.

Each argument is optional, and each parameter passed **must** be in their respected format.

### `this`

You would be interested to know that `this` when used for each observer returns only the element that it is targeted on.

This makes it easier to access `this` XElement DOM properties within each observation.

------

## `@visible` : CallBack ( event, store, options)

The `@visible` is a `XElement`'s [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) method.

This indicates that the given function should only run when the element is visible to the viewport, or not.

```js
@visible={() => {
  console.log('Im Visible and Active')
}}
```

<button>[More on `@visible` method]()</button>

-----

## `@resize` : CallBack ( event, store )

The `@resize` is a `XElement`'s [Resize observer](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) method.

This allows you to preform interactions upon the element as its own dimensions change.

Firing a callback when changes to either its content or border box sizes occurs.

```js
@resize={() => {
  console.log("I've changed size!")
}}
```

<button>[More on `@resize` method]()</button>

-----

## `@observe` : CallBack ( event, store, options)

The `@observe` is a `XElement`'s [Mutation observer](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) method.

This runs whenever there is a DOM Mutation change to the Element or its sub-components, such as: Attributes, Children, Modifications made to the Components Subtree and also any data changes.

By default it would observe all the aforementioned attributes unless specified, then it would only observe that one property.

```js
@observe={() => {
  console.log("Something's Changed with the element's properties")
}}
```

<button>[More on `@observe` method]()</button>

-----


