(function ($) {
	$.fn.emailValidator = function (email) {

		var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

		return re.test(this.val())

	}
})(jQuery)
