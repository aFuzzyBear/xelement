## What is XElement?


> "XElement allows you to build HTML-first, interactive web components by generating dynamic HTML elements for Astro... all without the addition of any other JavaScript framework, renderer or library involved!"

It comes with a set of rich features that allow you to develop interactive client side components natively within Astro, and provides the option to customize how and when dynamic interactions are applied to your elements.

Its highly performant, scaleable, simple and straight forward to use.

------------------

## Astro & XElement

Currently, to apply any form of client side interactivity in Astro requires the use of an external UI Framework. These interactive components are predominately made from React, Solid, Svelte, Vue etc.

XElement addresses the desire to have client-side interactivity *natively in Astro* to provide dynamic components hydrated on the client. This can provide a substantial performance boost over the conventional methods by not requiring any additional framework rendering.

------------------

## Why would you need it?

### Interactivity without adding any JavaScript framework
Although dynamic, client-side interactivity can be achieved in Astro already through the addtion of React, Svelte, Vue etc. components, XElement can be used *instead* of a framework component to provide interactivity on your site. 

### Combine other JavaScript framework components for increased interativity

Each framework component rendered individually in Astro creates its own, isolated “island of interactivity.” Framework components cannot "talk" to each other: they cannot share or pass data even when they are rendered in the same Astro layout, component or page. Furthermore, its child components must be components of the same framework. (A React component can only have React children components; A Svelte component can only have Svelte children components...)

XElement can unite these separate components by providing a parent container element that can provide and execute dynamic, run-time actions based on data received from any and all child elements, even from multiple frameworks at the same time! 

------------------

## How does it work?

An XElement component generates HTML elements, while also creating a dynamic region of interactive HTML elements on the page by producing its own `<script type="module">` element. This `<script>` is inserted at build time, then removed and invisible to the DOM tree in the rendered HTML. No special DOM renderer is required. (make this accurate!)

It provides pure *element encapsulation* where each dynamic component is isolated from, but can interact with, each other.

------------------

## Next Steps

## Examples

Visit our ['Getting Started'](getting-started.md) guide to take you through making your first set of `XElements`.

## API reference

Visit the API reference doc to find all the XElement API reference points and information on how to use each one correctly.

## Guides
Explore our guides to see common/popular ways to use XElement in your project.

## Tutorials
Learn about using XElement by building some sample web components in an example site.
