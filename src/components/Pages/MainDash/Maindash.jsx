import React from 'react'
import '../Pages.css'
import DinamicCards from '../../CardsFolder/DinamicCards/Cards/DinamicCards'
import Table from '../../Table/Table'
const Maindash = () => {
  return (
    <>
      <div className="Main">
        <h3>მთავარი გვერდი</h3>
        <DinamicCards />
        <Table />
      </div>
    </>
  )
}

export default Maindash