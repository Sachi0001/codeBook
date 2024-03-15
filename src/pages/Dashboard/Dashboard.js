import { useEffect, useState } from "react"
import { DashbaordCard } from "./components/Dashboardcard"
import { DashbaordEmpty } from "./components/Dashboardempty"
import { getUserOrder } from "../../services"
import { toast } from "react-toastify"


export const DashbaordPage = () => {
    const [orders, setOrders] = useState([])



useEffect(()=>{

async function fetchData(){

try{
  const data = await getUserOrder();

  setOrders(data)
}catch(error){
toast.error(error.message)
}
  



console.log(orders)

}
fetchData();

},[])

    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>


<section>
    {orders.length && 
    
    orders.map((order)=>{
        return(
        <div key={order.id} >
        
        <DashbaordCard order = {order} />
        </div>)


    })}
    
    
</section>

<section>
   {!orders.length && <DashbaordEmpty />} 
</section>

      </main>
    )
  }