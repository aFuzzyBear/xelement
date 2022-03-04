---
title:
    page : "XElement/API-import()"
    api  : "import()"
    meta : "Dynamically Import functionality with XElement"
description: 
    page: "XElement allows you to perform dynamic imports on the client to import ESM modules into the scope of your XElement's method. This lets you add additional interactions and functionality into your component creating a richer experience on the client."
    meta: "XElement allows you to dynamically call scripts from either internal or external scripts from anywhere"
page: 
    previous : "api/fetch"
---

# Dynamic Imports

XElement allows you to dynamically import and utilize ESM modules from anywhere around the Internet.

Similar to [`fetch()`](fetch), you can dynamically import ESM-ready scripts on any XElement's `@` method.

This small yet really powerful feature of allowing files to be called only when needed or on-demand even. `import()` provides so many additional benefits to enhancing your components.

⚠️ To import a file from the file-system needs to be handled slightly differently, we are currently working on a more suitable implementation and at present is only available in dev mode, not production.  

## How to use

To dynamically import a file from literally anywhere just apply anyone of the following import patterns.

However we do recommend using [Skypack](https://www.skypack.dev/) to help obtain modules from a reliable ESM-CDN.

```js

@do={()=>{
   import('https://...')
  .then((module) => {
      // Do Something with the module...
  });
}}

@do={async ()=>{
    const thirdParty = await import('https://...').then(module=>module.default)
}}

@visible={async ()=>{
    const thirdParty = (await import('https://...')).default
}}

@click={async ()=>{
    const {thirdParty} = await import('https://...')
}}
```

It really is that simple to dynamically import and execute JS modules from anywhere across Internet with XElement.

-------

## Examples

Below are some working examples of the power of dynamic imports in XElement.

Each of these examples are just simple extrapolations of what you can do with dynamically importing your modules with XElement on the client, to help enhance your components with some additional functionality.

### Confetti

Let us demonstrate a 'Click' event on a button, calling the `canvas-confetti` module from [jsdeliver]. When called it would execute with some confetti bursting on to the screen.

```astro
---
    import XElement from 'astro-XElement'

    const {button:Confetti} = XElement

---
    <Confetti 
        @click={()=>{
            const confetti = await import('https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js')
            confetti()
        }}
    >Confetti!!</Confetti>

```

### Image Gallery

This following example is in homage to our overlords. Here we are calling the popular [`gallery`](https://www.skypack.dev/view/gallery) module to pick up on `data-gallery-src` attributes to apply a windowed gallery functionality to our component.

You can download the images associated with this demonstration <a href="/catz.zip" download > here</a>

```astro
---
    import XElement from 'astro-xelement'

    const {div:Gallery}=XElement
---

    <Gallery
        @do={async ()=>{
            const gallery = (await import('https://cdn.skypack.dev/gallery')).default
            gallery(document)
        }}
    >
        <div class="spotlight-group">
            <a class="spotlight" data-gallery-src="cat1.jpg">
                <img src="cat1.jpg">
            </a>
            <a class="spotlight" data-gallery-src="cat2.jpg">
                <img src="cat2.jpg">
            </a>
            <a class="spotlight" data-gallery-src="cat3.jpg">
                <img src="cat3.jpg">
            </a>
        </div>
    </Gallery>
```

------

## Further Information

If you wish to explore the power that you can wield from leveraging client-side dynamic imports of your modules, we have gathered some further information for you to peruse.

- [Dynamic Imports, MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports)
- [Dynamic imports, JS.info](https://javascript.info/modules-dynamic-imports)
- [Dynamic Module Imports in JavaScript: The How And Why](https://betterprogramming.pub/dynamic-module-imports-in-javascript-the-how-and-why-9a47114119c)