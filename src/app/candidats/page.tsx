import Link from "next/link";
import { candidats } from "./data";

export default function Candidats() {
  return (
    <ul className="list-group">
      {candidats.map((c) => (
        <li key={c.id} className="list-group-item">
          <Link href={`/candidats/${c.id}`}>
            {c.name} — {c.position}
          </Link>
        </li>
      ))}
    </ul>
  );
}
