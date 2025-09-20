import React from 'react'
import './Filters.css'
import { Dropdown } from '../Dropdown/Dropdown'

export const Filters = ({ clients, statuses, demandTypes, handleSelect, setShowModal }) => {
  return (
    <div className='filters-modal'>
      <div className='filters-modal__content'>
        <h2 className='filters-modal__title'>
          Filtrar por
        </h2>

        <div>
          <Dropdown label='Cliente' options={clients} onSelect={handleSelect} />
          <Dropdown label='Estado' options={statuses} onSelect={handleSelect} />
          <Dropdown label='Tipo' options={demandTypes} onSelect={handleSelect} />
        </div>
      </div>
      <button className='filters-modal__apply-button' onClick={() => setShowModal(false)}>
        Aplicar filtros
      </button>
    </div>
  )
}
