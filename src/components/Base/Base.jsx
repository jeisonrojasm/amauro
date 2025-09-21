import { useContext, useEffect, useState } from 'react'
import icono_close_small from '../../assets/images/icono-close-small.png'
import icono_filter from '../../assets/images/icono-filter-list.png'
import icono_search from '../../assets/images/icono-search.png'
import { DataContext } from '../../context/DataContext'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Cards } from '../Cards/Cards'
import { DemandDetailModal } from '../DemandDetailModal/DemandDetailModal'
import { Filters } from '../Filters/Filters'
import { Nav } from '../Nav/Nav'
import './Base.css'
import { onFilterClick, onSearchChange } from './BaseFunctions'

export const Base = () => {
  const { data, setData } = useContext(DataContext)

  const { demands, demandTypes, statuses, clients } = data

  const [demandsFiltered, setDemandsFiltered] = useState(demands)
  useEffect(() => {
    if (demands) {
      setDemandsFiltered(demands)
    }
  }, [demands])

  const [showModal, setShowModal] = useState(false)

  const isTablet = useMediaQuery('(min-width: 768px)')

  return (
    <>
      <div className='base'>
        <Nav />
        <div className='base__content'>
          <h1 className='base__active-demands'>Demandas activas</h1>

          <div className='base__filters'>
            <div className="filters__container filters__search-container">
              <img src={icono_search} alt="Icono de búsqueda" />
              <input className='filters__search-input' type="text" placeholder="Buscar" onChange={(e) => onSearchChange(e, demands, setDemandsFiltered)} />
            </div>
            <div className="filters__container filters__filter-container" onClick={() => onFilterClick(setShowModal)}>
              <img src={icono_filter} alt="Icono de filtro" />
              <p className='filters__filter-text'>Filtrar por</p>
              {showModal && isTablet && (
                <div className='filters__modal-desktop'>
                  <Filters
                    clients={clients}
                    statuses={statuses}
                    demandTypes={demandTypes}
                    setShowModal={setShowModal}
                    setDemandsFiltered={setDemandsFiltered}
                  />
                </div>
              )}
            </div>
            {showModal && !isTablet && (
              <DemandDetailModal>
                <Filters
                  clients={clients}
                  statuses={statuses}
                  demandTypes={demandTypes}
                  setShowModal={setShowModal}
                  setDemandsFiltered={setDemandsFiltered}
                />
              </DemandDetailModal>
            )}
          </div>

          {
            data.appliedFilters && (data.selectedClients.length > 0 || data.selectedStatuses.length > 0 || data.selectedDemandTypes.length > 0) ? (
              <div className='base__active-filters'>
                <div className='base__active-filters-list'>
                  {data.selectedClients.map(client => (
                    <span
                      key={client.id}
                      className='base__active-filters-item'
                    >
                      {client.name}
                      <img className='base__active-filters-item-close' src={icono_close_small} alt="Icono de cerrar" />
                    </span>
                  ))}
                  {data.selectedStatuses.map(status => (
                    <span
                      key={status.id}
                      className='base__active-filters-item'
                    >
                      {status.name}
                      <img className='base__active-filters-item-close' src={icono_close_small} alt="Icono de cerrar" />
                    </span>
                  ))}
                  {data.selectedDemandTypes.map(type => (
                    <span
                      key={type.id}
                      className='base__active-filters-item'
                    >
                      {type.name}
                      <img className='base__active-filters-item-close' src={icono_close_small} alt="Icono de cerrar" />
                    </span>
                  ))}
                </div>

                <div>
                  <button className='base__clear-filters'
                    onClick={() => {
                      setDemandsFiltered(demands)
                      setData({ ...data, selectedClients: [], selectedStatuses: [], selectedDemandTypes: [], appliedFilters: false })
                    }}>
                    Limpiar filtros
                  </button>
                </div>
              </div>
            ) : null
          }

          <div className='base__demands'>
            {demandsFiltered.map((demand) => (
              <Cards
                key={demand.id}
                client={demand.client}
                demandType={demand.demandType}
                description={demand.description}
                documents={demand.documents}
                id={demand.id}
                name={demand.name}
                status={demand.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
