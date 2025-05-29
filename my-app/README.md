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

**Click here to unblur the answer**

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






