import { usePathname } from "next/navigation"

export default function SubBlogPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex h-screen p-8 md:py-16 md:px-48">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold">Sub Blog</h1>
        <p className="mt-6 text-4xl">{params.id}</p>
      </div>
    </main>
  )
}
