export { addDialog }

let dialogEs;

function openDialog( dialogE ) {
    dialogE.show();
    dialogE.style.display = "flex";
    dialogOpenButtonE.style.display = "none";
}

function closeDialog( dialogE ) {
    dialogE.close();
    dialogE.style.display = "none";
    dialogOpenButtonE.style.display = "flex";
} 

function addDialog( dialogE ) {
    const dialogOpenButtonE = dialogE.nextElementSibling;
    const dialogSubmitButtonE = dialogE.querySelector("#dialog-submit-button");
    const dialogCloseButtonE = dialogE.querySelector("#dialog-close-button");
    
    // open
    dialogOpenButtonE.addEventListener("click", ()=>{
        openDialog( dialogE );
    }); 

    // submit
    dialogSubmitButtonE.addEventListener("click", ()=>{
        closeDialog( dialogE );
    })

    // close
    dialogCloseButtonE.addEventListener("click", ()=>{
        closeDialog( dialogE );
    })
}

function init() {
    dialogEs = document.querySelectorAll("dialog");
    for ( const dialogE of dialogEs ){
        addDialog( dialogE );
    }
}

window.addEventListener("DOMContentLoaded", init);