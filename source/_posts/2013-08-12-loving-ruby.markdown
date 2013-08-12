---
layout: post
title: "Loving Ruby"
date: 2013-08-12 08:27
comments: true
categories: 
---
It's been almost a week since I blogged.  Before I set out to blog each day I worked on my workout application.  I haven't followed through on that.  I'll tell you the reason I haven't blogger yet is because every waking minute I am either working on the app itself or trying to finalize our group project for the [Science Fair](http://info.flatironschool.com/science-002-fair-rsvp-1/2/) this Thursday.

Anywho, I have done quite a bit of work on my application since last I blogged.  Last time we spoke, I was trying to implement three javascript functions into my application; calendar, autocomplete, and the ability to create as many exercises and sets as a user wants.  All are done.

I also added bodyweight to a routine and not a user.  I talked to myself about this for roughly an hour and as far as a user is concerned, I realized that a user would be updating their weight during each workout rather than going to a user profile page and updating their weight there.  To me, it made more sense.  People go to the gym, and weight in, so they would be able to input that data when they are inputting the data for their routine.  

For the past few days I have been working with  [Google Graph](https://developers.google.com/chart/) to be able to display the users stats graphically.  I have been living this process.  What you have to do is to take your data and manipulate it in order to feed it to Google a certain way.  That's freaking awesome.  I totally love making five methods for each array Google needs and then doing string manipulation.  In order for me to get what Google wants I have to deliver something like this:

![google](/images/google.png)  

Awesome.  That's a challenge I think I can tackle.  Especially since my wheelhouse are Ruby methods, I knew I was bona hit this shit to Beijing. In this information I need to set the first array to be the titles of what I want:  

![google](/images/firstline.png)

Here is that code running in the rails console.  You give it an instance of the routine class and it gives you the right amount of information.  Here is will write "sets…" as many times as the most sets per the lifts within the instance of the routine:

![console](/images/firstlinerailsc.png)

Next time we chat it up I'll show you more stuff.

