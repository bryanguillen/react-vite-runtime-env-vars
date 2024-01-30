import environmentVariables from '../utils/environmentVariables'

const getMockVendor = () => ({
  apiKey: environmentVariables.get().VITE_API_URI_TWO,
})

export default getMockVendor
