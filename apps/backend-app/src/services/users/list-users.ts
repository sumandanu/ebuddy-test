import { IUserModelAttributes } from "../../entities/user";

export type IListUsers = () => Promise<IUserModelAttributes[]>;

export const buildListUsers = (): IListUsers => {
  return async () => {
    return [
      {
        totalAverageWeightRatings: 4.3,
        numberOfRents: 30,
        recentlyActive: "1738938812, (7th feb, 2025)",
      },
      {
        totalAverageWeightRatings: 4.3,
        numberOfRents: 30,
        recentlyActive: "1738679612, (4th feb, 2025)",
      },
      {
        totalAverageWeightRatings: 4.3,
        numberOfRents: 28,
        recentlyActive: "1738679612, (4th feb, 2025)",
      },
    ];
  };
};
