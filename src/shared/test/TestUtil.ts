import { User } from '../../user/Entities/user.entity';

export default class TestUtil {
  static giveMeAvalidUser(): User {
    const user = new User();
    user.email = 'valid@email.com';
    user.name = 'joao';
    user.id = '1';
    return user;
  }
}
