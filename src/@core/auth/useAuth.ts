import AuthService from './authService'
import axiosIns from '@core/axios/axios'

export default function useAuth(authOverrideConfig) {
  const authService = new AuthService(axiosIns, authOverrideConfig)

  return {
    authService,
  }
}
