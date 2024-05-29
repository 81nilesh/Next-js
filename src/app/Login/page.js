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
            {/* <button onClick={() => router.push("/")}>Go To home page</button> */}

            <button onClick={() => router.push("/Login/loginstudent")}>Go to student login page </button>
            <br />
            <button onClick={() => router.push("/Login/loginteacher")}>Go to teacher login page </button>
        </div>
    )
}

export default Login;