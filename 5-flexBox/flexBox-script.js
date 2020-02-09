


window.onload = function() {
	console.log("HERE2");
	var currentPanel = 0;
	var panels = document.querySelectorAll('.panel');
	panels.forEach((panel) => panel.addEventListener('click', toggleOpen));

	function toggleOpen() {
		console.log("CLICK");
		if(this.classList.contains('open')){
			OpenRemover(this);
			currentPanel = 0;
		} else {
			this.classList.add('open');
			OpenRemover(currentPanel);
			currentPanel = this;
		}
	}

	function OpenRemover(panel){
		if(panel){
			panel.classList.remove('open');
		}
	}
};

