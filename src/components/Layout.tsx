import { ReactNode } from "react"
import { NavBar } from "./NavBar"

type LayoutProps = {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <div className="px-4 lg:px-24 mx-auto py-8 bg-[url('/images/GradientBg.svg')] xl:bg-cover bg-no-repeat">
      <NavBar />
      <main className="py-12">{children}</main>
    </div>
  )
}

export { Layout }