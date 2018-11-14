const fetchData = require('./fetchData');

async function callFetch() {
  console.log('Calling fetch...');
  let comments = null;
  try {
    comments = await fetchData(false);
  } catch( err) {
    console.log(err);
  }

  if (comments) {
    comments.forEach((comment, i) => {
      console.log(`\n${i}: ${comment.body}`);
    });
  }
}

callFetch();