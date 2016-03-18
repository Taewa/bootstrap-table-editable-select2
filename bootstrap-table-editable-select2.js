//@Author : Taehwa KIM
//@Modified :  18 Mar 2016

$.extend($.fn.editabletypes.select2.prototype, {
	//Originally it was return this.$input.select2('val'); (In boostrap-editable.js)
	//I chaged to return this.$input.select2('data');
	//Because when user select through select2, it takes nothing
	input2value: function() {
		return this.$input.select2('data');
	},
});