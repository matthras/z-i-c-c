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