/**
 * Created by palra on 27/03/15.
 */
define([
  'app'
],function(app) {

	tabulation.onclick = function(){
		if(this.classList.contains("off")){
			this.classList.remove("off");
			this.classList.add("on");
			document.querySelector("#tabulation span").innerHTML = "Tabulation : Spaces";

			this.active = false;

			localStorage.setItem("settings.tabulation", "false");

			app.input.value = app.input.value.split('\t').join('    ');
		}
		else{
			this.classList.remove("on");
			this.classList.add("off");
			document.querySelector("#tabulation span").innerHTML = "Tabulation : Tab";

			this.active = true;

			localStorage.setItem("settings.tabulation", "true");

			app.input.value = app.input.value.split('    ').join('\t');
		}
	};


	if(localStorage.getItem("settings.tabulation") == "false"){
		tabulation.classList.remove("off");
		tabulation.classList.add("on");
		tabulation.active = true;

		document.querySelector("#tabulation span").innerHTML = "Tabulation : Spaces";
		
		app.input.value = app.input.value.split('\t').join('    ');
	}
	else{
		tabulation.active = false;
		app.input.value = app.input.value.split('    ').join('\t');
	}

	return tabulation;
});
