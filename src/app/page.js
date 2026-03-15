import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-8">
      <h1 className="text-3xl text-center font-bold mb-8">The lounge</h1>
      <div className="flex gap-8 w-full">
        <div className="flex flex-col gap-4 w-1/5">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/posts">Posts</a>
            </li>
            <li>
              <a href="#">Top 100</a>
            </li>
            <li>
              <a href="/new-releases">New Releases</a>
            </li>
            <li>
              <a href="#">Chat</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
          </ul>
        </div>
        <div className="w-4/5">
          <h2 className="text-2xl font-bold mb-4">Stories</h2>
          <p>Welcome to the Stories section!</p>
        </div>
      </div>
    </div>
  );
}
