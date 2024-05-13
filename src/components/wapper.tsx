


import { Post } from './post'
import { SiderBar } from './siderbar'


export function Wapper(){
  return(
    <div className=" grid grid-cols-3 gap-2 m-10 mx-48 items-start" >
      
       <Post/>

        <SiderBar/>
        <SiderBar/>
     
    </div>
  )
}