---
layout: post
title: "Serialize Attributes"
date: 2013-12-9 09:23
categories:
---
So after I successfully jail-rigged my blog, I can now make new posts.  I have a bunch that I want to talk about, but one I wanted touch on today was serializing attributes for a model.

Here is the scenario.  One of the index pages for my currently client lists all the items they have available for rent (it's a music company).  They have microphones, computers, instruments, anything you could rent.  It's probably about 10 different categories of products that a customer can rent.

I built the back end with [ActiveAdmin](http://www.activeadmin.info/) so the client can easily change the content of the site.  The previous developer had hard coded all of the content, and the client was not comfortable going into the actual code to make changes.  

So we have a rental page that lists all the items for rent.  Because there are 10 different categories of items, do I want to make 10 different models and do the proper associations, or because the items only have names do I want to come up with something else?

I found out that I could serialize an attribute in rails.  Its super simple:

For some reason, images won't work on my blog right now.  But here is some simply code:

"serialize :tasks, Array"

What we are doing his is simple, rather than creating a whole nothing model and creating the association, this model (staff), can have many titles, but those titles cannot have many attributes.

This was a really good way for allow the client to add many single attribute attributes to a model.