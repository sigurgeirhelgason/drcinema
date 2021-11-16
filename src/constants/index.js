import ls from "local-storage";

export const GET_ALL_CINEMAS = "GET_ALL_CINEMAS";
export const GET_ALL_MOVIES = "GET_ALL_MOVIES";
export const GET_UPCOMING_MOVIES = "GET_UPCOMING_MOVIES";
export const REFRESH_TOKEN = "REFRESH_TOKEN";

// Constants for kvikmyndir API
export const LOGIN = { username: "tomas17", password: "drcinema" };
export const ENDPOINT = "https://api.kvikmyndir.is/";
export const ENDPOINT_AUTH = "https://api.kvikmyndir.is/authenticate";
export const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZmNlNGMzMDI0YjQzYzFiNzgyNDA5NzgiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IlTDs21hcyBEYW4gSsOzbnNzb24iLCJlbWFpbCI6InRvbWFzMTdAcnUuaXMiLCJ1c2VybmFtZSI6InRvbWFzMTciLCJwYXNzd29yZCI6IiQyYSQwOCR1c1JHUy9zN1MzM2NVVnZpU1ZlZGkuMW4xTms3V0lZaW44djEuYnQ3NUFULzB0Vmd2Zy5SeSIsImRvbWFpbiI6ImRyY2luZW1hIiwibWVzc2FnZSI6InNjaG9vbCBwcm9qZWN0IiwiaWF0IjoxNjA3NzM4NjAxLCJleHAiOjE2MDc4MjUwMDF9.IeFCOSoj6XgMGTU64xnKteqfInxUeMWuzS1IFTQ8Kxc";
export const TOKEN_ = ls.get("token");
// console.log("NÝR TOKEN", ls.get("token"));
