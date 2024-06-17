function isPal(str) {
  let newstr; 
  let newstrarr;
  let palidr; 

  if (typeof str === "string") {
    newstr = str.toLowerCase(); 
  } else {
    newstr = str.toString.toLowerCase(); 
  }

 
  newstr = newstr.replace(/\s+/g, ""); 

  newstrarr = newstr.split(""); 
  newstrarr.reverse(); 

  palidr = newstrarr.join("").replace(/\s+/g, "");

  if (palidr === newstr) {
    console.log(`Слово ${str} является палиндромом`);
  } else {
    console.log(`Слово ${str} не является палиндромом`);
  }
}

isPal("Довод");
isPal("Сантимент");
isPal("А роза упала на лапу Азора");




