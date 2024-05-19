import { use } from "react";


import {ThemProvider, ThemContext} from '../../contexts/ThemContext'

function Theme() {
  const {theme, toggle} = use(ThemContext);
  return (

   <div className={`max-w-md mx-auto my-10 rounded-lg p-10 ${theme === 'light' ?  'bg-slate-50' : 'bg-slate-950'}`}>
    <p className={theme === 'light' ? 'bg-slate-800' : 'bg-slate-50' }> 
    
    سلامممممممممممممممممم
    </p>


    <button onClick={toggle}>
        تاگل کن
    </button>
  </div>
  )

}

export default Theme;
