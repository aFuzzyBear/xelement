---
title:
    page : "First Induction of XElement"
    meta : "First Introduction to XElement and its Docs"
description: 
    page: "Welcome to XElement's Documentation, this first page in the orientation of XElement is written to help onboard developers with XElement"
    meta: "XElement's "
page: 
    number   : 1
    next     : "api/animate"
    previous : "api/resize"

---
# XElement Docs

Welcome to the home of XElements Documentation, an Astro only **Customizable HTML Web Component Framework**.

XElement allows you to create dynamic HTML elements alongside with client-sided interactivity (e.g. animations, transitions, event listeners) natively in an Astro page or component file... without the need for writing and importing a component in one of the many JavaScript frameworks that Astro supports (React, Vue, Svelte, Solid, Preact etc).

XElement web components give you the option to choose *when* and *how* to run **JavaScript** or **TypeScript** on the client-side on a per-component basis, similar to the way Astro controls the hydration of framework components via `client:*` directives.

Unlike other framework components, XElement-generated components can even contain other framework components. This allows you to combine the outputs of otherwise isolated islands of interactivity together, creating a truly wondrous archipelago.

----------

## Getting Started

1. Add `XElement` to your Astro project via the terminal

```bash
npm i astro-xelement -D
```

2. Import `XElement` into any `.astro` file (page, layout, or component):

```astro
---
import XElement from 'astro-XElement'
---
```

That is it, you are now ready to start using `XElement`! Choose your next step...

## Take Off

Visit our ['Getting Started'](getting-started) guide to take you through making your first set of `XElements`.

After which you should have a good handle on XElement. From there we have guides on how to use a lot of the behavior and methods that we have hidden up our sleeve.

## API reference

Visit the [API reference](../api/overview) find all the XElement API reference points and information on how to use each one correctly.

## Guides

Explore our guides to see discover more ways to use XElement in your project.

## Showcase

Show us your stuff! We'd love to see what you've made with `XElement` and Astro.

Share your creations with the Astro Discord Community in the `#Showcase` channel, Tweet them at us, send them to us via Github or find us on Discord.

As more people build web components with XElement, we will gather components from users and showcase them on your behalf, open source is all about caring and sharing.

----------

## Versions

XElement is now on `v 3.1.+` which is designed to be compatible with Astro `> v 0.21`.

The XElement tool itself is considered to be stable and safe for use in production environments.

----------

## Get Involved

Our github repo is active and we welcome any issues or PR requests. This is the best way to provide feedback, report bugs, and help improve documentation.

----------

## Acknowledgements

This project owes a tremendous amount of gratitude and thanks to [jonathantneal](https://github.com/jonathantneal) for his continuous support, guidance and hacking away at it. Pivotal in turning this whimsical fantasy into creation.

Special acknowledgement to the Astro Core team for their dedication and hard work towards building Astro as a fantastic framework for Frontend development.

### Further Mentions

Its only fair to those who have assisted in this project from their support and input to being the first adopters, to be mentioned and appreciated for their individual contributions.

- sarah11918 - Project's Editor-in-chief
- Chris Bongers - dailytechtips
- Okikio - bundle.js
- p13rnd - proxima
- Tony-Sull - Navillus.dev

Thank you all for being patient and brave when it came to testing and exploring XElement for us, and for helping us to realise its potential.

To those who I have missed, our apologies, we truly do appreciate the support from everyone who uses Astro's first framework.

----------

XElement was built of the back of good old curiosity, off-world magic and Irn-bru.

We assure you that no animals were harmed too seriously in the process.