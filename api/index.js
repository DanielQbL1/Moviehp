export default async function handler(req,res){

const r = await fetch(
"https://sdkapi-ga.smallyy.com",
{
headers:{
"user-agent":"okhttp/4.9.0",
"platform":"android"
}
}
)

const data = await r.text()

res.status(200).send(data)

}