import { ReactDOM } from "react"


function handleClick(e){
    let entrys = document.getElementsByClassName('js_entry');
    for (const entry of entrys){
        if( !entry.classList.contains('js_non-active')){
            entry.classList.add('js_non-active')
        }
    }
    e.target.classList.remove('js_non-active')
      
};
export default handleClick