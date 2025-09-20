import './Cards.css'
import icono_visibility from '../../assets/images/icono-visibility.png'

export const Cards = ({
  client,
  demandType,
  description,
  documents,
  id,
  name,
  status
}) => {
  return (
    <div className='cards'>
      <div className='cards__header'>
        <h2>{`Demanda #${id}`}</h2>
        <img src={icono_visibility} alt="Icono ver" />
      </div>

      <div className="cards__status-type">
        <span className='cards__demand-status'>
          {status}
        </span>
        <span className='cards__demand-type'>
          {demandType}
        </span>
      </div>

      <div className="cards__client">
        <p className='cards__client-text'>Cliente: <span className='cards__client-name'>{client}</span></p>
      </div>

      <div className="cards__description">
        <p>{description}</p>
      </div>
    </div>
  )
}
