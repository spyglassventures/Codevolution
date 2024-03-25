"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    function handleClick() {
      alert('Order placed successfully');
      router.push("/")
    }
    return (
        <div>
        <h1>Order Product</h1>
        <p>Welcome to the Order Product page</p>
        <button onClick={handleClick}> Place Order</button>
        </div>
    );
    }