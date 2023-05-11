import React from 'react'
import '../Pages.css'
import Cards from '../../Cards/Cards'
import Table from '../../Table/Table'
const Maindash = () => {
  return (
    <>
      <div className="Main">
        <h3>მთავარი გვერდი</h3>
        <Cards />
        <Table />
      </div>
    </>
  )
}

export default Maindash