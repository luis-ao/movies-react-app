const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzA1Mjc2ZjM4M2EyMDg4OTk2MDFmYmMzN2Y4YjU4NiIsInN1YiI6IjYyNDM0OGY4Yzc0MGQ5MDA0N2FkNDc1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FmNNiDK7VWIieEZHx_gRzGarMU0slipFw9A0tmZZ2hw",
      // Al ser una separada por un guión es obligatorio usar doble comilla
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
