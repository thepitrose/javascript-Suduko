
    let mattest=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],//יצירת משתנה גלובלי מטריצה זאת תחזיק בסופה את הלוח המושלם
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];  
    //console.log(mattest);
    

    let mat=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],//יצירת משתנה גלובלי מטריצה זאת תחזיק בסופה את הלוח אם חורים בהתאם לרמה 
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];  

    let res=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],//יצירת מטריצה גלבולית מטריצה זאת מקבלת זהה למטריצה שמשעל אך בנוסף מקבלת במקום החורים את הנתונים מהמשתמש
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];  

    let hintsum=3;//כמות רמזים 

  
function cleanb(){// פונקציה לניקוי לוח למשחק חדש
   
    hintsum=3;//איפוס רמזים 
       for(let row = 0 ; row < 9 ; row++){// איפוס כול הלוח לצבע שחור ריק וחסום
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
    
    newa(mat,9);// בונה את הלוח
    eazy(); // מכניס חורים בהתאם לרמה
    bob(); // מכניס אינפוט במקום האפס שבלוח
    console.log(mat);
    console.log(mattest);
}

function newa(mat,xx){// פונקציה שממלא את הלוח 
 

    
let Sarray= [1,2,3,4,5,6,7,8,9];//מערך שמציג מספרים מ1-9 בכול שורה 
Sarray=shuffle(Sarray); // מערבב את המערך


    for(i=0 ;i<9 ;i++)// ממלא את השורה העליונה באופן רנדומלי 
    {
            mat[0][i]=Sarray[i];        
        }
      
  gettopl(mat);  //ממלאה את המרובע העליון השמאלי 
  gettopm(mat); // ממלאה את המרובע העליון המרכזי
  gettopr(mat); // ממלאה את המרובע העליון הימני


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

//ar=mat = הלוח שבונים
function gettopl(ar){//ממלא את המרובע השמאלי 
let temp=[];
let i;
for(i=0;i<6;i++){       // אוגר את שש המספרים שאינם מופעים באותו הריבוע
temp.push(ar[0][i+3]);
}
temp=shuffle(temp); // מערבב אותם
for(i=0;i<3;i++){
    let x=temp[i]; // מכניס את ה3 הראשונים למרכז הריבוע העליון השמאלי
    ar[1][i]=x;
}
for(i=0;i<3;i++){
    let x=temp[i+3]; // מכניס את ה3 הנותרים לתחתית הריבוע העליון השמאלי
    ar[2][i]=x;
}
}


function gettopm(ar){
    let temp=[];
    let i;
    for(i=1;i<10;i++){    // ממעלה במספרים מאחד עד תשע בתנאי שאינם בשורה מצד שמאל או בשורה מעליו
        if(ar[1][0]!=i &&ar[1][1]!=i && ar[1][2]!=i && ar[0][3]!=i && ar[0][4]!=i && ar[0][5]!=i)
        {
            temp.push(i)
        }
    }
    temp=shuffle(temp);//מערבבת את המספרים 
    let j=0 
    let t=0
    while(t<3){
        if(temp[j]==ar[2][0] || temp[j]==ar[2][1] || temp[j]==ar[2][2] || temp[j]==ar[0][0] || temp[j]==ar[0][1] || temp[j]==ar[0][2] ) // מכניס את המספרים לשורה האמצעית בתנאי שהם מופעים בריבוע השמאלי בשורה העליונה או התחתונה
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
 temp=[]; // מאפס את המערך הזמני
for(i=1;i<10;i++){
    if(ar[0][3]!=i &&ar[0][4]!=i && ar[0][5]!=i && ar[1][3]!=i && ar[1][4]!=i && ar[1][5]!=i) // מכניס את כל המספרים מאחד עד תשע שאינם בשורות מעליו
    {
        temp.push(i)
    }
}
for(i=0;i<3;i++){  // מכניס את המספרים לשורה התחתונה במרובע העליון המרכזי
    x=temp[i];
    ar[2][i+3]=x;
}
for(i=0;i<3;i++){  // בודק אם אין התנגשות בין המספרים שהוצבו למספרים מהשורה התחתונה של הריבוע העליון השמאלי
    if (ar[2][i+3]==ar[2][0] || ar[2][i+3]==ar[2][1] || ar[2][i+3]==ar[2][2]){  // במידה ויש טעות מחליף את המספר במספר שבתא מעליו
        let x = ar[2][i+3];
        ar[2][i+3]=ar[1][i+3];
        ar[1][i+3]=x;
    }
}
}
 function gettopr(ar){//ממלא את הריבוע הימני העליון 
let temp =[]; // מערך זמני לשורה למילוי השורה האמצעית
let temp2 =[]; // מערך זמני לשורה למילוי השורה התחתונה
let i ;
for(i=1;i<10;i++){ // מכניס את כל המפרים מאחד עד תשע 
    
            if(i!=ar[1][0] && i!=ar[1][1] && i!=ar[1][2] && i!=ar[1][3] && i!=ar[1][4] && i!=ar[1][5] ) // כל עוד אינם מופעים בשורה המרכזית של הריבועים השמאלי והמרכזי
            {
                temp.push(i); 
            }

            if(i!=ar[2][0] && i!=ar[2][1] && i!=ar[2][2] && i!=ar[2][3] && i!=ar[2][4] && i!=ar[2][5] ) // כל עוד אינם מופעים בשורה התחתונה של הריבועים השמאלי והמרכזי
            {
                temp2.push(i);
            }
}
temp = shuffle(temp);
temp2 = shuffle(temp2);

for(i=0;i<3;i++){  // מציב בשורה המרכזית של הריבוע הימני העליון
let x =temp[i];
ar[1][i+6]=x;

let y =temp2[i];  // מציב בשורה התחתונה של הריבוע הימני העליון
ar[2][i+6]=y;

}

 }

 function fillt (ar,x,xx,y,yy,t){
let temp =[]; // מספרים שאינם חוקים לאותו התא
let temp2 =[]; // כל המספרים מאחד עד תשע 
let i 
for(i=y-1;i>=0;i--){ // ממלאה את כל המסםרים מעל אותו התא
    temp.push(ar[i][yy]);
    
}
for(i=x-1;i>=0;i--){ // ממעלה את כל המספרים משמאלו
    temp.push(ar[xx][i]);
    
}
for(i=1;i<10;i++){
    temp2.push(i); // כל המספרים מאחד עד תשע 
    
}




temp2=removenum(temp); // מסיר את המספרים שכבר הופיעו 
temp2=shuffle(temp2);

if(temp2.length!=0)
{

        ar[xx][yy]=temp2[0]; // אם המספר חוקי, מוצב לתא המתאים
    
}


else{
   // newa(ar,xx);  // פקודה אשר הלוח אינו תקין מתחילה אותו מחדש, הוסרה למען שיפור ביצועים 
    for(i=0;i<9;i++){
        fillt(ar,i,t,t,i,t); // במידה ואין מספר תקין לאותו התא, מנסה מחדש
    }
}

}

 function fillm (ar,x,xx,y,yy,t){
    let temp =[]; // מספרים שאינם חוקים לאותו התא
    let temp2 =[]; // כל המספרים מאחד עד תשע 
    let i 
    for(i=y-1;i>=0;i--){ // ממלאה את כל המסםרים מעל אותו התא
        temp.push(ar[i][yy]);
        
    }
    for(i=x-1;i>=0;i--){ // ממעלה את כל המספרים משמאלו
        temp.push(ar[xx][i]);
        
    }
             // מוסיף את המספרים של השורה מאליו באותו התא
    if (x%3==1)  // אם אנו בתא המרכזי בשורה
    {
        temp.push(ar[y-1][x-1]);  // מוסיף את המספר השמאלי העליון
        temp.push(ar[y-1][x]); // מוסיף את המספר העליון
        temp.push(ar[y-1][x+1]); //  מוסיף את המספר העליון הימני

        if (x==1)
        {
            temp.push(ar[y-1][x+1]);

        }

    }

    if (x%3==2) // אם אנו בתא הימני ביותר בשורה
    {
        temp.push(ar[y-1][x-2]); // התא העליון הימני ביותר
        temp.push(ar[y-1][x-1]); // התא העליון האמצעי
        temp.push(ar[y-1][x]); // התא העליון 

    }

    if (x%3==0) // אם אנו בתא השמאלי ביותר 
    {
        temp.push(ar[y-1][x]);  // התא העליון 
        temp.push(ar[y-1][x+1]); // התא העליון האמצעי
        temp.push(ar[y-1][x+2]);  // התא העליון הימני ביותר
    }

    for(i=1;i<10;i++){
        temp2.push(i); 
        
    }

    temp2=removenum(temp); // מסיר את המספרים שכבר הופיעו 
    temp2=shuffle(temp2);
    
    if(temp2.length!=0)
    {
    
            ar[xx][yy]=temp2[0];  // אם המספר חוקי, מוצב לתא המתאים
        
    }
    
    
    else{
       // newa(ar,xx);  // פקודה אשר הלוח אינו תקין מתחילה אותו מחדש, הוסרה למען שיפור ביצועים 
        for(i=0;i<9;i++){
            fillm(ar,i,t,t,i,t); // במידה ואין מספר תקין לאותו התא, מנסה מחדש
        }
    }
 }

   

 function filld (ar,x,xx,y,yy,t){
    let temp =[];
    let temp2 =[];
    let i 
    for(i=y-1;i>=0;i--){  // ממלאה את כל המסםרים מעל אותו התא
        temp.push(ar[i][yy]);
        
    }
    for(i=x-1;i>=0;i--){
        temp.push(ar[xx][i]); // ממעלה את כל המספרים משמאלו
        
    }


    if (x>2 && x<8) // 
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

        if (x<8)  // תנאי אשר מונע יציאה משורות המטריצה 
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
        newa(ar,xx);   // במידה ואין מספר שניתן להכניס לתא, כל הלוח נבנה מחדש 
        for(i=0;i<9;i++){
            filld(ar,i,t,t,i,t);
        }
    }
    
    }




    function removenum(t)//מסיר מספרים שנמצאים 
    {   let temp =[];
        let i;
        let j;
        t.sort(function(a, b){return a - b}); // מסדר את המערך באופן מהקטן לגדול
       // alert(t);
        t = t.filter( function( item, index, inputArray ) {   // מסיר כפליות, פונקציה מגוגל 
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
while(tt<30) // בהתאם לרמה
{
    let ix=Math.floor(Math.random() * 9)+0;        // מספר רנדומלי מ0 עד 8
    let iy=Math.floor(Math.random() * 9)+0;    // מספר רנדומלי מ0 עד 8
    if (mat[ix][iy]!==0)  // אם בתא זה אין חור,תיצור בו חור     
    {
        mat[ix][iy]=0; // יוצר חור
        tt++; // גדל רק אם מצא תא ללא חור, דבר המבטיח שלא היו מעט מדי חורים כדי שהרמה לא תירד 
    }
}
}
function copyb(){ // משכפל בין הלוח שיצרו , כדי שלוח אחד נוכל לחורר ולוח שני היה קיים לצורך השווה ורמזים
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
    let cc=0; // כמות השגיאות של המשתמש

    let notzero= allzero();  // בדוק אם המשחק התחיל 
    if (notzero==0)
    {
        alert("Please start a game");
    }

    else{
    for(i=0;i<res.length;i++)
    {
        for(j=0;j<mat[0].length;j++)
        {
            if (res[i][j]!=mattest[i][j])   // במידה והמספר הכניס המשתמש אינו תואם למספר של הלוח התקין, נספרת לו טעות 
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
    let temp=0; // בקרה שהפנוקציה תיתן רק רמז אחד 

    let notzero= allzero(); // בדוק אם המשחק התחיל 
    if (notzero==0)
    {
        alert("Please start a game");
    }

    else
    {
    if (hintsum>0) // בודק אם קיימים רמזים למשתמש 
    {
        alert("you have "+hintsum+" hints");
    for(i=0;i<mat.length;i++)
    {
        for(j=0;j<mat[0].length;j++)   
        {
            if (mat[i][j]==0 && temp==0) // מחפש תא שיש בו חור, ממלאה אותו בהתאם ללוח המלא
            {
                let xx = mattest[i][j]; // לוקח את המספר שצריך להיות באותו התא מהלוח התקין
                mat[i][j]=xx; // מציב אותו במטרציה של המשתמש
                document.getElementById(`c${i}${j}`).value = mat[i][j]; // מציג אותו בלוח
                document.getElementById(`c${i}${j}`).style.color="orange"; // צובע אותו בכתום
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


function allzero()  // בדוקת אם הלוח ריק או לא , כי שמתמש לא ילחץ על רמז או פיתרון לפני שהלוח מוכן 
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

return cc; // מחזיר 0 אם הלוח ריק 
}



