import { Sidebar } from "features"

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="relative h-screen min-h-full w-screen min-w-max overflow-hidden font-sen">
      {children}
      <Sidebar />
    </div>
  )
}

export default Layout
