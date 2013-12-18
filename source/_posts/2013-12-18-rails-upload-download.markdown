---
layout: post
title: "Upload/Download in Rails"
date: 2013-12-18 09:25
categories:
---
Okay I'm back.  When we last left we had two request for the current app I'm working on.  We nailed the first, now on to the second task.  We are supposed to allow the client to upload files so that people can download them from the app.  Again, no idea before I started.

Well here's something nice, I already am using [CarrierWave](https://github.com/carrierwaveuploader/carrierwave) and feel pretty comfortable with it.  A thing to note is that most people assume this gem is only good for uploading images (likely due to the [Railscast episode](http://railscasts.com/episodes/253-carrierwave-file-uploads)). It's not, actually its great for many files (I am currently upload .mp3, .mp4, .mov, and .wav files).

So I know how to upload the files, but how do you view the file or download it?  

I stumbled upon how to view the file when I was trying to make it download:

![My params](/images/linkview.png)
 
We are simply linking to where the upload attachment is.  Now for download:

![My params](/images/linkdownload.png)

Here we are linking to the attachment url and downloading the file.  Not bad once you know how to do it.