"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const about = () => {

    const router = useRouter();
    return (
        <div>
            <h1>About page</h1>

            <Link href="/">Go to Home Page</Link>
            <button onClick={() => router.push("/")}>Go to home page</button>
        </div>
    )
}

export default about;