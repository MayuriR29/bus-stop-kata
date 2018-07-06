
const busFunction=(bus)=>{
    let sum=0,entry=0;
  bus.forEach((entryExit,index)=>{
    entry=entryExit[0]-entryExit[1];
    sum+=entry;
  })  ;
  if (sum>0){
    return sum;
  }
  else{
      return "Invalid input"
  }

}
module.exports=busFunction