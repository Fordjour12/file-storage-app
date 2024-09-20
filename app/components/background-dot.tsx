import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatedShinyTextDemo } from "./animatedshinytext";

export default function HeroSection() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl">
			<AnimatedShinyTextDemo />
			<h1 className="text-6xl font-extrabold text-primary mb-4">
				Secure & Efficient File Storage
			</h1>
			<p className="text-lg text-muted-foreground mb-8">
				Store, manage, and access your files easily with our{" "}
				<span> state-of-the-art</span> cloud solution.
			</p>
			{/* <div className="space-x-4"> */}
			<Button asChild className="bg-primary text-white">
				<Link href="/login">Get Started for free </Link>
			</Button>
			<p className="text-sm mt-5 text-muted-foreground">
				12GB free storage.No credit card required
			</p>
			{/* </div> */}
			<DotPattern
				className={cn(
					"[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
				)}
			/>
		</div>
	);
}
