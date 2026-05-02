# camping-website

Link to website: https://camping-website-pu0l.onrender.com/

Status: Online but still a work in progress. Currently focusing on completing the component tests.

Design was based on https://rentaltemplate.webflow.io/home. 

I did not buy the template and used that to make this project. And no AI website design app was used to create this. This was made to implement a simple ecommerce website. The initial plan was to have a frontend using Vue 3 and a backend using Express.js + SQLite. As of May 2026, only the frontend was implemented and hopefully, the backend will soon follow.

The website is responsive in mobile, tablet and desktop view. There is component testing and CI/CD. The frontend was deployed to Render.com as a static site (for now).

## Tech Used

* Vue 3 + Vite
* Vueuse
* Vue-router
* Pinia
* TailwindCSS
* TailwindCSS/forms
* Swiper.js
* Vitest
* Vue/test-utils

## What I learned from this project

Using vitest + vue/test-utils for component testing was new to me. Mocking and stubbing components with their dependencies to test their behavior was what preoccupied me most of the time. It was confusing at first but using an AI coding agent made it easier to understand how component testing is properly implemented. The coding agent was not that helpful in creating whole blocks of code but it did provided me with answers when I encountered roadblocks.

## Website Demo

Desktop view - [![Watch the video]()](https://www.youtube.com/watch?v=JtpiE0b6GAw)
