import axios from "axios";
import { useEffect, useState } from "react";

export function useUser(){
   let [username, setUsername] = useState('')
   
    useEffect(()=>{
        axios.get('/username.json').then((a)=>{
            console.log(a)
            setUsername(a.data)
        }).catch(()=>{
            console.log('요청실패')
        })
    },[])
    return username;
}