---
title:
    page : "XElement/API-fetch()"
    api  : "fetch()"
    meta : "fetch() with XElement"
description: 
    page: "The `fetch()` method allows you to make full Fetch calls using any of XElements `@` methods. This lets you `GET` data from external API's, alternatively Create, Update, Read even Delete data to backend services."
    meta: "The `fetch()` method lets you perform full client-side CRUD operations from within any XElement method"
page: 
    next     : "api/import"
    previous : "api/store"

---
# `fetch()` Method

XElement allows you to use the native `fetch()` API that is available to you normally through the browser to external data API's.

It allows you to make full CRUD operations on the client-side to remote servers and other external API's to get your data fed `asynchronously` and have it update on the client.

You can use `fetch()` from inside anyone of XElements `@` methods.

```astro
---
    import XElement from 'astro-xelement'

    const {button:Button} = xelement
---

    <Button @click={async()=>{
      await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json()).then(json=>console.log(json))
    }}>Click For Data</Button>

```

-----

## Suspenseful Fetching

This extended example, will demonstrate how to create a **suspenseful** data fetching action to await for the data and then print it to the screen.

```astro
---
    import XElement from 'astro-xelement'

    const {button:Button,div:Display} = XElement
---

   <Display @do={(element,store)=>{
        store.typicode = {id:1}

        const fetchData = async (callback) =>{
          await fetch(`https://jsonplaceholder.typicode.com/posts/${store.typicode.id}`)
          .then(response => response.json()).then(json=>callback(json))}
        
        store.printTypicode=()=>{
          try{
            fetchDisplay.textContent="Loading..."
            fetchData((data)=>{
              fetchDisplay.textContent = `Post Id:${data.id}\nTitle: ${data.title}\nBody:\n${data.body}`
            })
          }catch(err){
            fetchData.textContent = "Error Fetching Data"
          }
        }
    }}>

      <p id='fetchDisplay'></p>
    
       <Button @click={(event,store)=>{
          store.printTypicode()
          store.typicode.id++
         this.textContent="Click for more data"
       }}>Click for Data</Button>

    </Display>
```

There is quite alot happening above. Dont worry we will be explaining this in some detail.

Lets break out the `<Display>` parent component. This is where we have bundled up all the logic for this component.

The first thing we are *doing* is using the [`store`](/docs/api/methods/store) to keep track of the id beyond the scope of the element, `store.typicode={id:1}`. We will be incrementing this value with the `<Button>` using this value within our fetch request string.

```jsx
const fetchData = async (fn) =>{
          await fetch(`https://jsonplaceholder.typicode.com/posts/${store.typicode.id}`)
          .then(response => response.json())
          .then(json=>fn(json))}
```

This `async` fetchData function, accepts a `callback` function, this is known as **thunking**.

> A thunk is another word for a function. But it’s not just any old function. It’s a special (and uncommon) name for a function that’s returned by another.

This way we can create a suspenseful data collection, where the `fetchData` promise is resolved and is then calling another function that will act on received `json` data.

Using `await` the fetched response takes the id of the request from the `store`. It *then* turns the response into JSON and from there we *then* send that json as the data into our callback function `fn`.

Given that there can be an unknown amount of time between requesting and receiving the response, its good practice to provide some form of *hold* music for the end-user, this way we can provide the suspend loading between the requests.

The next part is where we preform the actual *suspenseful* loading of the `fetch` request, and updating the `textContent` on the screen.

```jsx
store.printTypicode = async()=>{
    try{
      fetchDisplay.textContent="Loading..."
      await fetchData((data)=>{
        fetchDisplay.textContent = `Post Id:${data.id}\nTitle: ${data.title}\nBody:\n${data.body}`
      })
    }catch(error){
      fetchData.textContent = `Error Fetching Data: ${error}`
    }
  }
```

By placing the callback function into the `store` itself so we can call this from outside the scope of the element and in our particular case from the `@click` handler on the `<Button>`.

Using a `try-catch` block we are *trying* too *do* a couple of things, if it cant, capture the error and print it out on the screen.

What we are *trying* here is, update the `textContent` of the `<Display>` with a loading placeholder,

```js
fetchDisplay.textContent="Loading..."
```

This way we can patiently *await* for the data request to return from our `fetchData()` thunking function and then gracefully update the contents on the screen, providing a nice UX throughout.  

------

## Further Information

XElement leverages the native `fetch` API, this powerful method allows us developers do some really wonderful things. Being able to connect to data on the client, use `GET`,`PUT`, `UPDATE`, `DELETE`, http actions on event handlers. This one little method opens XElement to the internet, letting you reach further and do more.  

- [fetch() API, MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

-----

### **Coming Soon**  

Look out for the complete guide to using the fetch API with XElement, including all the different ways you can control element animations using XElement.