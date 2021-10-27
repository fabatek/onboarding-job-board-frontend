import { IAlert } from "../../utils/TypeScripts";

export const ALERT = 'ALERT'

export interface IAlertType {
  type: typeof ALERT
  payload: IAlert
}