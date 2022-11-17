# ASL Alliance

A website for North Central University's ASL club. It showcases what the club is all about, and is a place where people can RSVP for upcoming club or campus events. It was built with HTML, CSS, Javascript, Nunjucks, and 11ty.

## Screenshots

![Screenshot (3)](https://user-images.githubusercontent.com/97766663/201777954-b2a881d5-4fa7-47bf-9988-46ea3f294f6c.png)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

localhost:3000/

## Reflection

This is a freelance project that I built for North Central University's ASL club.  Project goals included having a place where they can illustrate the essence of the club and a place where the students are able to RSVP for upcoming events.  

Originally the client wanted only a place where the students could RSVP for an upcoming event, but they eventually changed their mind to wanting a full website for the club, and to also be able to edit parts of the website.  In order to let them edit parts of the site I used the netlify content management system which creates an admin panel that is linked to github, so it pushes a change live to github, that triggers netlify to rebuild the website and the site is rebuilt within thirty seconds to a minute.

One of the main challenges I faced was integrating the existing website into the netlify cms for the client to be able to edit parts of the site.  It requires you to use a static site generator which I previously had no experience in.  With the help of a video called [Turn static HTML/CSS into a blog with CMS using the JAMStack](https://www.youtube.com/watch?v=4wD00RT6d-g), I was able to successfully merge the netlify cms and site together.
