export default function Loading() {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div>
      <p className="mb-0">Loading candidates...</p>
    </div>
  );
}
