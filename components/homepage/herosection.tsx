import { AnimatedShinyTextDemo } from "@/app/components/animatedshinytext";
import { BorderBeam } from "@/components/magicui/border-beam";
import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { TITLE_TAILWIND_CLASS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div
      className="flex flex-col items-center justify-center leading-6 mt-[3rem]"
      aria-label="Achiver Hero"
    >
      {/* <h1
				className={`${TITLE_TAILWIND_CLASS} scroll-m-20 font-semibold tracking-tight text-center max-w-[1120px] bg-gradient-to-b dark:text-white`}
			>
				Nextjs Starter Kit: Build & Ship Fast
			</h1>
			<p className="mx-auto max-w-[700px] text-gray-500 text-center mt-2 dark:text-gray-400">
				The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS,
				giving you time to focus on what really matters
			</p>
			<div className="flex justify-center items-center gap-3">
				<Link href="/dashboard" className="mt-5">
					<Button className="animate-buttonheartbeat rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">
						Get Started
					</Button>
				</Link>

				<Link
					href="https://discord.gg/HUcHdrrDgY"
					target="_blank"
					className="mt-5"
					aria-label="Join Discord (opens in a new tab)"
				>
					<Button variant="outline" className="flex gap-1">
						Join Discord
						<ArrowRight className="w-4 h-4" aria-hidden="true" />
					</Button>
				</Link>
				<Link
					href="https://github.com/michaelshimeles/nextjs14-starter-template"
					target="_blank"
					className="animate-buttonheartbeat border p-2 rounded-full mt-5 hover:dark:bg-black hover:cursor-pointer"
					aria-label="View NextJS 14 Starter Template on GitHub"
				>
					<Github className="w-5 h-5" aria-hidden="true" />
				</Link>
			</div> */}

      {/* <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl"> */}
      <AnimatedShinyTextDemo />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-center scroll-m-20 bg-gradient-to-b my-10">
          Secure & <span className="text-primary"> Efficient</span> File Storage
        </h1>
        <p className="text-muted-foreground text-lg font-normal mb-5">
          Store, manage, and access your files easily with our{" "}
          <span className="text-primary"> state-of-the-art</span> cloud
          solution.
        </p>
        <Button asChild className="font-semibold">
          <Link href="/login">Get Started for free</Link>
        </Button>

        <p className="text-sm mt-5 text-muted-foreground">
          12GB free storage.No credit card required
        </p>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />

      <div>
        <div className="relative flex max-w-6xl justify-center overflow-hidden mt-7">
          <div className="relative rounded-xl">
            <Image
              src="/platform.png"
              alt="Nextjs Starter Kit Dashboard Preview"
              width={1100}
              height={550}
              priority={true}
              className="block rounded-[inherit] border object-contain shadow-lg dark:hidden"
            />
            <Image
              src="/platform.png"
              width={1100}
              height={550}
              alt="Nextjs Starter Kit Dark Mode Dashboard Preview"
              priority={true}
              className="dark:block rounded-[inherit] border object-contain shadow-lg hidden"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </div>
  );
}
