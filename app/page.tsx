import { AnimatedShinyTextDemo } from "@/app/components/animatedshinytext";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Review } from "./components/review";
import HeroSection from "@/app/components/background-dot";
import Image from "next/image";

// pages/index.js
export default function LandingPage() {
  return (
    <div className="">
      <HeroSection />

      <div className="relative mx-auto flex w-full items-center justify-center">
        <div className="relative border rounded-lg shadow-lg max-w-screen-xl mt-16">
          <div className="relative cursor-pointer group rounded-md p-2 ring-1 ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10 backdrop-blur-md">
            <Image
              src={"/platform.png"}
              alt="platfrom png"
              className="w-full h-full rounded-md"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedShinyTextDemo />
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Secure & Efficient File Storage
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Store, manage, and access your files easily with our
            state-of-the-art cloud solution.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>

            <a
              href="#features"
              className="inline-block bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg shadow hover:bg-gray-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Add this below the Hero Section in the same `index.js` file */}

      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our File Storage App?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure Storage
              </h3>
              <p className="text-gray-600">
                Your files are encrypted and stored securely in our cloud.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Archive & Regular Mode
              </h3>
              <p className="text-gray-600">
                Easily toggle between archived files and regular files.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                User-Friendly Interface
              </h3>
              <p className="text-gray-600">
                A clean and intuitive design that makes file management a
                breeze.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                1. Upload Files
              </h3>
              <p className="text-gray-600">
                Easily upload your files to our cloud system, and we’ll store
                them securely.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                2. Organize & Manage
              </h3>
              <p className="text-gray-600">
                Use tags, folders, and search to quickly organize and access
                your files.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                3. Retrieve Anytime
              </h3>
              <p className="text-gray-600">
                Access your files from anywhere, anytime, using our responsive
                app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-16 px-4 bg-white">
        <Review />
      </section>

      <section id="testimonials" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Our Users Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "This app has revolutionized how I manage my files! It's easy to
                use, and the security gives me peace of mind."
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                - John Doe
              </h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "I love the archive feature. It helps me declutter my workspace
                and still keep important documents safe."
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                - Jane Smith
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Basic
              </h3>
              <p className="text-gray-600 mb-4">$5/month</p>
              <ul className="space-y-2 mb-6">
                <li>10 GB Storage</li>
                <li>Secure Cloud</li>
                <li>Basic Support</li>
              </ul>
              <a
                href="#"
                className="bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Get Started
              </a>
            </div>
            {/* Pro Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pro</h3>
              <p className="text-gray-600 mb-4">$15/month</p>
              <ul className="space-y-2 mb-6">
                <li>50 GB Storage</li>
                <li>Advanced Security</li>
                <li>24/7 Support</li>
              </ul>
              <a
                href="#"
                className="bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Get Started
              </a>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Enterprise
              </h3>
              <p className="text-gray-600 mb-4">$50/month</p>
              <ul className="space-y-2 mb-6">
                <li>Unlimited Storage</li>
                <li>Priority Support</li>
                <li>Custom Solutions</li>
              </ul>
              <a
                href="#"
                className="bg-green-500 text-white py-2 px-4 rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-800 text-gray-200 text-center">
        <p>&copy; 2024 Symmetric. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
        </div>
        <div className="mt-6">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
