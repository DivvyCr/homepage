This repository contains the sources for my online homepage. Initially, this project was a way for
me to get comfortable with the fundamentals of web development (ie. HTML and CSS), as I have no
ambitions for building websites professionally. Having said that, I wanted to build something
special, as opposed to an overly simplistic page of text or a 'modern' website that looks like any
other template. Hence, I decided to design a unique homepage that would *slide sideways* to toggle
between featured content and my photo, while my name and contact information always remained
visible:

<div>
	<img src="/assets/images/Homepage-1.png" style="width:45%" />
	<img src="/assets/images/Homepage-2.png" style="width:45%" />
</div>

## Overview

I rely on [**11ty**](https://www.11ty.dev/) to handle the intricacies of building the website,
namely handling the content pages (ie. displaying the featured content on the landing page, and the
lists of pages for the projects and the blog).

For the appearance of the website, I use the **Stylus** preprocessor for CSS, which relaxes the CSS
syntax rules and provides additional tools. The choice of Stylus over SASS or LESS, or even pure
CSS, was made for me when I started exploring an 11ty template that used it.

All stylistic choices were made by me, but I've taken bits of inspiration from many different
personal websites and blogs.

## Development

Locally, you have to run very little set-up to be able to work with the website. The prerequisites
are to clone the repository and install all dependencies (ie. run `npm install` in the repository's
directory).

Then, if you are working with the template files, you only have to run `npx @11ty/eleventy --serve`
to view the results on `localhost`. If you are also working with the design files (in Stylus), you
will have to run `stylus design/stylus/main.styl -o design/css/main.css` to compile the CSS. Here,
you may also use the `-w` option to watch the files and auto-compile on any changes.
