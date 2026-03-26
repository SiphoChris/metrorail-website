import { ConvexProvider, ConvexReactClient } from 'convex/react'

const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL
const convex = CONVEX_URL ? new ConvexReactClient(CONVEX_URL) : null

export default function AppConvexProvider({
  children,
}: {
  children: React.ReactNode
}) {
  if (!convex) return <>{children}</>
  return <ConvexProvider client={convex}>{children}</ConvexProvider>
}