import { BASE_URL } from "~/config/constants";
/**
 * Check if the provided url has the right format
 * @param {string} url - SoundCloud Song Url
 */
export function checkUrl(url) {
  const pattern = /^https:\/\/soundcloud\.com\/[a-z1-9-]*\/[a-z1-9-]*\/?$/;
  if (url === undefined) {
    return null;
  } else {
    return url.match(pattern);
  }
}

export function formatUrl(url) {
  let validUrl = "";
  // Check if url has a url query parameter
  if (url !== "" && checkUrl(url) !== null) {
    validUrl = url;
  } else {
    validUrl = url;
  }
  const base = BASE_URL;
  return base + validUrl;
}

export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export function isPhone() {
  console.log(navigator.userAgent);
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
