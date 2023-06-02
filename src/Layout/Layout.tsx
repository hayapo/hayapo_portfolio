import Sidebar from "features/Sidebar/Sidebar"

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <main>
      <div className="relative h-screen w-screen overflow-hidden">
        {children}
        <Sidebar />
      </div>
    </main>
  )
}

export default Layout
