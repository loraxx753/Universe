import { createBrowserRouter, createHashRouter, RouteObject } from 'react-router-dom'

/**
 * browser: /path. Needs a host that serves index.html for every path.
 * hash: /#/path. Works on static hosts with no fallback.
 */
export type RouterMode = 'browser' | 'hash'

export const routerMode: RouterMode =
  import.meta.env.VITE_ROUTER === 'hash' ? 'hash' : 'browser'

export function createAppRouter(routes: RouteObject[], basename?: string) {
  if (routerMode === 'hash') {
    return createHashRouter(routes)
  }
  return createBrowserRouter(routes, basename ? { basename } : undefined)
}
