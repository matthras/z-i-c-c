# Zendesk Internship Coding Challenge Blog

Hi! I'm purposely writing this to document my thoughts as I attempt this coding challenge, which should hopefully give you a bit more insight into my current skill-set, how I think and how I approached the problem.

## Monday 3rd June

Read the briefing. First impressions: 

* Looks doable, but a lot to learn along the way.
* Probably best to start with a boilerplate, just need to pick out what framework I want to run with. (P.S. I also learn best from reverse-engineering and modifying examples)
* Gah, I'm nervous. I didn't do so well on the last coding challenge because it was in Ruby (which I don't know) so I had to learn new syntax on top of everything else. 

### Boilerplate Decision: Next.js with Jest for testing 

Source: https://github.com/zeit/next.js/tree/master/examples/with-jest-react-testing-library

#### Why?

* Already know some basic React, but am new to Next.js and always been interested in trying it out.
* Jest is the default React testing library, and since I'm familiar with testing concepts but have rarely actually attempted actually writing tests, it seems best to stick with the standard. Really not looking forward to figuring out the syntax/documentation, though!
* One of the 'Gotchas' is to not use Javascript in the browser, so to me it makes sense to opt for a server-side rendering solution, do everything server side, and not worry about doing *anything* in the browser. Lazy, I know.

### Planning My Goals

Naturally I want to break down tackling this app into a series of steps. I don't know which order I'll do it in just yet but here's a rough outline so far.

* Download boilerplate, make sure it's working. Comment any sections I'm not familiar with.
* Create ZenDesk account as per the instructions.
* Have a look at the API and figure out what the data is supposed to look like.
* Ensure that I can make a GET request to the API from this app.
* Ensure that I can manipulate data gotten from API and get it to display in a simple format.
* Integrate Material/Semantic UI

### Testing Approach

Since I'm still relatively new to testing, but know the concepts and the whys, what I'll probably do is that after each step/function/module, what I'll probably do is write out what I want to test (e.g. 'API request works', 'API Error Message is correct', etc.), but leave the actual coding for later. Again, bad prior experience with Ruby syntax.

### What did I achieve today?

* Boilerplate downloaded and working as intended.
* Github repo set up and put on private (so that random people aren't googling my repo and stealing my code). Intend to set to public after due date.
* Read read read read:
  * Briefing (obviously!)
  * ZenDesk API, authentication, etc. - it all makes sense so far. Props for solid documentation!
  * Snapshot testing in Jest (which I now get in concept, but looks like a pain to implement)

## Tuesday 4th June

In terms of work, I usually keep a bullet journal where I write down a generous list (in the sense that I usually never end up ticking everything off) of what I want to achieve today. So today I have two main goals with respect to this coding challenge:

1. Make ZenDesk account and ensure it's all set up to pull from the API as needed.
2. Test API request using cURL

Extras include:

* Editing README.me with instructions - do this in a separate branch to practice creating a branch for every feature/fix, and then merging back into master.
* Once the API request is working in cURL, see if I can achieve the same in Next.JS and get it to display in the browser.

### Making ZenDesk Account & Uploading Tickets Data

It looks like the cURL command given in the 'Gettingstartedwithcodingchallenge' PDF is different for Windows 10 Powershell 5.

Ended up using cmd, managed to get through but got stuck with a 'Couldn't be authenticated error.' Gave up searching for answers and went on the Slack, found out that the API had to be enabled from the Admin panel (which makes sense, given that I've had to do it for other things!).

Had a 'Missing Parameters' error then it turned out I hadn't properly copy/pasted the tickets.json content. Good god I'm an idiot.

Oh, what's this?

```
{"job_status":{"id":"30d7f4a788345cac8e6510f5cf438df1","url":"https://matthras.zendesk.com/api/v2/job_statuses/30d7f4a788345cac8e6510f5cf438df1.json","total":null,"progress":null,"status":"queued","message":null,"results":null}}* Connection #0 to host matthras.zendesk.com left intact
```

Refreshed tickets page, IT"S ALL THERE!!!! YAY!!!!!!

This took me way too long to do (I think it was about an hour). I try to stick to the principle that if I'm stuck on something for more than 15 minutes then I should ask someone for help, but I do have a tendency to be fully absorbed into a problem and lose track of time (typical mathematician habits).

### Testing API Requests

So I'm writing this after a frustrating 2 hours in afternoon + evening where I successfully tested the API request with cURL to make sure it was working, but wasted so much time in trying to figure out why my fetch request wasn't working. 

The main reason was that I had incorrectly passed the Basic Auth details as an option, instead of a suboption under the headers option.

```
const res = await fetch('https://matthras.zendesk.com/api/v2/tickets.json', {
    "Authorization": "Basic bWF0dGhldy55LnAubWFja0BnbWFpbC5jb206eldjYWV4cWRa"
  });
```

After a LOT of wasted effort in trying to test the fetch request independently (e.g. running various functions in my browser console then being blocked by CORS; writing and running a standalone JS file in Node; ), I then discovered my mistake after browsing several code snippets all over the internet and noticing the syntax was slightly different.

```
const res = await fetch('https://matthras.zendesk.com/api/v2/tickets.json', {
    "method": "GET",
    headers: {
      "Authorization": "Basic bWF0dGhldy55LnAubWFja0BnbWFpbC5jb206eldjYWV4cWRa"
    }
  });
```

So now it's working (in the sense that I get a status: 200 back), and all I need to do now is properly separate each of the details into variables. API url as one, options as another, and split username/email + password into separate variables as well and encode them using atob. However I'm still having issues with the  response in that I can't get the data to display as text in the browser, but I'm leaving that one for later.

I was going to ask this in the Slack forum, but realised it might be giving a 'gotcha' away. Basically for security purposes, I don't want to put /my/ email+password for my Zendesk API because that's a security issue! What I'll probably do is set up a separate environments variables file, but if I don't figure that out, I'll leave blank variables for the assessor to enter their API details in.

...this also means I need to make sure that I don't accidentally include my email/password or even the Base64 hash (since it's reversible) in my commits. This is going to be fiddly.

### Extra: Error Handling

I'm not familiar with how many different HTTP status codes there are, but I've found this: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Right now I don't know which ones are important and need to be handled differently, but that's for another day.

It's 11pm, I've spent 3 hours on this today. Signing off!

## Wednesday 5th June

I've only just started writing this at 6pm where the only things I've done so far is actually commit yesterday's changes (and trying to reverse a commit where I accidentally added too many files!). It's been a *very* lazy day and I'm behind on actual work, so I'm just going to focus on simple things tonight.

* Create a branch and start a working draft rewrite of README.md (from the default) with instructions on installation, environment variables, awareness of this blog, how to run this app in production, and whatever else I can think of.
* Create my .env file, add it to .gitignore then refactor index.js

### Accidentally stored my Base64 hash in a commit, whoops!

Early in the commit history you'll notice that I tried to reverse a commit. This is because I had saved the Base64 hash of the email + password combo for accessing my Zendesk API, which is a huge no no since a Base64 hash is reversible!

Optimally, what I should do is reverse the commits and completely remove all trace of it, but I'll admit I'm not too keen on digging into git details and potentially messing something up. The easier and lazier solution is to change my password on my Zendesk account. This is mainly because my API url is pretty obvious (since my internet moniker is 'matthras'), and the email is one that I also use fairly frequently, so it leaves it down to my password to be the sole security measure against any illegial logins.

So the lesson learnt is that when building a fullstack app I should always start by creating a .env file and populating it with details that would otherwise change if the app was moved elsewhere. Whew!

## Thursday 6th June

I'm only writing this now at 11pm because I've been busy all day :(

On Wednesday I created the .env file and added it to .gitignore. That's all I've done. Unlikely I'll be able to work on this tonight, which I find frustrating - the nature of my work at the moment means that sometimes I have extremely busy periods where I can't carve out time for regular coding, whereas I definitely function best if I do a little bit of regular coding every day.

## Tuesday 11th June

Morning: Goodness me, a 4-5 day break. Basically, a glut of work over the weekend :(

Evening: Alright I'm writing this as I go. Starting 10pm.

1. I want to make sure that my data displays on the front-end in dev mode, which means writing my React components, which means I should set up my components folder and write a Ticket component. I'm a bit rusty on writing React stuff, so fingers crossed that it works!
2. 

-- and I did some stuff and went to bed at 11pm.

## Wednesday 12th June

**Morning (6am-9am):** I have to head to work, so I'm rounding some things off, writing down ideas + template files (since it's unlikely that I'll be able to finish implementing all the requirements), committing them and then pushing them up so that I can pull from my repo on my laptop at work. Since I haven't worked on this project on my laptop just yet, this is a good opportunity for me to update my installation/deployment instructions on a clean system - the only thing I'm worried about is that both systems are Windows systems and I have no clue whether Macs will be any different, so what I'll probably do is update my Yarn + Node versions to the latest, and then document the version numbers in the README.

In terms of development:

* I've managed to get my environment variables working. The current problem now is getting the data to display properly on the front end. Using console.log I've confirmed that my API request is working, so now it's just figuring out the API parameters via the documentation, and then making sure I'm writing the right code to export them to display within components.
* I intend to write a TicketList and a Ticket component. The TicketList will contain each Ticket component, but also the pagination at the bottom (which I might also write as a separate component, but haven't decided yet).
* Pagination: From reading the API documentation it looks flexible enough to implement my idea: have 2 parameters (# of tickets in a single page, # of tickets requested from the server) so that both of them can be tweaked for flexibility (it'll be like, request 100 tickets from server, display 25 per page, and then request the next batch of 100 as needed). I can also use the 'count' to determine the number of pages needed by dividing it by '# of tickets in a single page'.
* Test ideas have been written, but since I'm new to snapshot testing (only have written unit tests) I'm still feeling a bit daunted. Hopefully I'll have enough energy tonight to work on them!

I think that covers most of it. Off to work!

*During work breaks throughout the day:*

* Successfully installed and running on laptop after updating Node + yarn. Tested with: yarn v1.16, Node v10.16
* Managed to get data to render on the front end as a list of ticket subjects. Turns out I just wasn't accessing the correct object properties. Now I can start refactoring into components!
* Component planning is hard.
