/**
 * Created by palra on 27/03/15.
 */
define([
  'app'
],function(app, tabChange) {

  var changeTab = function(){

    console.log('tabchange');
    // if(tabulation.active === true){
    //   while(app.input.value.indexOf('    ')){
    //     app.input.value = app.input.value.replace('    ', '\t');
    //   }
    }
    else{
      // while(app.input.value.indexOf('\t')){
      //   app.input.value = app.input.value.replace('\t', '    ');
      // }
    }
  }

  var tabulation = document.getElementById("tabulation");
  tabulation.onclick = function(){
    if(this.classList.contains("off")){
      this.classList.remove("off");
      this.classList.add("on");
      document.querySelector("#tabulation span").innerHTML = "Tabulation : Spaces";

      this.active = false;

      localStorage.setItem("settings.tabulation", "false");

      changeTab();
    }
    else{
      this.classList.remove("on");
      this.classList.add("off");
      document.querySelector("#tabulation span").innerHTML = "Tabulation : Tab";

      this.active = true;

      localStorage.setItem("settings.tabulation", "true");

      changeTab();
    }
  };


  if(localStorage.getItem("settings.tabulation") == "false"){
    tabulation.classList.remove("off");
    tabulation.classList.add("on");
    tabulation.active = true;

    document.querySelector("#tabulation span").innerHTML = "Tabulation : Spaces";

    changeTab();
  }


  console.log(tabulation);

  return tabulation;
});
