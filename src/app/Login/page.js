"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {

    const router = useRouter();
    return (
        <div>

            <h1>Hello Login page</h1>
            <Link href="/">Go to Home Page</Link>
            <br />
            <button onClick={() => router.push("/")}>Go To home page</button>
        </div>
    )
}

export default Login;