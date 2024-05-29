"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter();
  return (
    <main className="bg-red">
      <h1>Basic Routing | make New Page</h1>
      <Link href="/Login">Go to login page</Link>
      <br />
      <Link href="/about">Go to About page</Link>

      <br />
      <br />

      <button onClick={() => router.push("/Login")}>Go to Login Pgae</button>
    </main>
  )
}