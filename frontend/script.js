fetch('/api/data')
  .then(res => res.json())
  .then(data => {
    document.getElementById('info').innerText =
      JSON.stringify(data, null, 2);
  });
