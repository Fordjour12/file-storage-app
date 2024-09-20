import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <a className="text-md flex items-center" href="/">
            Magic UI
          </a>
          <div className="ml-auto flex h-full items-center">
            <a className="mr-6 text-sm" href="/signin">
              Log in
            </a>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 mr-6 text-sm"
              href="/signup"
            >
              Sign up
            </a>
          </div>
          <button type="button" className="ml-6 md:hidden">
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <nav className="fixed left-0 top-0 z-50 h-[4rem] w-full overflow-auto bg-background/70 backdrop-blur-[12px] pointer-events-none">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <a className="text-md flex items-center" href="/">
            Magic UI
          </a>
          <Button className="ml-6 md:hidden">
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>
    </>
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
