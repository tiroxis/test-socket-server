import 'reflect-metadata';
import { ApiOperationGet, ApiPath, SwaggerDefinitionConstant } from 'swagger-express-ts';
import { controller, httpGet, interfaces, requestParam } from 'inversify-express-utils';
import { getCustomRepository } from 'typeorm';
import * as express from "express"
import { v4 as uuidv4 } from 'uuid';
import { UserSessionRepository } from '../../../common/repositories/UserSessionRepository';


@ApiPath({
  path: '/users',
  name: 'Users',
})
@controller('/users')
export default class UserApiController implements interfaces.Controller {

  @ApiOperationGet({
    description: "Get users objects list",
    path: '/:id',
    summary: "Get users objects list",
    responses: {
      200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY, model: "UserSessions" },
    }
  })
  @httpGet("/:id")
  public getById(@requestParam("id") id: string, request: express.Request, response: express.Response, next: express.NextFunction): void {
    const userSessionRepository = getCustomRepository(UserSessionRepository);

    try{
      const user = userSessionRepository.upsert(
        { name: id },
        { name: id, sessionId: uuidv4() }
      );
      response.status(200).json(user);
    } catch (e) {
      response.status(500).json({ error: e.message });
    }


  }
}
