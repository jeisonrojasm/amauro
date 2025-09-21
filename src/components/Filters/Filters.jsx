import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { Dropdown } from '../Dropdown/Dropdown'
import './Filters.css'
import { onApplyFiltersClick, onSelectClient, onSelectDemandType, onSelectStatus } from './FiltersFunctions'

export const Filters = ({
  clients,
  statuses,
  demandTypes,
  setShowModal,
  setDemandsFiltered
}) => {
  const { data, setData } = useContext(DataContext)

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
        onClick={(e) => onApplyFiltersClick(e, data, setData, setShowModal, setDemandsFiltered)}>
        Aplicar filtros
      </button>
    </div>
  )
}
