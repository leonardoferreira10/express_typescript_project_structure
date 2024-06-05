import { expect, test } from 'vitest';
import { User } from '../../models/User';

test('create one User', () => {
  const user = new User("José Augusto", "joseaugusto@gmail.com", "Teste123");

  expect(user).toBeInstanceOf(User);
  expect(user.getEmail()).toEqual("joseaugusto@gmail.com");
})

test('Create user email validator', async () => {
  const user = new User("José Augusto", "joseaugusto@gmail.com", "Teste123");

  expect(user).toBeInstanceOf(User);
  await expect(user.setEmail("teste@teste.pt")).resolves.not.toThrowError();
})