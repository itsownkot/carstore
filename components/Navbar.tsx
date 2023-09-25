import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-6 py-4">
        <Link href="/">
          <Image src="/logo.svg" alt="Car Store logo" width={118} height={18} />
        </Link>
        <Button title="Sign In" btnStyle="bg-white text-blue-500" />
      </nav>
    </header>
  );
};
export default Navbar;
