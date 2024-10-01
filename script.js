function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1===""){
        return -1;
    }
    if(s2===""){
        return  0;
    }
    if(s1!="" && s2!=""){
       let lowerstr= s1.toLowerCase();
       let lowersubstr=s2.toLowerCase();
       let index=lowerstr.indexOf(lowersubstr);
       return index;
    }
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
