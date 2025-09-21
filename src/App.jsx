import './App.css'
import { Base } from './components/Base/Base'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <>
      <DataProvider>
        <Base />
      </DataProvider>
    </>
  )
}

export default App
