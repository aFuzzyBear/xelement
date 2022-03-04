---
title:
    page : "XElement/API-@do"
    api  : "@do"
    meta : "Do More with XElement"
description: 
    page: "The `@do` method is the powerhouse that drives all creative expression and client side interactivity in XElement. By letting you write your interactions in either JavaScript or Typescript you can do all sorts of wonderful and fully interactive user interactions."
    meta: "XElement takes your HTML element and lets you 'do' things with it on the client. By passing through JS/TS to the client, we let you write client-side interactions without the need for an external UI framework or renderer in Astro"
page: 
    next     : "api/event"
    previous : "api/is"

---
# `@do` : Callback

XElement is a HTML component generator first, client side interactivity second type of component.

With XElement you can choose what you wish to *do* with it, should you wish for it to dynamically fetch a post from a remote server, it can do that `asynchronously` for you. Interact and update the children on the client, it would also *do* that for you too.

XElement when you *do* something, you are providing client-side interactivity in the form of either JavaScript or TypeScript, again, your choice.

This page contains further information on the `@do` method, its arguments and how to use it so the genie inside, can grant your wishes.

--------
## `@do` : Callback (element, store)

`@do` is the main entry point for applying your code to the top-level of the component.

Here you have access to the `element` itself allowing you to **do** whatever you wish to it.

The `@do` method accepts a callback function which runs when the document has *loaded* and the element is ready.

It can accept the following optional parameters. These allow them to be access and used easily inside the scope of the `@do` function.

```js
@do={(element,store) => {
  console.log(element,store)
}}
@do={async(element,store)={ }}
@do={function(element,store)={ }}
@do={async function(element,store)={ }}
```

This is the equivalent to using the Astro `client:load` hydration selector.

Inside the `@do` method is an immediately executed function within the scope of the XElement.

This contains all the logic and actions you wish it to perform. Isolated within its own functional scope and doesn't leak out.

This also applies for sharing functionality from inside the `@do` method with other methods. It really cannot be done, the `@do` method is a self-contained function within the XElement.

However, we have other methods and approaches that we have implements, which we will explore in a some more detail in our pages on [`define:vars`](/docs/api/methods/define_vars), and [`store`](/docs/api/methods/store) methods.

In terms of order of execution. It is important to note what gets fired and when.

Naturally any of XElement's ['Observer Methods'](docs/api/methods/observers) execute immediately upon the observable event occurring.

For instance, an element containing a `@visible` method will execute before the `@do` method.

Similarly the `@resize` observer will execute before the `@visible`.

Any `@event` handler would be executed only upon that event being triggered, but generally speaking these are executed last.

You cannot link-up multiple `@do's` together, an XElement can only **do** one thing in a sense, but it can *do many things* well.

-------

## Arguments

The `@do` method accepts only two optional arguments that can be passed through into the scope of function body.

```js
@do={(element, store)=>{
  //🧞...What do you wish to do?
}}
```

### `element : HTMLElement`

 By passing through the element as an optional parameter, you obtain access to the DOM element and all of its properties.

```js
 @do={(element)=>console.log(element,{element})}
```

### `store`

Passing through the `store` as the second parameter, gives you access to XElements internal Data Object. This is a transient data object that which acts like a *global store* letting you pass through variables, functions, objects, etc. out from the scope of the method and into other elements.

```js
 @do={(element,store)=>console.log(store)} //{}
```

### `this`

Refers to directly to the DOMElement, `this` is always available to you internally within the scope of the function. It is the same as passing through `element` into the function.

```js
 @do={()=>console.log(this,{this})}
```

------

### `@do` async

You can use top-level `await` inside your `@do` methods by turning them into `async` functions. This is recommended if you are doing anything `Promise` based, like using `fetch` or `import`.

```js
 @do={async()=>{
   const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
 }} 
```

------

## Writing your methods

There is no set way to write your methods in XElement. It is truly up to you how you wish to write your `@` methods, some prefer to directly inline their payload into the Element itself, like how we have been demonstrating so far.

Another method is to have your methods written inside Astro's Frontmatter, and pass them through as static properties into your XElement.

```astro
---
  // Declaring the contents of the function here inside Astro 
 const answer = () => console.log(42)
---

 <Box @do={answer}> 
 <Box @do={rereferencedFunction}> 

```

This would behave as if you had directly inlined it within the element:

```astro
 <Box @do={()=>console.log(42)}>
```

If you wish to have your functions located off-site and somewhere else, import them directly into the Frontmatter, then re-reference the import again. You cannot send the import in directly to the XElement, due to a limitation on Vite's behalf. However this is walk-around should be able to allow you to do so with little issue.

```astro
---
  import myFunction from './myFunction.js'
  // Declaring the contents of the function here inside Astro 
 const rereferencedFunction = myfunction()
---

 <Box @do={rereferencedFunction}> 

```

------

## Notes on usage

`@do` is the primary function body for each element, it is really a self-invoking function wrapped within the body of the XElement payload.

All methods including the `@do` are written under [`strict-mode`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

You cannot export values from it, nor does it have a `return` value.

You can write out the body of your payload inside the Astro front-matter and pass it in as props into the element.

You can control children elements from within the `@do` method.

------
