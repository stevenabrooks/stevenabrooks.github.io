---
layout: post
title: "Day 7...Took Four Models Into One Model"
date: 2013-07-30 13:55
comments: true
categories: 
---
After over a week of tinkering with my form for my workout app, spending hours with TA's, and even looking to the [Stack Overflow](http://stackoverflow.com/) community, I have finally figured out my form.  I now know how to create a form where four models are being used, create all of their associations in the controller, and display them properly in the view.  That's Rails ladies and gentlemen.  

Here is my form (which will be changed with some jquery soon):  

![My params](/images/forminter.png)

The trick here was that I wanted many instances of "lifts" in an array, so creating the variable "n" and interpolating that variable into the form fields basically set "n" as a counter.

Then this is how I tied everything together in the controller (which will probably be cleaned up as some point):

![My params](/images/workoutcontroller.png)

Not bad at all.

