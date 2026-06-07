"use client"

import { useState } from "react"
import config from "@/config/app.json"
import { lang } from "@/lib/lang"

import FormRenderer from "@/components/renderers/FormRenderer"
import TableRenderer from "@/components/renderers/TableRenderer"
import DashboardRenderer from "@/components/renderers/DashboardRenderer"
import UnknownComponent from "@/components/renderers/UnknownComponent"
import CsvUploader from "@/components/shared/CsvUploader"

export default function Home(){

const [currentLang,setCurrentLang]=
useState("en")

return(

<div className="p-10 space-y-8">

<div className="flex justify-between">

<div>

<h1 className="text-5xl font-bold">
RuntimeForge
</h1>

<p className="text-gray-400">
Dynamic application generation from JSON configuration
</p>

</div>

<button
onClick={()=>
setCurrentLang(
currentLang==="en"
?"hi"
:"en"
)
}
className="border px-4 py-2 rounded"
>

EN / HI

</button>

</div>

<CsvUploader/>

{config.components.map(
(component,index)=>{

switch(component.type){

case "form":
return(
<FormRenderer
key={index}
component={component}
/>
)

case "table":
return(
<TableRenderer key={index}/>
)

case "dashboard":
return(
<DashboardRenderer key={index}/>
)

default:
return(
<UnknownComponent key={index}/>
)

}

}
)}

</div>

)

}