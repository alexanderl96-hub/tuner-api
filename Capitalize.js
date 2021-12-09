const capitalize = (name) => {
  let string = [];
  let count = 0;
  let titulo = name.toLowerCase().split(" ");

  for (let i = 0; i < titulo.length; i++) {
    titulo[i].length < 3
      ? string.push(titulo[i])
      : string.push(titulo[i][0].toUpperCase() + titulo[i].slice(1));
  }
  // if(string.length > 3){
  //   count = string[0] +''+ string[1] +''+ string[2] +''+ '...'
  // }
  return string.join(" ");
};



module.exports = capitalize ;
