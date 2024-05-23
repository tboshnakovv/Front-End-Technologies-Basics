async function fetchParallel() {
  const [res1, res2] = await Promise.all([
    fetch('https://swapi.dev/api/people/1').then(res => res.json()),
    fetch('https://swapi.dev/api/people/2').then(res => res.json())
  ]);
  console.log(res1, res2);
}

async function fetchParallelWithAsyncAwait() {
  const [res1, res2] = await Promise.all([
    fetch('https://swapi.dev/api/people/1'),
    fetch('https://swapi.dev/api/people/2')
  ]);

  const data1 = await res1.json();
  const data2 = await res2.json();
  console.log(data1, data2);
}