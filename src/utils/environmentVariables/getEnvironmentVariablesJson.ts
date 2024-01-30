import { EnvironmentVariablesI } from './types'

const getEnvironmentVariablesJson: () => Promise<EnvironmentVariablesI> = async () => {
  try {
    const response = await fetch('environmentVariables.json')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data: EnvironmentVariablesI = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching environment variables:', error)
    throw error
  }
}

export default getEnvironmentVariablesJson
