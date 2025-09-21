import { useContext, useEffect, useState } from "react"
import "./Dropdown.css"
import icono_arrow from '../../assets/images/icono-arrow.png'
import { DataContext } from "../../context/DataContext"

export const Dropdown = ({ options, onSelect, label, info }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState([])

  const toggleDropdown = () => setOpen(!open)

  const handleSelect = (e, option) => {
    if (e.target.checked) {
      setSelected([...selected, option])
    } else {
      setSelected(selected.filter((item) => item !== option))
    }
  }
  const { data, setData } = useContext(DataContext)

  useEffect(() => {
    if (onSelect) onSelect(selected, data, setData)
  }, [selected, onSelect])


  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <p>{label}</p>
        <img src={icono_arrow} alt="Arrow" />
      </div>

      {open && (
        <ul className="dropdown-menu">
          {options.map((opt) => (
            <li key={opt.id} >
              <input
                type="checkbox"
                className="dropdown-checkbox"
                name={opt.name}
                id={opt.id}
                onChange={(e) => handleSelect(e, opt)}
                checked={info.includes(opt)}
              />
              <p className="dropdown-option">{opt.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
