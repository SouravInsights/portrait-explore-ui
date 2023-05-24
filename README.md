# Portrait Front-end Assignment

## Requirements

`yarn >=3.5.1` and `node >=18.16`

## Project Setup

- Clone this repository.
- Run `yarn` to install the dependencies.

```bash
# Start the application in development mode
# Will start at http://localhost:3000 by default
yarn dev

# Create an optimized production build
yarn build

# Start the application in production mode
# The application should be compiled with yarn build first!
yarn start
```
## Notes regarding components & other utilities

Components like `Modal` & `Tab`, `Chip` component etc. Since the boilerplate didn't have any component libraries installed, I had to create them from scratch. It's not a heavy lift but building them took some time. I could have got more time to focus a little more on the UI & other features. But anyway building them was fun & gave me a good understanding of Tailwind.

I found building the `PortfolioCard` component quite exciting to build. I really liked the way how the `Chip` component that holds the `address/ens` or the `Featured`/`StaffPick` badge is placed on the PortfolioCard and also those quick action buttons that appear on hover. Really cool design thinking. Although, I sort of struggled (a little) to find the exact classNames that I needed. What I couldn’t replicate was the animation when the expand button is clicked. Given more time I would try to explore some animation libraries like Motion or React Spring and try achieving the desired animation. 

The `Chip` component works but can be improved. There are some `ensNames` that are very large so we could try to truncate them in a meaningful way and then add a Tooltip that shows the full `ensName` or `address`.

The `gql` folder holds all the logic that we need to interact with the given arweave api. All the reusable logic to pull data resides in the `helpers` directory & the queries to the `queries` directory. I choose to use ApolloClient since it has good react hooks that makes it easy to do stuff. One particular function, I would like to highlight is the [`getPortfliosByKeyword`](https://github.com/SouravInsights/portrait-explore-ui/blob/main/src/gql/helpers/portfolios.ts#L11-L40) function. It exposes the `loadNextPage` function that does all the pagination magic. Since our api uses GraphQL cursor spec, I had to do some iterations to make it work.

## Notes on my approach & challenges
I started with exploring the already installed libraries. Realised the boilerplate had an older version of `wagmi`. Although it was not necessary but I upgraded to the latest since it uses `viem` that works well with TypeScript plus it's much simpler than Ethers.

I started with building all the low level components like `Button`, `Chip`, `Modal`, `Tab`, `NavBar`, `ProjectCard` etc. Building these took most of the time. Devorted some time to understand the structure of the returned data from the api and wrote utility functions using Lodash because it improves the readability and makes it easy to maintain the code. ApolloClient is my go-to library while working with graphql but Relay is a good choice too since it's highly opinionated & enforces best practices by default.

It's not a challenge but faced some difficulties remembering the Tailwind classnames but realised it's great choice if you want to have superior control over your UI.

While adding new packages, the boilerplate didn't recognise them. Did some digging to realise that `node-modules` was excluded in the `tsconfig`. 

The api doesn't support querying portfolios by `owners` even though it has a field. I tried the below query but the api doesn’t return any data. So I had to manually find the `imageId`. 

```
query GetPortfoliosByOwners {
    transactions(
      tags: [
        {
          name: "Protocol",
          values: ["PRTRT001"]
        }
      ]
      owners: ["0xA5d7409f87967838e9D5b24Ef91215b6607D80df"]
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          tags {
            name
            value
          }
        }
      }
    }
  }
  ```

