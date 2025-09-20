import React from 'react'
import { Nav } from '../Nav/Nav'
import './Base.css'

export const Base = () => {
  return (
    <div className='base'>
      <Nav />
      <div className='base__content'>
        <h1 className='base__active-demands'>Demandas activas</h1>
      </div>
    </div>
  )
}
