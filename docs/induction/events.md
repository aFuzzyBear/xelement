---
title: "XElement Event Handlers"
api_title: "@events"
meta_title: "XElement-@events"
description: "Overview on XElement's Event Handlers, gain a better insight on how XElement lets you use any* Event behaviors that you wish your XElement to react to" 
page_number: 3
next_page: "/docs/api/methods/animate"
previous_page: "/docs/api/methods/observers"
---

# XElement Events Handlers

XElement is able to react to any `Event` possible.

The vast majority of `Event`'s are able to be subscribed to by using the `@` decorator followed by the 'name' of the event you wish the payload to execute on.

Certain events only work on certain parts of the document.

Given that we wont restrict you from writing out all the 180+ different events known, not including the synthetic ones that can be use. We suggest you use the `Events` with some diligence.

Any non applicable events themselves will fail silently.

It is best to only apply events outside of any [`customEvent`](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events) that might be declared in the [`@do`](/docs/api/methods/do) method, to the right element that you are consuming.

This would help you react to the right events on the element without to much difficulty.

For a full list of Events that are available and which elements they are fired on, please visit [MDN's Event Reference guide](https://developer.mozilla.org/en-US/docs/Web/Events)

It works by applying the relevant `add` or `removeEventListeners` in JavaScript over using inline html [`GlobalEventTargets`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers).

We expose some options on customizing the nature of the Event Handler itself, providing you with control over the Event [bubbling and capturing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) phases of the event action.


## DOM Event Interfaces

The browser provides many types of DOM specific `Event` interfaces. These allow you to access and interact with the browser making it provide additional functionality to the user.

There is a whole raft of standardized browser API's and their subsequent `Event` interfaces that you can freely utilize with `XElement`.

Interacting with events that are located on the `window` or `document` it is as easy to use as it is calling them.

```astro
<Input type='text' id="name" name="name"/>
<Button
    @click=((element)=>{
        name.select()//Selecting the name element content from the Input
        document.execCommand('copy') // Copy the Value to Clipboard
    })    
>
    Copy Name
</Button>
```

The above example demonstrates using two different types of XElements the first being a standard html `<input>` and the other, an interactive `<button>`, that takes the contents of the input and copies it to the clipboard.

As a general rule of thumb if its on the `document || window` you can use it as is.

------

## Further Information

To find out more about `Events` and the different ones you can interact and how to use them in more detail.

- [MDN's Event Reference guide](https://developer.mozilla.org/en-US/docs/Web/Events)
- Understand more about [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
- Find out more about using [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- Information about using [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
- Learn more about [`customEvent`](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)
- Understand [bubbling and capturing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)