export default function HarViRingt() {
  return (
    <div className="mx-auto sm:mt-20 mt-10 sm:mb-10 mb-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            HAR VI RINGT DEG?
          </h2>
          <p className="mt-10 text-lg/8">
            Vi er en seriøs aktør i bransjen, og er derfor nøye med å følge
            reglene for telefonsalg. Det innebærer blant annet at vi ikke ringer
            personer som har reservert seg.{" "}
            <span>
              <a
                href="https://www.brreg.no/om-oss/registrene-vare/om-reservasjonsregisteret/reservasjon-mot-telefonsalg-og-adressert-reklame/"
                target="_blank"
                className="underline"
              >
                Les mer om reservasjon mot reklame i Brønnøysundregistrene.
              </a>
            </span>
            <p>
              Dersom du har reservert deg, og vi fortsatt har ringt deg, er det
              sannsynligvis på bakgrunn av èn av følgende:
            </p>
          </p>
          <ul className="list-disc list-inside pl-4 text-lg/8">
            <li>
              Vi tar kontakt med deg på vegne av en organisasjon du har et
              kundeforhold med
            </li>
            <li>
              Du har bedt om å bli kontaktet av en av våre kunder ved å legge
              igjen kontaktinformasjonen din på deres nettside eller lignende
            </li>
            <li>Du har blitt klarert for telefonsalg ved en feiltakelse</li>
          </ul>
          <p className="mt-10 text-lg/8">
            Dersom du mener du ikke skulle blitt kontaktet på vegne av en av
            våre kunder kan du kontakte oss på{" "}
            <span>
              <a
                href="mailto:kundeservice@spurven.no"
                className="hover:text-gray-600 underline"
              >
                kundeservice@spurven.no
              </a>
            </span>
            , så får du tilbakemelding fra oss om hvorfor du har blitt
            kontaktet.
          </p>
        </div>
      </div>
    </div>
  );
}
