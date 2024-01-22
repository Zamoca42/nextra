import cn from 'clsx'
import { Table, Td, Th, Tr } from 'nextra/components'
import { ArrowRightIcon } from 'nextra/icons'
import type { UseMDXComponents } from 'nextra/mdx'
import { DEFAULT_COMPONENTS } from 'nextra/mdx'
import { Details } from './details'

/* eslint sort-keys: error */
export const useMDXComponents: UseMDXComponents = components => {
  return {
    ...DEFAULT_COMPONENTS,
    details: Details,
    h1: props => (
      <h1
        className="_mt-2 _text-4xl _font-bold _tracking-tight _text-slate-900 dark:_text-slate-100"
        {...props}
      />
    ),
    p: props => <p className="_mt-6 _leading-7 first:_mt-0" {...props} />,
    summary: ({ children, ...props }) => (
      <summary
        className={cn(
          '_flex _items-center _cursor-pointer _p-1 _transition-colors hover:_bg-gray-100 dark:hover:_bg-neutral-800',
          // display: flex removes whitespace when `<summary />` contains text with other elements, like `foo <strong>bar</strong>`
          '_whitespace-pre-wrap',
          '_select-none'
        )}
        {...props}
      >
        {children}
        <ArrowRightIcon
          className={cn(
            '_order-first', // if prettier formats `summary` it will have unexpected margin-top
            '_size-4 _shrink-0 _mx-1.5',
            'rtl:_rotate-180 [[data-expanded]>summary>&]:_rotate-90 _transition'
          )}
          pathClassName="_stroke-[3px]"
        />
      </summary>
    ),
    table: props => (
      <Table className="nextra-scrollbar _mt-6 _p-0 first:_mt-0" {...props} />
    ),
    td: Td,
    th: Th,
    tr: Tr,
    ...components
  }
}
