import React from 'react'
import { Preview } from '@storybook/react'

import '../src/styles/main.css'

const screens = {
  xs: {
    width: '360px',
    height: '640px'
  },
  sm: {
    width: '640px',
    height: '960px'
  },
  md: {
    width: '768px',
    height: '1024px'
  },
  lg: {
    width: '1024px',
    height: '768px'
  },
  xl: {
    width: '1280px',
    height: '720px'
  }
}

const viewports = Object.entries(screens).reduce((acc, [name, value]) => {
  acc[name] = {
    name,
    styles: {
      width: value.width,
      height: value.height
    }
  }

  return acc
}, {})

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <Story />
      )
    }
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#151515' },
        { name: 'light', value: '#fafafa' }
      ]
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports
    }
  }
}

export default preview
