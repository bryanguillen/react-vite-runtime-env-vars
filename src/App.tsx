import environmentVariables from './utils/environmentVariables'
import getMockVendor from './config/mockVendor'

const App = () => {
  return (
    <div>
      <p>VITE_API_URI_ONE: {environmentVariables.get().VITE_API_URI_ONE}</p>
      <p>VITE_API_URI_TWO: {getMockVendor().apiKey}</p>
    </div>
  )
}

export default App
