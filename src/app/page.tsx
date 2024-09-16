import Link from "next/link";
import './global.css';

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <Link href="/About">About</Link>
      <Link style={{marginLeft:"10px"}} href="/dynamicRoute/">Products</Link>
    </>
  );
}