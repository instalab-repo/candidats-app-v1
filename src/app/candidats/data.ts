export type Candidat = {
  id: string;
  name: string;
  position: string;
  status: string;
};

export const candidats: Candidat[] = [
  { id: "1", name: "Alice Martin",  position: "Frontend Developer", status: "In progress" },
  { id: "2", name: "Bob Smith",     position: "Backend Developer",  status: "Accepted" },
  { id: "3", name: "Chloe Bernard", position: "Data Analyst",       status: "Rejected" },
];
