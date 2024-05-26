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

  async login(body) {
    const { data } = await this.axiosIns.get(this.authConfig.loginResource)

    if(!data) {
      throw new Error('Something went wrong')
    }

    const filteredUsers = data.filter(user =>
      user.phone === body.phone && user.nickname === body.nickname
    )


    if(!filteredUsers.length) {
      throw new Error('Login Error')
    }

    return filteredUsers[0]
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
