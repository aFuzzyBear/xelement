---
page_title: "Client Side Interactivity"
page_description: "An Exploration in providing Client Side Interactivity using XElement"
---
# Client Side Interactivity

Where the magic happens, so to speak.

We initially created `XElement` to operate so it is html first, *interactivity* that we give to our UI component comes second.

Interactivity is synonymous with Client-Side JavaScript, and this is exactly what we give you.

We want to give you the ability to create interactive, web standard, Astro compliant, html elements, all without the use of any external framework or library.

This gives you the ability to write your own Client-Side code and have it output pure vanilla JavaScript.

But `XElement` goes one-step further. We give you the option of what `*Script` you wish to code in.

Letting you to easily interchange between **Typescript** and **JavaScript**, when you are coding in `XElement`.

This delightful combination helps to merge the features from these two languages and bring a happy middle ground to the overall DX.

## How it works

There are currently a few ways to build interactive components with Astro.

This can be done either by using a supported UI framework, which can be a mixture, since you are not limited in Astro to using only just one.

These do need *hydration* instructions to inform Astro, when you wish your UI framework to have the their respective JS payload sent over.

Another, is by having your own custom Javascript applied to `<script>` tags that are collocated within your `.astro` files.

There is some drawbacks with this approach. A key one is that the script fires once once the page has loaded. This makes persistent interactions a bit tricky to achieve.

In order to respect Astro's Island's ethos, and hydration policies `XElement` has been structured in such a way that the *payload*-the code that is sent sent to the browser. Are packaged as independent `<script type="modules">` modules.

These modules are only attached to the element in question and fires once the full document has loaded.

Since the payload is scoped to each element in a way that is was not previously, we had too come up with a term for this sort of behaviour:

> "*Element Encapsulation*", where the scope of interactivity is only set onto the element its applied.

The nature of `modules` in the browser is that they are loaded in an `asynchronous` manner.

This non-blocking approach is helpful as it allows the DOM and all of its contents to be loaded first, then the JS is executed last.

All we are doing is leveraging the processing power of the browser to handle the majority of the work on the client-side.

Without any additional overhead cost of having to render everything out in JavaScript, or send down render files to the client.

`XElement` works out to be far cheaper to send to the client in comparison to other methods. All `XElement`s are rendered out for you at build time, and it has a faster time to interactivity.

-----
