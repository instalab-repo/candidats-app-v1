import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Candidat not found</h2>
      <p>The requested candidate does not exist.</p>
      <Link href="/candidats" className="btn btn-secondary">
        Back to list
      </Link>
    </div>
  );
}
