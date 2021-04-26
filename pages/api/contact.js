import { validate, contactConstraint } from "../../lib/validate";
import mustGetEnv from "../../lib/env";
import executeWebhook from "../../lib/discord";

const STATUS_OK = 200;
const STATUS_METHOD_NOT_ALLOWED = 405;
const STATUS_BAD_REQUEST = 400;
const WEBHOOK_URL = mustGetEnv("DISCORD_WEBHOOK_URL");

export default function handler(req, res) {
  if (req.method !== "POST")
    return res.status(STATUS_METHOD_NOT_ALLOWED).json({ error: "Only POST method is supported" });

  if (!req.body) return res.status(STATUS_BAD_REQUEST).json({ error: "Missing json body" });

  let json;
  try {
    json = JSON.parse(req.body);
  } catch (e) {
    return res.status(STATUS_BAD_REQUEST).json({ error: "Invalid json" });
  }

  const error = validate(json, contactConstraint);
  if (error !== undefined)
    return res.status(STATUS_BAD_REQUEST).json({ error });

  if (WEBHOOK_URL !== undefined)
    executeWebhook(WEBHOOK_URL, json);

  return res.status(STATUS_OK).json({ ok: true });
}
