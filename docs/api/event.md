---
title:
    page : "XElement/API-@event"
    api  : "@event"
    meta : "Event Driven Execution with XElement"
description: 
    page: "The `@event` methods page . By letting you write your interactions in either JavaScript or Typescript you can do all sorts of wonderful and fully interactive user interactions."
    meta: "XElement takes your HTML element and lets you 'do' things with it on the client. By passing through JS/TS to the client, we let you write client-side interactions without the need for an external UI framework or renderer in Astro"
page: 
    next     : "api/event"
    previous : "api/is"
---

# `@event` : HTMLEventTarget


## Arguments

Events are written out in the manner displayed below.

```js
@event={(event, store, options={option:value})=>{
    // Act upon event
}}
@event={async(event, store, options={option:value})=>{ }}
@event={function(event, store, options={option:value})=>{ }}
@event={async function(event, store, options={option:value})=>{ }}
```

Events accepts three optional arguments: `event`, [`store`](/docs/api/methods/store) and `options`. It then executes a callback function on the `@event` being targeted.

To obtain the XElement inside the scope of the event callback function, you can declare it simply by utilizing `this`

### `this`

Normally inside an event `this` would infer the `global` context. However with XElement `this` would always return a reference to the XElement.

```astro
@event={()=>{
    console.log(this)
}}
```

*This* should make it easier to write your instructions for the element, simply referencing `this` property or by using [`event.currentTarget`](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

------

## `@event` Methods

Here we illustrate the main mechanism for interacting with the `Event` Interface, along with the options that are associated to controlling the behavior with the `@event` handler.

### `@event` : EventTarget < Callback(event , store, options) >

The `@eventTarget` property is `@` followed by an event name that indicates the given `Event` that XElement should listen for.

```js
@click | @fullscreenchange | @mouseenter ......
```

You can apply any event you wish to any element, however events that don't apply to certain elements will silently fail.

You can find out more about these events and where best they apply [here](https://developer.mozilla.org/en-US/docs/Web/Events)

To apply an event on an element simply apply the `@event` method inside your XElement like so:

```astro
---
    const {button: Button} = XElement
---
    <Button @click={()=>console.log('Ive been clicked!')}>
        Press me
    </Button>
```

This behavior comes without any Event capturing properties attached, so it would propagate through the branch that it is attached to.

To direct for the propagation properties you can do by passing in the third optional parameter `options={once:'true',}`.

You can apply as many events as you wish to on your element, you are not limited to using only one event listener per element.

------

## Controls & Options

XElement provides you with extra levels of fine-grained control over your `@event` listener.

### `@event:remove` : EventTarget < Callback(event,store,options) >

The `@event:remove` property is the **removal of event listeners** of a given type from an element.

```js
@click:remove={() => console.log("Removed the click event!")}
```

This is the equivalent to using [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener).

### `@event:once` : EventTarget < Callback(event,store,options) >

The `@event:once` property instructs XElement that the given `Event` should **fire only once**, removing itself when done.

```js
@click:once={() => console.log('Im a one time deal')}
```

### `@event:prevent` : EventTarget < Callback(event,store,options) >

The `@event:prevent` property followed by an event name indicates that the given function should **prevent the default behavior** of that particular event listeners effects.

```js
@click:prevent={() => console.log('Prevent default behavior in full effect')}
```

### `options={}` : Object

Certain Events have certain effects on the DOM, where one event might bubble up through to the parent or another event might be captured only on the element.

To exert your own control over the event itself, you can pass in the third optional argument: `options={}`.

Below describes the options that this can take and their respective inputs. For adding Event Listeners, this is the options that are available to you. 

```js
options={
    [capture: Boolean]: true || false,
    [once: Boolean]: true || false,
    [passive: Boolean]: true || false,
    [signal: AbortSignal],
}
```

For `@event:remove` the options are a lot less:

```js
options={
    [capture: Boolean]: true || false,
}
```

------