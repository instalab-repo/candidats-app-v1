"use client";
import { getCandidats } from "@/lib/api";
import CandidatsClient from "./CandidatsClient";
import FoldingPanel from "../components/FoldingPanel";

export default async function ListeAsync() {
  const candidats = await getCandidats();

  const total = candidats.length;
  const accepted = candidats.filter((c) => c.status === "Accepted").length;
  const inProgress = candidats.filter((c) => c.status === "In progress").length;
  const rejected = candidats.filter((c) => c.status === "Rejected").length;

  return (
    <div>
      <FoldingPanel title="Summary">
        <ul className="mb-0">
          <li>Total: {total}</li>
          <li>Accepted: {accepted}</li>
          <li>In progress: {inProgress}</li>
          <li>Rejected: {rejected}</li>
        </ul>
      </FoldingPanel>

      <CandidatsClient candidats={candidats} />
    </div>
  );
}
