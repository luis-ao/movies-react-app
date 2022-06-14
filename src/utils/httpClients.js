const API = process.env.REACT_APP_API;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer " + API_TOKEN,
      // Al ser una separada por un guión es obligatorio usar doble comilla
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
