// import {
//   HeadContent,
//   Scripts,
//   createRootRouteWithContext,
// } from '@tanstack/react-router'
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanStackDevtools } from '@tanstack/react-devtools'

// import Header from '../components/Header'

// import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

// import ConvexProvider from '../integrations/convex/provider'

// import appCss from '../styles.css?url'

// import type { QueryClient } from '@tanstack/react-query'
// import { Navigation } from '@/components/Navigation'
// import Footer from '@/components/Footer'

// interface MyRouterContext {
//   queryClient: QueryClient
// }

// export const Route = createRootRouteWithContext<MyRouterContext>()({
//   head: () => ({
//     meta: [
//       {
//         charSet: 'utf-8',
//       },
//       {
//         name: 'viewport',
//         content: 'width=device-width, initial-scale=1',
//       },
//       { title: 'Metrorail Western Cape' },
//     ],
//     links: [
//       {
//         rel: 'stylesheet',
//         href: appCss,
//       },
//     ],
//   }),

//   shellComponent: RootDocument,
//   notFoundComponent: () => (
//     <div className="p-6 text-center">
//       <h1 className="text-3xl font-bold">404</h1>
//       <p className="mt-2">Page not found</p>
//     </div>
//   ),
// })

// function RootDocument({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className='light'>
//       <head>
//         <HeadContent />
//       </head>
//       <body>
//         <ConvexProvider>
//           <Header className="z-100" />
//           <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
//             <Navigation />
//             <main className="flex-1">{children}</main>
//             <Footer />
//           </div>
//           <TanStackDevtools
//             config={{ position: 'bottom-right' }}
//             plugins={[
//               {
//                 name: 'Tanstack Router',
//                 render: <TanStackRouterDevtoolsPanel />,
//               },
//               TanStackQueryDevtools,
//             ]}
//           />
//         </ConvexProvider>
//         <Scripts />
//       </body>
//     </html>
//   )
// }

import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'
import ConvexProvider from '../integrations/convex/provider'
import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Metrorail Western Cape' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),

  shellComponent: RootDocument,
  component: RootProviders,
  notFoundComponent: () => (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2">Page not found</p>
    </div>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootProviders() {
  return (
    <ConvexProvider>
      <Header className="z-100" />
      <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <TanStackDevtools
        config={{ position: 'bottom-right' }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          TanStackQueryDevtools,
        ]}
      />
    </ConvexProvider>
  )
}
