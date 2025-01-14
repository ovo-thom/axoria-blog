import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-50 border-b border-b-zinc-300">
        <div>
            <Link>Axoria</Link>
            <Link>Categories</Link>
            <Link>Add an article</Link>
        </div>
    </nav>
  )
}