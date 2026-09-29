"use client";

import { useState } from "react";
import Link from "next/link";
import type { Candidat } from "@/lib/types";

export default function CandidatsClient({
  candidats,
}: {
  candidats: Candidat[];
}) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = candidats.filter((c) => {
    const matchesName = c.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === "all" || c.status === status;
    return matchesName && matchesStatus;
  });

  return (
    <div>
      <div className="row g-2 mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All statuses</option>
            <option value="In progress">In progress</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <p className="text-muted">{filtered.length} result(s)</p>

      {filtered.length === 0 ? (
        <p className="alert alert-warning">No candidates match your filters.</p>
      ) : (
        <ul className="list-group">
          {filtered.map((c) => (
            <li key={c.id} className="list-group-item">
              <Link href={`/candidats/${c.id}`}>
                {c.name} — {c.position} <span className="badge bg-secondary">{c.status}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
