import sql from "./db.js";

sql`CREATE TABLE videos(
  id TEXT PRIMARY KEY,
  title TEXT,
  description TEXT,
)`.then(() => {
  console.log("Created table");
});
//
// async function createTable() {
//   const create = await sql`
//   CREATE TABLE videos (
//     id TEXT PRIMARY KEY,
//     title TEXT ,
//     description TEXT,
//     duration INTEGER
//   );
// `;
//   return create;
// }
// createTable();
