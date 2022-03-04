---
page_title: "My First Components"
page_description: "Building your first set of XElement Components, here we will be using XElement to construct our own <HelloWorld> and <Counter> demonstration components"

---
# My First Components

This page will provide you with an introduction on how to start using XElement in your projects.

Here we are going to be building out two sets of components, demonstrating some of the methods that you can use to enhance your elements.

## `<HelloWorld>`

Let's create your first `XElement` component!

We will create a *named element* using the following syntax:

`const { TraditionalHTMLElement : MyComponentName } = XElement`

```astro
---
import XElement from 'astro-xelement'
const { h1 : HelloWorld } = XElement
---
<HelloWorld>
    !! Hello World !!
</HelloWorld>
```

This renders out as `<h1> !! Hello World !! </h1>`

From here we can make this element do any number of things...

Using **JavaScript** or **TypeScript** we can make this dynamic when certain certain events are triggered or conditions are met.

An XElement can perform actions on any number of behaviours, for instance, if it has been *clicked* on or if it is *visible* or if it has been *resized.* It can even `fetch` data and dynamically `import` files inside the element itself!

What you can do with this little `<HelloWorld>` component is entirely up to your imagination.

Let's make our `<HelloWorld>` component fade in, using the **Web Animation API**.

```astro
---
import XElement from 'astro-xelement'

const {h1:HelloWorld} = XElement

//Declaring the Keyframe sequence inside Astro
const fadeIn = [
    { 
        opacity: 0
    },
    {
        opacity: 1
    }
];
// Also declaring the timing options
const animationTiming = {
    duration: 1500,
    easing: 'ease-in',
    fill: 'both'
};

---
<HelloWorld
    @animate ={fadeIn}
    @timings ={animationTiming}
>
    !! Hello World !!
<HelloWorld>
```

Now, you should see the text 'Hello-World' fade nicely in to view.

<iframe src="https://codesandbox.io/embed/astro-xelement-default-starter-template-mp9f5?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Astro-XElement default starter template"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
     loading="lazy"
   ></iframe>


-----------------------

## `<Counter>`

How could we not provide an example of a 'Counter'?

You will notice that Astro starter "framework" examples (e.g. React, Svelte etc.) contain a counter component to show you how framework components work in Astro.

With XElement, you can have a fully-functioning, interactive *Astro* counter component, no other framework required!

### Let Start

Let's create our own interactive `<Counter>` component. Note that this time, we will need to declare a few different XElements, one to represent each HTML element we wish to create.

Our counter requires two buttons, as well as a counter display. We also need to create a parent `<Counter>` container element.

We can define all of these elements from XElement at once:

```astro
---
import XElement from 'astro-xelement'
const {..., button:Button, span:Display, Counter} = XElement
---
```

Here we are defining three different types HTML elements to create four distinct HTML elements. (Remember, we're making two buttons. So they are distinct elements on the document, but they are the same type of element!)

Two types of these *Named Elements* are familiar HTML Elements: `<button>` and `<span>`. The parent component is our `<Counter>` and is not associated to any html element. This allows us to produce a HTML `<counter>` element which is a `DocumentFragment`, a special type of HTML element. (reference link)

Let's see how we can make our XElement `<Counter>` component **do** some stuff: Add, subtract and display the current count. This is what the code looks like:

```astro
---
import XElement from 'astro-xelement'
const {..., button:Button, span:Display, Counter} = XElement
---
<Counter
    @do={(element,store)=>{
        store.count = 0 
    }}
    >
    
    <Button 
        @click={(event,store)=>{ 
        display.textContent =  ++store.count
    }}>
        +
    </Button>
    
     <Display id="display">0</Display>
    
    <Button 
        @click={(event,store)=>{
        display.textContent = --store.count
    }}>
        -
    </Button>
</Counter>
```

### `@` methods

To start enhancing our component, we use one of the many `@` methods recognized by `XElement` to specify what type of action we wish it to perform.

`@do` is the most common instruction, we are literally telling our element to "do" something. And in our buttons, we will use `@click` to apply add a `click` event listener.

We pass through a function, this can even by `async` to execute entirely on the client.

### `store`

XElement also provides a `store`: a special non-persistent data object that is available to all `XElement` components. This lets you literally *store* your data and allows it to be used elsewhere on the page.

In this example we are keeping track of our counter's `count` value in the store object.

### `id`

`id`'s are considered global attributes. We utilise this by giving our elements unique names. This lets us access any element on the DOM tree.

In this example, we can update the counter's displayed count by referencing, then changing the `<Display>` element's `textContent`.

### Summary

In this example, what we are asking our  parent element, the `<Counter>` to **do**  is initialise the `store` with a `count` of `0`.

We are then telling the buttons that when they receive a `click` event, they should increment or decrement the `store.count` and update the `display.textContent`.

This `<Counter>` example renders the following HTML to the page:

```astro
<counter>
    <button>+</button> 
    <span id="display">0</span>
    <button>-</button> 
</counter>

```

-----------------------

## Next Steps

## API reference

Visit the API reference doc to find all the XElement API's reference points and more information on how to use each one.

## Guides

Explore our guides to explore of the ways to use XElement in your project.

## Tutorials

Learn about using XElement by building some sample web components in an example site.

<!-- TODO! Make up Tutorials -->