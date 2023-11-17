import { OPEN_MODAL, CLOSE_MODAL } from '../types'

export const openModal = () => {
    console.log('CALLING OPEN MODAL')
    return {
        type: OPEN_MODAL
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}