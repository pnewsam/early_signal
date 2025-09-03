export default function Footer() {
  return (
    <footer className="bg-zinc-50 py-8">
      <div className="CONTENT text-center">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Early Signal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
