import { CommonRepository } from './CommonRepository';
import { EntityRepository } from 'typeorm';

import UserSession from '../models/UserSession';

@EntityRepository(UserSession)
class UserSessionRepository extends CommonRepository<UserSession> {
}

export { UserSessionRepository }
