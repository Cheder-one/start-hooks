/* eslint-disable */
const users = Array.from({ length: 10 }, (_, i) => ({
   name: `User ${i + 1}`,
   userGuid: `userGuid_${i}`,
   phone: `555-1234-00${i}`,
   email: `user${i + 1}@example.com`
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
