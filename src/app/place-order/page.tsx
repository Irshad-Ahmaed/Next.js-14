"use client"
import { useRouter } from "next/navigation";

const Order = () => {
    const router = useRouter();
    const placeOrder = () => {
        console.log("placing the order...");
        setTimeout(()=>{
            console.log("order placed");
            
            // router.replace("/");
            // router.forward();
            router.back();  // back to previous page
        }, 1000);
        router.push("/");
    };

    return (
        <button onClick={placeOrder} className="bg-blue-500 text-white hover:text-blue-500 hover:bg-gray-300 px-2 py-2 rounded-lg">Place Order</button>
    )
}

export default Order