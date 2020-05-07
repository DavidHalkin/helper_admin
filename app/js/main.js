
// multilevel menu Start
(function($) {
	$.fn.vmenuModule = function(option) {
		var obj,
			item;
		var options = $.extend({
				Speed: 220,
				autostart: true,
				autohide: 1
			},
			option);
		obj = $(this);

		item = obj.find("ul").parent("li").children("a");
		item.attr("data-option", "off");

		item.unbind('click').on("click", function() {
			var a = $(this);
			if (options.autohide) {
				a.parent().parent().find("a[data-option='on']").parent("li").children("ul").slideUp(options.Speed / 1.2,
					function() {
						$(this).parent("li").children("a").attr("data-option", "off");
					})
			}
			if (a.attr("data-option") == "off") {
				a.parent("li").children("ul").slideDown(options.Speed,
					function() {
						a.attr("data-option", "on");
					});
			}
			if (a.attr("data-option") == "on") {
				a.attr("data-option", "off");
				a.parent("li").children("ul").slideUp(options.Speed)
			}
		});
		if (options.autostart) {
			obj.find("a").each(function() {

				$(this).parent("li").parent("ul").slideDown(options.Speed,
					function() {
						$(this).parent("li").children("a").attr("data-option", "on");
					})
			})
		}

	}
})(window.jQuery || window.Zepto);
// multilevel menu END

$.extend( $.fn.dataTable.defaults, {
    responsive: true
} );
$(document).ready(function() {
	$(".multilevel_menu_js").vmenuModule({
		Speed: 200,
		autostart: false,
		autohide: false
	});
	$('.multilevel_menu_js li:has(ul)').addClass("has_drop");
	$('.multilevel_menu_js li.has_drop > a').on("click",function(){
		return false;
	});
	
	// search in header
	$(".form_group_search_js input").focusin(function(){
		$(this).closest(".form_group_search_js").addClass("opened");
	});
	$(".form_group_search_js input").focusout(function(){
		$(this).closest(".form_group_search_js").removeClass("opened");
	});
	// custom select
	$('.bootstrap_select_js').selectpicker();

	// dataTables
	$('.dataTables_js').DataTable({
		responsive: true
	});

	$('.dataTables_minimal_js').DataTable({
		"responsive": false,
		// "ordering": false,
		"bPaginate": false, //hide pagination
		"bFilter": false, //hide Search bar
		"bInfo": false, // hide showing entries

	});
	// with scroll X
	$('.dataTables_minimal_scroll_X_js').DataTable({
		"responsive": false,
		// "ordering": false,
		"bPaginate": false, //hide pagination
		"bFilter": false, //hide Search bar
		"bInfo": false, // hide showing entries
		"scrollX": true

	});
});
// don't close drop on click
$(document).on("click.bs.dropdown.data-api", ".noclose", function (e) { e.stopPropagation() });

// dataTables at bootstrap tabs
$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
});