import { loadUsers } from "../use-cases/load-users"

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    await loadUsers( state.currentPage + 1 );

}
const loadPreviusPage = async () => {
    throw new Error('No Implementado')

}
const onUserChanged = async () => {
    throw new Error('No Implementado')

}
const reloadPage = async () => {
    throw new Error('No Implementado')

}

export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,

}

