const inventors = [
 { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
 { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
 { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
 { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
 { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
 { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
 { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
 ];

 const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Ben, Tony', 'Berry, Wendell',
 'Bierce, Abrose'];
 
 // 1. Array.prototype.filter()
 // filter who were born in the 1500's
 
 // const fifteen = inventors.filter(function(inventor) {
 //   if(inventor.year >= 1500 && inventor.year < 1600) {
 //    return true;
 //   }
 // });
 const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
 console.table(fifteen);
 
  // 2. Array.prototype.map()
  //array with inventory first and last name
  
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  console.log(fullNames);
  
  // 3. Array.prototype.sort()
  //oldest to youngest
  
  // const ordered = inventors.sort(function(a, b) {
  //   if(a.year > b.year) {
  //    return 1;
  //   } else {
  //    return -1;
  //   }
  // });
  const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
  console.table(ordered);
  
  // 4. Array.prototype.reduce()
  //how many years did all the inventors live?
  
  const totalYear = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);
  console.log(totalYear); 
  // 5. sort by years lived
  
  const oldest = inventors.sort(function(a, b) {
   const lastGuy = a.passed - a.year;
   const nextGuy = b.passed - b.year;
   return lastGuy > nextGuy ? -1 : 1;
  });
  
  console.table(oldest);
  
  // 6. boulevards in Paris that contain "de" anywhere in the name
  
  // const category = document.querySelector('.mv-category');
  // const links = Array.from(category.querySelectorAll('a')); //create array Array.from() or [...category.querySelektorAll('a')];
  // const de = links
  // .map(link => link.textContent)
  // .filter(streetName => streetName.includes('de'));
  
  // 7. sort the people alphabetically by last name
  
  const alpha = people.sort((lastOne, nextOne) => {
   const [aLast, aFirst] = lastOne.split(', ');
   const [bLast, bFirst] = nextOne.split(', ');
   return aFirst > bFirst ? 1 : -1;
  });
  console.log(alpha)
  
  // 8. sum up the instances of each of these
  
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk',
  'car', 'van', 'bike', 'van', 'truck', 'runing'];
  
  const transportation = data.reduce(function(obj, item) {
    if(!obj[item]) {
     obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
  
  console.log(transportation);