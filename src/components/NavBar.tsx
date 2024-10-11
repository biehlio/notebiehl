"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { CalendarPlus, Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <div className="w-[175px] text-xl font-bold">LOGO</div>
      <ul className="hidden items-center justify-between gap-4 lg:flex">
        <li>
          <Button variant="ghost">
            <Link href="/">Work</Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost">
            <Link href="/about">Links</Link>
          </Button>
        </li>
        <li>
          <Button variant="ghost">
            <Link href="/about">Blog</Link>
          </Button>
        </li>
      </ul>
      <ul className="hidden items-center justify-between gap-4 lg:flex">
        <ModeToggle />
        <Button>
          <CalendarPlus className="mr-2 h-4 w-4" />
          <Link href="/schedule">Let&apos;s Talk</Link>
        </Button>
      </ul>
      <Sheet>
        <div className="flex items-center justify-between gap-4 lg:hidden">
          <ModeToggle />
          <SheetTrigger className="lg:hidden">
            <Button asChild variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent>
          <ul className="flex flex-col gap-4">
            <li>
              <Button variant="ghost">
                <Link href="/">Work</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost">
                <Link href="/about">Links</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost">
                <Link href="/about">Blog</Link>
              </Button>
            </li>
            <li>
              <Button>
                <CalendarPlus className="mr-2 h-4 w-4" />
                <Link href="/schedule">Let&apos;s Talk</Link>
              </Button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
