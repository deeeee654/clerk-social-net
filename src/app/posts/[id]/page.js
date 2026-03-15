import { db } from "../../../utils/connect";
import { notFound } from "next/navigation";

export default async function Post({ params }) {
  console.log('params.id:', params.id);
  const result = await db.query("SELECT * FROM posts WHERE id = $1", [
    params.id,
  ]);
  console.log('result.rows:', result.rows);
  const post = result.rows[0];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full p-8">
      <form>
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          className="border p-2 w-full mb-4"
        />
        <textarea
          placeholder="Content"
          value={post.content}
          className="border p-2 w-full mb-4"
        />
        <button
          type="submit"
          className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer"
        >
          Update Post
        </button>
      </form>
      <h1 className="text-3xl text-center font-bold mb-8">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
