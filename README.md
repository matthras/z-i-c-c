# Matthew Mack's ZenDesk Internship Coding Challenge Submission

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

If this fails, the email also contains a zip file which contains the .env file with the necessary details.

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
* I'd dabbled a bit in React and one of the things on my 'to learn' list was server-side rendering in React, AKA Next.js
* 


## Lessons Learnt