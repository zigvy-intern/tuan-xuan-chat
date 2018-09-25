imp

function showMenu()
{
   var x = document.getElementById("nav");
   if(x.style.display === "none")
   {
       x.style.display="block";
    //    x.style.position="fixed";
   }
   else
        x.style.display="none";
    
}
