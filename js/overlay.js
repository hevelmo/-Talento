function close_overlay() {
	$.unblockUI({
		onUnblock: function() {
			$("#ov_desc").html("");
		}
	});
};
// Conferencias
function get_overlay_c1() {
	$("#ov_desc").load("overlay/desc_warriorPath.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c2() {
	$("#ov_desc").load("overlay/desc_discoveringMy_greatness.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c3() {
	$("#ov_desc").load("overlay/desc_learning_toDepend_onMe.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c4() {
	$("#ov_desc").load("overlay/desc_millionaireInvestment.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c5() {
	$("#ov_desc").load("overlay/desc_takingControl.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c6() {
	$("#ov_desc").load("overlay/desc_surfingWith_myEmotions.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
// Talleres
function get_overlay_c7() {
	$("#ov_desc").load("overlay/desc_financialFreedom_seminar.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c8() {
	$("#ov_desc").load("overlay/desc_mentality_ofResults.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c9() {
	$("#ov_desc").load("overlay/desc_onlySurvive_or_succeed_inTeam.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c10() {
	$("#ov_desc").load("overlay/desc_teamBuilding.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c11() {
	$("#ov_desc").load("overlay/desc_surfingWith_myEmotions.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c12() {
	$("#ov_desc").load("overlay/desc_instructorTraining.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};
function get_overlay_c13() {
	$("#ov_desc").load("overlay/desc_coaching_y_consultoria.html", function () { $.blockUI({ mesage: $("#ov_desc")}); });
};


/* Tabs */
	$(document).ready(function() {
	    $(".tab-content").hide(); //esconder contenido
	    $("ul.tabs li.filter:first").addClass("active").show(); //Agrega la clase 'active' a la pestaña activa
	    $(".tab-content:first").show();
	    //On Click Event
	    $("ul.tabs li.filter").click(function() {
	        $("ul.tabs li.filter").removeClass("active"); //Remover la clase 'active'
	        $(this).addClass("active"); //Agregar clase 'active' a la pestaña seleccionada
	        $(".tab-content").hide();
	        var activeTab = $(this).find("a").attr("href");
	        $(activeTab).fadeIn();
	        return false;
	    });
	});
/* END Tabs */
