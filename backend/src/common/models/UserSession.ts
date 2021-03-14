import { Column, Entity } from 'typeorm';
import EntityWithDates from './EntityWithDates';
import { ApiModel, ApiModelProperty, SwaggerDefinitionConstant } from 'swagger-express-ts';

@Entity()
@ApiModel( {
  name : "UserSessions"
})
export default class UserSession extends EntityWithDates {

  @ApiModelProperty( {
    description : "name" ,
    required : true,
    example: ['nameValue'],
    type: SwaggerDefinitionConstant.STRING
  } )
  @Column({
    type: 'varchar',
    default: ''
  })
  public name: string;

  @ApiModelProperty( {
    description : "sessionId as string" ,
    required : true,
    example: ['sessionIdValue'],
    type: SwaggerDefinitionConstant.STRING
  } )
  @Column({
    type: 'varchar',
    default: ''
  })
  public sessionId: string;

}
