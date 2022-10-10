import React from 'react'
import { actionType } from './Developer'
function DeveloperInfo({developer,dispatch}) {
    const handlerDelete=(id)=>{
        dispatch({type:actionType.DELETE_DEV, payload:id})
    }
  return (
    <>
     {developer&&developer.map((data, index)=>{
        return <div key={index} className="info" style={{display:'flex' ,justifyContent:'space-between', width:'700px', alignItems:'center'}}>
            <ul style={{textAlign:'left', listStyleType:'none'}}>
           <li>Developer Name:  {data.name}</li>
            <li>Developer favorite food is {data.foodFav}</li>
            <li>Developer favorite drink {data.drinkFav}</li>
            <li>Developer favorite language {data.lang}</li>
            <li>Developer favorite FrameWork {data.tech}</li>
            </ul>
            <button style={{height:'60px', backgroundColor: '#282c34',color: '#EEEEEE'}} onClick={()=>handlerDelete(data.id)}>Delete</button>
        </div>
     })}
    </>
  )
}

export default DeveloperInfo
