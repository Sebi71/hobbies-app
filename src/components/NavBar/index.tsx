"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import logo from "@/assets/images/logo.webp";
import { useFirebaseHobbies } from "@/context/hobbiesContext";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Hobbie {
  category: string;
  title: string;
}

export default function NavBar() {
  const {hobbies} = useFirebaseHobbies();

  const categories: Record<string, string[]> = hobbies.reduce((acc: Record<string, string[]>, hobbie: Hobbie) => {
    if (!acc[hobbie.category]) {
      acc[hobbie.category] = [];
    }
    acc[hobbie.category].push(hobbie.title);
    return acc;
  }, {});

  const [imageSize, setImageSize] = useState(80);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setImageSize(80);
    } else {
      setImageSize(50);
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize(); 
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <NavigationMenu className="lg:mt-10 md:mt-5 pt-4 lg:h-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <Image
              src={logo}
              alt="logo du site et retour à l'accueil"
              width={imageSize}
              height={imageSize}
              className="bg-white rounded-full bg-opacity-50 cursor-pointer"
            />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="lg:text-xl uppercase md:text-lg">
            Réalisations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[375px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {Object.keys(categories).map((category) => (
                <ListItem
                  key={category}
                  title={category}
                  href={`/categories/${category}`}
                >
                  {categories[category].map((title, index) => (
                      <li key={index}>
                        {title}
                      </li>
                    ))}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <IoChatboxEllipses className="w-6 h-6" />
              <span className="ml-2 hidden md:block lg:text-xl uppercase md:text-lg ">
                Contact
              </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FaHome className="w-6 h-6" />
              <span className="ml-2 hidden md:block lg:text-xl uppercase md:text-lg ">
                Accueil
              </span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>
          <ul className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </ul>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
