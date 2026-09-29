import Counter from "../components/Counter";

export default function CandidatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mt-4">
      <h2>Candidatures</h2>
      <Counter />
      {children}
    </div>
  );
}
