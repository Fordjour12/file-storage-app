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
      {/* <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl"> */}
      <AnimatedShinyTextDemo />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl  font-extrabold tracking-tight leading-tight text-center scroll-m-20 bg-gradient-to-b my-5">
          Secure & <span className="text-primary"> Efficient</span> File Storage
        </h1>
        <p className="text-muted-foreground text-base md:text-lg font-normal mb-5">
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
