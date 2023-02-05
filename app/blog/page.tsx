import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="flex h-screen p-8 md:py-16 md:px-48">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold">Blog</h1>

        <div className="mt-4">
          <ul className="list-disc space-y-6 text-xl underline">
            <li>
              <Link href="/blog/post1" className="hover:text-violet-600">
                Post #1
              </Link>
            </li>
            <li>
              <Link href="/blog/post2" className="hover:text-violet-600">
                Post #2
              </Link>
            </li>
            <li>
              <Link href="/blog/post3" className="hover:text-violet-600">
                Post #3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
