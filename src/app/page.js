import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-8">
      <h1 className="text-3xl text-center font-bold mb-8">The lounge</h1>
      <div className="flex gap-8 w-full">
        <div className="flex flex-col gap-4 w-1/3">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Genres</a>
            </li>
            <li>
              <a href="#">Top 100</a>
            </li>
            <li>
              <a href="#">New Releases</a>
            </li>
            <li>
              <a href="#">Chat</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
          </ul>
        </div>
        <div className="w-2/3">Stories</div>
      </div>
    </div>
  );
}
