import Link from "next/link";

const Product = () => {
  const rotes = [1,2,3,10,21];
  return (
    <>
        <h1>Product Lists: </h1>
        <ul>
          {rotes.map((link, key)=>
            key == 3 ?
            <li><Link href={`/dynamicRoute/${link}`} replace>Product {link}</Link></li>
            :
            <li><Link href={`/dynamicRoute/${link}`}>Product {link}</Link></li>
          )}
        </ul>

        <Link href="/">Home</Link>
    </>
  )
}

export default Product;