debugger;


function validateform(){

  let username=document.getElementById('username').value; 
  let userpassword=document.getElementById('userpassword').value; 

   let testname= 'abcd';
   let testpassword = '1234'
   let correctchar =0; 
   

   if(username.length==0 || userpassword==0)
   { 
     if (username.length==0)
     {
      document.getElementById('errorMsg').innerHTML='Type user name';
      document.getElementById('errorMsg').style.display='block';
      document.getElementById('errorMsg').style.color='red';
    //alert('Type username');
     }
     if (userpassword.length==0)
     {
      
      document.getElementById('errorMsgps').innerHTML='Type password';
      document.getElementById('errorMsgps').style.display='block';
      document.getElementById('errorMsgps').style.color='red';
     //alert('Type password');
     }

   }
    else if(username.length==testname.length && userpassword.length==testpassword.length)
      {
        for(let i=0; i<testname.length;i++)
        {
          if(testname.charAt(i)==username.charAt(i))
            {
              correctchar++;
            }
            else{
              document.getElementById('errorMsg').innerHTML='Type user name';
              document.getElementById('errorMsg').style.display='block';
              document.getElementById('errorMsg').style.color='red';
              //alert('User name not correct :( ');  
              correctchar=0;
              break;
            }
        }

        for(let i=0; i<userpassword.length;i++)
        {
          if(userpassword.charAt(i)==testpassword.charAt(i))
            {
              correctchar++;
            }
            else{
              document.getElementById('errorMsgps').innerHTML='User password not correct';
              document.getElementById('errorMsgps').style.display='block';
              document.getElementById('errorMsgps').style.color='red';
              //alert('User password not correct :( ');
              correctchar=0;
              break;
            }
        }
      }
      else{
        document.getElementById('errorMsg').innerHTML='Username or password no correct';
        document.getElementById('errorMsg').style.display='block';
        document.getElementById('errorMsg').style.color='red';
        //alert('Username or password no correct :(');
        
        
      }
      

   if (correctchar==(testname.length+testpassword.length))  
  { 
    window.open("welcome.html");
  }
 
}

// const minValue=(arr)=>{
//   let minimum=arr[0];
//   let minIndex=0;
//   arr.forEach((item,i)=>{
//     if(minimum<item){
//     minimum=item
//     minIndex=i;
//   }
    
//   });
//   console.log(minIndex);
  
// }
// debugger;
// let person = {
//   firstName: "alon",
//   lastName: "galay",
//   age: 50,
//   eyeColor: "brown"
// }
// object(person);
// function object(age){

//   if(person.age>20){
//     alert('yes');
//   }
//   else
//   alert('no');
// }

// let arr =[-2,5,3,1,11];

// let res =arr.map((item)=>{
//   if(item%2==0){
//     return 'even';

//   }
//   return 'odd';
// })  
// alert(res);
// debugger;
// let age = [20,5,4,8,-2,3,120];
// avg(age);
// function abg (arr){
//   let avg = 0;
//   try{
//     for(let i=0;arr.length;i++){
//       if(arr[i]<0){
//         throw 'error'
//       }
//       avg+=[i];
//     }
//   }
//   catch(e){
//     console.error(e);
//   }
//   avg/= arr.length;
//   return avg; 
// }