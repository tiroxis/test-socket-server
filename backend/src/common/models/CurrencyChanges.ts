import EntityWithDates from './EntityWithDates';
import { Entity } from 'typeorm';
import { ApiModel } from 'swagger-express-ts';

@ApiModel( {
  name : "CurrencyChanges"
})
@Entity()
export default class CurrencyChanges extends EntityWithDates {

}
