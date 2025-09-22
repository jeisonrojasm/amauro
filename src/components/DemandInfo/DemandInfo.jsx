import './DemandInfo.css'

export const DemandInfo = ({ status, demandType, client, description }) => {
  return (
    <>
      <div className='cards__status-type'>
        <span className='cards__demand-status'>{status}</span>
        <span className='cards__demand-type'>{demandType}</span>
      </div>

      <div className='cards__client'>
        <p className='cards__client-text'>
          Cliente: <span className='cards__client-name'>{client}</span>
        </p>
      </div>

      <div className='cards__description'>
        <p>{description}</p>
      </div>
    </>
  )
}
