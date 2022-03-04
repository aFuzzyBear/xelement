![#XElement Banner Image](https://see.fontimg.com/api/renderfont4/GD6D/eyJyIjoiZnMiLCJoIjo4OCwidyI6MTAwMCwiZnMiOjg4LCJmZ2MiOiIjMkYyNzY2IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/WEVsZW1lbnQ/atures-500-personal-use-only.png)

`XElement` is an [Astro]('https://astro.build') only, **HTML Web Component Generator**.

It lets you to create any type of Custom HTML Web Components to use within Astro, from a single interface.

`XElement` lets you choose *when* to run JS on the client-side, whether it be when the document is ready or on any given event, or on any type of observer.

<!-- It can allow for **Data** to be passed between parent and children and vice versa. -->

Supports all browser native features such as; Browser `fetch` API, and Web `animation` API. If its on the `window` you can use it by calling either `window || document ` within the Element.

You can even directly render content within the  **Shadow DOM** and more.

Respecting Astro's unique approach to Island's Architecture, `XElement` expands this concept in some innovative ways to work with your collection of web components, with some really surprising results.

--------------------------------------------------------------------

## Project Status

> ⚠️ This project is under active development and can be considered stable as of `v2`.

We will constantly be seeking to make `XElement` better with new features and improvements in due course. And will always work alongside Astro as that framework matures in time.

`v2` comes of the release of Astro `v0.21` using their new GO compiler. Previous version of `XElement` that was supported on Astro versions older than this has now been [archived](https://github.com/aFuzzyBear/astro-ui/tree/v0.20-archive).

### Compatability

`XElement` is supported on all versions of Astro >`v0.21`

This particular version of XElement will not be supported on Astro versions <`0.20.12`.


--------------------------------------------------------------------

## Getting Started

Import `XElement` from from npm:

```bash
npm i astro-xelement -D
```

Import into your [Astro](https://astro.build) file:

```astro
---
import XElement from 'astro-xelement'
---
```

All `XElement` components are *polymorphic* in the way that they can be implemented.

This means that you can specify in a number of different ways how to you wish to use `XElement` for creating and designing your own interactive HTML web components.

--------------------------------------------------------------------

## How to use

`XElement` lets you generate simple HTML Elements and complex Web-Components with JS from a single place. This provides the component with a form of *Element encapsulation* for fine-grained interactivity and dynamism.

It'll let you choose how to tie in JS into your HTML Element.

And it is really simple to use, take a look over some of these examples.

```astro
---
import XElement from 'astro-xelement'
---
<XElement @is="h1" class="joy">Here Comes A Title</XElement>

<!-- renders as -->
<h1 class="joy">Here Comes A Title<h1>
```

In this example, we are representing an article heading as a page title via JS.

```astro
---
import XElement from 'astro-xelement'
---
<XElement @is="h1"
  @do={element => {
    document.title = `${element.textContent} - Pushed to the Page Title via JS`}
  }
>Some Article Title</XElement>

<!-- renders as -->
<h1>Some Article Title</h1>

<!-- js changes the title to -->
<title>Some Article Title - Pushed to the Page Title via JS</title>
```

Another example, here it can be used to handle a click event in JS on the Element.

```astro
---
import XElement from 'astro-xelement'
---
<XElement.button
  @click={element => {
    console.log('clicked')
  }}
>Button: Clickable</XElement.button>

<!-- renders as -->
<button>Button: Clickable</button>

<!-- logs "clicked" to the console when clicked -->
```

The next example is the pinnacle of all framework examples, setting up a custom 'Counter' HTML Web Component.

```astro
---
import XElement from 'astro-xelement'

const { Button, CounterComponent } = XElement
---
<CounterComponent>
  <Button
    @do={() => {
      let count = 0;

      this.onclick = () => {
        counter_output.textContent = ++count
      }
    }}
  >Increment</Button> <span id="counter_output">0</span>
</CounterComponent>

<!-- renders as -->
<counter-component>
  <button>Increment</button> <span id="counter_output">0</span>
</counter-component>

<!-- increments `counter_output` when clicked -->
```

👆 A Working HTML Counter Web Component 🤯

--------------------------------------------------------------------

## Properties

This is the shape of the `XElement` props:

```ts
/** @typedef Tag - Valid HTML Tag names */
type Tag = keyof HTMLElementTagNameMap | (string & {})

export interface Props {
   '@is': Tag,
   shadowroot,
  ...attrs?: any
}
```

### type `Tag` : HTMLElementTagName | string

Here we allow you to generate spec-compliant semantic HTML tag names for your Web Element. This is provided from TS `index.d.ts` type bindings. A full list can be found [here](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelementtagnamemap.html)

The `Tag` can be extended to incorporate custom Tags, allowing you to specify and create HTML compliant Web Components, that render to the DOM.

### type `@is` : Tag

The `@is` property accepts a string indicating the type of element being created. By default, it is a `span`.

```jsx
@is = "div" | "p" | "a" | "audio" | "img" | "video" ...
```

This is a necessary property to allow `XElement` to generate the HTML Element that you wish to consume for you component.

Since `XElement` is polymorphic in its nature, it does need to know what type of Element it is to generate. There are three ways to inform `XElement` of the *type of element* its to create.

```astro
<!-- (1) using `@is`-->
<XElement @is="div"></XElement>

<!-- (2) using `.` notation-->
<XElement.button></XElement.button>
```

```astro
---
// (3) using a `named` reference
const { Section } = XElement
---
<Section></Section>
```

For further information on HTML Elements and their representations, please visit [MDN-Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

### type `attrs` : HTMLAttributes

Can utilize as many of the [HTML Element Attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) that are registered for the element specified.

You can use the full compliment of associated HTML attributes such as; `aria-` attributes, access and modify the `data-` attributes, specify the elements `id` and apply `class` and inline `style` attributes.

--------------------------------------------------------------------

## `XElement` Client-Side JS

Now the purpose of `XElement` is to help facilitate generating and consuming Astro compliant, Web standard HTML Elements, that need JS without the use of an external framework.

In order to respect Astro's Island's ethos, and hydration policies `XElement` has been structured in such a way that the JS sent to the client is packaged as independent modules, attached only to the element in question. 
<!-- and any children it may inherit. - the validity of this statement doesnt seem to fit with observations, Each module is now independent of itself -->

Since the JS is scoped directly to each `HTMLElement` in a way not previously possible it allows you to specify when you wish to run your script, and how.

This can be done either on an event handler or by providing a payload to run on certain conditions.

These are the following methods to apply client-side JS using `XElement`:

--------------------------------------------------------------------

### `@do` : void

The `@do` property accepts a function which runs when the element has loaded and document is ready.

```js
@do={(element) => {
  console.log(element)
}}
```

This is the equivalent to using the Astro `client:load` hydration selector.

--------------------------------------------------------------------

### `@visible` : void

The `@visible` property indicates that the given function should run when the element is visible to the viewport.

```js
@visible={() => {
  console.log('Im Visible and Active')
}}
```

This is equivalent to Astro's `client:visible` hydration selector.

### `@visible:once` : void

This `@visible:once` property only runs **once** when it becomes visible on the viewport, it then removes and disconnects itself from the Element.

```js
@visible:once={() => {
  console.log('See me Once, run me Once')
}}
```

--------------------------------------------------------------------

### `@resize` : void

The `@resize` property fires a callback whenever there is a change to `XElement`'s dimensions, either its content or border box.

```js
@resize={() => {
  console.log("I've changed size!")
}}
```

This is equivalent to Astro's `client:media` hydration selector.

### `@resize:once` : void

The `@resize:once` property only runs **once** when the element has been resized only *once*, it then would remove and disconnect itself from the Element.

```js
@resize:once={() => {
  console.log("I've only changed size Once!!")
}}
```

--------------------------------------------------------------------

### `@observe` : void

The `@observe` property runs whenever there is a DOM Mutation change to the Element or its sub-components, such as: Attributes, Children, Modifications made to the Components Subtree and also its data. By default it would observe all the aforementioned attributes unless specified.

```js
@observe={() => {
  console.log("Something's Changed with the element's properties")
}}
```

### `@observe:attr` : void

This allows to observe any changes that are **only** made to the Elements Attributes

```js
@observe:attr={()=>{
  console.log("Something's Changed with the element's attributes")
}}
```

### `@observe:children` : void

This allows to observe any changes that are **only** made to the Elements children

```js
@observe:children={()=>{
  console.log("Something's Changed with the element's children")
}}
```

### `@observe:sub` : void

This allows to observe any changes that are **only** made to the Elements subtree

```js
@observe:sub={()=>{
  console.log("Something's Changed with the element's subtree")
}}
```

### `@observe:data` : void

This allows to observe any changes that are **only** made to the Elements character data

```js
@observe:data={()=>{
  console.log("Something's Changed with the element's character data")
}}
```

--------------------------------------------------------------------

### `@ANY_EVENT` : EventTarget< void >

The `@event` property followed by an event name indicates that the given function should listen to the given event name.

```js
@click | @fullscreenchange | @mouseenter ...
```

### `@ANY_EVENT:remove` : void

The `@event:remove` property is the removal of event listeners of a given type from an element.

```js
@click:remove={() => console.log("Removed the click event!")}
```

### `@ANY_EVENT:once` : void

The `@event:once` property that the given function should listen to the given event name and fire only once, removing itself when done.

```js
@click:once={() => console.log('Im a one time deal')}
```

### `@ANY_EVENT:prevent` : void

The `@event:prevent` property followed by an event name indicates that the given function should prevent the default behaviour of that particular event listeners effects.

```js
@click:prevent={() => console.log('Prevent default behaviour in full effect')}
```

### `@ANY_EVENT:useCapture` : void

The `@event:useCapture` property followed by an event name indicates that the given function should listen to the given event name, capturing the bubbling behaviour of that event to the element.

```js
@click:useCapture={() => console.log('Initiate Capture of the Event')}
```

--------------------------------------------------------------------

## `@animate` && `@timings` : < object[ ] | object >

`XElement` allows you to animate the element directly by specifying your animations and key-frames as normal when utilising the standard [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

Use the `@animate` to provide a list of keyframes to animate over. `@timings` is an Object which contains the timing options for the animation. These two are used in concert with each other.

```astro
<XElement @is="p"
  @animate={[
    // keyframes
    { transform: 'translateX(0px)' },
    { transform: 'translateX(300px)' }
  ]}
  @timings={
    {
      // timing options
      duration: 1000,
      iterations: 'Infinity'
    }
  }
  >
  See, I'm a Text in motion
</XElement>
```

--------------------------------------------------------------------

## Using `fetch`

XElement also supports client-side's native `fetch()` API. This allows you to `GET` data from the internet, `POST` your form's and data back to your servers, everything you can normally do with `fetch()` all directly from within the scope of the Element itself.

```astro
<XElement 
  @is="button"
  @click={async ()=>{
    await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
  
    console.log("Here is the Fetched Data", json)
  }}
>
```

--------------------------------------------------------------------

## Dynamic Imports

XElement allows you to **dynamically import** scripts into your Element.Either from the file system using `Astro.resolve('path/to/file.mjs)`, or via a URL `http://packageRegistry.com/somePackage.{browser | esm}.js`.

Since `XElement` utilises `ES Modules`, it lets you use other module script files `.mjs`. This allows you to `export` the Elements logic from one place and *dynamically* `import` them to work within the browser, for more information on [`.js` vs `.mjs`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#aside_%E2%80%94_.mjs_versus_.js).

You can also **import third party modules** from around the ecosystem providing they are `esm` compliant, this allows you to have a form of *package-manager-less* type of development.

Not needing to install packages to use with your `XElement`, instead just pulled using an URL from sources such as: [Skypack](https://www.skypack.dev/), [jspm.io](https://jspm.org/), [jsDelivr](https://www.jsdelivr.com/) or [esm.sh.](https://esm.sh/).

This way you can load and consume any from of packages or scripts from npm sources without installing them to `node_modules` first.

## Confetti Example

This example encapsulates `XElement` within a Confetti Web Component, here we are calling the `canvas-confetti` module via a URL import. We then can call the `confetti()` directly within the `@click` event handler.

```astro
---
import XElement from 'astro-xelement'

const { button: ConfettiButton, div: Confetti } = XElement
---
<Confetti class="confetti">
  <ConfettiButton
    class="btn"
    @click={() => {
      const confetti = await import('https://cdn.skypack.dev/canvas-confetti').then(exports => exports.default)

      confetti()
    }}
  >Confetti</ConfettiButton>
</Confetti>
```

Normally you would import the modules that you need directly into the Element that is using it. Leveraging the browser cache, multiple requests to the same export would only result in the one file being sent.

--------------------------------------------------------------------

## `define:vars=` : Object

With Astro `v0.21` you are able to send `props` from inside the Astro Codefence, into the `<script>` tag, using Astro's `define:vars` directive.

This has also been replicated with `XElement` to allow you to have the same ability to send data from Astro into your client-side JS, letting you leverage Astro compliment of tools and abilities to its full power.

```astro
---
import XElement from 'astro-xelement'

const {Title} = XElement

const fadeIn = [
    { 
        transform: 'translateY(50px)',
        opacity: 0
    },
    {
        transform: 'translateY(0)',
        opacity: 1
    }
];
const timing = {
    duration: 1000,
    easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
    fill: 'both'
};
---
<Title 
  define:vars={
    {
      fadeIn,
      timing
    }
  }
  @visible={(event)=> {
      event.target.animate(fadeIn,timing)
  }}
>
 See me Fade In
</Title>
```

--------------------------------------------------------------------

<!-- TODO:Write up about SHADOWROOT  -->

<!-- TODO:Write up about Data Binding  -->

## Credits

This project owes a tremendous amount of gratitude and thanks to [jonathantneal](https://github.com/jonathantneal) for his continuous support and hacking away, helping to guide this whimsical fantasy into creation.

Special acknowledgement to the Astro Core team for their dedication and hard work towards building [Astro](https://astro.build) as a fantastic framework for Frontend development.
