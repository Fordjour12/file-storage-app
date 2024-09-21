import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";

export default function NavBar() {
  return (
    <Fragment>
      <header className="fixed flex items-center left-0 top-0 z-50 h-[4rem] w-full overflow-auto bg-background/70 backdrop-blur-[12px]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <a className="text-md flex items-center" href="/">
            Magic UI
          </a>
          <div className="ml-auto h-full items-center hidden md:flex">
            <a className="mr-6 text-sm" href="/signin">
              Log in
            </a>

            <Button asChild className="line-flex items-center">
              <Link href="/signup">Get Started</Link>
              {/* Get Started */}
            </Button>
          </div>
          <Button className="ml-6 md:hidden">
            <span className="sr-only">Toggle menu</span>
            Toggle Menu
          </Button>
        </div>
        <ModeToggle />
      </header>
    </Fragment>
  );
}

{
  /*<nav className="fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px] pointer-events-none">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <a className="text-md flex items-center" href="/">
            Magic UI
          </a>
           <button type="button" className="ml-6 md:hidden">
              <span className="sr-only">Toggle menu</span>
        </div>
        <ul className="flex flex-col md:flex-row md:items-center uppercase md:normal-case ease-in">
          <li className="border-grey-dark pl-6 py-0.5 border-b md:border-none">
            <a
              className="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors "
              href="/features"
            >
              Features
            </a>
          </li>
          <li className="border-grey-dark pl-6 py-0.5 border-b md:border-none">
            <a
              className="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors "
              href="#"
            >
              Pricing
            </a>
          </li>
          <li className="border-grey-dark pl-6 py-0.5 border-b md:border-none">
            <a
              className="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors "
              href="#"
            >
              Careers
            </a>
          </li>
          <li className="border-grey-dark pl-6 py-0.5 border-b md:border-none">
            <a
              className="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors "
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>*/
}
