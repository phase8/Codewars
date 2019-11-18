//Most digits


function findLongest(array) {
  var array2 = array.map(function (element) {
    return element.toString()
  })
  array2.sort(function (a, b) {
    return b.length - a.length
  })
  return parseInt(array2[0])
}






















//Are the numbers in order? 


function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}




















//String Merge!


function stringMerge(string1, string2, letter) {
  let index = string1.indexOf(letter)
  let index2 = string2.indexOf(letter)

  let first_part = string1.slice(0, index)
  let second_part = string2.slice(index2, string2.lenght)

  return first_part + second_part




}






















//Array plus array


function arrayPlusArray(arr1, arr2) {

  let one = arr1.concat(arr2)


  let final = one.reduce((a, b) => a + b, 0)


  return final

}




















// Filter out the geese


function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var notgeese = birds.filter(function (bird) {
    return !geese.includes(bird);
  })


  return notgeese

}






















//Fun with ES6 Classes #1 - People, people, people


class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
    this.gender = gender
  }



  sayFullName() {
    return this.firstName + " " + this.lastName;

  }

  static greetExtraTerrestrials(raceName) {
    return "Welcome to Planet Earth " + raceName;
  }
}























//Student's Final Grade


var finalGrade = function (exam, projects) {

  if (exam > 90 || projects > 10) {

    return 100
  };

  if (exam > 75 && projects >= 5) {
    return 90
  }

  if (exam > 50 && projects >= 2) {
    return 75
  }

  return 0

}






















//Polish alphabet


function correctPolishLetters(string) {

  let array1 = string.split("");

  let array2 = array1



  let new_array = array1.map(function changeChar(value) {
    if (value === "ą") {
      return value = "a"
    }
    if (value === "ć") {
      return value = "c"
    }
    if (value === "ę") {
      return value = "e"
    }
    if (value === "ł") {
      return value = "l"
    }
    if (value === "ń") {
      return value = "n"
    }
    if (value === "ó") {
      return value = "o"
    }
    if (value === "ś") {
      return value = "s"
    }
    if (value === "ź") {
      return value = "z"
    }
    if (value === "ż") {
      return value = "z"
    }
    return value
  })


  let joined = new_array.join([separator = ''])




  return joined

}




















//getNames()


function getNames(data) {
  return data.map(a => a.name);
}

20 hours ago
Refactor
Discuss















// Categorize New Member


function openOrSenior(data) {

  var result = data.map(function changeChar(value) {
    if (value[0] >= 55 && value[1] > 7) {
      return value = "Senior"
    }
    return value = "Open"
  })

  return result
}












//Highest and Lowest

function highAndLow(numbers) {



  let array1 = numbers.split(" ");

  console.log(array1)

  let array2 = array1.map(x => parseInt(x))

  console.log(array2)

  let num = array2.filter(function (number) {
    return !isNaN(number) //  returns true or false    
  });



  let max = Math.max(...num)
  let min = Math.min(...num)

  return max.toString() + " " + min.toString()


}











//Leap Years


function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}













//Arithmetic sequence - sum of n elements


function ArithmeticSequenceSum(a, r, n) {




  let total = 0
  for (let i = 0; i < n; i++) {
    total = total + a
    console.log(a)
    console.log(total)
    a = a + r

  }

  return total

}









//Ones and Zeros


const binaryArrayToNumber = arr => {
  let number = arr.join("")

  return parseInt(number, 2);

};











// Remove First and Last Character


function removeChar(str) {


  return str.slice(1, str.length - 1)

};




//Is the string uppercase ?


String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
}











//See You Next Happy Year



function nextHappyYear(year) {
  do {
    year++;
    var s = year.toString();
  }
  while (
    s[0] == s[1] ||
    s[0] == s[2] ||
    s[0] == s[3] ||
    s[1] == s[2] ||
    s[1] == s[3] ||
    s[2] == s[3]
  )
  return year;
}