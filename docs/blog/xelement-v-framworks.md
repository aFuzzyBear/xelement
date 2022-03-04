---
page_title: "XElement Vs Frameworks"
page_descriptions: "A critique between the many JS UI Frameworks and XElement"
---
# XElement Vs Frameworks

It should be noted before we go any further, this is not intended to be a slight nor a direct comparison between any of the frameworks that are mentioned.

Each are highly specialized, thoroughly developed tools that serve their own unique purpose in their own individual way.

What we are looking to do is draw upon the shared similarities that inspired XElement, and how they all fit relative to their relationship with Astro.

The UI frameworks that we are looking on this page is:

- React
- Preact
- Solid
- Vue
- Svelte

These are the most popular frameworks that are used in Astro projects. This is one of the many things that makes Astro stand apart from most other Static Site Generators, is the ability to *choose* from one or more frameworks to create your components.

However it must be said that Astro, is not a single page application(SPA). It is a multi-page application(MPA). This has some ramifications on the fundamental relationship between UI frameworks and how they are rendered to how they are composed.

## MPA Vs SPA

Single Page Applications is what we have been accustomed to developing for some time. A Single Page Application, is where there is only one page being sent to the client, along with a sizeable JavaScript bundle. It's in this bundle which houses all the application code and logic required for rendering; the process of creating, you application on the screen.

Each framework comes with their own set of renderer functions, with React it is: `ReactDOM.render()`, Vue has `Vue.component()` etc.

And each framework has their own unique blend of render functions and behaviors, that make their frameworks unique in a sense.

In essence its an 'application in a box', similar to the way the jack-in-the-box toy works, once the Javascript has been received, parsed, executed, rendered out, it then pops up on the screen.

Within this shell of the application you now have your content, once all the data fetching is done, and the site is no longer suspended of all interactions. Here you have your pages, your static content, and beautifully crafted UI components, everywhere.

You need a navbar, well thats a functional component. Need a Container, write up a function for that. State or Stateless, it doesn't really matter, they are all just JavaScript functions at the end of the day.

## An Brief Exploration into the `<Counter>`

The quintessential demonstrative component given by all frameworks is most arguably the 'Counter'.

A simple component where it displays a button and upon pressing, increments a value on the screen by one.

Since Astro lets you Bring Your Own Frameworks to the party, there is a number of different ways to write this simple component out.

And we will explore them all only briefly for contextual purposes, don't worry if you are not familiar with any of these UI frameworks, its not a prerequisite, if anything it's here to help give some insight on the many ways one could possibly use to *count* with Astro.

There is the React way, with Preact having a *lighter* implementation and footprint,

```jsx
import React, { useState } from 'react';

export const Counter = (props) => {
  const [count, setCount ] = useState(0)

  return (
    <div id="mainArea">
      button count: <span>{count}</span>
      <button id="mainButton" onClick={() => {setCount(count + 1)}}>Increase</button>
    </div>
  );

}
```

Likewise with SolidJS

```jsx
import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

export const CountingComponent = () => {
	const [count, setCount] = createSignal(0);
	return 
        <div>
            <button onClick ={()=>setCount(count++)}>Increment</button>
            <p>Count value is {count()}</p>
        </div>;
};
```

Similar to the (P)React method, but wholly different in its execution.

Vue wants to have the component be written in their own `.vue` component syntax, using `<templates>` and `<scripts>`

```astro

<template>
	<div class="button-area">
		<button @click="counter--" class="dec-button">-</button>
		{{ counter }}
		<button @click="counter++" class="inc-button">+</button>
	</div>
</template>

<script>
export default {
	name: "Counter",
	data() {
		return {
			counter: 0,
		};
	},
};
</script>

```

Svelte does so in a similar style, but compiles differently to the others. 

```svelte

<script>
	let count = 0;
	
	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	clicks: {count}
</button>
```

Given the examples of the different frameworks, there is striking similarities between some of them, yet there is a vast differences on how to implement this pretty simple and straight forward feature.

One of the shared similarities between all the frameworks is how they bring in the different languages of the web together within their own scope to build out their components.

This practice of collocation, having your HTML and CSS along side your JavaScript is extremely powerful for the developer as it allows for easier maintainability, and scalability.


## `<Counter>`

With out further ado, let's create our own `<Counter>` component to be next to our animating `<HelloWorld>` component.

```astro
---
import XElement from 'astro-`xelement`'

const {button:Button, span:Display, Counter} = XElement

---

...
<Counter
    @do={(element,store)=>{
        store.count = 0 
    }}
    >
    <Display id="display">0</Display>
    <Button 
        @click={(event,store)=>{ display.textContent =  ++store.count}}>
             Increment
    </Button>
    <Button 
        @click={(event,store)=>{ display.textContent = --store.count}}>
             Decrement
    </Button>
</Counter>

<!-- renders as -->
<counter>
    <span id="display">0</span>
    <!-- increments `counter_output` when clicked -->
    <button>Increment</button> 
    <button>Decrement</button> 
</counter>

```

All we are doing here is creating four distinct HTML elements: `const {button:Button, span:Display, Counter} = XElement}`.

Two of these *Named Elements* are known HTML Elements, two `<button>`'s and a `<span>`, the parent component is our `Counter`, this is deliberately unreferenced, it results in a html `<counter>` element which is a `DocumentFragment`, a special type of HTML element and one we would explain in more detail later on.
 <!-- TODO: Link to the HTML FRAGMENT AND ITS BEHAVIOUR ONCE WRITTEN UP -->

To apply the JavaScript we use one of many special `@` decorators that comes with `XElement` to inform the element of what type of action we wish it to perform.

Breaking this magic trick out, in our `<Counter>` parent element, we are asking it to **do** is initialize the `store` with a `count` of `0`. The `store` is a special non-persistent data object that is available to all `XElement` components. This lets you *store* your data and allow it to be used elsewhere.

Giving the `id` to the `<Display>` allows us to target that element from elsewhere in the component tree. Now we are merely telling the buttons that when they receive a `click` event to increment the `store.count` or decrement the count value updating the `display.textContent` as well.

And voila, that is us, we have our very own bona fide `XCounter`...sorry `<Counter>`, and the great thing is, it can be displayed many times and in as many different places around your Astro site as you wish.

## Next Steps

There is more still to come, and we strongly encourage you to continue this journey with us.

Still to demonstrate to you; how to exchange props around the place, pass them too and from the server to the client, from parent to child.

All the different ways you can style your components, and how to make them interactive.

Component composition, shared data states, dynamic imports, observer's and a whole lot more.

It really is *exciting* to be developing with `XElement`
<!--  -->