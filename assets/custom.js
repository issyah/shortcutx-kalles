jQuery_T4NT(document).ready(function ($) {
  /**
   *  Variant selection changed
   *  data-variant-toggle="{{variant.id}}"
   */
  $(document).on("variant:changed", function (evt) {
    // console.log( evt.currentVariant );
    // $('[data-variant-toggle]').hide(0);
    // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
  });

  faqTabs();
  handleRealResultFilter();
});

// FAQ tabs section
function faqTabs() {
  $(".nav-tabs > .nav-item").on("click", function (evt) {
    var $navItems = $(".nav-tabs > .nav-item");
    var $tabItems = $(".faq-section-container .tab");
    // selected tab
    var tabId = $(this).data("ref");
    $navItems.removeClass("active");
    $(this).addClass("active");

    // select the tab items
    $tabItems.removeClass("active");
    $(`#${tabId}`).addClass("active");
  });
}

function handleRealResultFilter() {
  var $resultFilter = $(".real-result-filters > li.filter-item");
  var $resultItem = $("[data-component='real-result']");
  if ($resultFilter.length) {
    $resultFilter.on("click", function (evt) {
      $resultFilter.removeClass("selected");
      $(this).addClass("selected");
      // get the product id or
      var type = $(this).data("type");
			console.log(type);
			if(type === 'all'){
				$resultItem.attr('style', 'display: block !important');
				return;
			}
			// get id 
			var id = $(this).data(`${type}-id`);
			if(id){
				// hide all products first 
				$resultItem.attr('style', 'display: none !important')
				console.log(id);
				$(`.real-result.t4s-col-item[data-${type}-id="${id}"]`).attr('style', 'display: block !important');
			}
    });
  }
}
