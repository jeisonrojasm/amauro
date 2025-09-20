import { useState } from "react";
import "./Dropdown.css";
import icono_arrow from '../../assets/images/icono-arrow.png'

export const Dropdown = ({ options, onSelect, label }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => setOpen(!open);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    if (onSelect) onSelect(option);
  };

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
              <input type="checkbox" className="dropdown-checkbox" name={opt.name} id={opt.id} />
              <p className="dropdown-option">{opt.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
