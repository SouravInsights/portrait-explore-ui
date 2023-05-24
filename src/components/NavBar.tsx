import { Button } from "./Buttons"
import { SearchInput  } from "./SearchInput"

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-row flex-wrap items-center justify-between mx-auto">
        <img src="/images/Symbol.png" className="h-8 mr-3" alt="Portrait Explorer Logo" />

        <div className='flex flex-row items-center justify-between gap-4'>
          <div className="hidden sm:block md:block lg:block xl:block">
            <SearchInput />
          </div>
          <Button variant="dark" onClick={() => "nn"}>Connect Wallet</Button>
        </div>
      </div>
    </nav>
  )
}

export { NavBar }