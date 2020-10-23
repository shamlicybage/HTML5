
    function setKey(){
        if(typeof(Storage)!=="undefined"){
            document.getElementById("browser").innerHTML="Your browser supports both local storage and session storage!!"
            var key=document.getElementById('key').value;
        var val=document.getElementById('val').value;
        localStorage.setItem(key,val);

        var table = document.getElementById("myTable");
        console.log(table);
        var rowcnt=table.rows.length;
        console.log(table.rows);
        var row = table.insertRow(rowcnt);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        
        cell1.innerHTML = key;
        cell2.innerHTML = val;
        cell3.innerHTML= '<button type="button" onClick="removeKey(this)" >'
        + 'Remove</button>';
            
        }
        else{
            document.getElementById("browser").innerHTML="Your browser does not support both local storage and session storage!!"
        }
}
        
       function removeKey(rmButton){
           console.log(rmButton.parentNode.parentNode);
           console.log(this.key);
           localStorage.removeItem(this.key.value);
           console.log(this.key.value);
           var myTable = document.getElementById('myTable');
           myTable.deleteRow(rmButton.parentNode.parentNode.rowIndex);
       }


       function clearAllKeys(){
           localStorage.clear();
        var Parent = document.getElementById('myTable');
        console.log(Parent);
        while(Parent.hasChildNodes())
        {
           Parent.removeChild(Parent.firstChild);
        }
       }
 

       function setKeyStorage(){
        if(typeof(Storage)!=="undefined"){
            document.getElementById("browser").innerHTML="Your browser supports both local storage and session storage!!"
            var KEYs=document.getElementById('keyS').value;
        var VALs=document.getElementById('valS').value;
        sessionStorage.setItem(KEYs,VALs);

        var table = document.getElementById("myTableS");
        var rowcnt=table.rows.length;
        var row = table.insertRow(rowcnt);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        
        
        cell1.innerHTML = KEYs;
        cell2.innerHTML = VALs;
        cell3.innerHTML= '<button type="button" onClick="removeKeyS(this)" >'
        + 'Remove</button>';
            
        }
        else{
            document.getElementById("browser").innerHTML="Your browser does not support both local storage and session storage!!"
        }
}

function removeKeyS(rmButton){
    console.log(rmButton.parentNode.parentNode);
    console.log(this.keyS.value);
    
    sessionStorage.removeItem(this.keyS.value);

    var myTable = document.getElementById('myTableS');
    myTable.deleteRow(rmButton.parentNode.parentNode.rowIndex);
}

function clearAllKeysS(){
    sessionStorage.clear();
 var Parent = document.getElementById('myTableS');
 console.log(Parent);
 while(Parent.hasChildNodes())
 {
    Parent.removeChild(Parent.firstChild);
 }
}
