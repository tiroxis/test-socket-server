import { Column, Entity } from 'typeorm';
import EntityWithDates from './EntityWithDates';
import { ApiModel, ApiModelProperty, SwaggerDefinitionConstant } from 'swagger-express-ts';


@ApiModel( {
  name : "Currency"
})
@Entity()
export default class Currency extends EntityWithDates {

  @ApiModelProperty( {
    description : "title" ,
    required : true,
    example: ['titleValue'],
    type: SwaggerDefinitionConstant.STRING
  } )
  @Column({
    type: 'varchar',
    default: ''
  })
  public title: string;

}
