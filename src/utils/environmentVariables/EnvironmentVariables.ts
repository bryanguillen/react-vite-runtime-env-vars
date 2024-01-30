import { EnvironmentVariablesI } from './types'

const defaultEnvironmentVariables: EnvironmentVariablesI = {
  VITE_API_URI_ONE: '',
  VITE_API_URI_TWO: '',
}

class EnvironmentVariables {
  private variables: EnvironmentVariablesI
  private variablesWereSet: boolean = false

  constructor() {
    this.variables = defaultEnvironmentVariables
  }

  get() {
    if (!this.variablesWereSet) {
      throw new Error('Variables have not been set yet!')
    }
    return this.variables
  }

  set(vars: EnvironmentVariablesI) {
    if (this.variablesWereSet) {
      throw new Error('Variables were already set!')
    }
    this.variablesWereSet = true
    this.variables = vars
  }
}

export default EnvironmentVariables
