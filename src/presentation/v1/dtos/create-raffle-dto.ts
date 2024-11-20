export class CreateRaffleDto {
  id: string;
  idUser: string;
  name: string;
  description: string;
  chosenNumbers: number[];
  chooseNumber: number[];
  createdAt: Date;
  updatedAt: Date;
}
