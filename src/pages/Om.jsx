import { PhoneIcon, ChartBarIcon, TruckIcon } from "@heroicons/react/20/solid";
import sondre from "../assets/images/sondre.png";
import dennis from "../assets/images/dennis.png";
import christina from "../assets/images/christina.png";
import chris from "../assets/images/chris.png";
import mart from "../assets/images/mart.png";
import lub from "../assets/images/lub.png";
import nff from "../assets/images/nff.png";
import nl from "../assets/images/nl.png";
import naaf from "../assets/images/naaf.png";

const stats = [
  { label: "Firmaet ble grunnlagt", value: "2024" },
  { label: "Personer i teamet", value: "15" },
  { label: "Samarbeidspartnere", value: "5" },
];

const samarbeidspartnere = [
  { navn: "Nasjonalforeningen for folkehelsen", logo: nff },
  { navn: "Norges astma-og allergiforbund", logo: naaf },
  { navn: "Landsforeningen uventet barnedød", logo: lub },
  { navn: "MA Rusfri Trafikk", logo: mart },
  { navn: "Norges livredningsselskap", logo: nl },
];

const tjenester = [
  {
    name: "Kundevekst.",
    description:
      "Vi er opptatt av å skape vekst for våre kunder, og vi jobber hardt for å sikre at de får de resultatene de ønsker.",
    icon: ChartBarIcon,
  },
  {
    name: "Kundeservice.",
    description:
      "Vi er her for å hjelpe deg med alt du trenger, og vi vil alltid gjøre vårt beste for å sikre at du er fornøyd med tjenestene våre.",
    icon: PhoneIcon,
  },
  {
    name: "Distribusjon.",
    description:
      "Vi er opptatt av å levere kvalitet til våre kunder, og vi vil alltid gjøre vårt beste for å sikre at de får det de trenger.",
    icon: TruckIcon,
  },
];

const team = [
  {
    name: "Sondre K. Lunde",
    imageUrl: sondre,
    role: "Daglig Leder",
    email: "sondre@spurven.no",
  },
  {
    name: "Dennis Thornæs",
    imageUrl: dennis,
    role: "Driftssjef",
    email: "dennis@spurven.no",
  },
  {
    name: "Christina Risnes",
    imageUrl: christina,
    role: "Prosjektleder",
    email: "christina@spurven.no",
  },
  {
    name: "Chris Andersen",
    imageUrl: chris,
    role: "Salgsleder",
    email: "chris@spurven.no",
  },
];

export default function Example() {
  return (
    <div className="bg-white pt-24 pb-6 sm:pt-32">
      <div className="mx-auto max-w-7xl pt-14 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            OM OSS
          </h2>
          <p className="mt-8 text-pretty text-lg font-medium sm:text-xl/8">
            Spurven er en pålitelig samarbeidspartner, levende opptatt av å
            sikre våre kunder resultater og vekst, slik at fokuset deres forblir
            på sitt hovedmål.
          </p>

          <div>
            <p className="mt-6 text-lg/8">
              Vi er stolte av å kunne representere flotte foreninger og formål
              gjennom en spirende bedriftskultur med fokus på gode holdninger og
              kvalitet i alle ledd.
            </p>
          </div>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
          {stats.map((stat, statIdx) => (
            <div
              key={statIdx}
              className="flex flex-col-reverse gap-y-3 border-l border-black/20 pl-6"
            >
              <dt className="text-base/7">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Image section */}
      {/* <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
          className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
        />
      </div> */}

      {/* Tjenester */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            VÅRE TJENESTER
          </h2>
          <p className="mt-6 text-lg/8">
            Spurven er levende opptatt av å ivareta en effektiv og trygg
            salgsprosess, preget av kvalitet. Vi bidrar til vekst hos våre
            oppdragsgivere ved å tilføre nye kunder og beholde eksisterende. Som
            et profesjonelt callsenter, og som en samarbeidspartner for våre
            kunder, tar vi total- eller delansvar for følgende aktiviteter:
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {tjenester.map((value) => (
            <div key={value.name} className="relative pl-9">
              <dt className="inline font-semibold">
                <value.icon
                  aria-hidden="true"
                  className="absolute left-1 top-1 size-5 "
                />
                {value.name}
              </dt>{" "}
              <dd className="inline">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Samarbeidspartnere */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            SAMARBEIDSPARTNERE
          </h2>
          <p className="mt-6 text-lg/8">
            Spurven er levende opptatt av å ivareta en effektiv og trygg
            salgsprosess, preget av kvalitet. Vi bidrar til vekst hos våre
            oppdragsgivere ved å tilføre nye kunder og beholde eksisterende. Som
            et profesjonelt callsenter, og som en samarbeidspartner for våre
            kunder, tar vi total- eller delansvar for følgende aktiviteter:
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-3">
          {samarbeidspartnere.map((samarbeidspartner, samarbeidspartnerIdx) => (
            <div
              key={samarbeidspartnerIdx}
              className="flex flex-col-reverse gap-y-3 border-l border-black/20 pl-6"
            >
              <dt className="text-base/7">{samarbeidspartner.navn}</dt>
              <dd className="flex items-center justify-center h-20 w-20">
                <img
                  src={samarbeidspartner.logo}
                  alt={samarbeidspartner.navn}
                  className="h-full w-full"
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Teamet */}
      <div className="mx-auto my-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            VÅRT TEAM
          </h2>
          <p className="mt-6 text-lg/8">
            Vi er et team av dedikerte og erfarne fagfolk som jobber hardt for å
            sikre at våre kunder får de resultatene de ønsker. Vi er her for å
            hjelpe deg med alt du trenger, og vi vil alltid gjøre vårt beste for
            å sikre at du er fornøyd med tjenestene våre.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {team.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-[14/13] w-full rounded-2xl object-cover object-top"
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight">
                {person.name}
              </h3>
              <p className="text-base/7">{person.role}</p>
              <p className="text-sm/6 text-gray-600 hover:tracking-wider hover:text-standard">
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
