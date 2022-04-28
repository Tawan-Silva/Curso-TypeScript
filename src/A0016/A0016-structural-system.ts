type User = { username: string; password: string };
type VerifyUserFn = (user: User, sentValue: User) => boolean;

// Verifica se o primeiro parametro é igual ao segundo paremetro da função
const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Tawan', password: '12345678' };
const sentUser = { username: 'Tawan', password: '123456789', permissions: '' };

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
