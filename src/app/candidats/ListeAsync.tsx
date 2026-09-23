import Link from "next/link";
import { getCandidats } from "@/lib/api";

export default async function ListeAsync() {
  const candidats = await getCandidats();

  if (candidats.length === 0) {
    return <p>No candidates yet.</p>;
  }

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
