export const getAllDemandsQuery = async () => {
  try {
    const response = await fetch('http://localhost:3001/demands');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching demands:', error);
    throw error;
  }
}