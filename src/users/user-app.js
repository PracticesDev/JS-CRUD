import userStore from "./store/user-store"


export const UserApp = async(element) => {


    element.innerHTML = 'Loading...'

    await userStore.loadNextPage();

}