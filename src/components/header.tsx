import { Link } from "@tanstack/react-router";
import { SquareArrowUpRight } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex gap-2 bg-white py-4">
      <nav className="CONTENT auto flex flex-row justify-between">
        <div className="font-bold">
          <Link className="flex flex-row gap-2 items-center" to="/">
            <SquareArrowUpRight className="bg-red-300 border-4 border-red-400/75 stroke-2 size-8 text-red-400/75 rounded-sm" />
            <span className="block max-w-20 text-lg leading-4">
              Early Signal
            </span>
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link
            to="/dashboard"
            className={buttonVariants({ variant: "outline" })}
          >
            Log in
          </Link>
        </div>
      </nav>
    </header>
  );
}
