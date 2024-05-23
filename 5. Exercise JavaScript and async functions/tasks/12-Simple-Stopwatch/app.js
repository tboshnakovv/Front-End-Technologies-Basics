let stopWatchSeconds = 0;
let stopWatchInterval;
let savedTimeInterval;

function startStopWatch()
{
    stopWatchInterval = setInterval(function(){
        stopWatchSeconds++;
        console.log("Elapsed time: " + stopWatchSeconds + " s")
    }, 1000);

    savedTimeInterval = setInterval(async function(){
        await saveTime(stopWatchSeconds);
    }, 5000);
}

function stopWatch()
{
    clearInterval(stopWatchInterval);
    clearInterval(savedTimeInterval);
    stopWatchSeconds = 0;
}

function saveTime(saveTime)
{
    return new Promise(function(resolve, reject){
        console.log("Saved time: " + saveTime + " s");
        resolve();
    });
}