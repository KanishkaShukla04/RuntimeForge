import { prisma } from "@/lib/prisma"

export async function POST(
req: Request
){

try{

const body =
await req.json()

const submission =
await prisma.submission.create({

data:{

formName:
"Student Form",

data:body

}

})

return Response.json(
submission
)

}catch(error){

console.log(error)

return Response.json(
{
error:
"Submission failed"
},
{
status:500
}
)

}

}