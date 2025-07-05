export interface NavbarLink {
  id: number;
  name: string;
  href: string;
}

export const NavbarLinks: NavbarLink[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About Us",
    href: "/about",
  },
  {
    id: 3,
    name: "Privacy And Policy",
    href: "/privacy-policy",
  },
  {
    id: 4,
    name: "FAQ",
    href: "/faq",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
  },
];
