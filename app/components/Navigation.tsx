import Image from "next/image";
import Link from "next/link";

import { NAVIGATION_ITEMS_LEFT } from "@/utils/navigation";

const Navigation = () => (
  <nav className="flex justify-between items-center">
    <ul className="flex gap-8 items-center">
      <li className="mr-0.8">
        <Link href="/">
          <Image alt="logo" src="/logo.svg" width={44} height={40} />
        </Link>
      </li>
      {NAVIGATION_ITEMS_LEFT.map(({ slug, title }, key) => (
        <li key={slug + key}>
          <Link href={slug} className="hover:underline">
            {title}
          </Link>
        </li>
      ))}
    </ul>
    <ul className="flex gap-24 items-center">
      <li>
        <Link href="/login">Log in</Link>
      </li>
      <li>
        <Link href="/login">Start free trial</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
