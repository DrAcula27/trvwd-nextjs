import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/staff">Staff</Link>
        </li>
        <li>
          <Link href="/meetings">Meetings</Link>
        </li>
        <li>
          <Link href="/reports">Reports</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div>(360) 275-0279</div>
    </nav>
  );
}
