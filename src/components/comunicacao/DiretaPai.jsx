import React from "react";
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props) {

   return (
      <div>
            <DiretaFilho nome="Victor " idade={ 21} nerd={true}></DiretaFilho>
            <DiretaFilho nome=" Gabriel " idade={ 18} nerd={ false}></DiretaFilho>
      </div>

   )

}