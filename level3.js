
    let mattest=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],//מערך שבונה את הלוח מ0
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];  
    //console.log(mattest);
    

    let mat=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];  

    let res=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];  

    let hintsum=5;

  
function cleanb(){
   
    hintsum=5;
       for(let row = 0 ; row < 9 ; row++){
        for(let col = 0;col<9 ; col ++){

           document.getElementById(`c${row}${col}`).disabled = true;
           document.getElementById(`c${row}${col}`).value = "";
           document.getElementById(`c${row}${col}`).style.color="black";
        
    }
     mattest=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],//מערך שמאפס 
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];  

     mat=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],//מערך שמאפס 
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];  
     
}

}


function func()//בונה לוח שלם 
{
    cleanb();
    
    newa(mat,9);
    eazy();
    bob();
    console.log(mat);
    console.log(mattest);
}

function newa(mat,xx){// פונקציה שממלא את הלוח 
 

    
let Sarray= [1,2,3,4,5,6,7,8,9];//מערך שמציג מספרים מ1-9 בכול שורה 
Sarray=shuffle(Sarray);


    for(i=0 ;i<9 ;i++)// ממלא את השורה העליונה באופן רנדומלי 
    {
            mat[0][i]=Sarray[i];        
        }
      
  gettopl(mat); 
  gettopm(mat); 
  gettopr(mat);


  for( let i =3 ; i<xx ;i ++ ){
      for(let j =0 ; j<9 ; j++){
          if(i%3==0)
          {
              fillt(mat,j,i,i,j,i);//ממלא את שורות   4 6 
          }

          if(i%3==1)
          {
              fillm(mat,j,i,i,j,i);//שורות 5 7
          }

          if(i%3==2)
          {
             filld(mat,j,i,i,j,i);// שורות 8 6
          }
      }
  }

 
  
copyb() ;// מעתיקה את הלוח למטריצה של המשתמש

}


function gettopl(ar){//ממלא את המרובע השמאלי 
let temp=[];
let i;
for(i=0;i<6;i++){
temp.push(ar[0][i+3]);
}
temp=shuffle(temp);
for(i=0;i<3;i++){
    let x=temp[i];
    ar[1][i]=x;
}
for(i=0;i<3;i++){
    let x=temp[i+3];
    ar[2][i]=x;
}
}


function gettopm(ar){
    let temp=[];
    let i;
    for(i=1;i<10;i++){
        if(ar[1][0]!=i &&ar[1][1]!=i && ar[1][2]!=i && ar[0][3]!=i && ar[0][4]!=i && ar[0][5]!=i)
        {
            temp.push(i)
        }
    }
    temp=shuffle(temp);//מערבבת את המספרים 
    let j=0 
    let t=0
    while(t<3){
        if(temp[j]==ar[2][0] || temp[j]==ar[2][1] || temp[j]==ar[2][2] || temp[j]==ar[0][0] || temp[j]==ar[0][1] || temp[j]==ar[0][2] )
        {
        let x =temp[j];
         ar[1][t+3]=x;
         temp.shift();
        t++
    }
        else
        {
        temp.shift();

        }
    
}
 temp=[]; 
for(i=1;i<10;i++){
    if(ar[0][3]!=i &&ar[0][4]!=i && ar[0][5]!=i && ar[1][3]!=i && ar[1][4]!=i && ar[1][5]!=i)
    {
        temp.push(i)
    }
}
for(i=0;i<3;i++){
    x=temp[i];
    ar[2][i+3]=x;
}
for(i=0;i<3;i++){
    if (ar[2][i+3]==ar[2][0] || ar[2][i+3]==ar[2][1] || ar[2][i+3]==ar[2][2]){
        let x = ar[2][i+3];
        ar[2][i+3]=ar[1][i+3];
        ar[1][i+3]=x;
    }
}
}
 function gettopr(ar){//ממלא את הריבוע הימני העליון 
let temp =[];
let temp2 =[];
let i ;
for(i=1;i<10;i++){
    
            if(i!=ar[1][0] && i!=ar[1][1] && i!=ar[1][2] && i!=ar[1][3] && i!=ar[1][4] && i!=ar[1][5] )
            {
                temp.push(i);
            }

            if(i!=ar[2][0] && i!=ar[2][1] && i!=ar[2][2] && i!=ar[2][3] && i!=ar[2][4] && i!=ar[2][5] )
            {
                temp2.push(i);
            }
}
temp = shuffle(temp);
temp2 = shuffle(temp2);

for(i=0;i<3;i++){
let x =temp[i];
ar[1][i+6]=x;

let y =temp2[i];
ar[2][i+6]=y;

}

 }

 function fillt (ar,x,xx,y,yy,t){
let temp =[];
let temp2 =[];
let i 
for(i=y-1;i>=0;i--){
    temp.push(ar[i][yy]);
    
}
for(i=x-1;i>=0;i--){
    temp.push(ar[xx][i]);
    
}
for(i=1;i<10;i++){
    temp2.push(i);
    
}




temp2=removenum(temp);
temp2=shuffle(temp2);

if(temp2.length!=0)
{

        ar[xx][yy]=temp2[0];
    
}


else{
   // newa(ar,xx);
    for(i=0;i<9;i++){
        fillt(ar,i,t,t,i,t);
    }
}

}

 function fillm (ar,x,xx,y,yy,t){
    let temp =[];
    let temp2 =[];
    let i 
    for(i=y-1;i>=0;i--){
        temp.push(ar[i][yy]);
        
    }
    for(i=x-1;i>=0;i--){
        temp.push(ar[xx][i]);
        
    }

    if (x%3==1)
    {
        temp.push(ar[y-1][x-1]);
        temp.push(ar[y-1][x]);
        temp.push(ar[y-1][x+1]);

        if (x==1)
        {
            temp.push(ar[y-1][x+1]);

        }

    }

    if (x%3==2)
    {
        temp.push(ar[y-1][x-2]);
        temp.push(ar[y-1][x-1]);
        temp.push(ar[y-1][x]);

    }

    if (x%3==0)
    {
        temp.push(ar[y-1][x]);
        temp.push(ar[y-1][x+1]);
        temp.push(ar[y-1][x+2]);
    }

    for(i=1;i<10;i++){
        temp2.push(i);
        
    }

    temp2=removenum(temp);
    temp2=shuffle(temp2);
    
    if(temp2.length!=0)
    {
    
            ar[xx][yy]=temp2[0];
        
    }
    
    
    else{
       // newa(ar,xx);
        for(i=0;i<9;i++){
            fillm(ar,i,t,t,i,t);
        }
    }
 }

   

 function filld (ar,x,xx,y,yy,t){
    let temp =[];
    let temp2 =[];
    let i 
    for(i=y-1;i>=0;i--){
        temp.push(ar[i][yy]);
        
    }
    for(i=x-1;i>=0;i--){
        temp.push(ar[xx][i]);
        
    }


    if (x>2 && x<8)
    {
        if(x%3==1)
        {
            temp.push(ar[y-1][x-1]);
            temp.push(ar[y-1][x]);
            temp.push(ar[y-1][x+1]);

            temp.push(ar[y-2][x-1]);
            temp.push(ar[y-2][x]);
            temp.push(ar[y-2][x+1]);
        }

        if(x%3==2)
        {
            temp.push(ar[y-1][x]);
            temp.push(ar[y-1][x+1]);
            temp.push(ar[y-1][x+2]);

            temp.push(ar[y-2][x]);
            temp.push(ar[y-2][x+1]);
            temp.push(ar[y-2][x+2]);
        }

        if(x%3==0)
        { 
            temp.push(ar[y-1][x]);
            temp.push(ar[y-1][x+1]);
            temp.push(ar[y-1][x+2]);

            temp.push(ar[y-2][x]);
            temp.push(ar[y-2][x+1]);
            temp.push(ar[y-2][x+2]);

        }
    }
    else {

        if (x<8)
        {   
            for ( i =0 ;i<3; i++)
            {  
                temp.push(ar[xx-2][i]);          
            }

            for ( i =0 ;i<3; i++)
            {  
                temp.push(ar[xx-1][i]);                  
            }

        }
        else 
        {
            temp.push(ar[y-1][x]);
            temp.push(ar[y-1][x-1]);
            temp.push(ar[y-1][x-2]);

            temp.push(ar[y-2][x]);
            temp.push(ar[y-2][x-1]);
            temp.push(ar[y-2][x-2]);

        }
    }

    for(i=1;i<10;i++){
        temp2.push(i);
        
    }
    
    
    
    
    temp2=removenum(temp);
    temp2=shuffle(temp2);
    
    if(temp2.length!=0)
    {
    
            ar[xx][yy]=temp2[0];
        
    }
    
    
    else{
        newa(ar,xx);
        for(i=0;i<9;i++){
            filld(ar,i,t,t,i,t);
        }
    }
    
    }




    function removenum(t)//מסיר מספרים שנמצאים 
    {   let temp =[];
        let i;
        let j;
        t.sort(function(a, b){return a - b});
       // alert(t);
        t = t.filter( function( item, index, inputArray ) {
            return inputArray.indexOf(item) == index;
     });
    
    
        
        if(t[0]==0)
        {
            t.shift();
        }
    
     
        for(i=1;i<10;i++)
        {   
            let q=0;
            for(j=0;j<t.length;j++)
            {
                if (t[j]==i)
                {
                    q++;
                }
                
            }
            if (q==0)
            {
                temp.push(i);
            }
        }
      
        //alert(temp);
    return temp;
    }

    


function shuffle(Sarray){//פונקציה שמערבבת את המספרים
    let j,x,i
for(i=Sarray.length-1;i>0;i--){
    j=Math.floor(Math.random() * (i+1));
    x=Sarray[i];
    Sarray[i]=  Sarray[j] 
    Sarray[j]=x;
}
return Sarray;
}
 
 
function bob(){

  
    
    for(let row = 0 ; row < 9 ; row++){
      
        for(let col = 0;col<9 ; col ++){
            if(mat[row][col]==0){
                
               document.getElementById(`c${row}${col}`).disabled = false;//שם אינפוט במקום 0 
               
            }
            else{
               document.getElementById(`c${row}${col}`).value = mat[row][col];// שם ערך את יש אינפוט לא פעיל 
            }
          
        }
    }
   
  
}


function eazy(){//פונקציה לשלב 1 

    
let tt=0;
while(tt<60)
{
    let ix=Math.floor(Math.random() * 9)+0;        
    let iy=Math.floor(Math.random() * 9)+0;  
    if (mat[ix][iy]!==0)      
    {
        mat[ix][iy]=0;
        tt++;
    }
}
}
function copyb(){
    let i
    let j
    for(i=0;i<mat.length;i++)
    {
        for(j=0;j<mat[0].length;j++)
        {
            let x=mat[i][j];
            mattest[i][j]=x;
        }
    }
}



function end(){

    
    res=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];  

    for(let row = 0 ; row < 9 ; row++){
        for(let col = 0 ; col < 9 ; col++){
            res[row][col] = document.getElementById(`c${row}${col}`).value;
        }
    }
     console.log(res);
     finish();
}


function finish(){
    let i
    let j
    let cc=0;

    let notzero= allzero();
    if (notzero==0)
    {
        alert("Please start a game");
    }

    else{
    for(i=0;i<res.length;i++)
    {
        for(j=0;j<mat[0].length;j++)
        {
            if (res[i][j]!=mattest[i][j])
            {
                cc--;
            }
        }
    }
    if (cc<0)
    {
        cc = cc*(-1);
        alert("Please learn to play ,you have "+cc+ " mistakes, how pathetic  :( ");
    }
    else
    {

     alert('Congratulations! You are not a failure!!!  :)');
    }
}
}

function hints()
{

    let i
    let j
    let temp=0;

    let notzero= allzero();
    if (notzero==0)
    {
        alert("Please start a game");
    }

    else
    {
    if (hintsum>0)
    {
        alert("you have "+hintsum+" hints");
    for(i=0;i<mat.length;i++)
    {
        for(j=0;j<mat[0].length;j++)
        {
            if (mat[i][j]==0 && temp==0)
            {
                let xx = mattest[i][j];
                mat[i][j]=xx;
                document.getElementById(`c${i}${j}`).value = mat[i][j];
                document.getElementById(`c${i}${j}`).style.color="orange";
                temp++;
                hintsum--;
                break;
            }

            if (temp>0)
            {
                break;
            }

        }

        if (temp>0)
        {
            break;
        }
    }
  }
else{
    alert("You've run out of hints shame on you");
}
    }
}


function allzero()
{
    let i
    let j
    let cc=0;
    for(i=0;i<res.length;i++)
    {
        for(j=0;j<mat[0].length;j++)
        {
            if (res[i][j]!=mattest[i][j])
            {
                cc--;
            }
        }
    }

return cc;
}



