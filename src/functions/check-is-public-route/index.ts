import { Routes } from '@/constants/routes'

export const checkIsPublicRoute = (path: string) => {
  const appPublicRoutes = Object.values(Routes.public)
  return appPublicRoutes.includes(path)
}
