---
title:
    page : "XElement API - define:vars"
    api  : "define:vars"
    meta : "Define Variables with XElement"
description: 
    page: "Have the ability to define variables from the server and have it serialized and available to be used anywhere within the scope of your XElement.`define:vars` also lets you hoist variables to the top of the XElement's block scope. It is a very powerful utility method that is available"
    meta: "Be able to pass through values from the server into the element, ready for it to be used on the Client. define:vars, is the bridge between the Astro world and the Client"
page: 
    next     : "api/store"
    previous : "api/timings"

---
# `define:vars`

`define:vars` was a much requested community feature for Astro. Which managed to make its way in by `v0.21`.

This powerful feature lets you pass variables from the Astro server-side code into the client facing `<script>` element by applying `<script define:vars={property}>`.

This was extremely handy as a lot of Astro works at build time to generate your pages and assets. By using `define:vars` to inform Astro that build time, to pass through a property coming from its server-side into the client and Astro will do so.

XElement leverages the very same concept to let you pass through variables of all manner; `strings`, `numbers`, `arrays`, `objects`, `functions`. From the Astro front-matter into your client-facing XElement component.

XElement serializes the data that you are sending into the client so its safe and applies it to a special place within the overall scope of the XElement. That is then accessible to all other XElement methods.

## How to use

```astro
---
    const {div:Box} = XElement
    const answer = {
        a:41,
        b:42,
        c:43
        }
    const sum = (x) => (y) => x + y
    const list = ['apple','banana','carrot']
    const dolphins = "So long, and thanks for all the fish!"
---
    <Box
        @define:vars={
            {
                answer,
                sum,
                list,
                dolphins
            }
        }
        @do={()=>{
            console.log("do ",answer.b)
        }}
        @visible={()=>{
            console.log('visible ',sum(4)(2))
        }}
        @resize={()=>{
            console.log('resized ', list)
        }}
        @click={()=>{
            console.log(`when clicked, the dolphins say: ${dolphins}`)
        }}
    ></Box>
```

With `define:vars` anything you pass through get *hoisted* to that elements inner module's block scope.

Basically it goes straight to the top, and can be called from any other method. But not outside of the element.

This lets you abstract away a lot of the code that you may write, by having it ready to Astro at build time, we can copy those variables and their values over into the module.

So you can do things like:

```astro
---
import FancyFunction from '../fancy.js'

const {div:Box}=XElement

const fancy = await FancyFunction()

const msg = "So long and thanks for the fish!"

const answer = 42

const data = {
    a:2,
    b:{
        c:'3P0'
    }
}

const list = ['joy','happy','fun']
---

<Box 
    @define:vars={
        {
            fancy,
            msg,
            answer,
            data,
            list
        }
    }
    @do={()=>{
        console.log(fancy,data)
    }}
    @visible={()=>{
        console.log(msg)
    }}
    @resize={()=>{
        console.log(answer)
    }}
    @click={()=>{
        console.log(list)
    }}
>

```

-------

## Local Variables

With `define:vars` you literally are defining the variable that are being sent across from Astro into the scope of the XElement. Its hoisted in the respects that it places these declared variables into the top of the element body.

You can use this to define local variables too for your element. This allows for data to be stored out with the scope of the methods that reference them.

```astro
<Button
    define:vars={{
        state:0 || '',
        sharedFunction:()=>console.log('State: ',state)
        }}
    @do={()=>
        console.log(state,sharedFunction())
    }
    @click={()=>{
        state++
        sharedFunction()
    }}
>
```

-------

## Additional Notes

`define:vars` is a very powerful addition to XElement, by scoping the variables into the head of your element, you have in effect your own private internal 'global' scope.

The variables are all set using `let` and so can be redefined. They are all scoped to the element, so they wont leak into other elements.
