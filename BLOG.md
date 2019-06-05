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