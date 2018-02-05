import { OEMBED_QUERY_URL } from "~/config/constants";

export function getSCInfoFromOembed(url) {
  const scUrl = `${OEMBED_QUERY_URL}${url}`;
  return fetch(scUrl, {
    method: "get"
  })
    .then(response => response.json())
    .catch(err => console.log(err));
}
