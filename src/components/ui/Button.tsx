import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        primary: 'bg-[#3E1492] text-white hover:bg-[#3E1492]/90',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-10 w-10',
        md: 'h-11 px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-pressed'?: boolean;
  'aria-haspopup'?: boolean;
  'aria-controls'?: string;
  'aria-current'?: boolean;
  'aria-live'?: 'off' | 'polite' | 'assertive';
  'aria-atomic'?: boolean;
  'aria-relevant'?:
    | 'additions'
    | 'additions removals'
    | 'all'
    | 'removals'
    | 'text';
  'aria-autocomplete'?: 'inline' | 'list' | 'both' | 'none';
  'aria-checked'?: boolean | 'mixed';
  'aria-disabled'?: boolean;
  'aria-hidden'?: boolean;
  'aria-invalid'?: boolean | 'grammar' | 'spelling';
  'aria-level'?: number;
  'aria-modal'?: boolean;
  'aria-multiline'?: boolean;
  'aria-multiselectable'?: boolean;
  'aria-orientation'?: 'horizontal' | 'vertical';
  'aria-placeholder'?: string;
  'aria-posinset'?: number;
  'aria-readonly'?: boolean;
  'aria-required'?: boolean;
  'aria-roledescription'?: string;
  'aria-rowcount'?: number;
  'aria-rowindex'?: number;
  'aria-rowspan'?: number;
  'aria-selected'?: boolean;
  'aria-setsize'?: number;
  'aria-sort'?: 'ascending' | 'descending' | 'none' | 'other';
  'aria-valuemax'?: number;
  'aria-valuemin'?: number;
  'aria-valuenow'?: number;
  'aria-valuetext'?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    // Ensure proper accessibility attributes
    const accessibilityProps = {
      role: props.role || (asChild ? undefined : 'button'),
      tabIndex: props.tabIndex ?? 0,
      'aria-label': props['aria-label'],
      'aria-describedby': props['aria-describedby'],
      'aria-expanded': props['aria-expanded'],
      'aria-pressed': props['aria-pressed'],
      'aria-haspopup': props['aria-haspopup'],
      'aria-controls': props['aria-controls'],
      'aria-current': props['aria-current'],
      'aria-live': props['aria-live'],
      'aria-atomic': props['aria-atomic'],
      'aria-relevant': props['aria-relevant'],
      'aria-autocomplete': props['aria-autocomplete'],
      'aria-checked': props['aria-checked'],
      'aria-disabled': props['aria-disabled'],
      'aria-hidden': props['aria-hidden'],
      'aria-invalid': props['aria-invalid'],
      'aria-level': props['aria-level'],
      'aria-modal': props['aria-modal'],
      'aria-multiline': props['aria-multiline'],
      'aria-multiselectable': props['aria-multiselectable'],
      'aria-orientation': props['aria-orientation'],
      'aria-placeholder': props['aria-placeholder'],
      'aria-posinset': props['aria-posinset'],
      'aria-readonly': props['aria-readonly'],
      'aria-required': props['aria-required'],
      'aria-roledescription': props['aria-roledescription'],
      'aria-rowcount': props['aria-rowcount'],
      'aria-rowindex': props['aria-rowindex'],
      'aria-rowspan': props['aria-rowspan'],
      'aria-selected': props['aria-selected'],
      'aria-setsize': props['aria-setsize'],
      'aria-sort': props['aria-sort'],
      'aria-valuemax': props['aria-valuemax'],
      'aria-valuemin': props['aria-valuemin'],
      'aria-valuenow': props['aria-valuenow'],
      'aria-valuetext': props['aria-valuetext'],
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...accessibilityProps}
        {...props}
        onKeyDown={(e) => {
          // Handle keyboard navigation
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (props.onClick) {
              // Create a synthetic mouse event for keyboard activation
              const syntheticEvent = {
                ...e,
                type: 'click',
                button: 0,
                buttons: 1,
              } as unknown as React.MouseEvent<HTMLButtonElement>;
              props.onClick(syntheticEvent);
            }
          }
          props.onKeyDown?.(e);
        }}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
