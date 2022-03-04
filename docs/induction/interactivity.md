---
title:
    page : "Client Side Interactivity Explained"
    meta : "Client Side Interactivity with XElement Explained"
description: 
    page: "A brief explanation over how XElement provides it's Client sided interactivity. Here we discuss some the methods that we used to deliver XElement"
    meta: "A brief explanation over XElement's Client side Interactivity and how it is achieved "
page: 
    number   : 
    next     : ""
    previous : ""

---
# Client Side Interactivity

XElement allows you to write your own client-side code either in JavaScript or Typescript. Directly inside your Astro files to enhance the abilities of existing HTML elements. 

The code that is written and sent to the client is packaged as independent, async `<script type="modules">` modules which are scoped directly to the element in question.

This non-blocking, asynchronous approach allows the DOM and all of its contents to be loaded first, then the JS is executed immediately afterwards. Each `XElement` is rendered at build time, and the page has perhaps one of the fastest fast time to interactivity as a result of our methods.

Since the payload is scoped to each element, the browser handles the majority of the work on the client-side, without any additional overhead cost of having to render everything out in JavaScript, or send down render files to the client.

This is how XElement gives you the ability to create interactive, web standard, Astro compliant, HTML elements without the use of any external framework or library.

Making using XElement to provide client-side interactivity cheaper, more versatile and far easier to implement over other similar implementation methods with Astro supported UI frameworks.