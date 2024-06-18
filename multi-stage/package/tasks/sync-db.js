let counter = 0;

const syncDB = () => {
  counter++;

  console.log(`Task executed ${counter} times`)

  return counter
}


module.exports = {
  syncDB
}
