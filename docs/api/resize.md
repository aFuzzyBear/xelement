---
title:
    page : "XElement/API-@resize"
    api  : "@resize"
    meta : "XElement @resize Observation API"
description: 
    page: "The `@resize` method allow you to react to the XElement's dimensions changing. Have your component fully reactive to the viewport without any performance implications"
    meta: "The @resize method allows you to react to changes to the XElement's size."
page: 
    next     : "api/observe"
    previous : "api/visible"

---
# `@resize`  XElement's Resize Observer

The `@resize` is a `XElement`'s [Resize observer](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) method.

This allows you to preform interactions upon the element as its own dimensions change.

Reacting to the changes in the dimensions lets you have control over the elements behavior at certain sizes. Changing the `font-size` of the elements content, its `background-color`, the options are endless.

There is some notable benefits of using the Resize Observer over the `document.resize` event target. The key one is that the Resize Observer avoids infinite callback loops and cyclic dependencies, that can be created when resizing through a callback function.

------

## Arguments

The `@resize` method accepts only two optional arguments into its callback function.

```js
@resize={(entry,store) => { }}
```

The Resize Observer does not accept any additional options for controlling its behavior.

### entry : ResizeObserverEntry

XElement provides you the most recent entry to the observer. Giving you access to the [ResizeObserverEntry]('https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry') instance. This object contains the information of the new dimensions of the XElement.

The properties attached to the `entry` that are available to you are as you would expect from the `ResizeObserverEntry` API.

- [`entry.borderBoxSize`]('https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/borderBoxSize')
    Returns an object containing the new border box size of the XElement.

- [entry.contentBoxSize]('https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize')
    Returns an object containing the new content box size of the XElement.

- [entry.devicePixelContentBoxSize]('https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize')
    Returns an object containing the new content box size in device pixels of the XElement.

- [entry.contentRect]('https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentRect')
    Returns A [DOMRectReadOnly]('https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly') object containing the new size of the XElement.

- [entry.target]('https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/target')
    Returns a reference to the XElement.

### store : Object

Access to XElements internal data-store. We have a page dedicated to describing the `store` in more detail, you can visit it [here](/docs/api/methods/store).

The `store` allows for data to be stored and accessed from inside the callback function. Allowing for data and state to be exchanged between other XElements more easily.

### options?

There are no additional configuration options that are associated with the resize observer.

### `this`

`this` refers to the XElement itself.

------

## Methods

There is two `@visible` methods that are available to use.

The `@visible` method can accept callback functions written in the following manner, to use `await` within the scope of the function, you would need to wrap the function within its `async` wrapper.

```js
@resize={(entry,store,options={})=>{ }}

@resize={async(entry,store,options={})=>{ }}

@resize={function(entry,store,options={})=>{ }}

@resize={async function(entry,store,options={})=>{ }}
```

### `@resize` : CallBack ( entry, store )

This method indicates that the on given function

```js
@resize={() => {
  console.log("I've changed size!")
}}
```

### `@resize:once` : CallBack ( event, store )

This method indicated that the observation  runs only the **once** the element has been resized, it then would be remove and disconnected from the XElement.

```js
@resize:once={() => {
  console.log("I've only changed size Once!!")
}}
```

------

## Notes

Of all of our `@` decorators the `@resize` method is the only one that name-squats on another registered event-target: `document.resize`.

The reason for this was that the `@resize` functionality is not applied to the the `document`, instead it is applied directly to the `Element` in the form of the `ResizeObserver` API. Using this namespace to better reflect the `resize` behavior on the element and keep true with other observers.

You can still utilize the `document.resize` event target by using it inside your callback functions, for example:

```astro
@do={()=>{
  document.addEventListener('resize',()=>{})
}}
```
