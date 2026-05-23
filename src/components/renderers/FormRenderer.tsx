"use client"

import { useState } from "react"
import { ComponentConfig } from "@/types/config"
import ErrorCard from "@/components/shared/ErrorCard"

export default function FormRenderer({
 component
}:{
 component:ComponentConfig
}){

const [formData,setFormData]=useState<
Record<string,string>
>({})

if(!component.fields){
return(
<ErrorCard
message="Invalid configuration"
/>
)
}

function handleChange(
name:string,
value:string
){

setFormData(prev=>({
...prev,
[name]:value
}))

}

async function handleSubmit(){

try{

await fetch(
"/api/forms",
{
method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify(
formData
)

}
)

alert(
"Saved to database"
)

}catch{

alert(
"Failed"
)

}

}

return(

<div className="border border-zinc-700 bg-zinc-900 p-6 rounded-xl space-y-4">

<h2 className="font-bold">
{component.title}
</h2>

{component.fields.map(field=>(

<input
key={field.name}
placeholder={field.label}
value={
formData[field.name] || ""
}
onChange={(e)=>
handleChange(
field.name,
e.target.value
)
}
className="border p-2 w-full rounded"
/>

))}

<button
onClick={handleSubmit}
className="bg-white text-black px-4 py-2 rounded"
>
Submit
</button>

</div>

)

}