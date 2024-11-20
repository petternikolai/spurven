import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoMedTekst from "../assets/images/logomedtekst.png";

const navigation = [
  { name: "OM OSS", href: "/om-oss" },
  { name: "KONTAKT", href: "kontakt" },
  { name: "HAR VI RINGT DEG?", href: "har-vi-ringt-deg" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky h-24 lg:h-36 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="pt-6 lg:pr-0">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <nav
                aria-label="Global"
                className="flex items-center justify-between p-0"
              >
                <div className="flex justify-between w-full">
                  <Link to="/">
                    <span className="sr-only">Spurven</span>
                    <img
                      alt="Spurven"
                      src={logoMedTekst}
                      className="h-12 w-auto mb-1 lg:h-24"
                    />
                  </Link>
                  <div className="hidden lg:flex items-end">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="w-48 font-bold tracking-wider hover:tracking-widest transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 rounded-md p-2.5  lg:hidden"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-standard text-standard/10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Spurven</span>
              <img alt="Spurven" src={logoMedTekst} className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 text-standard" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/50">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-standard"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
