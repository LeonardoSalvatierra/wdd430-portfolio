import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5"
      >
        <p className="text-xl font-bold">
          Leonardo Salvatierra
        </p>

        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="rounded hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="rounded hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}