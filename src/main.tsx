import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import environmentVariables, {
  getEnvironmentVariablesJson,
} from './utils/environmentVariables'

import './index.css'

const renderComponentInRoot = (reactNode: React.ReactNode) => {
  return ReactDOM.createRoot(document.getElementById('root')!).render(reactNode)
}

const startApp = async () => {
  try {
    const environmentVariablesJson = await getEnvironmentVariablesJson()
    environmentVariables.set(environmentVariablesJson)

    renderComponentInRoot(<App />)
  } catch (error) {
    renderComponentInRoot(
      <div>Oops! An error occurred while trying to load the application</div>
    )
  }
}

startApp()
