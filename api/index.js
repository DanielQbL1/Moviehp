export default async function handler(req,res){

const r = await fetch(
"https://sdkapi-ga.smallyy.com/api/public/init",
{
headers:{
"platform":"android",
"user-agent":"okhttp/4.9.0"
}
}
)

const data = await r.text()

res.status(200).send(data)

}