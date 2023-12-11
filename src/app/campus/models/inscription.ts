import { User } from "./user";
import { Subject } from "./subject";

export interface Inscription {
  id: number;
  subject: Subject;
  teacher: User;
  pupil: User;
  note: number;
  class_day: string;
  class_hour: string;
}

export interface InscriptionRequest {
  subject_id: number;
  teacher_id: number;
  pupil_id: number;
  note: number | null;
  class_day: string;
  class_hour: string;
}
