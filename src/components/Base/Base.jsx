import icono_filter from '../../assets/images/icono-filter-list.png'
import icono_search from '../../assets/images/icono-search.png'
import { Nav } from '../Nav/Nav'
import './Base.css'
import { Cards } from '../Cards/Cards'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext'
import { onSearchChange } from './BaseFunctions'

export const Base = () => {
  const { data } = useContext(DataContext)
  const { demands } = data

  const [demandsFiltered, setDemandsFiltered] = useState(demands)
  useEffect(() => {
    if (demands) {
      setDemandsFiltered(demands);
    }
  }, [demands]);


  return (
    <div className='base'>
      <Nav />
      <div className='base__content'>
        <h1 className='base__active-demands'>Demandas activas</h1>
        <div className='base__filters'>
          <div className="filters__container filters__search-container">
            <img src={icono_search} alt="Icono de búsqueda" />
            <input className='filters__search-input' type="text" placeholder="Buscar" onChange={(e) => onSearchChange(e, demands, setDemandsFiltered)} />
          </div>
          <div className="filters__container filters__filter-container">
            <img src={icono_filter} alt="Icono de filtro" />
            <p className='filters__filter-text'>Filtrar por</p>
          </div>
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
  )
}
