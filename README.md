# InsideNews App

This is a [Next.js](https://nextjs.org/), [Material Ui](https://mui.com/material-ui/),[Redux Toolkit][https://redux-toolkit.js.org/] news fetching app. Version 1 is based on Next App 14 directory with [react-intersection-observer](https://react-intersection-observer.vercel.app/?path=/docs/intro--docs) and uses [Framer motion](https://www.framer.com/motion/) to add animation in displaying card.

Check out the documentation below to get started.

## Examples V1

<img width="1800" alt="Screenshot 2023-12-31 at 4 03 17 PM" src="https://github.com/Shabab007/news-app/assets/90137571/e4f65066-b838-44d1-b93f-786e376273ab">

## Features

- Next.js with Typescript
- [Material Ui](https://mui.com/material-ui/) to diplay the ui components
- Easy styling customization with Css and primary color attribute
- [Redux Toolkit][https://redux-toolkit.js.org/] for manging the state
- Card animation render with [Framer motion](https://www.framer.com/motion/)
- Infinite scroll functionlity with [react-intersection-observer](https://react-intersection-observer.vercel.app/?path=/docs/intro--docs) package
- SearchBar with debounce effiecient searching
- Categorywise and searchwise data fetching
- Category tab to choose between news category
- Read later section to read any news later and remove functionlaity
- Fully responsive

## Quick Start Guide

1. Clone the repo

```
git clone https://github.com/Shabab007/news-app.git

cd news-app
```

2. Install Nodejs atlease 18.0.x or above and npm to run the project here is the [link.](https://nodejs.org/en)

3. Create an account in (news api)[https://newsapi.org/] to get api key or you can use this key `9835b92ee42f465b887f1b62da3fbb57`. Remeber there is limit to call this free api. You need to change the api key if the limit exceeds to continue using the app
4. create .env.local file in root directory and adde two variables

```
NEXT_PUBLIC_API_URL="https://newsapi.org/v2/"
NEXT_PUBLIC_API_KEY="9835b92ee42f465b887f1b62da3fbb57" //or you own api key created on new api
```

## Installation

```bash
nmp i
```

## Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit the layout in `app` or content in `data`. With live reloading, the pages auto-updates as you edit them.
x

## Deploy

**Vercel**  
The easiest way to deploy the template is to deploy on [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Netlify**
[Netlify](https://www.netlify.com/)’s Next.js runtime configures enables key Next.js functionality on your website without the need for additional configurations. Netlify generates serverless functions that will handle Next.js functionalities such as server-side rendered (SSR) pages, incremental static regeneration (ISR), `next/images`, etc.

See [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/#next-js-runtime) for suggested configuration values and more details.

**Static hosting services / GitHub Pages / S3 / Firebase etc.**

1. Add `output: 'export'` in `next.config.js`. See [static exports documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#configuration) for more information.
2. Comment out `headers()` from `next.config.js`.
3. Add `unoptimized: true` to the `images` key in `next.config.js`:

   Alternatively, to continue using `next/image`, you can use an alternative image optimization provider such as Imgix, Cloudinary or Akamai. See [image optimization documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#image-optimization) for more details.

4. Remove `api` folder and components which call the server-side function such as the Newsletter component. Not technically required and the site will build successfully, but the APIs cannot be used as they are server-side functions.
5. Run `npm run build`. The generated static content is in the `out` folder.
6. Deploy the `out` folder to your hosting service of choice or run `npx serve out` to view the website locally.

**Note**: Deploying on Github pages require addition modifications to the base path. Please refer to the FAQ for more information.
