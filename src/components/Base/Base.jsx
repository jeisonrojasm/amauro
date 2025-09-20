import icono_filter from '../../assets/images/icono-filter-list.png'
import icono_search from '../../assets/images/icono-search.png'
import { Nav } from '../Nav/Nav'
import './Base.css'
import { Cards } from '../Cards/Cards'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import { onFilterClick, onSearchChange } from './BaseFunctions'
import { DemandDetailModal } from '../DemandDetailModal/DemandDetailModal'
import { Dropdown } from '../Dropdown/Dropdown'
import { Filters } from '../Filters/Filters'

export const Base = () => {
  const { data } = useContext(DataContext)
  const { demands, demandTypes, statuses, clients } = data

  const [demandsFiltered, setDemandsFiltered] = useState(demands)
  useEffect(() => {
    if (demands) {
      setDemandsFiltered(demands);
    }
  }, [demands])

  const [showModal, setShowModal] = useState(false)

  const handleSelect = (opcion) => {
    console.log("Seleccionaste:", opcion);
  };

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
            </div>
            {showModal && (
              <DemandDetailModal>
                <Filters clients={clients} statuses={statuses} demandTypes={demandTypes} handleSelect={handleSelect} setShowModal={setShowModal} />
              </DemandDetailModal>
            )}
          </div>

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
