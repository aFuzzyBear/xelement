---
title:
    page : "XElement/API-@observe"
    api  : "@observe"
    meta : "@observe DOM Mutations with XElement"
description: 
    page: "The `@observe` method allows you to observe and react too changes being made to the XElement's DOM properties. With full granular control over the observations lets you create reactions for the XElement if anything does change"
    meta: "Watch and react to changes on the XElement's DOM properties"
page: 
    next     : "api/animate"
    previous : "api/resize"

---
# `@observe` XElement's Mutation Observer

XElement has it's own implementation of the Browsers native [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

There is no equivalent hydration selector in Astro for this method. It's a method that is wholly unique to XElement.

This Observer watches over the XElement for any  changes being made to it. Reacting to mutations as; changes to the children, the addition or removal of DOM nodes, even changes to the XElement's attributes.

There is the full compliment of observations that you can apply over your XElement.

The reason behind this `@observe` property is to allow you to react to changes to being made to the XElement properties. Should they change for instance, where the data-attribute is set by another element, this can then perform a `fetch` action to retrieve new data and populate its inner content with the new information.

-----

## Arguments

Let us first explain the three optional parameters that are available on the `@observe` method.

```js
@observe={(entry,store,options={...})=>{
  // Fire when visible
}}
```

## entry :  MutationObserver

This provides the `MutationObserver` instance, which lets you watch for changes being made to the DOM tree.

### store : Object

Access to XElements internal data-store. We have a page dedicated to describing the `store` in more detail, you can visit it [here](/docs/api/methods/store).

The `store` allows for data to be stored and accessed from inside the callback function. Allowing for data and state to be exchanged between other XElements more easily.

### `options={...}` : Object {}

With the `@observe` method you can interact and change the options as you see fit.

Here are the following options that it accepts and the manner it is expressed.

```js
@observe=((observation,store,options={
  [attributes:Boolean]:'true'||'false' // Optional, true by default  
  [subtree:Boolean]:'true'||'false' // Optional, true by default  
  [childList:Boolean]:'true'||'false' // Optional, true by default  
  [attributeFilter:number[]]:[0,<,x,<,1] // Optional,   
  [attributeOldValue:Boolean]:'true'||'false' // Optional, false by default  
  [characterData:Boolean]:'true'||'false' // Optional, false by default  
  [characterDataOldValue:Boolean]:'true'||'false' // Optional, false by default  
})=>{})

```

By default the `MutationObserver` requires at least one of the aforementioned options, we have instead turned on three of the most common options by default for you.

### `this`

`this` refers to the XElement itself.

-----

## Methods

There is two `@observe` methods that are available to use.

The `@observe` method can accept callback functions written in the following manner, to use `await` within the scope of the function, you would need to wrap the function within its `async` wrapper.

```js
@observe={(entry,store,options={})=>{ }}

@observe={async(entry,store,options={})=>{ }}

@observe={function(entry,store,options={})=>{ }}

@observe={async function(entry,store,options={})=>{ }}
```

### `@observe` : CallBack ( event, store, options)

This runs whenever there is a DOM Mutation change to the Element or its sub-components, such as: Attributes, Children, Modifications made to the Components Subtree and also any data changes.

By default it would observe all the aforementioned attributes unless specified, then it would only observe those options specified.

```js
@observe={() => {
  console.log("Something's Changed with the element's properties")
}}
```

### `@observe:once` : CallBack ( event, store, options)

The `@observe:once` method only runs **once** when a change has been observed on the element, then removes and disconnect itself from the Element, and no further observations are made. 

```js
@observe:once={() => {
  console.log("Something's Changed with the element's properties")
}}
```

-----
