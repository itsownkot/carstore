import { footerLinks } from "@/constants";
import { FooterUlElements } from "@/types";
import Image from "next/image";
import Link from "next/link";

const FooterColumn = ({ title, links }: FooterUlElements) => (
  <div className="text-end">
    <h3>{title}</h3>
    <ul>
      {links.map((link) => (
        <li>
          <Link href={link.url}>{link.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex flex-col px-6 py-4 border-t-2 border-gray-100 mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <Image src="/logo.svg" alt="Car Store logo" width={118} height={18} />
          <p>Car Store 2023</p>
          <p>All right &copy; ;)</p>
        </div>
        {footerLinks.map((item, index) => (
          <FooterColumn key={index} title={item.title} links={item.links} />
        ))}
      </div>
      <div className="flex justify-between gap-6 mt-4">
        <p>&copy;2023 all rights and stuff</p>
        <div className="flex gap-3">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
