

$.extend( $.fn.dataTable.defaults, {
    responsive: true
} );
$(document).ready(function() {
	$('.multilevel_menu_js a').tooltip({
		trigger : "hover",
		placement:"right",
		title : function(){
			var text = $(this).find('span').text();
			return (text.length > 20) ? text : "";
		}
	});

// menu in sidebar START
	$('.multilevel_menu_js li:has(ul)').addClass("has_drop");
	$('.multilevel_menu_js li.has_drop > a').wrap("<span class='title_row'></span>");
	$('.multilevel_menu_js li.has_drop .title_row').append("<a href='#' class='fal fa-plus-square show_drop show_drop_js'></a>");
	$(".show_drop_js").click(function(){
		$(this).closest("li").find("ul").first().slideToggle("fast");
		 if ($(this).hasClass("fa-plus-square")) {
                // $this.html("Убрать");
                $(this).removeClass("fa-plus-square");
                $(this).addClass("fa-minus-square");
            } else {
                $(this).removeClass("fa-minus-square");
                $(this).addClass("fa-plus-square");
            }
		return false;
	});
// menu in sidebar END


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