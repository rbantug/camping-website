# camping-website

<img src="https://dl.dropboxusercontent.com/scl/fi/msmvcb29mhaocs6xsrz6o/main-img.png?rlkey=xaq0myj4ikjhwvv8rh4zjezaw" alt="Screenshot of hero section" width="1200" />

Link to website: https://camping-website-pu0l.onrender.com/

Status: Online but it is still a work in progress.

Design was based on https://rentaltemplate.webflow.io/home. 

I did not buy the template and used that to make this project. No AI website design app (like Lovable) was used to build this project. The objective of this project was to implement a simple ecommerce website while familiarizing myself with transitions and animations. The initial plan was to have a frontend using Vue 3 and a backend using Express.js + SQLite. As of May 2026, only the frontend was implemented and hopefully, the backend will soon follow.

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
* Github Actions

## What I learned from this project

Using vitest + vue/test-utils for component testing was new to me. What preoccupied me the most was mocking and stubbing components with their dependencies to test their behavior. It was confusing at first but using an AI coding agent made it easier to understand how component testing is properly implemented. The coding agent (together with a free LLM) was not that helpful in creating whole blocks of code but it did provided me with answers when I encountered roadblocks.

## Website Demo

[![Desktop view]()](https://www.youtube.com/watch?v=JtpiE0b6GAw)\
[![Tablet view]()](https://www.youtube.com/watch?v=NzyWgNtN-qo)\
[![Mobile view]()](https://www.youtube.com/watch?v=kaAqrHhOlw0)

## Plans in the future

* Complete component testing --> 🚧 Work In Progress 🚧
* Backend + Database
* An admin dashboard with AI integration to the database for easy querying of camp reservations
* Stripe checkout integration (sandbox only)
* A campground reservation system similar to [![this]()](https://reservecalifornia.com/park/713/687) but with better UI.
