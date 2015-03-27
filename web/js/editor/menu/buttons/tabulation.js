/**
 * Created by palra on 27/03/15.
 */
/**
 * Created by palra on 27/03/15.
 */
define(function() {
  var tabulation = document.getElementById("tabulation");
  tabulation.onclick = function(){
    if(this.classList.contains("off")){
      this.classList.remove("off");
      this.classList.add("on");
    }
    else{
      this.classList.remove("on");
      this.classList.add("off");
    }
  };


  return tabulation;
});
