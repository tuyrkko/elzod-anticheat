export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { userId, stats, logs } = req.body;

  if (stats?.walkSpeed > 50 || logs?.includes("teleport")) {
    return res.status(200).json({ cheatDetected: true });
  }

  res.status(200).json({ cheatDetected: false });
}
