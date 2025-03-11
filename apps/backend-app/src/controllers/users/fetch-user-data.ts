import { StatusCodes } from "http-status-codes";

import { IControllerResponse } from "..";
import { IListUsers } from "../../services/users/list-users";

export const buildGetUsers = ({ listUsers }: { listUsers: IListUsers }) => {
  return async (): Promise<IControllerResponse> => {
    const users = await listUsers();
    return {
      success: true,
      statusCode: StatusCodes.OK,
      body: { result: users },
    };
  };
};
