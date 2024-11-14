import { EnvelopeIcon } from "@heroicons/react/24/outline";
import MapComponent from "../components/MapComponent";

const mapId = import.meta.env.VITE_GOOGLE_MAP_ID;

const mapOptions = {
  mapId,
  tilt: 45,
  rotateControl: true,
};

const location = {
  name: "KRISTIANSAND",
  address: ["Gyldenløvesgate 2", "4611 KRISTIANSAND S"],
  position: { lat: 58.1450721677452, lng: 7.992098962191463 },
};

const containerStyle = {
  width: "100%",
  height: "300px",
};

export default function Kontakt() {
  return (
    <div className="bg-white pt-24 pb-6 sm:pt-32">
      <div className="mx-auto max-w-7xl pt-14 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
            KONTAKT OSS
          </h2>
          <p className="mt-6 text-lg/8">
            Du er hjertelig velkommen til å ta kontakt med oss.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <EnvelopeIcon className="w-6 h-6" />
            <a
              href="mailto:service@spurven.no"
              className="text-gray-600 hover:tracking-wider hover:text-standard"
            >
              service@spurven.no
            </a>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-2xl lg:mx-0 lg:max-w-none">
          <div>
            <h3 className="border-l border-standard pl-6 font-semibold">
              {location.name}
            </h3>
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              {location.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </address>
          </div>
          <div className="mt-6 lg:w-1/2">
            <MapComponent
              location={location}
              containerStyle={containerStyle}
              mapOptions={mapOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
