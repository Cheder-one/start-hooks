/* eslint-disable */
import { faker } from "@faker-js/faker";

const gender = faker.person.sex();
const user1Name = faker.person.firstName(gender);
const user2Name = faker.person.lastName(gender);
const userPhone = faker.phone.number("501-###-###");
const userEmail = faker.internet.email({
   firstName: user1Name.toLowerCase(),
   lastName: "",
   provider: "mail.com"
});

const users = Array.from({ length: 10 }, (_, i) => ({
   name: `${user1Name} ${user2Name}`,
   userGuid: `userGuid_${i}`,
   phone: userPhone,
   email: userEmail
}));

export const fakeApiGetAllUsers = () =>
   new Promise((resolve) => {
      setTimeout(function () {
         resolve(users);
      }, 1000);
   });

export const fakeApiGetUser = (userGuid) =>
   new Promise((resolve, reject) => {
      setTimeout(function () {
         const user = users.find((user) => user.userGuid === userGuid);
         if (user) {
            resolve(user);
         } else {
            reject(new Error("User not found"));
         }
      }, 1000);
   });
