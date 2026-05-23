"use client"

import Papa, { ParseResult } from "papaparse"
import { ChangeEvent } from "react"

export default function CsvUploader() {

function handleUpload(
e: ChangeEvent<HTMLInputElement>
){

const file=e.target.files?.[0]

if(!file) return

Papa.parse(file,{

header:true,

complete:(
results: ParseResult<unknown>
)=>{

console.log(
results.data
)

alert(
"CSV imported successfully"
)

}

})

}

return(

<div className="space-y-2 border p-4 rounded">

<h2 className="font-bold">
CSV Import
</h2>

<input
type="file"
accept=".csv"
onChange={handleUpload}
/>

</div>

)

}