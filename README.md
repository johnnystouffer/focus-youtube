---
title: FocusTube
author: Johnny
date: 2025-5-27 12:00:00 +0800
categories: [JavaScript, FocusTube]
tags: [JavaScript, Medium]
description: In this project you will learn the fundamentals of NextJS and APIs in order to make a youtube clone/wrapper that removes the distracting algorithms that hook you in.
comments: false
pin: true
media: /assets/tutorials/focustube
image: /focus_thumbnail.png
---

## About the project

Welcome to the FocusTube tutorial! Here you will learn the fundamentals of making your own API, calling APIs, and the additions that NextJS gives you over React

**What you will learn:**

- How to use and create the fundamental parts of an API (endpoints, requests and responses) in NextJS
- How to connect, fetch, parse, and display API data from YouTube
- fundamentals of NextJS (Server Side Rendering vs Client Side, Dynamic Routing, Loading States, Routing)
- OPTIONAL: Learn how to use TailwindCSS

**What you will make:**

By the end of this tutorial, you will have a basic full stack YouTube wrapper that allows you to use many of YouTube's features in your own design and not including distracting features

**Further Possibilities:**

There are many avenues that you can do with this project, while it will be fully functioning by the end of this tutorial there are tons of features and possibilities to make this your own. I will go more in depth on further possibilities later in the tutorial

## Disclaimer

**This tutorial assumes a couple of things:**

- You have decent knowledge of JavaScript
- You have basic knowledge of React
- You already have the necessary tools installed (Node.js, an IDE like VS Code)

## Setup the project

In this project you will make your own project instead of forking a repository. Making a NextJS app is incredibly easy. Open a terminal, in the terminal go to the folder you want your NextJS project to be in, then run this command:

```console 
$ npx create-next-app@latest
```

You will be given multiple prompts on how you want your project to be, I will put the settings that I put down below however remember that   

```console
✔ What is your project named? … my-app
✔ Would you like to use TypeScript? … No
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack for `next dev`? … Yes
✔ Would you like to customize the import alias (`@/*` by default)? … Yes
```

Now you will have a folder called whatever you named it, I named mine **/my-app**, cd into that folder and run 

```console
npm run dev
```

This will start up your app and you will can visit it at [here at localhost:3000](http://localhost:3000/)

**NOTE:** When you update your project / save files, this will automatically update for you. There is no need to keep terminating and restarting the program. 

Now you are ready to start tutorial!

Take a look at your file tree, it should look something like this:

```
my-app/
├── node_modules/
├── public/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       └── page.js
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
└── README.md
```

Feel free to check out **page.js** in your app folder, this is the **home webpage** in your NextJS app, which is a good transition into the first topic 

## File Based Routing

File-Based Routing means that the structure of your files and folders inside the **app/** directory automatically defines the routes in your web app

Here is what this actually means

In your **/app** folder create a folder called *```/video```*. In this folder create a file called **page.js**. In this file put something really simple like this 

```js
export default function Video() {
    return (<h1> This is the Video page! </h1>);
}
```
{: file="app/video/page.js" }
{: .nolineno }

Next lets go to http://localhost:3000/video

Here you will find the component you just wrote, that is because of the File Based Routing in NextJS, since you made a folder in your **/app** directory and gave it a **page.js**, the web app now treats this *as a route*, so any **/folder** will become a path in your web app (as long as you have a page.js file inside)

For more information always feel free to use the [NextJS Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## Adding more Routes

Now that we know what file based routing is, make **2 more routes**:

- make a ```/search```, and ```/playlist``` file route
- For now these can display whatever you like, do something simple or attempt to make your own pages early if you would like

Here is what your file tree should look like

```
my-app/
├── node_modules/
├── public/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       ├── page.js
│       ├── search/
│       │   └── page.js
│       ├── video/
│       │   └── page.js
│       └── playlist/
│           └── page.js
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
└── README.md

```

Now you should have **4 routes** that you can go to in you website, the homepage, ```/search``` page, ```/playlist``` page, and lastly the ```/video``` page.

Now that we have a couple routes, we can start to create how they will look, feel free to make these on your own, I will provide what mine look like below, feel free to use them as a guide to your own, or you can also copy these if you already feel comfortable in React and JS.

### Video Route

It is *very* easy to add youtube videos into you web app even without any API... most youtube videos you can click the **Share** button, and you will see an option called **Embed**, click that and you will get an ```<iframe>``` component in which you can add to your project.

Feel free to chose any video, and put it in your ```/video``` route 

```js
export default function Content() {

  return (
    <div>
      <iframe
        width="960"
        height="540"
        src={`https://www.youtube.com/embed/your-youtube-video-id-here`}
        title="YouTube video player"
        allowfullscreen
      ></iframe>
    </div>
  );
}
```
{: file="app/video/page.js" }
{: .nolineno }

> **In the above answer I purposely mistyped one of the attributes of ```<iframe>```.**
{: .prompt-danger }

Luckily when you save the file and look at it at the ```/video``` on your web app route you will see **at the bottom left, a NextJS logo that says issue** 

Click this logo and it will tell you any errors or warnings you may currently have in your file. This will be a massive help while you are programming, however it won't catch everything such as *bugs* since they technically bugs may not be an error, but just not do what you want it to do. 

Make sure when this happens you always click **Fn+F12**, this will let you inspect your webpage html and CSS, if you are stuck or unsure what is going on, always try to use the console using various functions like ```console.log()``` which is the equivalent to ```print()``` in javascript. **I will add areas for you to try these out later**

### Search Route

Next up we have our ```/search``` route

For the search page, this may sound counter-intuitive, but this will be the search results, not the actual search bar. The search bar will be added on the *home page* which will will get to shortly 

I want you guys to challenge your JavaScript skills here, do your best not to look at the answer for this one until you have tried it, and or did it yourself, this is what the page should have 
- Inside page.js, create a React component that renders a fake video or two using hardcoded data.
- Style each video as a card with a thumbnail, title, and description
- Make sure it links to the ```/video``` route (we will get it to link to actual videos later)

**Click below to unblur the answer**

```js
export default function SearchPage() {
  return (
    <div>
      <h1>Search Results</h1>

      <div>
        <a href="/video">
          <img
            src="https://i.ytimg.com/vi/abc123/mqdefault.jpg"
            alt="How to Learn JavaScript Fast"
            width={160}
            height={120}
          />
          <div>
            <h2>How to Learn JavaScript Fast</h2>
            <p>A quick guide to getting started with JavaScript.</p>
          </div>
        </a>
      </div>
            <div>
        <a href="/video">
          <img
            src="https://i.ytimg.com/vi/abc123/mqdefault.jpg"
            alt="Master C++ in 3 Hours"
            width={160}
            height={120}
          />
          <div>
            <h2>Master C++ in 3 hours</h2>
            <p>An easy guide to teach you everything to get started with C++</p>
          </div>
        </a>
      </div>
    </div>
  );
}

```
{: file="app/search/page.js" }
{: .nolineno }
{: .blur }


### Playlist Route

This one you will have to do on your own since I will not provide an answer (you will be more than fine to do so as this is very similar to the search route)

- Inside ```/playlist/page.js```, create a React component that shows fake videos in a playlist.
- Style each video as a you want 
- Make sure each one links to the ```/video``` route

## Main and Layout Pages

### Main Page

Our main page will also be relatively simple, we want just a couple things that you should be able to do on your own (I will put my code below here but make sure to attempt on your own)

**In our main page we want:**
- A search bar, in which you can type anything whatever you want to search
- 4 different buttons, that will be to 4 different searchs
    - **Regular Search Button:** This will be a regular video search
    - **Playlist Search Button:** This will be a search for playlists specifically
    - **Video ID Button:** Instead of a search, if you know the video ID, type it here and it will go straight to the video
    - **Playlist ID Button:** Like the video ID button, this will take you directly to the playlist instead of searching for it.


**Some things you are going to use:**
- ```useState()``` - familarize yourself with what useState does again as it is very important for the search bar
- ```onClick()``` - figure out how to use this to get to other pages
- While maybe not necessary, make sure you can not search for something when the input box is blank


Do your best to make this on your own, only using mine if you get absolutely stuck. For this try not to use AI, use other resources such as **Stack Overflow, Geeks4Geeks, Reddit,** and most powerful of all **Googling it** I guarantee you someone has ran into this issue before.


```js
import React, { useState } from "react";

export default function Home() {
  const [input, changeInput] = useState("");

  const handleInputChange = (e) => {
    changeInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      window.location.href = `/search/${input}`;
    }
  };

  return (
    <div>
      <div>
        <h1>Focus</h1>
        <h1>Tube</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            placeholder="Search for something..."
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div>
        <button
          onClick={() => {
            if (input.trim() !== "") {
              window.location.href = `/playlist-search/${input}`;
            }
          }}
        >
          Search Playlists
        </button>

        <button
          onClick={() => {
            if (input.trim() !== "") {
              window.location.href = `/playlists/${input}`;
            }
          }}
        >
          Search Playlist ID
        </button>

        <button
          onClick={() => {
            if (input.trim() !== "") {
              window.location.href = `/video/${input}`;
            }
          }}
        >
          Search Video ID
        </button>
      </div>
    </div>
  );
}
```
{: file="app/page.js" }
{: .nolineno }
{: .blur }

### Layout Page

Now this page is a unique page in NextJS but it also is very powerful

**The layout page is the UI that is shared between routes**

What does that mean specifically? Well have you noticed in every single route and part of the webpage you have been to has had the same colors? the same font as well? Well that is thanks to ```layout.js```

No matter where you are in the website, **what is in the layout page stays there**

This includes:
- Any CSS you want to add
- Headers or Footers you may want
- A navbar for the entire website

Feel free to make your Layout page your own. Luckily NextJS already has a really useful one made for you so you can see what to do with it!

I will not give you what mine looks like since it is unecessary, and because I want you to make this app your own, not just a carbon copy. 

## OPTIONAL: TailwindCSS

TailwindCSS is a different way of doing CSS, there is no ```.css``` files, instead you add classes for each style you want

for example in regular css you may make a ```.css``` file then add the class to your HTML, like this:

```css
.center-div {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

```html
<div className="center-div"> Hello! </div>
```

In TailwindCSS, each one of these attributes are its own class that we can add straight to the HTML

for example

```html
<div className="flex justify-center items-center"> Hello! </div>
```

For a more in depth dive, I highly suggest Fireships video 100 second video on TailwindCSS

{% include embed/youtube.html id='mr15Xzb1Ook' %}

This portion is optional because I want this tutorial to focus more on APIs and NextJS, however if you are interested in learning more about TailwindCSS, try it out here on this project! If you do not want to that is fine, for the rest of the tutorial I will share my TailwindCSS classes as well. 

### What Mine Looks Like

Feel free to copy this TailwindCSS if you don't want to spend the tutorial fighting CSS. However I **encourage** you to make this your own and make it look how you want it to.

#### app.js

```js
import React, { useState } from "react";

export default function Home() {
  const [input, changeInput] = useState("");

  const handleInputChange = (e) => {
    changeInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      window.location.href = `/search/${input}`;
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="flex m-3 p-3">
        <div className="w-fit h-fit flex items-center justify-center p-1">
          <h1 className="italic text-white text-4xl">Focus</h1>
        </div>
        <div className="bg-red-800 flex items-center justify-center p-1 rounded-lg">
          <h1 className="text-white text-4xl">Tube</h1>
        </div>
      </div>

      <div className="mt-6 w-full flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl px-4 flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            className="bg-neutral-700 text-white pl-4 pr-4 py-3 rounded-full w-full text-lg outline-none focus:ring-2 focus:ring-red-800"
            placeholder="Search for something..."
          />
          <button
            type="submit"
            className="bg-red-800 text-white px-6 py-2 rounded-full text-lg hover:bg-red-700 active:bg-red-900 transition-colors duration-150 cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => {
            if (input.trim() !== "") {
              window.location.href = `/playlist-search/${input}`;
            }
          }}
          className="bg-neutral-600 text-white px-4 py-2 rounded-2xl hover:bg-neutral-500 active:bg-neutral-700 transition"
        >
          Search Playlists
        </button>

        <button
          onClick={() => {
            if (input.trim() !== "") {
              window.location.href = `/playlists/${input}`;
            }
          }}
          className="bg-neutral-600 text-white px-4 py-2 rounded-2xl hover:bg-neutral-500 active:bg-neutral-700 transition"
        >
          Search Playlist ID
        </button>

        <button
          onClick={() => {
            if (input.trim() !== "") {
              window.location.href = `/video/${input}`;
            }
          }}
          className="bg-neutral-600 text-white px-4 py-2 rounded-2xl hover:bg-neutral-500 active:bg-neutral-700 transition"
        >
          Search Video ID
        </button>
      </div>
    </div>
  );
}
```
{: file="app/page.js" }
{: .nolineno }
{: .blur }

#### Search Page

```js
export default function SearchPage() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-start text-white">
      <h1 className="text-4xl mt-6 mb-4">Search Results</h1>

      <div className="flex flex-col items-center w-full overflow-y-auto pb-10">
        <a
          href="/video"
          className="w-1/2 max-w-3xl bg-neutral-700 rounded-2xl p-3 m-3 flex items-start gap-3"
        >
          <img
            src="https://i.ytimg.com/vi/abc123/mqdefault.jpg"
            alt="How to Learn JavaScript Fast"
            width={160}
            height={120}
            className="rounded-md shrink-0 object-fill"
          />
          <div className="flex flex-col justify-start h-full p-3">
            <h2 className="text-lg font-semibold leading-tight mb-1">
              How to Learn JavaScript Fast
            </h2>
            <p className="text-sm text-gray-300 leading-snug">
              A quick guide to getting started with JavaScript.
            </p>
          </div>
        </a>

        <a
          href="/video"
          className="w-1/2 max-w-3xl bg-neutral-700 rounded-2xl p-3 m-3 flex items-start gap-3"
        >
          <img
            src="https://i.ytimg.com/vi/abc123/mqdefault.jpg"
            alt="Master C++ in 3 Hours"
            width={160}
            height={120}
            className="rounded-md shrink-0 object-fill"
          />
          <div className="flex flex-col justify-start h-full p-3">
            <h2 className="text-lg font-semibold leading-tight mb-1">
              Master C++ in 3 Hours
            </h2>
            <p className="text-sm text-gray-300 leading-snug">
              An easy guide to teach you everything to get started with C++.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
```
{: file="app/search/page.js" }
{: .nolineno }
{: .blur }

#### Video Page

```js
export default function Content() {
  return (
    <div className="h-lvh w-lvw flex flex-col items-center justify-start text-white">
      <iframe
        width="960"
        height="540"
        src="https://www.youtube.com/embed/your-youtube-video-id-here"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
}
```
{: file="app/video/page.js" }
{: .nolineno }
{: .blur }

### Playlist Page

I did not show it before, feel free to copy from the search page, or make it you own.

## Dynamic Routing

It is impossible to hardcode every single page into your website, especially this one where we need it to be able to render **any video on youtube**. 

Luckily NextJS has a pretty simple way to make the webpage differ based on the url called Dynamic Routing. 

**Here is an example:**

 I have this route in my app

 ```app/video/page.js```

 However this is kind of useless because there is only one video, however with dynamic routing, we can pute the Video ID in the url, and that can affect the webpage. 

 In order to implement this you will need a folder inside all of your route folders that looks something like this:

 ```app/route/[routeId]/page.js```

 The way NextJS knows if you have a dynamic route in the folders with brackets around them. 

 **Pay attention to what you name the folder inside the brackets, that is what we will need to call in the next section**

### Where we need Dynamic Routing

We need dynamic routing pretty much anywhere the webpage is impacted by the url. Which happens to be **all of our routes**

So next what you need to do is this:
- In all routes *(/search, /video, /playlist)* make a new folder
- Make that folder name whatever you want, it just has to be in brackets to work: ```[name]```.
- Move the **page.js** file in each route into each dynamic route folder

Your file tree should now look like this 

```
my-app/
├── node_modules/
├── public/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       ├── page.js
│       ├── search/
│       │   └── [searchId]/
│       │       └── page.js
│       ├── video/
│       │   └── [videoId]/
│       │       └── page.js
│       └── playlist/
│           └── [playlistId]/
│               └── page.js
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
└── README.md
```

#### Now go to each route, by typing ```/route/[anything you want here]``` 

Also notice **if you go to just /route there will be nothing now**, this is because you moved the page.js into the dynamic route, but this **DOES NOT INCLUDE A BLANK ROUTE**

## Using params

The big reason why using we use these dynamic routes are so its easy to pass information to the page via a URL

In order to do we we call the **params** 

- The *params* is are the dyanmic route parameters. So whatever is passed in the URL can be called using *params*

```js
// Here is an example on how to call parameters

export default function Route({ params }) {
    const { id } = params;
    // IMPORTANT:
    // See how I call 'id', this should be replaced with what you titled
    // your folder, if you followed my naming convention you would put 
    // searchId, videoId, or playlistId

    return (<p> This is a Route with the URL Containing {id} </p>);
}
```

### Implementing

Since all of our routes are dynamic, in every route, **call params and integrate it in someway to your component**, it does not have to make sense yet, that is for later.

#### MISTAKE IN ABOVE CODE

The code I gave you had an error, it is not a major error (for now), click **Fn + F12** and it will show you the error. Read the document it provides to correct your code 

**Answer below**

```js
// I lied this is not the answer

// However I will put the link to the documentation here, as it 
// contains exactly what you

// https://nextjs.org/docs/messages/sync-dynamic-apis

// As a programmer always remember to use the documentation, it is there
// for a reason!
```
{: .nolineno }
{: .blur }

### Challenge Task

- **Make the parameter in the /video/[ videoId ]/page.js determine the video id**
- HINT: Look at how the embedded video URL is formatted

## Client vs SSR

React is a primarily "Client Side Library". What does this mean? 

- Client Side Rendering means the browser receives basic HTML page with links to the JS files. Basically, **its running purely on your browser**.

NextJS has both Client side rendering, as well as Server Side Rendering

**What is Server Side Rendering?**

- Server Side Rendering (SSR) is the process of **rendering the webpage fully on the server** and then sending the fully rendered HTML to the client

By default, NextJS will SSR, however we can easily make a file client side with this:

```'use client'```

### When do I use Client vs SSR?

There are sometimes you CANNOT use client side. Your code should be SSR if you meet any of this criteria:

- You need fresh data in every response
- When it is important for the page to be fully rendered when displayed
- You access server only secrets or credentials (ie. calling your internal API for data).

**If you need to access external data or something confidential before the page loads, use SSR**

**If the data can be fetched after the page loads, or you are making an interactive page with UI updates (ie. useState())**



### Routing

Now that you know the difference between CSR and SSR, here is we can use the another NextJS feature.

When using **CSR Components** we can now use the ```useRouter()```

**What is useRouter()?**

- Basically is NextJS's ```<a>``` tag for **CSR Components**
- Easy way to control navigation instead of relying on ```<a>``` tags
- Support many different functions, shown below

```js
const router = useRouter();

// sends you to another route in your website
router.push('/specified/path');

// refreshes the current route you are at
route.refresh();

// Go back in your history
route.back();
```

## Implementing Client Side Rendering

We are going to have **2 components that use client side rendering**

- ```app/video/[videoId]/page.js```
- ```app/page.js```

**Why make these two Client Side??**

For a One simple reason, these pages loading before everything is ready is fine, whereas showing incomplete results while in a search is not ideal. 

### Challenge Task

**Now make these components client side components, when doing this you will run into a couple errors, attempt to Google or look at the documentartion for why you get these errors** 

I will provide the answer for this one, if you get stuck feel free to take a look, or when you finish take a look to make sure you are in the right direction.

I won't provide the ```app/page.js``` since that will not throw any errors when making it it a Client Side Component.

```js
"use client";

import { useParams } from "next/navigation";

export default function Content() {

  // since this is NOT a server side component we CANNOT use await
  // luckily NextJS provides a useParams hook to get the params from the URL
  // this is a client side component this is our equivalent to the server side 
  // of 'await params'
  const { id } = useParams();

  
  return (
    <div className="h-lvh w-lvw flex flex-col items-center justify-start text-white">
        <iframe
          width="960"
          height="540"
          // we can add the id directly to the src
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className="rounded-lg shadow-lg"
        >
        </iframe>
    </div>
  );
}

```
{: file="app/video/page.js" }
{: .nolineno }
{: .blur }




**Since our main page (```app/page.js```) is meant to route us to other pages and is a CSR, use ```useRouter()``` to navigate the buttons to its corresponding pages.**

**(remember to take a look at the example above)**


## Loading State

When you have Service Side Components, the entire webpage renders **on the server**, the main problem with this is, *what if the content is not ready? what do we show the user?*

NextJS has a very simple and easy way to solve this issue, you can make a **static loading page**

- If you have a SSR Component, in the **same folder** make a ```loading.js``` file
- This ```loading.js``` file needs to be **static** so they can be ready right when someone loads the page.

This implementation is super simple, this is what your file tree should look like. 

```
my-app/
├── node_modules/
├── public/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       ├── page.js
│       ├── search/
│       │   └── [searchId]/
│       │       ├── page.js
│       │       └── loading.js        
│       ├── video/
│       │   └── [videoId]/
│       │       └── page.js           
│       └── playlist/
│           └── [playlistId]/
│               ├── page.js
│               └── loading.js        
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
└── README.md
```

Feel free to make your own ```loading.js```

If you don't feel like it here is what mine looks like 

```js
export default function Loading() {
    return (
        <div className="flex w-lvw h-lvh justify-center content-center">
            <h1>Loading...</h1>
        </div>
    );
}
```

## Introduction to APIs and getting YouTube API key

### What is an API?

An API is an **Application Programming Interface**

Which is a **set of rules that allow different software components to communicate with each other**.

Today we will be working with **REST APIs** which is the most popular type of API, it communicates via HTTP methods which are GET and POST (there is also PUT and DELETE but we are not going to use those). 

- GET --> When you want to get data from the source.
- POST --> When you want to give data to the source.


### Example 

Imagine you want to build a *Pokemon Information App*, the hard way to make this app is collecting every single but of information about every single pokemon. **This is where an API could make life so much easier**. There is an API called ```PokeAPI``` where you send a request for Pokemon data, and it will send it back to you.

The way this works is like this:
- you send an HTTP request (we will go more in detail later) 
- In that HTTP request you specify what you want, for example you want to know everything about Pikachu.
- The other end of the API will process this request, gather the information about Pikachu and put it in a **JSON File** for you to understand
- Lastly they will send back that information that you requested, and now you have all the information you needed without collecting any data!

#### Here is realistically what it would look like:

send a request like this ```const apiData = await fetch(https://pokeapi.co/api/v2/pokemon/pikachu)```

You will get something back that looks like this

```js
// Note: This is an example, not what PokeAPI will actually send
{
  "name": "pikachu",
  "height": 4,
  "weight": 60,
  "types": [
    { "type": { "name": "electric" } }
  ]
}
```

After you get this information back, you can parse it and use it however you would like.

[Here is another example](https://www.youtube.com/watch?v=s7wmiS2mSXY&t=33s) if you are struggling a bit to understand

## Enable the YouTube API

Like I said before, we are going to use the **YouTube API**, luckily for us, it is free to use! So no need to put any card in or anything.

So first thing we need to do is **Activate your Youtube API** and get your **API Key**

Go to [Google Cloud Console](https://console.cloud.google.com/)

- If you have not made a project before, [follow this tutorial](https://youtu.be/dTT1RGW8eYw?feature=shared&t=17) to get one set up,
- Next, on the home page go to the **Navigation hamburger menu at the top left**. 
- Click on ```APIs & Services``` which is the 4th under **Products** if you are stuck go [here](https://console.cloud.google.com/apis/library)
- On the left you will see a tab for ```Library```, click that
- In the search box, search for **"youtube data api v3"**, click on the result, then click **Enable**
- After doing this you will be taken to the dashboard, in this dashboard in the middle left of the screen you will see three tabs
  - **Metrics, Quota & System Limits, and Credentials**
- Click on **Credentials**, next on the right side of the screen click ```+ Create Credentials``` and click ```API Key```
- Lastly follow any prompts (there should be none) then copy the **API Key** and put it somewhere safe for now **DO NOT PUT THIS ANYWHERE PUBLIC ON THE INTERNET**

**Congratulations!** You now have an API key for the Youtube API! 

The reason why we need to get an API Key is basically to verify and authorize that we are allowed to call it. Most if not all APIs you will work with will need one. 

Next go back to your project, and in the highest directory (the directory that holds src, and .gitignore) **create a file and call it ```.env```** 

In the ```.env``` file, paste your API Key like this

```console
API_KEY=yourapikeyhere
```

Lastly make sure you have a ```.gitignore``` file, and in it add it if it is not already in there. This way the API key will not be posted to your Github repository if you want to put it there

- NOTE: Even if youi are not putting this on github, put it in the .env file, it is good practice to do so as you do not want any of your frontend to show your API key

## Creating your API

Now it is time to make your **NextJS API**

Making the API is about as easy as making the routes! in the ```/app``` folder, make a folder titled ```api```

We need three different endpoints (An API endpoint is a URL that acts as the point of contact between an API client and an API server):

- ```app/api/playlist```
- ```app/api/search```
- ```app/api/video```

To create this endpoints, you need add a ```route.js``` in each folder. **This is what your tree structure should look like now**

```
my-app/
├── node_modules/
├── public/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.js
│       ├── page.js
│       ├── search/
│       │   └── [searchId]/
│       │       ├── page.js
│       │       └── loading.js
│       ├── video/
│       │   └── [videoId]/
│       │       └── page.js
│       ├── playlist/
│       │   └── [playlistId]/
│       │       ├── page.js
│       │       └── loading.js
│       └── api/
│           ├── playlist/
│           │   └── route.js
│           ├── search/
│           │   └── route.js
│           └── video/
│               └── route.js
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
└── README.md
```

### Creating the API endpoints

We need to create our **GET** request for each route, as a reminder:

- A GET request is when you want to access data

NOTE: We will not POST, only GET, since we do not have a place to put data.

In every ```route.js``` put this here

```js
export async function GET(request) {
  // content goes here
}
```

You will notice that is has the parameter ```request```. That is where we find the details of the API request.

So for example when we call this API, this is what our request will look like

- ```/api/video?videoId=randomVideoId```

As you will see there is this part ```?videoId=randomVideoId```

When you create an API request, this is how you will format it, after the question mark, put any parameters that the API accepts along with the input for it. 

So for the one above, this API has the ```videoId``` parameter, and the input for it, comes after the equal sign.

Knowing this we can add to the ```api/video/route.js```

```js
export async function GET(request) {
  // Create a URL object from the incoming request
  const { searchParams } = new URL(request.url);
  // Extract the value of the "videoId" from the URL
  const videoId = searchParams.get("videoId");

  // make this example data for each endpoint for
  // now, this will be used to test the API
  const data = {'message':'Success'}

  // right now we do not have anything to really send back
  // but when we do, we send a response
  // a Response has a status (200 if successful) and a
  // a JSON object with the data
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

```
{: file="app/video/page.js" }
{: .nolineno }

Now that you know how to create an endpoint, create the `route.js` for `/search` and `/playlist` given these two requests:

- ```http://localhost:3000/api/search?text=lofi&type=video```
- `http://localhost:3000/api/playlist?playlistId=myplaylistid`


HINT FOR `/search`, the & means there are MULTIPLE PARAMETERS, those being `text` and  `type`

### Test Your APIs 

In this part of your route

```js
const data = {'message' : 'Success'}
```

It is there for a reason, go to each route, type them into the URL of your browser that you are using. And you should see this message (or whatever message you put) at the top left of the page.

If you do, congratulations you have correctly made your first API! Otherwise go back and make sure everything looks the same.

## Calling YouTube API and Parsing the Data

Now that we made our own API, we are going to now call the youtube API with our requests.

**Why did we make our own API to call the YouTube API?**

1. Adding another layer basically gives a backend, that adds a layer of abstraction, security, validation that we probably do not want on our frontend.
2. It is better to learn to make your own API and backend, rather than just calling them.

### How to call the Youtube API

The url for the API is `https://www.googleapis.com/youtube/v3`

Everything you need to know about the YouTube API is [here in the documentation](https://developers.google.com/youtube/v3/docs)

I won't just give the documentation and call it good though, so I will give you an example by showing the `/video` one first

When making API there is no need to **manually type the URL** we have tools to make it easier and guarantee to be correct

```js
  // we create a new URL object, and put the base URL we want to call
  const url = new URL("https://www.googleapis.com/youtube/v3/videos");

  // Next for the API parameters
  // instead of straight the parameters into the URL, we can
  // just set them using our URL object
  url.searchParams.set("part", "snippet,contentDetails,statistics");
  url.searchParams.set("id", videoId);

  // Remember the API key we added to our env file?
  // Well javascript lets us call it using process.env.API_KEY
  // ANYTIME WE CALL THE API WE NEED THE API KEY FOR AUTHORIZATION
  url.searchParams.set("key", process.env.API_KEY);
```

Feel free to add this to your `/app/api/video/route.js`

However APIs will not always work, sometimes when you call an API it may return a unsuccessful code, like **500**. So when calling the API, we need to make sure we account for those.

Thankfully we can use a `try and catch` statement. 

Here is the full `/app/api/video/route.js`

```js
export async function GET(request) {
    // get the parameters from the request
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get("videoId");

    // Build the url to call the API
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.set("part", "snippet,contentDetails,statistics");
    url.searchParams.set("id", videoId);
    url.searchParams.set("key", process.env.API_KEY);

    // make the attempt to call the API
    try {
        const response = fetch(url.toString());

        // we can check if it went okay, if now we want to raise
        // an error to show the API access was unsuccessful
        if (!response.ok) {
            const errorText = await response.text();
            console.error("YouTube API Error:", errorText);
            throw new Error("Failed to fetch video details");
        }

        // If it is fine, that means we can take the JSON
        // string and convert to a JSON Object so we can parse
        // the data
        const data = response.json();

        // since this was successful, we return a Response
        // with the status 200, and a json string of the data
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        // If the API ends up not working, return why it did not
        // work, and make the status 500
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
```

**THERE WILL BE A COUPLE ERRORS IN THIS FILE**

Use the console and NextJS helper to figure out these errors.

There may be a couple things you need to add for security that I did not do here


### Challenge Task

Now it is your turn! use the [YouTube API Documentation](https://developers.google.com/youtube/v3/docs) and any other resources **(TRY TO AVOID USING AI THOUGH)** to make the API calls for `/api/search` and `/api/playlist`

Everything you need to do this has already been talked about. I will provide the solution, with a couple errors for `/api/search` without any edge case checking, but not for `/api/playlist` (It is very similar to the video one)

### Partial Solution to Challenge Task

```js
export function GET(request) {
    const { searchParams } = new URL(request.url);
    
    const text = searchParams.get('text');
    const channel = searchParams.get('channel');
    const type = searchParams.get('type');

    const url = new URL("https://www.googleapis.com/youtube/v3/search");

    url.searchParams.set("part", "snippet");
    url.searchParams.set("q", text);
    url.searchParams.set("type", type);
    
    if (type === "video") {
        url.searchParams.set("videoDuration", "medium");
    }

    const response = await fetch(url.toString());
    
    if (!response.ok) {
        console.log(response);
        throw new Error('Network response was not ok');
    }

    const data = response.json();

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
```
{: file="app/api/search/route.js" }
{: .nolineno }
{: .blur }

## Calling Custom API to the front end to display the Data

Now that we actually have data to put in our website, we can now display the everything.

first, we call the API in `/app/search`

```js
  // encodeURIComponent is necessary since the searchId may contain
  // weird non unicode characters, this will fix that.
  const res = await fetch(
      `http://localhost:3000/api/search?text=${encodeURIComponent(searchId)}&type=video`,
      { cache: "no-store" } // this is optional
                            // included so there is always
                            // new / fresh data
  );
```

Just like how we called the YouTube API, we can call our own API, when we receieve the data, this is now the response to a search, and we can display it.

### How to Display API Data

**Try this on your own, figure out what the API Data looks like, and how you can display it. I will give a full solution to this one, and a partial solution to another. The last one you will need to do on your own.

Here is what an example 2 video search would look like

```json
{
  "kind": "youtube#searchListResponse",
  "etag": "dummyEtag123",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 2,
    "resultsPerPage": 2
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "etag1",
      "id": {
        "kind": "youtube#video",
        "videoId": "dQw4w9WgXcQ"
      },
      "snippet": {
        "publishedAt": "2023-01-01T00:00:00Z",
        "channelId": "UC123456789",
        "title": "Relaxing Lofi Beats",
        "description": "Perfect background music for studying and relaxing.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg"
          }
        },
        "channelTitle": "Lofi Radio",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "etag2",
      "id": {
        "kind": "youtube#video",
        "videoId": "hY7m5jjJ9mM"
      },
      "snippet": {
        "publishedAt": "2023-01-02T00:00:00Z",
        "channelId": "UC987654321",
        "title": "Chillhop Essentials - Winter 2023",
        "description": "A selection of jazzy beats to relax or code to.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg"
          }
        },
        "channelTitle": "Chillhop Music",
        "liveBroadcastContent": "none"
      }
    }
  ]
}
```

**If the above JSON is unreadable and confusing to you, do not worry, paste any JSON object into [this website](https://jsoncrack.com/editor), it will help you visualize the data better**

Now knowing with the API data may look like, you can use this to get to the data you need, for example:

- **Thumbnail** = `items[i].snippet.thumbnails.medium.url`
- **Title** = `items[i].snippet.title`
- **Description** = `items[i].snippet.description`
- **Video ID** = `items[i].id.videoId`

**NOTE:** I expect you to know how to get info from JSON objects, if not, don't worry here is a [quick demonstration](https://www.youtube.com/watch?v=iiADhChRriM)

What we need to do to show all the videos is **iterate through all the videos in the items array and for each video display a video card**

This is easily done in JS with JavaScript's map function

```js
const videos = await res.json();

return (<div className="flex flex-col items-center w-full overflow-y-auto pb-10">
  {videos.items?.map((vid) => { // go through every video in the items

      return (<a    // cant use useRouter() since this is SSR
          href={`/video/${vid.id.videoId}`} 
      >
          <img
              src={vid.snippet.thumbnails.medium.url}
              alt={vid.snippet.title}
              width={160}
              height={120}
          />
          <div>
              <h2>
                  {vid.snippet.title} 
              </h2>
              <p>
                  {vid.snippet.description}
              </p>
          </div>
      </a>);
    });
  } 
</div>);
```

Your full `/video/page.js` should look like this

```js
"use client";

import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";


export default function Content() {

  const { videoId } = useParams(); 

  // since this will be rendered later, since embed is an API
  // we can use useState() to set the video
  const [video, setVideo] = useState(null);  

  // fetch the video and set it to the video variable
  // if there is one
  // review useEffect and useState if this seems confusing
  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetch(`/api/video?videoId=${encodeURIComponent(videoId)}`, { cache: "force-cache" });
      const vid = await res.json();
      setVideo(vid?.items?.[0] ?? null);
    };

    fetchVideo();
  }, [videoId]);

  // get the snippet from the video to extract
  const title = video?.snippet?.title ?? "No title";
  const description = video?.snippet?.description ?? "No description";

  // now display all the information
  return (
    <>
      <div className="h-lvh w-lvw flex flex-col items-center justify-start text-white">
        <h1 className="text-3xl p-2 m-2">{title}</h1>
        <iframe
          width="960"
          height="540"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="flex items-center justify-between max-h-1/4 w-full max-w-5xl p-4 mt-4 bg-neutral-700 rounded-lg overflow-scroll">
          <p className="mt-4 text-gray-300">{description}</p>
        </div>
      </div>
    </>
  );
}
```
{: file="app/video/[videoId]/page.js" }
{: .nolineno }
{: .blur }


Now that you have seen what this looks like, give an attempt at making the playlist one.

- Call your playlist API to retreieve the playlist
- go through the items (videos) in your playliust and display them as cards
- each card should link to `/video/[videoId]/page.js` of that video

I will provide a half solution where there are errors for you to fix, but given the demonstrations above you have more than enough to do this. 

**Solution (with errors)**

```js
export default function PlaylistPage({ params }) {
    
    const { playlistId } =  params;

    const res = fetch(
        `http://localhost:3000/api/playlist?playlistId=playlistId`,
        { cache: 'no-store' }
    );

    const videos = res.json();

    return (
        <>
        <div className="w-screen h-screen flex flex-col items-center justify-start text-white">
            <h1 className="text-4xl mt-6 mb-4">Playlist Videos</h1>

            <div className="flex flex-col items-center w-full overflow-y-auto pb-10">
            {video.items.map((p) => {

                return (
                <a
                href={`/video/${p.snippet.resourceId.videoId}`}
                key={p.snippet.resourceId.videoId}
                className="w-1/2 max-w-3xl bg-neutral-700 rounded-2xl p-3 m-3 flex items-start gap-3 max-h-1/5"
                >
                <img
                    src={p.snippet.thumbnails.medium?.url}
                    alt={p.snippet.title}
                    width={160}
                    height={120}
                    className="rounded-md shrink-0 object-fill"
                    style={{ width: '160px', height: '120px' }}
                />
                <div className="flex flex-col justify-start h-full p-3">
                    <h2 className="text-lg font-semibold leading-tight mb-1">
                    {p.snippet.title}
                    </h2>
                    <p className="text-sm text-gray-300 leading-snug max-h-3/4 overflow-scroll">
                    {p.snippet.description}
                    </p>
                </div>
                </a>
            );
            })}
            </div>
        </div></>
    );
}
```
{: file="app/playlist/[playlistId]/page.js" }
{: .nolineno }
{: .blur }

## Final Challenge Task

Lastly, we need our `/search/[searchId]/page.js` done.

- Call your playlist API to retreieve the playlist
- go through the items (videos) in the search and display them as cards
- be aware of edge cases, find a way to not show shorts, or any channels that may show up (yes even if you specify videos they sometimes show ip)
- each card should link to `/video/[videoId]/page.js` of that video

Your solution will be very similar to the playlist page. Utilize anything in this tutorial and google + documentation to help you.

## Where to go from here?

### Congrats!

You have finished the main part of thistutorial!

As you can see there is a ton more to do, but I am ending it here because everything else is going to be repetitive, and you have everything you need.

I wanted to leave you with a list of things you can do to improve your website.
- utilize the button we did not program yet (search for playlist)
 - you can edit search to do accomodate playlists, or you can make a seperate playlist search (second would be easier, first is more ideal in OOD)
- make a way to go through playlist videos
- Make a channel page
- Make a channel search page
- Show comments
- Show related videos
- An ambitious one could be to connect to your youtube account / use OAuth to view your own private content and playlists.
- Even just making the design better

Overall do whatever you want to make this your own to where you think you would want to use it. If you thought of a different way to improve the website, do it! If you want to do something you did not see in this tutorial, don't be afraid to do it, use your resources and make it happen!

Thank you so much, and I hope you guys enjoyed and learned something new in this tutorial!

