import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    url: "/",
    title: "Home",
    desc: "Welcome to our homepage",
  },
  {
    id: 2,
    url: "/council",
    title: "Council",
    desc: "Learn more about us",
    subLinks: [
      {
        id: 1,
        url: "/council/team",
        title: "Team",
      },
      {
        id: 2,
        url: "/council/careers",
        title: "Careers",
      },
       {
        id: 3,
        url: "/council/annual-reports",
        title: "Annual Reports",
      },
      {
        id: 4,
        url: "/council/agendas",
        title: "Agendas, Minutes & Dates",
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

// const navLinks2 = [
//   {
//     id: 1,
//     url: "/np",
//     title: "Neighbourhood Plan",
//   },
//   //   {
//   //     id: 2,
//   //     url: "/about",
//   //     title: "About",
//   //   },
//   //   {
//   //     id: 3,
//   //     url: "/people",
//   //     title: "People",
//   //   },
// ];

const NavMenu = () => {
  return (
    <NavigationMenu
      className="text-black re"
      
      // viewport={false}
    >
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            {link.subLinks ? (
              <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
            ) : (
              <NavigationMenuLink asChild>
                <Link href={link.url}>{link.title}</Link>
              </NavigationMenuLink>
            )}
            {link.subLinks && (
              <NavigationMenuContent className="">
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="from-muted/50 to-muted flex h-full w-full flex-col rounded-md bg-linear-to-b p-3 no-underline outline-hidden select-none focus:shadow-md"
                        href={link.url}
                      >
                        <div className="mt-2 mb-2 text-lg font-medium">
                          {link.title}
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          {link.desc}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {link.subLinks.map((sublink) => (
                    <ListItem
                      key={sublink.title}
                      title={sublink.title}
                      href={sublink.url}
                    >
                      {sublink.title}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
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

export default NavMenu;
