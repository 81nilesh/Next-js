import Link from "next/link";
import { NavigateAction } from "next/dist/client/components/router-reducer/router-reducer-types";
export default function Home() {
  return (
    <main className="bg-red">
      <h1>Basic Routing | make New Page</h1>
      <Link href="/Login">Go to login page</Link>
      <br />
      <Link href="/about">Go to About page</Link>
    </main>
  )
}