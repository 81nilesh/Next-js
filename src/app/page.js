
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Home page</h1>

      <User name="Nilesh Choudhary" />
      <User name="Ankit" />
      <User name="Chandu" />
      <User name="Lokesh" />
      <User name="Aayush" />
    </main>
  );
}


const User = (props) => {
  return (
    <div>
      <h2>User name is {props.name}</h2>
    </div>
  )
}