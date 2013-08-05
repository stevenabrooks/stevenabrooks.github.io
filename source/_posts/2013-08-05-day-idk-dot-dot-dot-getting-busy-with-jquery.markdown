---
layout: post
title: "Day IDK...Getting Busy With JQuery"
date: 2013-08-05 08:36
comments: true
categories: 
---
It's been a few days since I have blogged and consequently a few days since I have been able to work on my Workout App.  That will change this week.

Over the weekend when I was able to work on my app I was split between the next step to take.  I had two options: make the form better by adding Jquery to it or start making methods that will be used when a user wants to do some form of analytics on their workouts.  Although to date I prefer the backend and making methods, I decided to take a shot at the Jquery stuff, which I am a total newbie in.

My first stop was visiting the [Jquery UI](http://jqueryui.com/) website.  I totally love this site.  This site makes it so easy for me to do the programmers version of drop and drag for many awesome front end features.  Looking through what they have available, I realized I would like an autocomplete function for the user to choose their exercises that way as apposed to a select list that could get very long.  Also, an autocomplete function would allow me to find_or_create_by an exercise!  Next I would like to have a calendar for the user to say when that workout will or had been completed.  Although active record gives a created_at and updated_at attribute for everything in any table, a user may do a weeks worth of workouts and create the routines and information all in one day.  Active record might consider those created_at very similar times, so when a user goes to look back at their workouts overt time, I want that information to be accurate. I also would love to have a form that lists one exercise at a time and a user chooses how many sets per each exercise, and after they complete the information for one exercise and it's sets they create another exercise and so on.

Out of the three I was able to complete just the calendar.  I do not know why the autocomplete is not working and I am getting a few nice errors with my last query function.

Here is the current code to implement that calendar:

![My params](/images/calendar.png) 

Simple enough.

Here is my current code for the autocomplete:

![My params](/images/autocomplete.png) 

The other code for creating new form fields on the fly is a mess.  Either way I will show the correct code for all of the three things I would like to do in the following days.
