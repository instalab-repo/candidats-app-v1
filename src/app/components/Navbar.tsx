import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Candidats App
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/candidats">Candidats</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
