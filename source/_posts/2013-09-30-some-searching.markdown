---
layout: post
title: "Rails DataTables"
date: 2013-09-30 14:43
comments: true
categories: 
---
As my last post stated, I was planning on doing some work on searches in rails.  I have done two of them so far today with the first being Data Tables and the second being Ransack.

Datatables is pretty cool.  It's not necessarily just search but it looks like a really cool admin feature.  You can search any of the column, sort any of the columns, and have pagination really easily.  

You are out by adding the gem then once you do that you simply give the table you are trying to sort an ID.

![My params](/images/datatables_view.png)

Then go into the corresponding JS file and add a little snippet:

![My params](/images/datatables_js.png)

And magically this shows up:

![My params](/images/datatables.png)

