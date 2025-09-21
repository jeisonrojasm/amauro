import { getFilterByDemandStatusQuery, getFilterByDemandTypeQuery } from "../../utils/queries"

export const onSelectClient = (option, data, setData) => {
  setData({
    ...data,
    selectedClients: option
  })
}

export const onSelectStatus = (option, data, setData) => {
  setData({
    ...data,
    selectedStatuses: option
  })
}

export const onSelectDemandType = (option, data, setData) => {
  setData({
    ...data,
    selectedDemandTypes: option
  })
}

export const onApplyFiltersClick = async (e, data, setShowModal, setDemandsFiltered) => {
  e.stopPropagation()
  const { selectedClients, selectedStatuses, selectedDemandTypes } = data
  let filteredDemands = []

  if (selectedStatuses.length > 0) {
    const statusParams = selectedStatuses.map(status => status.name)

    for (const status of statusParams) {
      const statusFilteredDemands = await getFilterByDemandStatusQuery(status)
      filteredDemands = [...filteredDemands, ...statusFilteredDemands]
    }
  }

  if (selectedDemandTypes.length > 0) {
    const typeParams = selectedDemandTypes.map(type => type.name)

    for (const type of typeParams) {
      const typeFilteredDemands = await getFilterByDemandTypeQuery(type)
      filteredDemands = [...filteredDemands, ...typeFilteredDemands]
    }
  }

  if (selectedClients.length > 0) {
    const clientParams = selectedClients.map(client => client.name)
    const clientFilteredDemands = data.demands.filter(demand => clientParams.includes(demand.client))
    filteredDemands = [...filteredDemands, ...clientFilteredDemands]
  }

  // Remove duplicates by demand.id
  filteredDemands = Array.from(new Set(filteredDemands.map(d => d.id))).map(id => {
    return filteredDemands.find(d => d.id === id)
  })

  if (filteredDemands.length === 0) {
    filteredDemands = data.demands
  }

  setDemandsFiltered(filteredDemands)
  setShowModal(false)
}
