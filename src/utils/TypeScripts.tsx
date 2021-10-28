import rootReducer from '../redux/reducers/index'

export type RootStore = ReturnType<typeof rootReducer>

export interface IAlert {
    loading?: boolean
    success?: string | string[]
    errors?: string | string[]
  }