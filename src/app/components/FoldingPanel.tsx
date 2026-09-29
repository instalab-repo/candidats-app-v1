"use client";

import { useState } from "react";

export default function FoldingPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <strong>{title}</strong>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>
      {open && <div className="card-body">{children}</div>}
    </div>
  );
}
