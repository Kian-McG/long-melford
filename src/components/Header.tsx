import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { desc } from "framer-motion/client";
import Image from "next/image";
import NavMenu from "./NavMenu";

const navLinks = [
  {
    id: 1,
    url: "/",
    title: "Home",
    desc: "Welcome to our homepage",
  },
  {
    id: 2,
    url: "/about",
    title: "About",
    desc: "Learn more about us",
    subLinks: [
      {
        id: 1,
        url: "/about/team",
        title: "Team",
      },
      {
        id: 2,
        url: "/about/careers",
        title: "Careers",
      },
    ],
  },
  {
    id: 3,
    url: "/council-finances",
    title: "Council Finances",
    desc: "Overview of council finances",
  },
  {
    id: 4,
    url: "/council-meetings",
    title: "Council Meetings",
    desc: "Information about council meetings",
    subLinks: [
      {
        id: 1,
        url: "/council-meetings/2023-01-01",
        title: "Meeting Minutes - Jan 2023",
      },
      {
        id: 2,
        url: "/council-meetings/2023-02-01",
        title: "Meeting Minutes - Feb 2023",
      },
      {
        id: 3,
        url: "/council-meetings/2023-03-01",
        title: "Meeting Minutes - Mar 2023",
      },
    ],
  },
];

const navLinks2 = [
  {
    id: 1,
    url: "/np",
    title: "Neighbourhood Plan",
  },
  //   {
  //     id: 2,
  //     url: "/about",
  //     title: "About",
  //   },
  //   {
  //     id: 3,
  //     url: "/people",
  //     title: "People",
  //   },
];

const Header = () => {
  return (
    <nav className="flex justify-between min-h-[var(--header-height)] bg-background items-center fixed w-full z-50">
      <div className="container flex justify-between items-center py-2">
        <div className="flex items-center gap-10">
             <Link href={'/'}> <Image src={"/logo.webp"} width={40} height={60} alt="logo" className="mr-20"/></Link>
         <ul className="flex items-center gap-6 uppercase font-bold text-sm text-primary">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:text-green-600">
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
        </div>

        <ul className="flex items-center gap-1 uppercase font-bold text-sm text-primary ">
          {navLinks2.map((link) => (
            <li key={link.id} className="hover:text-green-600">
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>

    // <div className="bg-white fixed inset-0 z-50 h-[var(--header-height)] pointer-events-auto flex items-center justify-center">
    //   <Link href={"/"}>
    //     {" "}
    //     <Image
    //       src={"/logo.webp"}
    //       width={40}
    //       height={60}
    //       alt="logo"
    //       className="mr-20"
    //     />
    //   </Link>

    //   <NavMenu />
    // </div>
  );
};

type ListItemProps = {
  title: string;
  href: string;
  children?: React.ReactNode;
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props} className="z-50">
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Header;
