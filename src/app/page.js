"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main className="w-full h-screen bg-white">
      <h1>Basic Routing | make New Page</h1>
      <Link href="/Login">Go to login page</Link>
      <br />
      <Link href="/about">Go to About page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/Login")}>Go to Login Pgae</button>
      <br />
      <button onClick={() => navigate("/about")}>Go to About Pgae</button>
    </main>
  )
}