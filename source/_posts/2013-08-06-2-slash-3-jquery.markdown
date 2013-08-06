---
layout: post
title: "2/3 Jquery"
date: 2013-08-06 08:30
comments: true
categories: 
---
So I'm 2/3 of the way there with my javascript/jquery wants.  Yesterday I mentioned that I wanted to have a calendar to properly keep track of workout days rather than active record's created_at, I wanted to autocomplete the exercise name so that in the controller/model I can find_or_create_by for an exercise rather than a drop down, and I wanted to have a form that started with one exercise and a user can add as many sets to that as they choose as well as more exercises with sets.

As I'm sure you've assumed by now I completed the first two but not the last.  Here is functioning code for the calendar:

![My params](/images/calendar.png) 

Here is the code I posted yesterday which was an attempt at autocomplete which didn't work…can you spot the errors?

![My params](/images/autocomplete.png) 

From what I understand, or at least from the changes I made along with a JS Ninja (Jon Grover), I had a few semicolon issues as well as placing the array after the function.  I don't know for sure but it felt like I had to create the array for the autocomplete before that array is called in the function.  Here is the javascript code that allows both the calendar and the autocomplete to function properly:

![My params](/images/working-js.png)  

The issue I have been having on creating a new exercise is that javascript, or at least my javascript, does like the idea of appending and ERB tag.  I'll get to the bottom of it though.  I'd like to save the before and after code for the same post as I feel it would be super useful for a lot of people as it's own post.  Cool beans.

Also, over the weekend I made a ton of methods to find out certain details about my workouts, such as best sets, most weight used, % increase in total weight over time, etc.  Really pumped about those and after this form is finished up I am going to move on to different layouts so that I can graphically show the cool data I came up with.  One thing at a time though.