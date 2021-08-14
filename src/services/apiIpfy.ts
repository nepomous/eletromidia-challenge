import { BASE_URL } from "../config";

const ACCESS_TOKEN = `apiKey=${process.env.REACT_APP_ACCESS_TOKEN}`

export const fetchLocalMapBox = (local: string) =>
fetch(
    `${BASE_URL}?${ACCESS_TOKEN}&ipAddress=8.8.8.8`
)
  .then(response => response.json())
  .then(data => data);