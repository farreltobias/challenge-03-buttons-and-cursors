import type { Preview } from '@storybook/react'
import '../src/global.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'primary',
      values: [
        {
          name: 'primary',
          value: 'hsl(var(--background))',
        },
        {
          name: 'secondary',
          value: 'hsl(var(--background-secondary))',
        },
        {
          name: 'tertiary',
          value: 'hsl(var(--background-tertiary))',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
