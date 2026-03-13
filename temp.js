fetch('https://ibb.co/6RWbvsZZ')
  .then(res => res.text())
  .then(text => {
    const match = text.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) console.log(match[1]);
  });
