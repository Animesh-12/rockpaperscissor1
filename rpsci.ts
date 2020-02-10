class rock_paper_scissor{
   
    b:number=1;
    c:number=2;
    d:number=3;
    score:number=0;
    score1:number=0;

    constructor(){

        


    }
   campare(choice:number){
       
    switch(choice){

            case 1:
                
                  if(choice==this.b)
                  {
                   console.log('draw')
                   result.textContent=''+'draw';
                //    let result=(document.getElementById("score"));
                // result.textContent=this.score;
                  break;} 
                  else if(choice==this.c )
                  {
                    this.score1+=1;
                    console.log(this.score,'user win')
                    result.textContent=''+'user win';
                    break;
                 
                  }

                 else(choice==this.d )
                 {
                    this.score+=1;
                    console.log(this.score,'user win')
                    result.textContent='admin win';
                    break;
                   
                 }


                


            case 2:
               
                    if(choice>=this.c)
                    {
                        this.score+=1;
                    console.log(this.score,'user win')
                    result.textContent=''+'user win';
                    break;
                    }
                 else if(choice==this.c)

                    {
                        
                        console.log('draw')
                        result.textContent=''+'draw';
                        break;
                     }
                 else(choice==this.c)
                 {
                    this.score1+=1;
                    console.log(this.score1,'admin win')
                    result.textContent=''+'admin win';
                    break;
                 }

                
            case 3:
                   
                        if(choice>=this.d)
                        {
                        this.score1+=1;
                        console.log(this.score1,'admin win')
                        result.textContent='admin win';
                        break;
                        }
                     else if(choice<=this.d)
                     {
                        this.score+=1;
                        console.log(this.score,'user win')
                        result.textContent=''+'user win';

                        break;
                     }
                     else(choice==this.d)
                     {
                      
                        // let result=document.getElementById("score");
                        // result.textContent=this.score;
                        console.log(0,'draw')
                        result.textContent=''+'draw';
                        break;
                     }
    
                    
            case 4:
                console.log('sorry');

           }
       }

   }

window.onload=()=>{
    let obj=new rock_paper_scissor();
    let a1=parseInt((document.getElementById("1") as HTMLInputElement).value);
    let a2=parseInt((document.getElementById("2") as HTMLInputElement).value);
    let a3=parseInt((document.getElementById("3") as HTMLInputElement).value);
    // document.getElementById("1").onclick=function(){new rock_paper_scissor().campare(1)}
    

    // let a2=document.querySelector("#2");
    // let a3=document.querySelector("#3");
   

}

// let m1=new rock_paper_scissor()
// m1.campare()


let result=document.getElementById("score");
