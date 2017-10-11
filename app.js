module.exports = {
  // function toSentence(arr) {
  //   var result = "";
  //   if (arr.length === 0) {
  //       return result;
  //   }
  //   for (var i = 0; i < arr.length - 2; i++) {
  //     result += arr[i] + ", ";
  //   }
  //   return result + arr[arr.length - 2] + " and " + arr[arr.length - 1];
  // }
  toSentence: function(arr) {
    return arr.reduce(function(sentence, name, index, names) {
      if (index === names.length - 2) {
        sentence += name + " and "
      } else if (index === names.length - 1) {
        sentence += name
      } else {
       sentence += name + ", ";
      }
      return sentence
    }, "")
  },
  arrayOfNumbers: function(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
      result.push(i);
    }
    return result;
  },
  acronym: function(arr) {
    return arr.reduce((acronym, word) => {
    acronym += word.charAt(0)
    return acronym
    }, "")
  },
  // function replace(arr, from, to) {
  //   var result = [];
  //   for (var i = 0; i < arr.length; i++) {
  //       result.push(arr[i]);
  //       if (arr[i] === from) {
  //           result[i] = to;
  //       }
  //   }
  //   return result;
  // }
  replace: function(arr,from,to) {
    var result = [];
    arr.map((num, index)=> {
      if(num===from) {
        result[index] = to
      } else {
        result[index] = num
      }
    })
    return result;
  }
}
