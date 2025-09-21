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