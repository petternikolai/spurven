import { Link } from "react-router-dom";
import bakgrunn from "../assets/images/bg.png";

export default function Hjem() {
  return (
    <div
      className="bg-white flex bg-cover bg-right bg-no-repeat flex-1"
      style={{ backgroundImage: `url(${bakgrunn})` }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="z-10 lg:w-full">
          <div className="flex items-center px-6 py-16 sm:py-20 lg:px-8 lg:pr-0 custom-height">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl bg-white/90 p-6 rounded-lg">
              <h1 className="text-pretty text-xl font-medium tracking-tight sm:text-4xl md:text-5xl">
                Spurven er en pålitelig samarbeidspartner, levende opptatt av å
                sikre våre kunder gode resultater
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
    </div>
  );
}
