import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { log } from "@repo/logger";

import { Controller, IControllerResponse } from "../controllers";
import { ClientError } from "../errors/clientError";

export interface IHttpRequest {
  body: Request["body"];
  query: Request["query"];
  params: Request["params"];
}

export const buildExpressCallback = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    try {
      const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
      };
      const httpResponse: IControllerResponse = await controller(httpRequest);

      res.json(httpResponse.body);
    } catch (error) {
      log(error);

      const errorMessage =
        error instanceof ClientError ? error.message : "Server error.";

      res.json({
        success: false,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        body: {
          error: errorMessage,
        },
      });
    }
  };
};
