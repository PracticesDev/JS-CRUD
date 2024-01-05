import { loadUsers } from "../use-cases/load-users"

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    const users = await loadUsers( state.currentPage + 1 );
    if ( users.length === 0) return;
    state.currentPage +=1
    state.users = users;


}
const loadPreviusPage = async () => {
    if ( state.currentPage === 1) return;
    const users = await loadUsers( state.currentPage - 1 );
    state.currentPage -=1
    state.users = users;

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

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,

}

