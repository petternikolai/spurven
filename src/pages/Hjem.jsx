import { Link } from "react-router-dom";
import bakgrunn from "../assets/images/bg.png";

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-pretty text-xl font-medium tracking-tight sm:text-4xl">
                  Spurven er en pålitelig samarbeidspartner, levende opptatt av
                  å sikre våre kunder gode resultater
                </h1>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link to="/om-oss" className="text-sm/6 font-semibold ">
                    Lær mer <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt="Blå himmel med et bjørketre til høyre"
            src={bakgrunn}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full object-position-right"
          />
        </div>
      </div>
    </div>
  );
}
