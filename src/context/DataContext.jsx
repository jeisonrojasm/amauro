import { createContext, useEffect, useState } from 'react'
import { getAllDemandsQuery, getClientsQuery, getDemandTypesQuery, getStatusesQuery } from '../utils/queries'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    demands: [],
    demandTypes: [],
    statuses: [],
    clients: [],
    selectedClients: [],
    selectedStatuses: [],
    selectedDemandTypes: [],
    appliedFilters: false
  })

  useEffect(() => {
    const fetchData = async () => {
      const demands = await getAllDemandsQuery()
      const demandTypes = await getDemandTypesQuery()
      const statuses = await getStatusesQuery()
      const clients = await getClientsQuery()
      setData({ ...data, demands, demandTypes, statuses, clients })
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
