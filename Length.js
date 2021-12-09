const articule = (artist) => {
  let pro = "";
  let allt = artist.split(" ");
  if(allt.length > 3){
    pro = allt[0] +' '+ allt[1] +' '+ allt[2] +' '+ '...'
  }else{
    pro = allt.join(' ')
  }
  return pro
};
module.exports = articule;
