import { listUsers } from "../../services/users";

import { buildGetUsers } from "./fetch-user-data";

export const getUsers = buildGetUsers({ listUsers });
