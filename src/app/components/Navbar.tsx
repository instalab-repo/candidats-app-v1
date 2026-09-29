import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Candidats App
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink href="/">Dashboard</NavLink></li>
          <li className="nav-item"><NavLink href="/candidats">Candidats</NavLink></li>
          <li className="nav-item"><NavLink href="/dashboard">Board</NavLink></li>
          <li className="nav-item"><NavLink href="/login">Login</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
