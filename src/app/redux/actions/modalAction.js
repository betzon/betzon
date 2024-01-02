import { OPEN_MODAL, CLOSE_MODAL, OPEN_USER_MODAL, CLOSE_USER_MODAL } from '../types'

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

export const openUserModal = () => {
    console.log('CALLING OPEN MODAL')
    return {
        type: OPEN_USER_MODAL
    }
}

export const closeUserModal = () => {
    return {
        type: CLOSE_USER_MODAL
    }
}