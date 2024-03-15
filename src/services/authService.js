export async function logIn(authDetails){
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, {

    method: "post",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetails)

  })
 if(!response.ok){
  throw {message:response.statusText, status:response.status} //eslint-disable-line
 }

  const data = await response.json();

  if (data.accessToken){

    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id))
    
      }

  return data

}



export async function register(authDetails){

    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, {
    method: "post",
    headers :{"content-Type":"application/json"},
    body: JSON.stringify(authDetails)
});
if(!response.ok){
  throw {message:response.statusText, status:response.status} //eslint-disable-line
 }
const data = await response.json()

return data
}



export const logOut = () =>{

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");

}