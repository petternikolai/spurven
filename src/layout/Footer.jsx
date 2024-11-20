import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="flex justify-center items-center py-4">
        <div className="flex font-thin gap-1 text-center text-sm">
          <p className="font-sans">&copy; </p>
          <p>2024 Spurven AS</p>
          <p>|</p>
          <Link to="/personvern" className="underline ml-1">
            Personvern
          </Link>
        </div>
      </div>
    </footer>
  );
}
