import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, waitFor, within } from '@storybook/test'

import { Button, stateKeys, variantKeys } from '@/src/components/ui/button'

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Button variant',
      type: { name: 'string' },
      control: { type: 'select' },
      options: variantKeys,
    },
    state: {
      description: 'Button state',
      type: { name: 'string' },
      control: { type: 'select' },
      options: stateKeys,
    },
    children: {
      description: 'Button contents',
      control: { type: 'text' },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onClick: fn(),
    state: 'default',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Default primary',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))

    await waitFor(() => expect(args.onClick).toHaveBeenCalled())
  },
}

export const Secondary: Story = {
  args: {
    children: 'Default secondary',
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Default tertiary',
    variant: 'ghost',
  },
}

export const Hover: Story = {
  args: {
    children: 'Hover Primary',
    state: 'hover',
  },
}

export const Focus: Story = {
  args: {
    children: 'Focus Primary',
    state: 'focus',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled Primary',
    state: 'disabled',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))

    await waitFor(() => expect(args.onClick).not.toHaveBeenCalled())
  },
}

export const Loading: Story = {
  args: {
    children: 'Loading Primary',
    state: 'loading',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))

    await waitFor(() => expect(args.onClick).not.toHaveBeenCalled())
  },
}

export const Moveable: Story = {
  args: {
    children: 'Moveable Primary',
    state: 'moveable',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button'))

    await waitFor(() => expect(args.onClick).toHaveBeenCalled())
  },
}
