import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test@example.com",
    firstName: "Test",
    lastName: "User",
  },
});
console.log("Created user");
