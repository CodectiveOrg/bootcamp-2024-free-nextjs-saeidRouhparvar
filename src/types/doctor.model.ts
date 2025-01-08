export type DoctorModel = {
  id: string;
  name: string;
  image: string;
  gender: "man" | "woman";
  averageRating: number;
  totalVotes: number;
  address: string;
  firstAvailableAppointment: string;
  brief: string;
  badges: string[];
};
