jQuery(document).ready(function(d){d("#fau_person_showhint").hide(),d(document).on("change","#fau_person_contactselect",function(){var e='[kontakt id="'+d("#fau_person_contactselect").val()+'"]';d("#fau_person_showhint").show(),d("#copyshortcode").text(e)}),d("#fau_person_cp_shortcode").bind("click",function(e){var o=d("<input>");d("body").append(o);var s=d("#copyshortcode").text();o.val(s).select(),document.execCommand("copy"),o.remove()}),d("#fau_person_standort_sync").is(":checked")&&(d(".cmb2-id-fau-person-streetAddress").hide(),d(".cmb2-id-fau-person-postalCode").hide(),d(".cmb2-id-fau-person-addressLocality").hide(),d(".cmb2-id-fau-person-addressCountry").hide()),d("#fau_person_standort_sync").click(function(){d(this).is(":checked")?(d(".cmb2-id-fau-person-streetAddress").hide(300),d(".cmb2-id-fau-person-postalCode").hide(300),d(".cmb2-id-fau-person-addressLocality").hide(300),d(".cmb2-id-fau-person-addressCountry").hide(300)):(d(".cmb2-id-fau-person-streetAddress").show(200),d(".cmb2-id-fau-person-postalCode").show(200),d(".cmb2-id-fau-person-addressLocality").show(200),d(".cmb2-id-fau-person-addressCountry").show(200))})});