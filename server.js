const express = require("express");
const axios = require("axios").default;
const app = express();
const client = require("./client");
app.get("/", async (req, res) => {
  const cacheValue = await client.client.get("todos");
  if (cacheValue) return cacheValue;
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  await client.client.set("todos", JSON.stringify(data));
  await client.client.expire("todos", 30);
  return res.json(200, data);
});
app.listen(9000);
