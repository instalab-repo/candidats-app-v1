import { notFound } from "next/navigation";
import { getCandidatById } from "@/lib/api";
import Back from "../../components/Back";

export default async function CandidatDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const candidat = await getCandidatById(id);

  if (!candidat) {
    notFound();
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
