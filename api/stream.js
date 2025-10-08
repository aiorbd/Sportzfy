export default async function handler(req, res) {
  const targetUrl = 'https://networkerror404.top/vm/live.m3u8?id=willowusa';

  const response = await fetch(targetUrl, {
    headers: {
      'Referer': 'https://sportzfy.me/',
      'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0'
    }
  });

  if (!response.ok) {
    return res.status(response.status).send('Stream fetch failed');
  }

  res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
  const body = await response.text();
  res.send(body);
}
