import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="flex justify-center items-center py-4">
        <div className="flex font-thin gap-1 text-center text-sm">
          <p className="font-sans">&copy;</p>
          <p>{currentYear} Spurven AS</p>
          <p>|</p>
          <Link to="/personvern" className="underline ml-1">
            Personvern
          </Link>
        </div>
      </div>
    </footer>
  );
}
