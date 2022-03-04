---
title:
    page : "XElement/API-Props"
    api  : "Props"
    meta : "XElement Props"
description: 
    page: "Every XElement has the same set of Properties that are passed through it. They might seem small but they are extremely powerful. This page serves to provide you with all you need to know about what Properties XElement accepts"
    meta: "XElement Props page, here you will fins all the information pertaining to the Props that are accepted with each XElement"
page: 
    next     : "api/is"
    previous : "api/overview"

---

# XElement Properties

This page is setup to provide you with a higher overview to XElement's properties.

Here we explain XElement's features and what happens under the hood in a bit more detail.

In all honesty you will never directly interact with some of the things mentioned here, but having some understanding would help you when it comes to using XElement in full swing.

-------

## Props

This is the underlying shape of the XElement properties:

```ts
/** @typedef Tag - Valid HTML Tag names */
type Tag = keyof HTMLElementTagNameMap | (string & {})

export interface Props {
   '@is': Tag,
   shadowroot,
  ...attrs?: any
}
```

This might seem a bit weird if you are not familiar with TypeScript, don't worry, all we are doing here is displaying using inputs and their settings. These are the primary properties that XElement utilizes 'under-the-hood', lets break this out.

### `Tag` : HTMLElementTagName | string

The `Tag` is an internal property of XElement, its never exposed outwards. So you will never really see it nor use it directly.

It is only used to determine the `HTMLElement` that is passed through by XElement's `@is` method, or by using any one of XElements *polymorphic* forms of declaring elements.

This is how XElement generates spec-compliant, semantically correct, `HTMLElement`'s for your XElement.

So if you were to tell XElement that you wanted a '`<h1>`' or a '`<div>`' etc. This is how XElement forms the correct mapping to the corresponding HTML tags that is provided.

Full HTML bindings are taken from Typescript's own types definition: [`HTMLElementTagName`](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelementtagnamemap.html)

The `Tag` can be extended to allow you to enter in a custom `string` into XElement and have it create a custom [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment),

This means should you wish to have a `<FancyElement>` you can do, since this would render out as `<fancy-element>` on the DOM.

<blockquote class="info">
  It is standard practice to apply a `h-` prefix to your custom component. This is done to preserve the components namespace should any future DOM element appear in the spec's that would claim your custom elements namespace.
</blockquote>

-----------

## `@is` : Tag

The `@is` accepts a [`Tag`](#Tag) as its input. This is a necessary property which only accepts a `string` that informs XElement what type of component you wish it to be.

```astro
@is =  "div" | "p" | "a" | "audio" | "img" | "video" ...
```

You can choose from all [118 HTML elements](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelementtagnamemap.html) to generate with XElement

By default if no html tag is provided XElement would generate a [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment). These are a minimal DOM object that has no associated parent element. This has some advantages and implications which we explore further in our guide [Creating Components](#)

You can also generate custom elements also by entering in a custom value such as:

```astro
@is = "CustomComponent"
```

This would render out as `<custom-component>` on the DOM. The reason for this is to provide you with the ability to create new semantically meaningful html components, a lot easier.

-----------

-----

## shadowroot

XElement allows for you to define if element should interact with the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM).

This can be achieved by appending the property `shadowroot` to the element:

```astro
---
  const {p:ShadowText} = XElement
---
  <ShadowText shadowroot> This is now available to the shadow DOM.</ShadowText>
```

The shadow Dom allows for hidden DOM trees to be cheaply attached to the elements on the regular DOM tree.

This allows for DOM elements to be created in a less expensive fashion when doing so on the client and appended to the DOM using regular DOM methods.

We will have a guide to explain this particular functionality in more detail soon, in the meantime you can gather a better understand from [MDN: "Using Shadow DOM"](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
<!-- TODO! Need a guide written up about using the shadow DOM -->
----------

## `...attrs` : HTMLAttributes
XElement allows you to utilize as many of the [HTML Element Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) that are registered for the element specified.

This lets you access the full compliment of html attributes such as;

- `aria-` attributes
- `data-` attributes
- standard html attributes such as `id` and `class` are fully respected.

XElement does not name squat on any html attribute. This allows you the freedom to work with all the [174 existing attributes](https://devdocs.io/html/attributes). Just remember to apply the appropriate tags to the correct html elements.

Attributes can be passed in the following ways:

```astro
---
  const { div : Container } = XElement
---
  <Container tab-index="0" role="container" data-value='42' contenteditable  aria-volume="75">
```

The above is an illustrative attempt to show you how one would pass in attributes just like you normally would when using html attributes on standard html elements.

You can even use the [`GlobalEventHandlers`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers) as part of 'passing down any html attributes', although we would highly discourage this pattern of behaviour as XElement provides its own interface for handling `Events`.

This is explained more in our API section about [Client Side Interactivity](#) where we document the interfaces and their related usage in more detail.

----------

## Further Information

To find out more about the topics that are discussed on this page, here are the references used and some extra information pertaining to their usage that you might find interesting.

### Document Fragment

- [XElement Guide: Creating Components](#)
- [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)

### HTML Attributes

- [TypeScript HTMLElementTagNameMap](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelementtagnamemap.html)
- [MDN: HTML Element Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
- [Devdocs: list of 174 existing attributes](https://devdocs.io/html/attributes)
