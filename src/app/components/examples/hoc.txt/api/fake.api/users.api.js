/* eslint-disable */
import { faker } from "@faker-js/faker";

const fakeUsers = Array.from({ length: 10 }, (_, i) => {
   const gender = faker.person.sex();
   const user1Name = faker.person.firstName(gender);
   const user2Name = faker.person.lastName(gender);
   const userPhone = faker.phone.number("501-###-###");
   const userEmail = `${user1Name.toLowerCase()}@mail.com`;

   return {
      name: `${user1Name} ${user2Name}`,
      userGuid: `userGuid_${i}`,
      phone: userPhone,
      email: userEmail
   };
});

if (!localStorage.getItem("fakeUsers")) {
   localStorage.setItem("fakeUsers", JSON.stringify(fakeUsers));
}

export const getAllUsers = () =>
   new Promise((resolve) => {
      setTimeout(function () {
         resolve(JSON.parse(localStorage.getItem("fakeUsers")));
      }, 1000);
   });

export const getUser = (userGuid) =>
   new Promise((resolve, reject) => {
      setTimeout(function () {
         const user = JSON.parse(localStorage.getItem("fakeUsers")).find(
            (user) => user.userGuid === userGuid
         );

         if (user) {
            resolve(user);
         } else {
            reject(new Error("User not found"));
         }
      }, 1000);
   });

export const updateUser = (userGuid, data) =>
   new Promise((resolve) => {
      setTimeout(function () {
         const users = JSON.parse(localStorage.getItem("fakeUsers"));
         const userIndex = users.findIndex(
            (user) => user.userGuid === userGuid
         );
         users[userIndex] = { ...users[userIndex], ...data };
         localStorage.setItem("fakeUsers", JSON.stringify(users));
         resolve(users[userIndex]);
      }, 1000);
   });
