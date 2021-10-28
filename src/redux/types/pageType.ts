export const PAGECURRENT = 'PAGE_CURRENT'

export interface Page {
    type: typeof PAGECURRENT,
    payload: Number
}