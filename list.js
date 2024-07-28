const client = require("./client");

async function inDefine() {
  await client.client.lpush("mess", 1);
  await client.client.lpush("messo", 82);
  await client.client.lpush("messa", 3);
  await client.client.lpush("message", 4);
  await client.client.lpush("messags", 5);
  await client.client.lpush("messagess", 6);
  await client.client.lpush("messagesi", 7);
  await client.client.lpush("messageso", 8);
  await client.client.lpush("messagesu", 9);
  const result = await client.client.lpush("messagesl", 11);
}
inDefine();
