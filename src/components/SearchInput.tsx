import { ReactNode } from "react"

const SearchInput = () => {
  return (
    <>
      <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only">Search</label>
      <div className="relative ">
        <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-[18px] h-[18px] text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <input type="search" id="default-search" className="w-full py-3 pl-10 text-md text-gray-900 rounded-lg shadow-lg bg-white focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Search..." 
          required 
        />
      </div>
    </>
  )
}

export { SearchInput }