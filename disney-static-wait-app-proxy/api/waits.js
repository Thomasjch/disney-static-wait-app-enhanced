export default async function handler(req, res) {
  const allowedParkIds = new Set(['5', '6', '7', '8']);
  const parkId = String(req.query.parkId || '6');

  if (!allowedParkIds.has(parkId)) {
    res.status(400).json({ error: 'Invalid parkId' });
    return;
  }

  try {
    const response = await fetch(`https://queue-times.com/parks/${parkId}/queue_times.json`, {
      headers: {
        'User-Agent': 'DisneyWaitTracker/1.0'
      }
    });

    if (!response.ok) {
      res.status(response.status).json({ error: 'Queue-Times request failed' });
      return;
    }

    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unable to load wait times' });
  }
}
