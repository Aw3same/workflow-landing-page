export interface IService {
  description: string;
  icon: string
  id: number
  name: string;
}

export interface IPeople {
  id: number
  name: string;
  surname: string;
  job1: string;
  job2?: string;
  photo: string;
}
