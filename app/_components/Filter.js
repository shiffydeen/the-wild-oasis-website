"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import React from 'react'

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // console.log(searchParams)

  const activeFilter = searchParams.get("capacity") ?? "all"

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    // console.log(params)
    router.replace(`${pathname}?${params.toString()}`, {scroll: false});
  }

  return (
    <div className='border border-primary-800 flex'>
      <Button filter='all' handleFilter={handleFilter} activeFilter={activeFilter}>All cabins</Button>
      <Button filter='small' handleFilter={handleFilter} activeFilter={activeFilter}>2&mdash;3 guests</Button>
      <Button filter='medium' handleFilter={handleFilter} activeFilter={activeFilter}>4&mdash;7 guests</Button>
      <Button filter='large' handleFilter={handleFilter} activeFilter={activeFilter}>12 guests</Button>
      
    </div>
  )
}


const Button = ({filter, handleFilter, activeFilter, children}) => {
    return (
      <button onClick={() => handleFilter(filter)} className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`}>{children}</button>
    )
}

export default Filter
