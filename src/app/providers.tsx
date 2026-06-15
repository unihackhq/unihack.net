'use client'

import { ProgressProvider } from '@bprogress/next/app'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      color="#ff0"
      height="4px"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  )
}
