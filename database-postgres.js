import { randomUUID } from "crypto";
import sql from "./db.js";

export class DatabasePostgres {
  #videos = new Map();

  async list(search) {
    let videos;

    if (search) {
      videos = await sql`select * from videos where title ilike ${
        "%" + search + "%"
      }`;
    } else {
      videos = await sql`select * from videos`;
    }
    return videos;
  }

  async create(videos) {
    const videoId = randomUUID();

    const { title, description, duration } = videos;

    await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`;
  }

  update(id, videos) {}

  delete(id) {}
}
