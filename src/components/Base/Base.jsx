import React from 'react'
import { Nav } from '../Nav/Nav'
import './Base.css'
import icono_search from '../../assets/images/icono-search.png';
import icono_filter from '../../assets/images/icono-filter-list.png';

export const Base = () => {
  return (
    <div className='base'>
      <Nav />
      <div className='base__content'>
        <h1 className='base__active-demands'>Demandas activas</h1>
        <div className='base__filters'>
          <div className="filters__container filters__search-container">
            <img src={icono_search} alt="Icono de búsqueda" />
            <input className='filters__search-input' type="text" placeholder="Buscar" />
          </div>
          <div className="filters__container filters__filter-container">
            <img src={icono_filter} alt="Icono de filtro" />
            <p className='filters__filter-text'>Filtrar por</p>
          </div>
        </div>
      </div>
    </div>
  )
}
