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
      tabulation.active = true;
      localStorage.setItem("settings.tabulation", "true");
    }
    else{
      this.classList.remove("on");
      this.classList.add("off");
      tabulation.active = false;
      localStorage.setItem("settings.tabulation", "false");
    }
  };

  if(localStorage.getItem("settings.autocomplete") == "true") {
    tabulation.classList.remove("off");
    tabulation.classList.add("on");
    tabulation.active = true;
  }

  return tabulation;
});
