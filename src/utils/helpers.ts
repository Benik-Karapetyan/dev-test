import type {Address} from '../components/Users/UsersTable/UsersTable';

export const getAddressText = (address: Address) => {
  return `${address.city}, ${address.street}, ${address.suite}, ${address.zipcode}`;
};
