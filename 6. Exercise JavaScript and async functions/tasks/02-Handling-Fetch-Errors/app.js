async function fetchDataWithErrorHandling() {
    try {
        const response = await fetch('https://swapi.dev/api/people/1'); // 10000
        if(!response.ok) throw new Error('Network response is not ok');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error while fetchin data:', error);
    }
};