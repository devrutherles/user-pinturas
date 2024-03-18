import { Client, Account, Databases, Avatars  } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65f63eb7a14355c1ee4e");

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);

export { ID ,Query} from "appwrite";
