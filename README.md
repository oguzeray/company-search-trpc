
### Instalation

Its a [turborepo](https://turborepo.org/) monorepo, so you can:

```sh
yarn install && yarn dev
```
on the root folder for both backend and frontend applications to start.

## Decisions
### [trpc](https://trpc.io/)
* to enforce type safety between frontend and backend with code compliation.
* I would have chosen [graphql](https://graphql.org/) if my applications were not in monorepo to achive type safety.
* wanted to try and work with this new framework to get my hands dirty.

### [create-react-app](https://create-react-app.dev/)
* to make it simpler even though I think [next.js](https://nextjs.org/) is better solution.

### [tailwindcss](https://tailwindcss.com/)
* fast prototyping.
* freedom.
* small css bundle size.

## Things to impove
* end-to-end tests for backend to ensure endpoints are doing what they supposed to.
* end-to-end tests for frontend to make sure the core funtionality is working.
* better design structure for backend to make it more modularised to add new features and better structure.