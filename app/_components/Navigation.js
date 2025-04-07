import Link from "next/link";
import { auth } from "@/app/_lib/auth";

export default async function Navigation() {
  // console.log(auth)
  const session = await auth();
  console.log(session)
  // console.log("Hi")


  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? 
          (
            <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
            >
              <img src={session.user.image} alt="" className="h-8 rounded-full"/>
              <span>Guest area</span>
            </Link>
          ) : 
          (
            <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
