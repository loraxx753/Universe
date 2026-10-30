import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  /** Optional site header / brand chrome. Consumers own branding. */
  header?: ReactNode
  /** Optional nav links or menus */
  nav?: ReactNode
}

/**
 * Brand-agnostic shell: slots for header/nav, children in main.
 */
const Layout = ({ children, header, nav }: LayoutProps) => {
  return (
    <div className="flex h-full min-h-full flex-col">
      {(header || nav) && (
        <header className="w-full">
          {header}
          {nav ? <nav>{nav}</nav> : null}
        </header>
      )}
      <main className="min-h-0 flex-1">{children}</main>
    </div>
  )
}

export default Layout
