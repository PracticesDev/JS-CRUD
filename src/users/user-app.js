import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render";
import userStore from "./store/user-store"


export const UserApp = async(element) => {

 
    await userStore.loadNextPage();


    
    console.log(userStore.getUsers());

    renderTable(element);
    renderButtons( element);


}