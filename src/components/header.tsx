import { Link } from "@tanstack/react-router";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex gap-2 bg-white py-4">
      <nav className="CONTENT auto flex flex-row justify-between">
        <div className="font-bold">
          <Link className="flex flex-row gap-2 items-center" to="/">
            <div className="size-8 bg-red-400/75"></div>
            <span className="block max-w-20 text-lg leading-4">
              Early Signal
            </span>
          </Link>
        </div>

        <div className="px-2 font-bold">
          <Link
            to="/demo/tanstack-query"
            className={buttonVariants({ variant: "outline" })}
          >
            Log in
          </Link>
        </div>
      </nav>
    </header>
  );
}
