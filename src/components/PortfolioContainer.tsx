import { ReactNode } from "react";

type PortfolioContainerProps = {
  children: ReactNode
}

const PortfolioContainer = (props: PortfolioContainerProps) => {
  const { children } = props
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 place-content-between gap-10 py-8`}>
      {children}
    </div>
  )
}

export { PortfolioContainer }