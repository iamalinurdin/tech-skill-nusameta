import Link from "next/link";

export default function ButtonLink({children, href}) {
  return (
    <Link className="p-2 border-2 rounded-lg border-white hover:bg-white hover:text-black transition duration-500 text-xs" href={href}>{children}</Link>
  )
}