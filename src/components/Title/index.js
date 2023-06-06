import React from "react";
import { H1 } from'./styles';

 /* Tambem podemos adicionar "Children" dentro dos parenteses de Title({children} que é a mesma coisa*/
function Title(props){
 console.log(props)
  return <H1>{props.children}</H1>

}

export default Title