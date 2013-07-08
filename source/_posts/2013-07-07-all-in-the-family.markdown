---
layout: post
title: "All in the Family"
date: 2013-07-07 21:20
comments: true
categories: 
---
After a fantastic weekend at the beach I was talking to my younger brother David over a nice Paleo dinner.  David is a CS major and on the side develops iPhone applications.  He has made a few apps with his most popular being ["Never Have I Ever"](https://itunes.apple.com/us/app/never-have-i-ever/id401767832?mt=8) and is currently creating a location based app this summer.  

![David code 1](/images/nhie1.png) ![David code 1](/images/nhie2.png)




I was explaining to him why I believe native was garbage and so we were talking about some of the things he enjoyed and didn't enjoy as far as iPhone development.  We talked for a while and I remember he said a few interesting things about Objective C and specifically native applications in general.  Because I paid for dinner he was kind enough to answer a few questions:

Steven: What are some of the difficulties in using objective C?

David: A major complaint that a lot of programmers have relating to Objective-C is that a Mac is required in order to actually write and compile your Objective-C code.  It is unfortunate that Apple does not allow the development of Objective-C on a Windows based platform.  This denial of Windows based developers means that if someone wants to develop for the iPhone/iPad/Mac, you must first pay Apple to get a Mac and then pay Apple $99 yearly to be part of their developer program.  In terms of actual code writing, I do wish that it was easier to test your app on multiple devices.  In order to test a singular app on multiple iPhones, you have to collect the device id and create a Provisioning Profile, which is basically a certificate that allows the app to run, and distribute that profile to every device you want to use.  This makes it a big challenge if I want to, for example, show my brothers my latest app and let them fool around with it and provide feedback.

Steven: What do you think could be easier in developing with objective C?

David: One thing that I would like to be easier about Objective-C is how it uses Frameworks.  Frameworks in Objective-C are like libraries in C or like packages in Java that you must import in order to use their information.  It is annoying to have to figure out what Framework you need to include in order to use a certain piece of code.  It would be a lot easier if all the Frameworks that have been created and are available to you to use and just automatically imported by the compiler when needed.  All the Frameworks we use are already included in iOS or OS X, so why can't the device choose the needed Frameworks instead of me telling it to?

Steven: Do you feel objective C will be around in three years?

David: Yes I believe that Objective-C will still be around and heavily used in three years time.  We are currently in an evolving technological world which has transitioned to computers the size of rooms to handheld computers and smartphones.  I must point out that, Objective-C has not created solely for the iPhone.  Objective-C was created by Apple for the Mac and Mac OS X.  Once the iPhone came around, it was then transformed to work with iOS as well.  Therefore, in addition to the ever growing mobile market, the fact that Objective-C is used to build applications for the Mac means that it will endure through the years.

Steven: Why did you choose to learn objective C over web application languages?

David: When I was a Sophomore in high school, I taught myself C++ and a little bit of Java.  I had no previous knowledge or involvement with HTML or web development and decided to focus on software engineering.  Then, the invention of the iPhone came around and I was hooked.  I saw it as this awesome new product that everyone would be talking about and so turned my attention to mobile development.  It is very interesting to point out that, I am a rising Junior at Loyola University Maryland, aiming for a BS of Computer Science and a minor in Mathematics, and yet, I have never once touched HTML.  In fact, HTML is not even in the CS curriculum because our faculty believe that it is such a basic and easy language that they do not even bother teaching it to us.  Instead, we are to learn it ourselves outside of the classroom if desired.

Pretty interesting stuff.  I definitely learned quite a bit from talking to him.  We are both programmers and learning completely different things.  I was telling him as much as I could about Active Record because I am just obsessed with the type of magic it provides to me and I asked him to show me his code for importing data into his database, saving it, and displaying it.  This is what I got in return:  

![David code 1](/images/davidcode1.png)

![David code 2](/images/davidcode2.png)

![David code 3](/images/davidcode3.png)

![David code 4](/images/davidcode4.png)

![David code 5](/images/davidcode5.png)

So somewhere in here he is dating a users location and storing it into a SQL database, then saving it, then making it available.  Apparently in Objective C you have to make methods on methods on methods for a lot of things that with Active Record you can simply run a migrate.

Thanks David for letting me interview you.

![David code 1](/images/meanddavid.jpg)