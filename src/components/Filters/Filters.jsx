import React, { useContext } from 'react'
import './Filters.css'
import { Dropdown } from '../Dropdown/Dropdown'
import { onSelectClient, onSelectStatus, onSelectDemandType } from './FiltersFunctions'
import { DataContext } from '../../context/DataContext'

export const Filters = ({ clients, statuses, demandTypes, setShowModal }) => {
  const { data } = useContext(DataContext)

  return (
    <div className='filters-modal'>
      <div className='filters-modal__content'>
        <h2 className='filters-modal__title'>
          Filtrar por
        </h2>

        <div>
          <Dropdown label='Cliente' options={clients} onSelect={onSelectClient} info={data.selectedClients} />
          <Dropdown label='Estado' options={statuses} onSelect={onSelectStatus} info={data.selectedStatuses} />
          <Dropdown label='Tipo' options={demandTypes} onSelect={onSelectDemandType} info={data.selectedDemandTypes} />
        </div>
      </div>
      <button className='filters-modal__apply-button'
        onClick={(e) => {
          e.stopPropagation()
          setShowModal(false)
        }}>
        Aplicar filtros
      </button>
    </div>
  )
}
