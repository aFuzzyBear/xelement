---
title:
    page : "XElement/API-@is"
    api  : "@is"
    meta : "XElement @is HTML first"
description: 
    page: "The `@is` method is how we inform XElement as to what HTMLElement we wish it to be. It can take the form of all 118 HTML elements and perform its methods ontop of each of them. It can also allow you to create your own semantically meaningful html elements."
    meta: "The @is method is how we inform XElement as to what HTMLElement we wish from the 118 available Elements for it to be."
page: 
    next     : "api/properties"
    previous : "api/do"

---

# `@is` : Tag

`@is` accepts a [`Tag`](/docs/api/properties#Tag) as its input.

The `Tag` accepts either the [`HTMLElementTagName`](https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName) which is the name of the element it is called on. It also can accept a `string` with a custom value, see [Custom Elements](#custom-elements)

The `@is` property accepts a `string` which informs XElement as to what type of component it **is** to be.

```astro
@is =  "div" | "p" | "a" | "audio" | "img" | "video" ...
```

You can choose from all [118 HTML DOM Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to generate with XElement.

XElement would print out the correct static representation onto the DOM for you.

These elements are `HTMLElements` and have their respected `Node` properties that you can interact with inside the XElements methods.

-------

## Custom Elements

By default if no recognized html tag is provided XElement would generate a [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) in its place. This is a minimal DOM object that has no associated parent element.

You can generate custom elements by entering in a custom value such as:

```astro
@is = "CustomComponent"
```

This would render out as `<custom-component>` on the DOM.

The reason for this is to provide you with the ability to create new semantically meaningful html components, a lot easier.

<blockquote class="quote-warning">
    It is standard practice to apply a `h-` prefix to your custom component. This is done to preserve the components namespace should any future DOM element appear in the spec's that would claim your custom elements namespace.
</blockquote>

Custom Elements need to have their Element box defined on the DOM, this is done using the CSS [`display:block`](https://developer.mozilla.org/en-US/docs/Glossary/Block/CSS) property.

---------

## Polymorphism

The `@is` property is what informs XElement of its `Tag`, however we have applied a `Proxy` over the top of XElement to provide an additional level of developer experience to make creating XElement's easier and more developer friendly.

We have further guides on [Polymorphism with XElement](/docs/api/polymorphism), which would explain this concept in greater detail.

-----------

## Demo: Wildcard Component

The the following `Wildcard` component is a demonstration of using `@is` to generate dynamic `HTMLElement`s.

Here the XElement's DOM type is set by `Props` passed down by an External Component.

Throw in some Astromagik and you can create custom interactions over your dynamic elements.

```astro
---
const {type}=Astro.props

const customFunctions = {
    a:()=>console.log(`I'm a Link`),
    p:()=>console.log(`I'm a Paragraph`),
    div:()=>console.log(`I'm a Div`)
}
---

<XElement 
    @is={type}
    @do={customFunctions[type]}
>
    <slot/>
<XElement>
```

This would produce the following results:

```jsx

<WildCard type="div">
    <WildCard type="p">
        <WildCard type="a">Visit</Wildcard>
        Magrathea
    </Wildcard>
</Wildcard>
<!-- Returns -->
<div>
    <p>
        <a>Visit</a>
        Magrathea
    </p>
</div>
//Console.log("I'm a Div")
//Console.log("I'm a Paragraph")
//Console.log("I'm a LinK")
```
