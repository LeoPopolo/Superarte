export interface User {
  id: number;
  name: string;
  last_name: string;
  username: string;
  type: UserType;
  gender: UserGender;
  birthdate: Date;
  image_path: string;
}

export enum UserType {
	pupil = 'pupil',
  teacher = 'teacher',
  admin = 'admin'
}

export enum UserGender {
  male = 'male',
  female = 'female',
}
