import React from 'react'
import './Nav.css'
import menu_hamburguesa from '../../assets/images/menu-hamburguesa.png';
import logo from '../../assets/images/logo.png';
import logo_desktop from '../../assets/images/logo-desktop.png';
import user_card from '../../assets/images/user-card.png';
import icono_nav_1 from '../../assets/images/icono-nav-1.png';
import icono_nav_2 from '../../assets/images/icono-nav-2.png';
import icono_nav_3 from '../../assets/images/icono-nav-3.png';
import icono_nav_4 from '../../assets/images/icono-nav-4.png';
import icono_nav_5 from '../../assets/images/icono-nav-5.png';
import icono_nav_6 from '../../assets/images/icono-nav-6.png';
import icono_nav_7 from '../../assets/images/icono-nav-7.png';
import icono_exit from '../../assets/images/icono-exit.png';

export const Nav = () => {
  return (
    <div className='nav'>
      <div className='nav-left'>
        <img className='icono-menu-hamburguesa' src={menu_hamburguesa} alt="Menu" />
        <img className='icono-logo' src={logo} alt="Logo" />
        <img className='icono-logo-desktop' src={logo_desktop} alt="Logo" />
        <div className='nav-desktop-icons'>
          <img className='icono-nav-1' src={icono_nav_1} alt="Icono Nav 1" />
          <img className='icono-nav-2' src={icono_nav_2} alt="Icono Nav 2" />
          <img className='icono-nav-3' src={icono_nav_3} alt="Icono Nav 3" />
          <img className='icono-nav-4' src={icono_nav_4} alt="Icono Nav 4" />
          <img className='icono-nav-5' src={icono_nav_5} alt="Icono Nav 5" />
          <img className='icono-nav-6' src={icono_nav_6} alt="Icono Nav 6" />
          <img className='icono-nav-7' src={icono_nav_7} alt="Icono Nav 7" />
        </div>
      </div>
      <div className='nav-right'>
        <img className='icono-user-card' src={user_card} alt="User Card" />
        <img className='icono-exit' src={icono_exit} alt="Icono Exit" />
      </div>
    </div>
  )
}
