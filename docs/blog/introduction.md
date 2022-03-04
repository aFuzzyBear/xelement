---
page_title: "Introductions"
page_description: "An Introduction to XElement"

---
# Formal Introductions

Hello and welcome friend to `XElement`. It is a pleasure to have you here, and we wish that you enjoy the developer experience that `XElement` strives to provide you as you transition with Astro into becoming an astronaut in this digital frontier.

The purpose of this page is to present you with some contextual information surrounding `XElement`.

Its safer to disperse any ambiguity that you might have early on, this way we can start to use `XElement` with a solid understanding of what it is, how it works and its relationship with Astro.

But first lets address the 🐘 in the room.

------------------

## What is `XElement`?

It is not a framework, in the traditional sense. Astro is the underlying framework.

Nor is it a library, instead it lets you use any library you want.

Nor is it not a plugin, and not atypical component either.

So if its not a bird, and its not a plane, and its not Superman, what is it then?

In a single long, unbroken sentence:

> "`XElement` allows you to generate HTML first, interactive web components for Astro, all from a single intuitive interface."

It gives you the option to *choose* what *type* of element you wish to use, *how* dynamic interactions are applied to your elements and *when* you want them to work.

Generating HTML Elements, apply your code in either JavaScript or TypeScript and have it run on the Client, all from one single place. 

This is what `XElement` is all about!

All without the addition of any other JavaScript framework or library involved !

It comes with a set of rich features that allow for effortless development of interactive client side components from within Astro.

Its highly performant, scaleable, simple and straight forward to use.

------------------

## Astro & `XElement`

We have mentioned Astro a fair bit already without really explaining the relationship it has with its parent framework.

Astro is more than just an atypical framework for front-end web development, it can be argued that it could be considered as a 'meta' or a 'hyper' framework, just as one would consider English for instance to be a hyper language.

This description of Astro comes from what it allows you as a developer to do. Over and beyond the scope of many other dominant frameworks that are around.

At the heart of Astro, it uses a syntax that is a superset of both HTML and JSX to provide exceptional HTML templating abilities.

Along with implementing a file-based routing system for Multi-Page Applications, it is pushing the envelope of front-end web design.

Of Astro's many significant contributions to the ecosystem, a key one was introducing Jason Millar's concept of island architecture.

Whereby every component rendered on the screen is an isolated 'island' on a page that has already been rendered by a server.

These  components then become *dynamic regions* that denotes where each of the islands are injected on the client side using a specialised process called *Partial Hydration*.

What Astro does it does it very well. However it is a very young framework, and as a result the overall experience is something that is continuously being worked upon.

Astro in short provides a lot on the table, and in a sense their reinvented vision of the web is extremely encouraging to be part of.

Solely focusing on one aspect of Astro, the process of component creation from an islands first stand point, starts takes on a whole new meaning and a higher sense of responsibility.

This is where we felt that `XElement` could be used as a safe-guard for this very critical part of the overall Astro experience.

To help prevent a potential scenario of problematic components, we sought to provide a stable utilitarian approach to creating them.

Currently, in Astro in order for you to apply any form of client side interactivity it uses a range of external UI Frameworks.

These components are predominately made from React, Solid, Svelte, Vue etc.

This is needed be added to a page in order to provide any meaningful form of client-side interactivity, using Astro only techniques to partially hydrate the components when needed on the client.

Providing a substantial performance boost over the conventional methods.

And the inevitable question comes next,

------------------

## Why would you need it?

There are many case studies that one can point to as an illustrative example as to why you would use `XElement`.

Continuing with the discussion of using external frameworks within Astro, is a great use-case.

Its easier to understand this with the following metaphor.

Imagine each UI framework mentioned as small sandboxes or individual islands, inside which you can only build using that particular type of 'sand'.

In the normal sense, you couldn't easily host two or more of these sandboxes together.

This changes since Astro becomes the proverbial body of water in this analogy, holding each sandbox-islands close together letting you build in any which island you choose, island hopping from one to another with ease.

This practice is perfectly fine, in fact Astro shines at providing support for certain frameworks, however each of these “islands of interactivity” are currently limited to the boundary of their own framework, isolating them in effect on their own little islands.

You simply cant just mix them together, for example; You can have a React component and a Svelte component rendered side by side to the same `.astro` page, however the React component can only be composed of other React components.

Similarly, the Svelte component itself cannot render any Astro or React components, only Svelte ones.

In this use-case `XElement` would be able to unite these separate components together as its children. Having them nested next to each other lets you interact with both of them through the parent.

You can even send in other `XElement` components in as children of these frameworks and do all kinds off wonders with them.

This is something you couldn't previously do, don't worry we will explore this concept in more detail further on in these Doc's.

In reference to our analogy, `XElement` takes these individual islands and combines them into a small archipelago.

------------------

## How does it work?

In essence `XElement` component creates a dynamic region of interactive HTML elements on the page without any additional use of libraries and frameworks.

It provides pure *element encapsulation* where each dynamic component is isolated form the next but can readily interact with each other.

Think of it as some sort of magical lamp. Just like a genie, `XElement` takes its cue from you, you tell it what you wish it to do, and it will happily oblige.

Should you wish it to only generate HTML components it will do so, rendering out only static html at build time, like you requested.

However, what if you wish it to start singing and dancing?

Then your element gets fixed with its own `<script type="module">` element which contains only your own instructions on its choreography and comes on stage with its dancing shoes already on, mid-beat.

You wouldn't see these script tags when you are looking through the DOM tree either, as each module is inserted and removed cleanly and quickly, like Chuck Norris preforming surgery.

The real secret is that although `XElement` is powered by leveraging a lot of Astro's brawn to do the heavy lifting, it does have Astro's very own Gandalf secretly in the background.

And just like Chuck Norris it doesn't need a DOM renderer, or any special Astro hydration policies for that matter.

------------------

## So, what is it **exactly**?

As you no doubt realise that `XElement` doesn't really fit with many of the standard terminologies or definitions that work for other 'frameworks', 'libraries' and 'applications', since it very loosely conforms to anyone of the terms mentioned.

In a sense `XElement` is is more of a highly specialised 'tool', like an ultrasonic harmonic scalpel in the hands of our *surgeon*.

Its ability to create and manipulate other elements is something quite extraordinary for Astro.

Given what it does, and how it does it, the best way we can describe `XElement` is that it's a one of a kind **Component Factory**.

A highly specialised Astro Component Generator, one that allows you to whip up dynamic HTML Elements on the fly.

Created with the intention to serve as an super flexible utility tool for Astro and its community of developers. Like a swiss army knife but without the sharp pointy bits.

Our primary intention is try to aid and augment the overall developer experience by allowing astronauts to... write more Astro!

------------------

## Next Steps

With the formal introductions out of the way, we can really get started playing with `XElement`. Our next page in this guide: [Getting Started](/getting-started), will get you going and playing with `XElement` in no time.
