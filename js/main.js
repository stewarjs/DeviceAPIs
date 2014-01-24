;(function(){
    
    var lux = document.getElementById("lx"),
    luxmeter = document.getElementById("luxmeter"),
    dba = document.getElementById("dba"),
    dbameter = document.getElementById("dbameter"),
    net = document.getElementById("net"),
    netmeter = document.getElementById("netmeter");
    
    window.addEventListener("devicelight", function(e){

        lux.innerHTML = 'Lux: ' + e.value;
        luxmeter.value = e.value;
        
            if(e.value < 30) {
				document.getElementById("header").style.background = "#1d1d1d";
				document.getElementById("main").style.background = "#252525";
				document.getElementById("main").style.color = "#ffffff";
				document.getElementById("aside").style.background = "#1d1d1d";
				document.getElementById("footer").style.background = "#1d1d1d";
            } else {
				document.getElementById("header").style.background = "#1A6785";
				document.getElementById("main").style.background = "#ffffff";
				document.getElementById("main").style.color = "#222222";
				document.getElementById("aside").style.background = "#1A6785";
				document.getElementById("footer").style.background = "#1A6785";
            }
        
    }, false);
    
    var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

	function updateBatteryStatus() {
	  dba.innerHTML = "Battery: " + battery.level * 100 + " %";
	  dbameter.value = battery.level * 100;
	}

	battery.addEventListener("chargingchange", updateBatteryStatus);
	battery.addEventListener("levelchange", updateBatteryStatus);
	updateBatteryStatus();
	
	var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

	function updateConnectionStatus() {
	  net.innerHTML = "Speed: " + connection.bandwidth + " MB/s";
	  netmeter.value = connection.bandwidth;
	  if (connection.metered) {
		document.getElementById("slowed").innerHTML = "This connection is metered!";
	  }else{
		document.getElementById("slowed").innerHTML = " ";
		} 
	}

	connection.addEventListener("change", updateConnectionStatus);
	updateConnectionStatus();
	
	
    
})();
