import { createContext, useEffect, useState } from 'react'
import { getAllDemandsQuery } from '../utils/queries'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    demands: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const demands = await getAllDemandsQuery()
      setData({ ...data, demands })
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
