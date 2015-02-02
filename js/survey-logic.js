$(document).ready(function () {
	$("#theForm").change("input[type=radio]",function() {
		var total = 0;

		$(this).parent().find('input[type=radio]').each(function() {
	    	var self = this;
	    
		    if(self.checked){
		        total += parseFloat(self.value);
		    }
		});

		$("#totalSum").html(total);
	});
});