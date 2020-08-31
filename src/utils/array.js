class ArrayUtils {
  chunkArray(array, chunk_size) {
    let results = [];

    while (array.length) {
      results.push(array.splice(0, chunk_size));
    }

    return results;
  }

  copyArray(array) {
    let results = [];

    for (let elm of array) {
      results.push(elm);
    }

    return results;
  }
}

export default new ArrayUtils();
