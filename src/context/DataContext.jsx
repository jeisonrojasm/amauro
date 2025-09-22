import { createContext, useEffect, useState } from 'react'
import {
  getAllDemandsQuery,
  getClientsQuery,
  getDemandTypesQuery,
  getStatusesQuery,
} from '../utils/queries'

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    demands: [],
    demandTypes: [],
    statuses: [],
    clients: [],
    selectedClients: [],
    selectedStatuses: [],
    selectedDemandTypes: [],
    appliedFilters: false,
  })

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = sessionStorage.getItem('appData')

      if (cachedData) {
        setData(prev => ({ ...prev, ...JSON.parse(cachedData) }))
        return
      }

      // Si no hay caché, llama a los endpoints
      const [demands, demandTypes, statuses, clients] = await Promise.all([
        getAllDemandsQuery(),
        getDemandTypesQuery(),
        getStatusesQuery(),
        getClientsQuery(),
      ])

      const newData = { demands, demandTypes, statuses, clients }

      sessionStorage.setItem('appData', JSON.stringify(newData))

      setData(prev => ({ ...prev, ...newData }))
    }

    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}
