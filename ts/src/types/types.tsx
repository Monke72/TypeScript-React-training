export interface IAdress {
  //I в начале означает что это интерфейс
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAdress;
}
export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
