function firstPromise (shouldFail = false, delay=1000, id=0) {
  console.log(`The promise with id:${id} is pending...`);
  return new Promise(function (resolve, reject) {
    setTimeout( function () {
      if (shouldFail) {
        return reject(new Error(`The promise with id:${id} has failed XD XD XD`));
      } else {
        return resolve(`The promise with id:${id} was fulfilled!`);
      }
    }, delay);
  });
}

function main() {

  
  let shouldFail = Boolean(process.argv[2]);
  let shouldFailAll = Boolean(process.argv[3]);


  
  firstPromise(shouldFail)
    .then (function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err.message);
    });
  
  
  let promiseArr = [];
  for (let i=1; i < 6; i ++) {
    let shouldFail = false;
    if (i % 2 === 0) {
      shouldFail = shouldFailAll;
    }
    promiseArr.push(firstPromise(shouldFail, i * 1000, i));
  }
  
  Promise.all(promiseArr)
  .then (function (res) {
    console.log('All promises were resolved:');
    console.log(res);
  })
  .catch (function (err) {
    console.log(err);
  });
  
  
  Promise.race(promiseArr)
  .then(function (res) {
    console.log('The following promise won the race *CLAP CLAP*');
    console.log(res);
  })
  .catch(function (err) {
    console.log('The following promise runined everything *CRY*');
    console.log(err);
  });

}

main();