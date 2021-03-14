import { FindManyOptions, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';


class CommonRepository<T> extends Repository<T>{

  async upsert(search, values, options?: FindManyOptions<T> | QueryDeepPartialEntity<T>):  Promise<void> {
    const result = await this.findOne(search);
    if(result){
      this.update(search, values);
    }else{
      this.save(values)
    }
  }

}

export { CommonRepository }
