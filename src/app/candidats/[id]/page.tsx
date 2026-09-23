import { candidats } from "../data";
import Back from "../../components/Back";

export default async function CandidatDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const candidat = candidats.find((c) => c.id === id);

  if (!candidat) {
    return (
      <>
        <p>Candidate not found for id: {id}</p>
        <Back />
      </>
    );
  }

  return (
    <div>
      <h3>{candidat.name}</h3>
      <p><strong>Position:</strong> {candidat.position}</p>
      <p><strong>Status:</strong> {candidat.status}</p>
      <Back />
    </div>
  );
}
