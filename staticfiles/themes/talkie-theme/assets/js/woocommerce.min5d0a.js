"use strict";!function(a){a(document).on("woof_ajax_done",woof_ajax_done_handler),a(document).ready(function(){change_view_btn_event(),a.ajax({url:php_prefix_loadmore_params.ajaxurl,data:{action:"load_skeleton"},type:"GET",success:function(e){localStorage.setItem("product_grid_skeleton",e.data["skeleton-grid"]),localStorage.setItem("product_list_skeleton",e.data["skeleton-list"])}}),a(document.body).on("woosq_loaded",function(e){a(".thumbnails").addClass("iq-rtl-direction")}),t=a.fn.css;var o=new a.Event("stylechanged"),t=a.fn.css;a.fn.css=function(){var e=t.apply(this,arguments);return a(this).trigger(o),e},setTimeout(function(){a(".woof_info_popup").on("stylechanged",function(){a(this).append('<div class="css_prefix-show-loader-overlay"></div>')})},500)})}(jQuery);var can_loaded_product_view=!0;function getCookie(e){e="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===e.length)return e.pop().split(";").shift()}function setCookie(e,o){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,a=new Date;a.setTime(a.getTime()+24*t*60*60*1e3);t="expires="+a.toUTCString(),isSubdomain(),a="."+window.location.hostname;document.cookie=e+"="+o+"; "+t+"; Path=/;"+a}function ajax_product(r,s){jQuery.ajax({url:window.location.href,data:{loaded_paged:php_prefix_loadmore_params.current_page},type:"POST",beforeSend:function(e){if("product_grid_skeleton"==s)for(var o=getCookie("product_view[col_no]"),t=jQuery(localStorage.getItem(s)).siblings(".column-"+o),a=0;a<o;a++)r.append(t.clone());else r.append(jQuery(localStorage.getItem(s)));can_loaded_product_view=!1,jQuery(".woocommerce-pagination").addClass("hide"),jQuery(".woocommerce-pagination").removeClass("show")},success:function(e){e&&(e=jQuery(e),jQuery(".products").replaceWith(e.find(".products")),r.find(".skeleton-main").remove(),loadmore_product(),can_loaded_product_view=!0,jQuery(".woocommerce-pagination").removeClass("hide"),jQuery(".woocommerce-pagination").addClass("show"))}})}var isSubdomain=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.location.hostname,o=new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);return!!e.match(o)};function change_view_btn_event(){jQuery(".css_prefix-view-grid,.css_prefix-listing").on("click",function(){var e=jQuery(this),o=e.parents(".sorting-wrapper").next(".products");e.hasClass("active")||jQuery("#woof_html_buffer").is(":visible")||!can_loaded_product_view||(setCookie("product_view[col_no]",e.hasClass("css_prefix-view-grid")?e.data("grid"):"1"),setCookie("product_view[is_grid]",e.hasClass("css_prefix-view-grid")?"2":"1"),jQuery(".css_prefix-product-view-buttons .btn").removeClass("active"),e.addClass("active"),e.hasClass("css_prefix-listing")?(o.find(".product").fadeOut(0,function(){jQuery(this).remove()}),e.parents(".product-grid-style").removeClass("product-grid-style").addClass("product-list-style"),ajax_product(o,"product_list_skeleton")):1!=e.parents(".product-grid-style").length&&(o.find(".product").fadeOut(0,function(){jQuery(this).remove()}),e.parents(".product-list-style").removeClass("product-list-style").addClass("product-grid-style"),ajax_product(o,"product_grid_skeleton")),setTimeout(function(){void 0!==e.data("grid")?o.removeClass("columns-2 columns-3 columns-4").addClass("columns-"+e.data("grid")):o.removeClass(" columns-2 columns-3 columns-4"),o.addClass("animated-product")},100),o.removeClass("animated-product"))})}function woo_ordering(){0<jQuery("select").length&&(jQuery("select").each(function(){jQuery(this).select2({width:"100%",dropdownParent:jQuery(this).parent()})}),jQuery(".select2-container").addClass("wide"))}function woof_ajax_done_handler(e){change_view_btn_event(),loadmore_product(jQuery(".css_prefix-product-main-list").data("options")),php_prefix_loadmore_params.current_page=1,jQuery.ajax({url:php_prefix_loadmore_params.ajaxurl,data:{action:"fetch_woof_filter_ajax_query"},type:"POST",success:function(e){(e=JSON.parse(e))&&(php_prefix_loadmore_params.posts=e.query,php_prefix_loadmore_params.max_page=e.max_page)}}),jQuery("select").select2({theme:"bootstrap4",allowClear:!1,width:"resolve"}),woo_ordering()}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvb2NvbW1lcmNlLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsIm9uIiwid29vZl9hamF4X2RvbmVfaGFuZGxlciIsImRvY3VtZW50IiwicmVhZHkiLCJjaGFuZ2Vfdmlld19idG5fZXZlbnQiLCJhamF4IiwidXJsIiwicGhwX3ByZWZpeF9sb2FkbW9yZV9wYXJhbXMiLCJhamF4dXJsIiwiZGF0YSIsImFjdGlvbiIsInR5cGUiLCJzdWNjZXNzIiwicmVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImV2ZW50IiwiYWRkQ2xhc3MiLCJib2R5IiwiY3NzIiwiZXYiLCJvcmlnIiwiZm4iLCJyZXQiLCJFdmVudCIsInRoaXMiLCJhcmd1bWVudHMiLCJ0cmlnZ2VyIiwiYXBwZW5kIiwic2V0VGltZW91dCIsImNhbl9sb2FkZWRfcHJvZHVjdF92aWV3IiwiZ2V0Q29va2llIiwiY29uY2F0IiwiY29va2llIiwic3BsaXQiLCJuYW1lIiwidmFsdWUiLCJsZW5ndGgiLCJwb3AiLCJzaGlmdCIsInNldENvb2tpZSIsImNOYW1lIiwiY1ZhbHVlIiwiZXhwRGF5cyIsInVuZGVmaW5lZCIsImRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciLCJpc1N1YmRvbWFpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImV4cGlyZXMiLCJkb21haW4iLCJocmVmIiwiYWpheF9wcm9kdWN0IiwiY3VycmVudF9wYWdlIiwibG9hZGVkX3BhZ2VkIiwic2tlbGV0b25fdmlldyIsImNvbF9ubyIsImdyaWRfc2tlbGV0b25fc3RydWN0dXJlIiwiZ2V0SXRlbSIsInNpYmxpbmdzIiwiaW5kZXgiLCJhbGxfcHJvZHVjdHMiLCJjbG9uZSIsInJlbW92ZUNsYXNzIiwicmVwbGFjZVdpdGgiLCJmaW5kIiwicmVtb3ZlIiwibG9hZG1vcmVfcHJvZHVjdCIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJwcm9kdWN0cyIsImJ0biIsInBhcmVudHMiLCJuZXh0IiwiaXMiLCJoYXNDbGFzcyIsImZhZGVPdXQiLCJ3b29fb3JkZXJpbmciLCJlYWNoIiwid2lkdGgiLCJkcm9wZG93blBhcmVudCIsInBhcmVudCIsImUiLCJKU09OIiwicGFyc2UiLCJwb3N0cyIsInNlbGVjdDIiLCJ0aGVtZSIsImFsbG93Q2xlYXIiXSwibWFwcGluZ3MiOiJjQUFBLFNBQVdBLEdBQVZBLEVBQVVBLFVBQVFDLEdBQUEsaUJBQUFDLHdCQUlmRixFQUFPRyxVQUFVQyxNQUFNLFdBRTNCQyx3QkFJQUwsRUFBQU0sS0FBQSxDQUNBQyxJQUFBQywyQkFBQUMsUUFHWUMsS0FBTSxDQUZFQyxPQUFBLGlCQUNpQ0MsS0FBQSxNQUNuQ0MsUUFBQSxTQUFBQyxHQUNGQyxhQUFVQyxRQUFBLHdCQUFBRixFQUFBLEtBQUEsa0JBSE5DLGFBQUFDLFFBQUEsd0JBQUFGLEVBQUEsS0FBQSxxQkFPSkMsRUFBQUEsU0FBYUMsTUFBUWYsR0FBQSxlQUFBLFNBQTZCZ0IsR0FDbERGLEVBQUFBLGVBQXFCRyxTQUFBLHNCQUc3QmxCLEVBQU9HLEVBQVNnQixHQUFoQkMsSUFDSXBCLElBQU1xQixFQUFDLElBQUFyQixFQUFla0IsTUFBQUEsZ0JBRDFCSSxFQUFBdEIsRUFBQXVCLEdBQUFILElBSUlwQixFQUFHQSxHQUFPdUIsSUFBZCxXQUNNLElBQUdDLEVBQUl4QixFQUFPeUIsTUFBTUMsS0FBQUMsV0FLdEIsT0FKSTNCLEVBQUdBLE1BQVVvQixRQURyQkMsR0FLV0csR0FEUHhCLFdBQWE0QixXQUNiNUIsRUFBWSxvQkFBQUMsR0FBQSxlQUFBLFdBSGhCRCxFQUFBMEIsTUFBQUcsT0FBQSx5REFNQUMsT0FwQ1IsQ0F3Q1M5QixRQUlSLElBQUVBLHlCQTVDSCxFQThDQSxTQUFJK0IsVUFBQUEsR0FFS0MsRUFDTSxLQUFBQyxPQUFROUIsU0FBUytCLFFBRGhDQyxNQUFBLEtBQUFGLE9BQXlCRyxFQUF6QixNQUNJLEdBQVcsSUFBTEMsRUFBS0MsT0FBUW5DLE9BQVMrQixFQUFqQkssTUFBWEosTUFBQSxLQUFB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VXFGLEtBQUssV0FEaEJyRixPQUFDMEIsTUFBVVksUUFBckIsQ0FDV2dELE1BQVVELE9BRU5FLGVBQWN2RixPQUFBMEIsTUFBQThELGFBQXJCeEYsT0FBQSxzQkFBQWtCLFNBQUEsU0FPWCxTQUFBaEIsdUJBQUF1RixHQUdHcEYsd0JBREpvRSxpQkFBU3ZFLE9BQUFBLGlDQUEwQlEsS0FBQSxZQUUvQitELDJCQUF3QmQsYUFBQSxFQUl4QjNELE9BQU9NLEtBQUssQ0FDTEMsSUFBRUMsMkJBQTJCQyxRQUM1QkMsS0FBRSxDQUNGQyxPQUFVLGdDQUVWQyxLQUFFLE9BQ05DLFFBQVMsU0FBQUMsSUFDQzRFLEVBQUtDLEtBQU03RSxNQUFqQkEsTUFDU04sMkJBQUFvRixNQUFBOUUsRUFBQSxNQUNMTiwyQkFBbUNNLFNBQUdBLEVBQXRDLGFBVFpkLE9BQUEsVUFBQTZGLFFBQUEsQ0FjTUMsTUFBQyxhQUNIQSxZQUFPLEVBQ1BDLE1BQVUsWUFJZFgiLCJmaWxlIjoid29vY29tbWVyY2UubWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChqUXVlcnkpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBqUXVlcnkoZG9jdW1lbnQpLm9uKFwid29vZl9hamF4X2RvbmVcIiwgd29vZl9hamF4X2RvbmVfaGFuZGxlcik7XG5cbiAgICBqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgV29jb21tZXJjZSBDaGFuZ2UgYnRuIEdyaWQgVmlld1xuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgIGNoYW5nZV92aWV3X2J0bl9ldmVudCgpO1xuICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIFdvY29tbWVyY2UgUHJvZHVjdCBTa2VsZXRvbiBTdHJ1Y3R1cmVcbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIHVybDogcGhwX3ByZWZpeF9sb2FkbW9yZV9wYXJhbXMuYWpheHVybCwgLy8gQUpBWCBoYW5kbGVyXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgJ2FjdGlvbic6ICdsb2FkX3NrZWxldG9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZHVjdF9ncmlkX3NrZWxldG9uJywgcmVzWydkYXRhJ11bJ3NrZWxldG9uLWdyaWQnXSk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RfbGlzdF9za2VsZXRvbicsIHJlc1snZGF0YSddWydza2VsZXRvbi1saXN0J10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50LmJvZHkpLm9uKCd3b29zcV9sb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGpRdWVyeSgnLnRodW1ibmFpbHMnKS5hZGRDbGFzcygnaXEtcnRsLWRpcmVjdGlvbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICBvcmlnID0galF1ZXJ5LmZuLmNzcztcbiAgICAgICAgdmFyIGV2ID0gbmV3IGpRdWVyeS5FdmVudCgnc3R5bGVjaGFuZ2VkJyksXG4gICAgICAgICAgICBvcmlnID0galF1ZXJ5LmZuLmNzcztcbiAgICAgICAgalF1ZXJ5LmZuLmNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBvcmlnLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBqUXVlcnkodGhpcykudHJpZ2dlcihldik7XG4gICAgICAgICAgICByZXR1cm4gcmV0OyAvLyBtdXN0IGluY2x1ZGUgdGhpc1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBqUXVlcnkoJy53b29mX2luZm9fcG9wdXAnKS5vbignc3R5bGVjaGFuZ2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJjc3NfcHJlZml4LXNob3ctbG9hZGVyLW92ZXJsYXlcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA1MDApO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG5cbnZhciBjYW5fbG9hZGVkX3Byb2R1Y3RfdmlldyA9IHRydWU7XG5cbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xuICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoYDsgJHtuYW1lfT1gKTtcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAyKSByZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xufVxuXG5mdW5jdGlvbiBzZXRDb29raWUoY05hbWUsIGNWYWx1ZSwgZXhwRGF5cyA9IDEpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGV4cERheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgY29uc3QgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgICBsZXQgZG9tYWluID0gXCJkb21haW49XCIgKyBpc1N1YmRvbWFpbigpID8gXCIuXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgOiBcIlwiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgXCI7XCI7XG4gICAgZG9jdW1lbnQuY29va2llID0gY05hbWUgKyBcIj1cIiArIGNWYWx1ZSArIFwiOyBcIiArIGV4cGlyZXMgKyBcIjsgUGF0aD0vO1wiICsgZG9tYWluO1xufVxuXG5mdW5jdGlvbiBhamF4X3Byb2R1Y3QoYWxsX3Byb2R1Y3RzLCBza2VsZXRvbl92aWV3KSB7XG4gICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICB1cmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBsb2FkZWRfcGFnZWQ6IHBocF9wcmVmaXhfbG9hZG1vcmVfcGFyYW1zLmN1cnJlbnRfcGFnZVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICh4aHIpIHtcbiAgICAgICAgICAgIGlmIChza2VsZXRvbl92aWV3ID09ICdwcm9kdWN0X2dyaWRfc2tlbGV0b24nKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbF9ubyA9IGdldENvb2tpZSgncHJvZHVjdF92aWV3W2NvbF9ub10nKTtcbiAgICAgICAgICAgICAgICB2YXIgZ3JpZF9za2VsZXRvbl9zdHJ1Y3R1cmUgPSBqUXVlcnkobG9jYWxTdG9yYWdlLmdldEl0ZW0oc2tlbGV0b25fdmlldykpLnNpYmxpbmdzKCcuY29sdW1uLScgKyBjb2xfbm8pO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbF9ubzsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBhbGxfcHJvZHVjdHMuYXBwZW5kKGdyaWRfc2tlbGV0b25fc3RydWN0dXJlLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxsX3Byb2R1Y3RzLmFwcGVuZChqUXVlcnkobG9jYWxTdG9yYWdlLmdldEl0ZW0oc2tlbGV0b25fdmlldykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbl9sb2FkZWRfcHJvZHVjdF92aWV3ID0gZmFsc2U7XG4gICAgICAgICAgICBqUXVlcnkoJy53b29jb21tZXJjZS1wYWdpbmF0aW9uJykuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgIGpRdWVyeSgnLndvb2NvbW1lcmNlLXBhZ2luYXRpb24nKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgcmVzID0galF1ZXJ5KHJlcyk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcucHJvZHVjdHMnKS5yZXBsYWNlV2l0aChyZXMuZmluZCgnLnByb2R1Y3RzJykpO1xuICAgICAgICAgICAgICAgIGFsbF9wcm9kdWN0cy5maW5kKCcuc2tlbGV0b24tbWFpbicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGxvYWRtb3JlX3Byb2R1Y3QoKTtcbiAgICAgICAgICAgICAgICBjYW5fbG9hZGVkX3Byb2R1Y3RfdmlldyA9IHRydWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9oaWRlIHBhZ2luYXRpb24gb24gbG9hZGluZyBwcm9kdWN0c1xuICAgICAgICAgICAgICAgIGpRdWVyeSgnLndvb2NvbW1lcmNlLXBhZ2luYXRpb24nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgICAgIGpRdWVyeSgnLndvb2NvbW1lcmNlLXBhZ2luYXRpb24nKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnZhciBpc1N1YmRvbWFpbiA9IGZ1bmN0aW9uICh1cmwgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpIHtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKC9eKFthLXpdK1xcOlxcL3syfSk/KFtcXHctXStcXC5bXFx3LV0rXFwuXFx3KykkLyk7XG4gICAgcmV0dXJuICEhdXJsLm1hdGNoKHJlZ2V4KTsgLy8gbWFrZSBzdXJlIGl0IHJldHVybnMgYm9vbGVhblxufVxuZnVuY3Rpb24gY2hhbmdlX3ZpZXdfYnRuX2V2ZW50KCkge1xuICAgIGpRdWVyeSgnLmNzc19wcmVmaXgtdmlldy1ncmlkLC5jc3NfcHJlZml4LWxpc3RpbmcnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBidG4gPSBqUXVlcnkodGhpcyk7XG4gICAgICAgIGxldCBwcm9kdWN0cyA9IGJ0bi5wYXJlbnRzKCcuc29ydGluZy13cmFwcGVyJykubmV4dCgnLnByb2R1Y3RzJyk7XG5cbiAgICAgICAgaWYgKGJ0bi5oYXNDbGFzcygnYWN0aXZlJykgfHwgalF1ZXJ5KFwiI3dvb2ZfaHRtbF9idWZmZXJcIikuaXMoJzp2aXNpYmxlJykgfHwgIWNhbl9sb2FkZWRfcHJvZHVjdF92aWV3KSAvLyBDb25kaXRpb24gZm9yIFJlbW92ZSBTYW1lIEJ1dHRvbiBDbGljayBFdmVudCAgQW5kIENoZWNoIFdvb2YgQWpheCBpbiBvbiBMb2FkXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgc2V0Q29va2llKCdwcm9kdWN0X3ZpZXdbY29sX25vXScsIGJ0bi5oYXNDbGFzcygnY3NzX3ByZWZpeC12aWV3LWdyaWQnKSA/IGJ0bi5kYXRhKCdncmlkJykgOiAnMScpO1xuICAgICAgICBzZXRDb29raWUoJ3Byb2R1Y3Rfdmlld1tpc19ncmlkXScsIGJ0bi5oYXNDbGFzcygnY3NzX3ByZWZpeC12aWV3LWdyaWQnKSA/ICcyJyA6ICcxJyk7XG5cbiAgICAgICAgalF1ZXJ5KCcuY3NzX3ByZWZpeC1wcm9kdWN0LXZpZXctYnV0dG9ucyAuYnRuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBidG4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGlmIChidG4uaGFzQ2xhc3MoJ2Nzc19wcmVmaXgtbGlzdGluZycpKSB7IC8vQ29uZGl0aW9uIGZvciBjaGVjayBzd2l0Y2ggdG8gbGlzdCB0byBncmlkXG4gICAgICAgICAgICBwcm9kdWN0cy5maW5kKCcucHJvZHVjdCcpLmZhZGVPdXQoMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBidG4ucGFyZW50cygnLnByb2R1Y3QtZ3JpZC1zdHlsZScpLnJlbW92ZUNsYXNzKCdwcm9kdWN0LWdyaWQtc3R5bGUnKS5hZGRDbGFzcygncHJvZHVjdC1saXN0LXN0eWxlJylcbiAgICAgICAgICAgIGFqYXhfcHJvZHVjdChwcm9kdWN0cywgJ3Byb2R1Y3RfbGlzdF9za2VsZXRvbicpOyAvLyBDYWxsIEFqYXggRnVuY3Rpb24gZm9yICBnZXQgYW5kIEFwcGVuZCBkYXRhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYnRuLnBhcmVudHMoJy5wcm9kdWN0LWdyaWQtc3R5bGUnKS5sZW5ndGggIT0gMSkgeyAvL0NvbmRpdGlvbiBmb3IgY2hlY2sgc3dpdGNoIHRvIGxpc3QgdG8gZ3JpZFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzLmZpbmQoJy5wcm9kdWN0JykuZmFkZU91dCgwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmUoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJ0bi5wYXJlbnRzKCcucHJvZHVjdC1saXN0LXN0eWxlJykucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3QtbGlzdC1zdHlsZScpLmFkZENsYXNzKCdwcm9kdWN0LWdyaWQtc3R5bGUnKVxuICAgICAgICAgICAgICAgIGFqYXhfcHJvZHVjdChwcm9kdWN0cywgJ3Byb2R1Y3RfZ3JpZF9za2VsZXRvbicpOyAvLyBDYWxsIEFqYXggRnVuY3Rpb24gZm9yICBnZXQgYW5kIEFwcGVuZCBkYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYnRuLmRhdGEoJ2dyaWQnKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLnJlbW92ZUNsYXNzKCdjb2x1bW5zLTIgY29sdW1ucy0zIGNvbHVtbnMtNCcpLmFkZENsYXNzKCdjb2x1bW5zLScgKyBidG4uZGF0YSgnZ3JpZCcpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHMucmVtb3ZlQ2xhc3MoJyBjb2x1bW5zLTIgY29sdW1ucy0zIGNvbHVtbnMtNCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZHVjdHMuYWRkQ2xhc3MoJ2FuaW1hdGVkLXByb2R1Y3QnKTtcblxuICAgICAgICB9LCAxMDApO1xuICAgICAgICBwcm9kdWN0cy5yZW1vdmVDbGFzcygnYW5pbWF0ZWQtcHJvZHVjdCcpO1xuXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHdvb19vcmRlcmluZygpIHtcbiAgICBpZiAoalF1ZXJ5KCdzZWxlY3QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGpRdWVyeSgnc2VsZWN0JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5zZWxlY3QyKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRyb3Bkb3duUGFyZW50OiBqUXVlcnkodGhpcykucGFyZW50KClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KCcuc2VsZWN0Mi1jb250YWluZXInKS5hZGRDbGFzcygnd2lkZScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gd29vZl9hamF4X2RvbmVfaGFuZGxlcihlKSB7XG4gICAgY2hhbmdlX3ZpZXdfYnRuX2V2ZW50KCk7XG4gICAgbG9hZG1vcmVfcHJvZHVjdChqUXVlcnkoJy5jc3NfcHJlZml4LXByb2R1Y3QtbWFpbi1saXN0JykuZGF0YSgnb3B0aW9ucycpKTtcblxuICAgIHBocF9wcmVmaXhfbG9hZG1vcmVfcGFyYW1zLmN1cnJlbnRfcGFnZSA9IDE7XG5cbiAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgIHVybDogcGhwX3ByZWZpeF9sb2FkbW9yZV9wYXJhbXMuYWpheHVybCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgJ2FjdGlvbic6ICdmZXRjaF93b29mX2ZpbHRlcl9hamF4X3F1ZXJ5JyxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICByZXMgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgcGhwX3ByZWZpeF9sb2FkbW9yZV9wYXJhbXMucG9zdHMgPSByZXNbJ3F1ZXJ5J107XG4gICAgICAgICAgICAgICAgcGhwX3ByZWZpeF9sb2FkbW9yZV9wYXJhbXMubWF4X3BhZ2UgPSByZXNbJ21heF9wYWdlJ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBqUXVlcnkoJ3NlbGVjdCcpLnNlbGVjdDIoe1xuICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnLFxuICAgICAgICBhbGxvd0NsZWFyOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6ICdyZXNvbHZlJ1xuICAgIH0pO1xuXG4gICAgd29vX29yZGVyaW5nKCk7XG59Il19