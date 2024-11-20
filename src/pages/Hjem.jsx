import { Link } from "react-router-dom";
import bakgrunn from "../assets/images/bg.png";

export default function Hjem() {
  return (
    <div
      className="bg-white flex bg-cover bg-right bg-no-repeat flex-1"
      style={{ backgroundImage: `url(${bakgrunn})` }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center px-6 py-16 sm:py-20 lg:px-8 custom-height">
          <div className="max-w-2xl lg:mx-0 lg:max-w-5xl bg-white/90 xl:bg-transparent p-6 rounded-lg">
            <h1 className="text-pretty text-xl font-medium tracking-tight sm:text-5xl">
              Spurven er en pålitelig samarbeidspartner, levende opptatt av å
              sikre våre kunder gode resultater
            </h1>
            <div className="text-sm lg:text-lg mt-10 flex items-center gap-x-6">
              <Link to="/om-oss" className="font-semibold ">
                Lær mer <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
