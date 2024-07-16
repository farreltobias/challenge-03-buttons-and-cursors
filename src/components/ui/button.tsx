import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'

import { cn } from '@/src/lib/utils'

import { Menu } from '../icons/menu'
import { Spinner } from '../icons/spinner'

export const variantKeys = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
  'link',
] as const

export const stateKeys = [
  'default',
  'hover',
  'focus',
  'disabled',
  'loading',
  'moveable',
] as const

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm leading-6 font-medium ring-offset-background transition-[filter,_colors] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100 uppercase px-6 py-3 gap-1',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:brightness-[1.15]',
        destructive:
          'bg-destructive text-destructive-foreground hover:brightness-90',
        outline:
          'border border-input bg-background hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:brightness-[1.15]',
        ghost: 'hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      } satisfies Record<(typeof variantKeys)[number], string>,
      isHovering: {
        default: 'brightness-[1.15]',
        destructive: 'brightness-90',
        outline: 'text-accent-foreground',
        secondary: 'brightness-[1.15]',
        ghost: 'text-accent-foreground',
        link: 'underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, 'isHovering'> {
  state?: (typeof stateKeys)[number]
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      state = 'default',
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    const isLoading = state === 'loading'
    const isHovering = state === 'hover'
    const isDisabled = state === 'disabled' || props.disabled
    const isFocused = state === 'focus'
    const isMoveable = state === 'moveable'

    const focusClassNames = 'outline-none ring-2 ring-ring ring-offset-2'
    const loadingClassNames =
      'disabled:cursor-wait disabled:opacity-100 disabled:no-underline'
    const movableClassNames = 'cursor-move'

    return (
      <motion.div
        drag={!isDisabled && isMoveable}
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragElastic={0.2}
        className={cn('inline-block', className)}
      >
        <Comp
          className={cn(
            buttonVariants({
              variant,
              className,
              isHovering: isHovering ? variant : null,
            }),
            isFocused && focusClassNames,
            isLoading && loadingClassNames,
            isMoveable && movableClassNames,
          )}
          ref={ref}
          disabled={isDisabled || isLoading}
          {...props}
        >
          {isLoading && <Spinner />}
          {isMoveable && <Menu />}
          {children}
        </Comp>
      </motion.div>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
