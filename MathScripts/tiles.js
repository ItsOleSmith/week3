function dimensionsForProject(box){
   var boxAmount = (box / 12)
   var boxpercent = boxAmount + (boxAmount * .1)

   return Math.round(boxpercent);
}
 var tilesAmount = Math.floor((Math.random()* 1000) + 50 );
 console.log("You will need " + tilesAmount +" tiles  from " + dimensionsForProject (tilesAmount) + " boxes." );