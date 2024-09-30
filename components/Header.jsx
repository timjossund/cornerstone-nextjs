import Link from "next/link";

export default function Header() {
  return (
    <div>
      Header
      <Link href="/">Home</Link> |
      <Link href="/about"> About</Link>
    </div>
  )
}