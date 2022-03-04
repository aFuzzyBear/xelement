---
page_title: "Styling with XElement"
page_description: "Discussing the various ways to style your XElements"
---

# Styling XElement

On this page we will be exploring the many ways you can apply your styles to your component.

Since XElement doesn't name-squat over any of the existing html attributes you can apply your styles using the `class="..."` attribute or even inline your styles with `style="..."`.

It works surprisingly well with a myriad of different styling DX practices, this guide will demonstrate some of them, but please understand this, we have placed **zero** opinions or constraints on how styles are applied to your XElement.

This way you can apply your styles using the special Astro `<style lang="">` to scope styles to your element, or you can even attach them externally using stylesheets or preprocessor's like Sass.

You can pass down styles from parent components using `Astro.props`, even apply TailwindCSS Directives to them directly, in short there there is no one way to style your XElement, instead you can style it using your own preferred way.

## Scoped Styles

The most preferred way to style in Astro is to have your component styles scoped directly to them. This means we apply the styles associated to our element right next to it on the same `.astro` file.

```astro
---
    import XElement from 'astro-xelement'

    const {div:Box} = XElement
---
    <Box class="box"/>
    <style>
        div{
            ...
        }
        .box{
            ...
        }
    </style>
```

To target the `Box` element we can use either the `div` specificity which would only be scoped to that particular element, not every other `div` on the page. Or we can use the higher css specifiers such as `.box`, please note you can call your classes anything you wish.

This would result in Astro respecting the styles for this `<Box/>` element.

### Using Sass

Using Sass is more of a homologue of using whichever preprocessor that you prefer to work with. Just as it happens the we really like using Sass.

There is a power in using preprocessor like Sass. For they allow you to import other module based stylesheets into your class, use nested features, linking style names, loops, functions and so much more.

```astro
<Box class="box box__shape">

<style lang=" scss || sass " >
    .box{
        --border-radius:0px;
        width: 150px;
        height: 150px;
        & __shape{
           border-radius:var(--border-radius) 
        }
    }
</style>
```

This above example demonstrates using nested routing inside your `scss` to make use of the BEM nomenclature to creating more versatile classes and class names.

### TailwindCSS Example

We are all fans of TailwindCSS, its cutting edge utility first approach to modular CSS design is really starting to take a foothold in the developer community.

There are many ways you can apply TailwindCSS in you Astro components. The same is true when using it with XElement. This can lead to some truly wonderful UI elements.

```astro
<Box class="px-4 text-purple-500 rounded shadow border"/>

<Box class="tailwind"/>
<style>
    .tailwind{
        @apply px-4 text-purple-500 rounded shadow border
    }
</style>
```

------

## Inheriting Styles

So far we have only explored how to apply styles directly to the XElement itself. This is the simplest way to prototype your XElement with your style rules. However this can be quite limiting, XElement is designed to be a component generator, so you can throw things at it on the fly at build time and it would be able to cope with the changes.

This applies well to styles and the different ways to apply these rules to your element with Astro. Inheriting or passing through classes from the parent to the child at build time is definitely something that XElement can do.

All you need to do is to set the `class={Astro.props.className}` property on the XElement. `className` is not reserved, this is just a placeholder for the name of the property you would be passing down through the parent.

```astro
---
    const {className} = Astro.props
---
<Box class={className}/> 
// or
<Box class={Astro.props.className}/>
```

------
