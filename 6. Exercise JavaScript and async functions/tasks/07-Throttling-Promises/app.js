async function throttlePromises() {
    const asyncTask = [
        () => new Promise(resolve => setTimeout(() => {console.log('Task 1 is done'); resolve('Task 1 dobe')}, 1000)),
        () => new Promise(resolve => setTimeout(() => {console.log('Task 2 is done'); resolve('Task 2 dobe')}, 1500)),
        () => new Promise(resolve => setTimeout(() => {console.log('Task 3 is done'); resolve('Task 3 dobe')}, 500)),
        () => new Promise(resolve => setTimeout(() => {console.log('Task 4 is done'); resolve('Task 4 dobe')}, 2000)),
    ];

    async function throttle(tasks, limit) {
        const results = [];
        const executing = [];
        for (const task of tasks) {
            const p = task().then(result => {
                executing.splice(executing.indexOf(p), 1);
                return result;
            });
            executing.push[p];
            results.push[p];
            if (executing.length >= limit) {
                await Promise.race(executing);
            }
        }

        return Promise.all(results);
    }

    const results = await throttle(asyncTask, 2)
    console.log('All task are done', results);
};