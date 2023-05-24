# Portrait Front-end Assignment Boilerplate

This boilerplate is configured with:

- Typescript
- Linting with ESLint
- Formatting with Prettier
- Storybook
- Import aliases

Web3 packages:

- At Portrait we work with [Ethers](https://docs.ethers.org/v5/), [Wagmi](https://wagmi.sh/) and [RainbowKit](https://www.rainbowkit.com/). They are pre-installed, but not configured.

## Requirements

`yarn >=3.5.1` and `node >=18.16`

## Getting Started

- Clone this repository.
- Copy `.env.example` to `.env` and fill in the variables.
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

# Run Storybook
yarn storybook
```

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Development

#### Import aliases

`"@/*"` is mapped to `"./src/*"` (see `tsconfig.json`)

This means you can important files like this:  
`import { Example } from '@/components/Example'`

This works for Storybook as well.

#### Styling

This project uses [TailwindCSS](https://tailwindcss.com/docs) with PostCSS exclusively for styling. Do not use any other styling libraries or frameworks.

Classnames should be written directly in the React component file and/or in a separate [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) (`*.module.css`) file, if a component needs to be styled in a specific way not possible with TailwindCSS.

Try to use TailwindCSS whenever possible. You may configure the `tailwind.config.js` file to your liking.

**Some helpful resources to get started with Tailwind:**

- [Tailwind: Editor Setup](https://tailwindcss.com/docs/editor-setup)
- [Tailwind: Hover, Focus, and Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Tailwind: Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind: Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles)

**Additional packages you may want to use:**

- [clsx](https://www.npmjs.com/package/clsx) _(pre-installed)_  
_A tiny (228B) utility for constructing className strings conditionally._
- [tailwind-variants](https://www.npmjs.com/package/tailwind-variants)  
_The power of Tailwind combined with a first-class variant API._


##### Example inside a React component:

```js
// Example.tsx
import clsx from 'clsx'

function Example({ variant, size, isDisabled, isRounded, children }) {
  return (
    <div
      className={clsx(
        'relative flex items-center border font-medium text-white shadow-sm outline-none transition hover:shadow-md',
        {
          default:
            'border-gray-400 bg-gray-600 hover:border-gray-300 hover:bg-gray-500 focus-visible:border-gray-300',
          'default-outline':
            'border-gray-400 bg-transparent hover:border-gray-300 focus-visible:border-gray-300'
        }[variant],
        {
          xs: 'h-8 px-2.5 text-sm',
          sm: 'h-9 gap-2 px-4 text-sm',
          md: 'h-11 gap-2.5 px-5'
        }[size],
        {
          'cursor-not-allowed opacity-50': isDisabled
        },
        isRounded ? 'rounded-full' : 'rounded-md',
        className
      )}
    >
      {children}
    </div>
  )
}

export { Example }
```

### Linting and type checking

```bash
# Run ESLint in the src directory for all js, jsx, ts, tsx files
# This will output the result in your console
yarn lint

# Run a compile based on a backwards look through the
# fs for a tsconfig.json (emitting file disabled)
yarn type-check
```
