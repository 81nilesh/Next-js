"use client"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Event Function calling</h1>

      <button className="bg-[red] p-3 text-white rounded-xl" onClick={() => alert("Hello Brother")}>Click</button>
    </main>
  );
}


