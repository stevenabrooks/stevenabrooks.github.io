---
layout: post
title: "Controller Scope"
date: 2013-08-26 20:22
comments: true
categories: 
---
Well I had two interviews today...and on the second interview I had a questions to which i did not get the full answer to. 

The question was, "why should we abstract methods out of the controller and put them into the model in rails?"  Actually i think the question was worded a little different but that's pretty close.

I answered by claiming that you want to abstract methods into the model because a messy controller would be difficult for another programmer to read your code.  Now that isn't wrong, but it isn't right either.

The full correct answer has to do with scope, and after some help from the friendly interviewer I was able to get the answer.   If you create a method in the controller it's scope is just to that specific controller.  If you make a method in the model not only does its controller and view had access to those methods but so do all the other models.

The scope I was introduced to in the past 12 weeks was variable scope, etc.  So this was a fun problem to work through.

You learn something new everyday...or at least you should try.