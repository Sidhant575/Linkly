import clientPromise from "@/libs/mongodb";


export async function GET(request) {}
 
export async function HEAD(request) {}
 
export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("linkly")
    const collection = db.collection("url")


    const doc = await collection.findOne({shorturl:body.shorturl})
    if (doc){
        return Response.json({success : false , error : true ,message:"URL already exists"})
}
    

    const result = await collection.insertOne({
        url: body.url,
        shorturl : body.shorturl,
    })


    return Response.json({success : true , error : false ,message:"URL Generated successfully"})
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
export async function PATCH(request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {}