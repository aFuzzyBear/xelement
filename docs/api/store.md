---
title:
    page : "XElement/API-store"
    api  : "store"
    meta : "XElement's Internal Data Store"
description: 
    page: "XElement has its own special type of data object which allows for bi-directional exchange of data between different XElements. The store is available as the second argument in all of XElements methods."
    meta: "XElement provides a special type of transient data objet for bi-directional data exchange between different XElements"
page: 
    next     : "api/fetch"
    previous : "api/define_vars"

---

# XElement's Data `store`

Off all of the super powers that XElement provides, none is more powerful than that of the `store`.

We have used the `store` before in some of the examples displayed elsewhere in these Docs. They were done so with little explanation about the `store`: What it is and what does it do? This page seeks to provide you with all you need to know about XElement's data `store`.

A short description of the `store` would be, that it is a transient data-object which exist purely on the page's memory.

There is no persistence to the store, meaning it doesn't keep its memory after the page has been closed or changed.

It is in effect just an empty data object `{}`.

What it can do is allow you to communicate and pass data to and from other XElement's and within other UI framework based components on the page.

This means you can *store* everything you normally can inside this data object. Basic primitive values such as: booleans, strings, numbers, arrays, other objects, functions and their return values.

There is no real limit to the size of the `store` either, since its really a single entity, you cant reassign it to something else. In this respects it is a safe form of inter-element communication. A bridge in effect between individual elements.

## How to use

The `store` is always the **second argument** that is passed into **all** of XElement's **methods**. This allows for access to the `store` within the scope of each method.

To use it you need to declare it as part of the optional parameters to pass into the scope of the function.

```astro
@do={(element,store)=>{
    console.log(store) // {}
    store.answer = {
        a:42
    }
}}
@click={(element,store)=>{
    console.log(store.answer.a) // 42
}}
```

This lets the object `store.answer` to be accessed from any other XElement's that are on the page or their methods.

```astro
---
    const {Counter,button:Button,span:Display}=XElement
---
    <Counter>
        <Display 
            id="display"
            @do={(element,store)=>{
                store.count=0 //Initializing the count on the store
                element.textContent = store.count
            }}
        ></Display>
        
        <Button @click={(element,store)=>{
            display.textContent = store.count++ //Incrementing the Count   
        }}>Increment</Button>
        
        <Button @click={(element,store)=>{
            display.textContent = store.count-- //Decrementing the Count
        }}>Decrement</Button>
    
    </Counter>
```

This demonstration of a `<counter>` is a simple but effective explanation of how to use `store` across your XElements. By initializing the `store.count` value within the `<Display @do={...}>` method we initially create a reference on the `store` for the `count`. Without this there would be no value for the `<button>`s to interact with.

Within the two separate XElement `<button>`s, we acquire the `<span id="display">` by using the little known fact that `id`'s are `Global` we set the `display.textContent` to the increased `++` or decreased `--` the `store.count` value.

Again a simple but effective demonstration of how to use `store` in multiple XElements, using different XElement methods, in this case `@do` and `@click`.

------
## Notes

Throughout these Docs, we have examples of using the `store` peppered in amongst the code blocks. These are working examples that demonstrates the inter-island exchange of data that the `store` provides.

The `store` is not an `observable` nor is it a `Pub/Sub` object. It is a simply and empty javascript `Object`.

How you manage the `store` is entirely up to you, there is no rules set by XElement on its usage.

The actual data object can be called from within any JavaScript or JSX files and their accompanying Typescript counterparts. This let's you obtain values from or, set values to the `store` from other Frameworks.  You can `import` the store in the following manner.

```js
import * as store from 'data:text/javascript, export default {}'
```

All I can say is...Javascript 🤷‍♂️
