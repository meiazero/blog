import { NavItemsConfig } from "@/config/nav";
import { NavItem } from "@/types";
import Link from "next/link";
import { Icons } from "./icons";

export function Header() {
  return (
    <header className="bg-white">
      <div className="container flex flex-row items-center justify-between">
        <Link href="/" title="logo">
          <Icons.logo className="h-28 w-28" />
        </Link>

        <nav>
          <ul>
            {NavItemsConfig.map((item, index) => {
              return <NavItemComponent {...item} key={index} />;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavItemComponent(item: NavItem) {
  return (
    <li className="hover:underline">
      <Link href={item.path}>{item.name}</Link>
    </li>
  );
}
