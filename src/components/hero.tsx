import { Link } from "@tanstack/react-router";
import { Button, buttonVariants } from "./ui/button";

export default function Hero() {
  return (
    <div className="py-12">
      <div className="CONTENT flex flex-col">
        <h1 className="text-4xl text-zinc-800 font-bold text-center max-w-xl mx-auto mb-4">
          The email signup widget that wins conversions
        </h1>
        <p className="text-zinc-500 text-center max-w-xl mx-auto text-lg mb-4">
          Collect email signups for your new product launch or event, and easily
          monitor your results.
        </p>
        <div className="inline-flex gap-4 mx-auto mb-8">
          <Link
            className={buttonVariants({ variant: "default" })}
            to="/dashboard"
          >
            Get Started
          </Link>
          <Button variant="outline">Learn More</Button>
        </div>
        <div className="border border-zinc-200 rounded-xl w-full h-128 p-[2px]">
          <div className="border border-zinc-200 rounded-xl w-full h-full p-4 bg-zinc-50"></div>
        </div>
      </div>
    </div>
  );
}
