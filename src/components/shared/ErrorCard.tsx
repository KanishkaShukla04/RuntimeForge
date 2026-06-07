export default function ErrorCard({
 message
}:{
 message:string
}){

return(

<div className="p-4 rounded border border-red-500">

{message}

</div>

)

}
