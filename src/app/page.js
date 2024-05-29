"use client"
export default function Home() {

  const apple = (item) => {
    alert(item);
  }

  const nilu = () => {
    return (
      <h1>Hello Brother</h1>
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Event Function calling</h1>
      <button className="bg-[red] p-3 text-white rounded-xl" onClick={() => apple("color")}>Click</button>
      <nilu />
      {nilu()}
    </main>
  );
}


