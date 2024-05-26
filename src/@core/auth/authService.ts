import authDefaultConfig from './authDefaultConfig'

let instance = null
export default class AuthService {
  // Will be used by this service for making API calls
  axiosIns = null

  // authConfig <= Will be used by this service
  authConfig = { ...authDefaultConfig }

  constructor(axiosIns, authOverrideConfig) {
    if (instance) return instance
    instance = this

    this.axiosIns = axiosIns
    this.axiosIns = { ...this.axiosIns, ...authOverrideConfig }
  }

  login(...args) {

    return this.axiosIns.get(this.authConfig.loginResource, ...args)
  }

  setUser(value) {
    localStorage.setItem(this.authConfig.storageUserDataKeyName, JSON.stringify(value))
  }

  getUser(value) {
    localStorage.getItem(this.authConfig.storageUserDataKeyName)
  }

  removeUser() {
    localStorage.removeItem(this.authConfig.storageUserDataKeyName)
  }
}
