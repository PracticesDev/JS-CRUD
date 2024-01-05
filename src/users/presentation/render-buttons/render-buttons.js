import userStore from '../../store/user-store';
import { renderTable } from '../render-table/render';
import './render-buttons.css'

export const renderButtons = ( element ) => {

    const nextButton = document.createElement('button')
    nextButton.innerHTML = `Next >`;

    const prevButton = document.createElement('button')
    prevButton.innerHTML = `Prev <`;

    const CurrentPageLabel = document.createElement('span')
    CurrentPageLabel.id = `current-page`;
    CurrentPageLabel.innerText = userStore.getCurrentPage();


    element.append( prevButton,CurrentPageLabel,nextButton );


    nextButton.addEventListener('click', async()=>{
        await userStore.loadNextPage();
        CurrentPageLabel.innerText = userStore.getCurrentPage();
        renderTable(element)
    })

    prevButton.addEventListener( 'click', async()=>{
        await userStore.loadPreviusPage();
        CurrentPageLabel.innerText = userStore.getCurrentPage();
        renderTable(element)


    })

}