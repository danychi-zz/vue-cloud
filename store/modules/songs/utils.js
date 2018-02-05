import { getSCInfoFromOembed } from "~/service/api-calls";

export async function buildSong(url = "", genre = "", id) {
  const {
    author_name,
    thumbnail_url,
    title,
    description
  } = await getSCInfoFromOembed(url);
  const song = {
    artist: author_name,
    cover: thumbnail_url,
    title,
    genre,
    id,
    url,
    description
  };
  return song;
}
