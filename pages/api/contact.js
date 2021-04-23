import { validate, contactConstraint } from "../../lib/validate";

const STATUS_METHOD_NOT_ALLOWED = 405;
const STATUS_BAD_REQUEST = 400;

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(STATUS_METHOD_NOT_ALLOWED).json({ error: "Only POST method is supported" });
  }
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

  return res.status(200).json({ error: "i have no clue" });
}
