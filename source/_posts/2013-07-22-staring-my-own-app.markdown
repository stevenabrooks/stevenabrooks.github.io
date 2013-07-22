---
layout: post
title: "Staring My Own App"
date: 2013-07-22 10:32
comments: true
categories: 
---
For me, today is the day I have become a programmer.  Actually, it was pretty exciting and I even got a little emotional about it.  Yesterday(Sunday), I began creating my own application, and very much enjoyed making it on my own, solving some bugs on my own (or at least the ones I was able to understand). It was very exiting for someone who has only been programming for 7 weeks.  I have come very far and would like to challenge myself in creating my own app.

My friends are very into fitness as well as I am.  We compete in Crossfit events and I wanted to create an app where myself and my friends can input the data from each of their workouts, on top of just having a log, and being able to see their and their friends' progress visually with visual representations to track progress.

I would like to have a post each day, or at least try to have a post each day, or now that I am thinking about it I should make a post with each new thing I learn while building.  Actually I think I'll do the latter.

I first built three models, a routine model, and exercise model, and a lift model which is a joins between routine and exercise.  The first issue I came into was the form in which I am attempting to allow the user to create a workout along with exercises for that specific routine.  One of the first issue I found is that each time a user makes a routine, the corresponding exercises are being saved into the database as new exercises.  So if I have a "squat" in one workout and create a "squat" in another, there becomes two instances of "squat" in the database.  I decided to push that back because my form is already a mess.

In watching [Nested Models](http://railscasts.com/episodes/196-nested-model-form-part-1) on [Railscasts](http://railscasts.com), the author talks about nesting models within the form.  In my routine form, I wrote "accepted_nested_attributes_for :exercises".  Now while this will allow each exercises to be nested within a routine, and with the knowledge I have in 7 weeks, I cannot get access to each exercise in the instance of the routine.  

I realized my form is messed up.  I need to do something like "f.label 'routine[][exercise[name]]" or something in the form and then in the controller loop through that array of exercises and << or shovel them into that instance of a routine such as "@routine.exercises << whatever_the_params_are".

For me thats a big breakthrough to be able to get this on my own.  It's exciting.  Being able to get the data in a way you want it to is beyond important in Rails and I feel I am on my way! 