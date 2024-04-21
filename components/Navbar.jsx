import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href="/">Home</Link>
          <Link href="/">News</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
