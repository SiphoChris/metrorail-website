import { ConvexProvider } from 'convex/react'
import { ConvexQueryClient } from '@convex-dev/react-query'

const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL

const convexQueryClient =
  typeof window !== 'undefined' && CONVEX_URL
    ? new ConvexQueryClient(CONVEX_URL)
    : null

export default function AppConvexProvider({
  children,
}: {
  children: React.ReactNode
}) {
  if (!convexQueryClient) return <>{children}</>

  return (
    <ConvexProvider client={convexQueryClient.convexClient}>
      {children}
    </ConvexProvider>
  )
}


// import { ConvexProvider, ConvexReactClient } from 'convex/react'

// const CONVEX_URL = import.meta.env.VITE_CONVEX_URL

// const convex = CONVEX_URL ? new ConvexReactClient(CONVEX_URL) : null

// export default function AppConvexProvider({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   if (!convex) return <>{children}</>

//   return <ConvexProvider client={convex}>{children}</ConvexProvider>
// }
