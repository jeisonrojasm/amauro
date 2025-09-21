export const filterDemands = (demands, searchText) => {
  const text = searchText.toLowerCase();

  return demands.filter((demand) => {
    return (
      demand.name.toLowerCase().includes(text) ||
      demand.client.toLowerCase().includes(text) ||
      demand.description.toLowerCase().includes(text) ||
      demand.demandType.toLowerCase().includes(text)
    );
  });
}

export const onSearchChange = (event, demands, setDemandsFiltered) => {
  const searchText = event.target.value

  if (!searchText) {
    setDemandsFiltered(demands)
    return
  }
  const filtered = filterDemands(demands, searchText)
  setDemandsFiltered(filtered)
}

export const onFilterClick = (setShowModal) => {
  setShowModal(true)
}