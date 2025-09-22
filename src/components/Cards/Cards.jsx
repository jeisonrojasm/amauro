import { useState } from 'react'
import icono_add from '../../assets/images/icono-add.png'
import icono_close from '../../assets/images/icono-close.png'
import icono_download from '../../assets/images/icono-download.png'
import icono_file from '../../assets/images/icono-file.png'
import icono_visibility from '../../assets/images/icono-visibility.png'
import { Modal } from '../Modal/Modal'
import './Cards.css'
import { onVisibilityClick } from './CardsFunctions'

export const Cards = ({
  client,
  demandType,
  description,
  documents,
  id,
  name,
  status
}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className='cards'>
        <div className='cards__header'>
          <h2>{name}</h2>
          <img src={icono_visibility} alt="Icono ver" onClick={() => onVisibilityClick(setShowModal)} />
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
      {showModal && (
        <Modal>
          <div className='cards-modal'>
            <div>
              <div className='cards__header--modal'>
                <h2>{name}</h2>
                <button onClick={() => setShowModal(false)}>
                  <img src={icono_close} alt="Cerrar" />
                </button>
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

            <div className='cards-modal__right'>
              {
                documents.map((document) => (
                  <button key={document.id} className='cards__documents-button'>
                    <div className='cards__documents-container'>
                      <img src={icono_file} alt="Archivo" />
                      <p>
                        {document.name}
                      </p>
                    </div>
                    <img src={icono_download} alt="Descargar" />
                  </button>
                ))}

              <div className='cards__buttons-container'>
                <button className='cards__solve-demand-button'>
                  <p className='cards__solve-demand-text'>Resolver demanda</p>
                  <img src={icono_add} alt="Resolver demanda icono" />
                </button>
                <button className='cards__cancel-button'>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
