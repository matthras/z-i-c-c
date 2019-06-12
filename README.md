# Matthew Mack's ZenDesk Internship Coding Challenge Submission

Confirmed working and developed on Windows 10 with yarn v1.16 and Node v10.16.

## Instructions for Setup & Deployment

```bash
git clone https://github.com/matthras/z-i-c-c
cd z-i-c-c
yarn
```

In the folder itself, create a .env file with the following parameters:

```env
API_URL=
USERNAME=
PASSWORD=
```

The details needed for the .env file are supplied in the email sent with this application. 

If this fails, the email also contains an attached .env file with the necessary details.

**Deployment**

```bash
yarn run build
yarn run start
```

Visit localhost:3000 in your browser to view the site.

### Running Dev Version

```bash
yarn
yarn dev
```

### Run Tests

```bash
yarn test
```

## Key Decisions

**Next.js**

* I didn't want to do a Node + Express setup mainly because I still don't have a solid conceptual model of it all in my head, and in my limited time it felt most suitable to find a prepackaged full-stack solution.
* I'd dabbled a bit in React and one of the things on my 'to learn' list was server-side rendering in React, AKA Next.js.
* One drawback would be that the boilerplate would naturally have too much extra stuff. I definitely opted for speed and convenience in choosing Next.js.

**Jest for testing** - since I'm relatively new to testing and Jest is the default library for testing React components, decided to go with it.

**.env files** - This is the only method I'm aware of that sufficiently 'hides' important details such as email + password, since Base64 can be reversed to obtain the original details.

**Pagination (not implemented)** - the (admittedly overzealous) plan was to e.g. request 100 tickets from the server, but still show 25 per page. The reasoning behind this is that since I don't know how viable it is to keep requesting information from the server, having a parameter for requesting # of tickets from server, and a parameter for # of tickets per page would allow one to adjust both the viewing (e.g. if 25 is too many for a mobile device)

Assume all other weird decisions not mentioned here were either due to lack of experience/time!

## Things That Can Be Improved/Implemented But Ran Out Of Time

### Tests

* Snapshot tests were pretty straightforward to implement but I'm still struggling with understanding their relevance
* I struggled with 'happy path tests', or basically testing if the correct components were rendered after certain HTTP responses. There is a clear mismatch between how I think the code runs and how it actually ran. I've left the tests as written, but they will obviously fail when running `yarn test`.

### Components

The initial plan was to have App/Index -> TicketList -> Ticket + Pagination, but lack of time meant a shoddy implementation of just the Ticket component in the way I envisioned. What I would do next is refactor it such that I pass the whole list of tickets to a TicketList component, which would then render each ticket separately in a Ticket component.

The only problem I foresaw with having a Pagination component is that when one clicks far enough into the page numbers, I'd have to send another request to the API to fetch the next set. This meant writing a callback function from App/Index then passing it through TicketList which, from past experience, is somewhat annoying. I believe this problem _could_ be solved with Redux, but I haven't even touched Redux.

This feels like something that can only really come with experience and exploring more established codebases.

## Blog!

I opted to blog my raw thoughts throughout this coding challenge which can be read over at BLOG.md. I usually would otherwise scribble down thoughts and my to-do lists in a bullet journal.