/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  SearchIcon,
  MenuIcon,
  XIcon,
  UserIcon,
  ShoppingCartIcon,
  CakeIcon,
} from "@heroicons/react/outline";
import {} from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Occasions", href: "#", current: true },
  { name: "All Categories", href: "#", current: false },
  { name: "Gift & Bundles", href: "#", current: false },
  { name: "Our Brands", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({ cart }) {
  return (
    <Disclosure as="nav" className="bg-orange-500">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <CakeIcon className="block lg:hidden h-8 w-auto text-white" />
                  <CakeIcon className="hidden lg:block h-10 w-auto text-white" />
                  <h2 className="hidden lg:block h-8 w-auto font-sans text-2xl italic font-bold text-white">
                    OurBakery
                  </h2>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          "hover:bg-orange-800 font-extrabold tracking-tight text-white px-3 py-2 rounded-md text-sm "
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex justify-around pr-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:w-44">
                <button
                  type="button"
                  className="bg-orange-800 hidden md:block p-2 rounded-full text-white  hover:outline-none hover:ring-2 hover:ring-offset-2  hover:ring-white"
                >
                  <span className="sr-only">User</span>
                  <UserIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="bg-orange-800 hidden md:block p-2 rounded-full text-white  hover:outline-none hover:ring-2 hover:ring-offset-2  hover:ring-white"
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex items-center static ">
                  <button
                    type="button"
                    className="bg-orange-800 p-2 rounded-full  text-white  hover:outline-none hover:ring-2 hover:ring-offset-2  hover:ring-white h-10  "
                  >
                    <span className="sr-only">Cart</span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="absolute sm:top-1 -right-1 top-1 sm:-right-2 md:right-1 bg-white h-5 w-5 rounded-full flex items-center justify-center">
                    <h3 className="">{cart}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " text-white "
                      : " hover:bg-orange-800 text-white ",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
