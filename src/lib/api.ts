import "server-only";
import type { Candidat } from "./types";

const API_URL = process.env.API_URL;

if (!API_URL) {
  throw new Error("API_URL environment variable is not set");
}

export async function getCandidats(): Promise<Candidat[]> {
  const res = await fetch(`${API_URL}/candidats`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch candidats: ${res.status}`);
  }

  return res.json();
}

export async function getCandidatById(id: string): Promise<Candidat | null> {
  const res = await fetch(`${API_URL}/candidats/${id}`, { cache: "no-store" });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch candidat ${id}: ${res.status}`);
  }

  return res.json();
}
