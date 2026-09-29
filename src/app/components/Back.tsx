"use client";

import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();

  return (
    <button
      className="btn btn-secondary mt-3"
      onClick={() => router.push("/candidats")}
    >
      Back to list
    </button>
  );
}
