export interface IUserModelAttributes {
  totalAverageWeightRatings: number;
  numberOfRents: number;
  recentlyActive: string;
}

export type IListUsers = () => Promise<IUserModelAttributes>;
