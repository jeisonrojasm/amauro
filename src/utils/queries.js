export const getAllDemandsQuery = async () => {
  try {
    const response = await fetch('http://localhost:3001/demands')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching demands:', error)
    throw error
  }
}

export const getDemandTypesQuery = async () => {
  try {
    const response = await fetch('http://localhost:3001/available_demand_types')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching demand types:', error)
    throw error
  }
}

export const getStatusesQuery = async () => {
  try {
    const response = await fetch('http://localhost:3001/available_statuses')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching statuses:', error)
    throw error
  }
}

export const getClientsQuery = async () => {
  try {
    const response = await fetch('http://localhost:3001/available_clients')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching clients:', error)
    throw error
  }
}

export const getFilterByDemandStatusQuery = async (status) => {
  try {
    const response = await fetch(`http://localhost:3001/demands?status=${status}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching filter by demandStatus:', error)
    throw error
  }
}

export const getFilterByDemandTypeQuery = async (type) => {
  try {
    const response = await fetch(`http://localhost:3001/demands?demandType=${type}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching filter by demandType:', error)
    throw error
  }
}