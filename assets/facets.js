(function( $ ) {

	"use strict";
	 
	var $window         = $(window),
	$document           = $(document),
	$html               = $('html'),
	$body               = $('body'),
	T4Sstrings          = window.T4Sstrings,
	T4Sconfigs          = window.T4Sconfigs,
	page_type           = T4Srequest.page_type,
	search_url          = T4Sroutes.search_url,
	filterDataSidebar   = 'not4s',
	filterFetchStatus   = '',
	//listCheck           = [],
	dataNtajaxOptions   = 'data-ntajax-options',
	dataRepalceFilter   = '[data-replace-filter]',
	dataDrawerDelay     = 'data-drawer-delay',
	time = 200,
	classBtnFilter      = '.t4s-btn-filter',
	isClicked           = 'is--clicked',
	SectionLoadEvt      = atob('c2hvcGlmeTpzZWN0aW9uOmxvYWQ='); // shopify:section:load

	var Facets = (function() {

	 var PageURL          ,
	 filterUrl            ,
	 filterDataUrl        ,
	 History              = window.History,
	 clickEvent           = 'click.ntajax',
	 popstateEvent        = 'popstate.ntajax',

	 activeFilterSelector  = '.t4s-active-filters a',
	 filterSelector        = '[data-filter-links] a:not([data-not-a-filter])',
	 sidebarSelector       = '[data-sidebar-links] a:not([data-not-a-filter])',
	 sortbySelector        = '[data-filter-sortby] a, [data-sortby-item]',
	 paginationSelector    = '[data-ntjax-wrap] a, [data-ntjax-link]',
	 loadMoreSelector      = '[data-load-more]',
	 dataMainLinksSelector = '[data-main-filters-links]',
	 mainLinksSelector     = $(dataMainLinksSelector),
	 dataMainLinkSelector  = '[data-main-filters-link]',
	 classSelected         = 'is--selected',
	 filtersOpened         = 'is--filters-opened',
	 isMobileOffFilterArea = true,

	 dataResizeobserver    = '[data-t4s-resizeobserver]',
		 
		 isSearchOrCollection = (T4Srequest.page_type == 'collection' || T4Srequest.page_type == 'search' ),
	 //loading              = 'is--loading',
	 //contentLoading       = 'contentLoading',
	 classes              = {
					 loadingWrap: 'content--loading',
					 loading: 'is--loading',
					 loaded: 'is--loaded',
					 listview: 'is--listview',
					 active: 'is--active'
		 },
		 optionsBtnScroll      = {
					root: null,
					rootMargin: '0px',
					threshold: 0 // 0.25
		 },
	 str_wrap_lm           = '[data-wrap-lm]',
	 str_wrap_lm_prev      = '[data-wrap-lm-prev]',
	 str_contentlm_replace = '[data-contentlm-replace]',
	 str_ntjax_wrap        = '[data-ntjax-wrap]',
	 cacheSwitch;

		function Facets(container) {
		 this.container        = container;
		 this.$container       = $(container);
		 this.options          = JSON.parse( this.$container.attr(dataNtajaxOptions) );
		 this.main             = this.options.id || '';
		 this.typeAjax         = this.options.type || 'LmDefault'; //LmDefault,LmIsotope,AjaxDefault,AjaxIsotope
		 this.updateURLPrev    = this.options.updateURLPrev || false;
		 this.isProduct        = this.options.isProduct || false;
		 this.$section         = $(`#shopify-section-${this.main}`);
		 this.filter           = this.options.typeFilters;
		 this.filterData       = [];
		 this.queryParams      = {};
		 this.disableScroll    = this.options.disableScroll || false;
		 this.scrollOffset     = this.options.scrollOffset || 100;
		 this.isReloadFilter   = true;
		 this.nouisliderLoaded = false;
		 this.isbtnLoadMore    = true;
		 this.sort_by          = this.options.sort_by;
		 this.$filterArea      = this.$section.find('[data-filter-area]');

			this.setupEventListeners();

			// First loaded Filter 
			this.onFirstLoadFacets();


		 this.isOpened = function() {
			 return this.$filterArea.hasClass(filtersOpened);
		 };

		 this.openFilters = function() {
			 this.$filterArea.addClass(filtersOpened);
			 this.$filterArea.stop().slideDown(time);
		 };

		 this.closeFilters = function() {
			 this.$filterArea.removeClass(filtersOpened);
			 this.$filterArea.stop().slideUp(time);
		 };

		 this.closeFiltersNoAnimation = function() {
			 this.$filterArea.removeClass(filtersOpened);
			 this.$filterArea.hide(0);
			 $(classBtnFilter+'.'+isClicked).removeClass(isClicked);
		 };

		}

		Facets.prototype = Object.assign({}, Facets.prototype, {
				
				destroyEventListeners: function () {
					self.$container.off(clickEvent);
					self.$filter.off(clickEvent);
					$window.off(popstateEvent);
				},

				closeDrawer: function ($this) {
					$this.closest('.t4s-drawer').find('[data-drawer-close]').trigger('click.drawer');
				},

				setupEventListenersSidebarFacets: function () {
					var self = this;
					 
					 // Filter link click
			 self.$filterSidebar.on(clickEvent, sidebarSelector, function(e) {
										
							e.preventDefault();
							self.isReloadFilter = true;

							self.closeFiltersNoAnimation();

							const $this =  $(this);

							self.ntAjaxStart();
				 // Close sidebar popup
				 self.closeDrawer($this);

					 self.loadPageContent($this.attr('href') );
					 self.updateURLHash( $this, true );

					 // $this.parents('li:not(.is--disabled)').toggleClass('is--selected');
			 });

			 T4SThemeSP.Tabs.Accordion();

					 var $wrapperPrice = self.$filterSidebar.find('.t4s-price_slider_wrapper');

					 if ($wrapperPrice.length == 0) return;
					$script(T4Sconfigs.script8, function () {
						self.nouisliderLoaded = true;
						 self.initPriceRange( $wrapperPrice );
			 });
				},

				setupEventListenersFacets: function () {
				var self = this;

				self.$filter  = $('#shopify-section-'+self.filter);
				self.removeDataDelay();
					 
					 // Filter link click
					 self.$filter.off(clickEvent).on(clickEvent, filterSelector, function(e) {
						 // console.log('clickEvent',self.$filter)    
							e.preventDefault();
							//e.stopPropagation();
							
							self.isReloadFilter = true;

							const $this = $(this);

							self.ntAjaxStart();
				 // Close filter popup
				 // self.$filter.find('[data-drawer-close]').trigger('click.drawer');
				 self.closeDrawer($this);

					 self.loadPageContent($this.attr('href') );
					 self.updateURLHash( $this, true );

					 // $this.parents('li:not(.is--disabled)').toggleClass('is--selected');
			 });
					 
					 
					 // Filter link click
					 // self.$filterArea = self.$section.find('[data-filter-area]');
					 if ( self.$filterArea.length > 0 && $window.width() > 767 || !isMobileOffFilterArea) {
		
						 self.$filterArea.off(clickEvent).on(clickEvent, sidebarSelector, function(e) {
							 // console.log('clickEvent',self.$filter)    
								e.preventDefault();
								//e.stopPropagation();
								
								self.isReloadFilter = true;


						 self.closeFiltersNoAnimation();

								const $this = $(this);

								self.ntAjaxStart();
					 // Close filter popup
					 // self.$filter.find('[data-drawer-close]').trigger('click.drawer');
					 self.closeDrawer($this);

						 self.loadPageContent($this.attr('href') );
						 self.updateURLHash( $this, true );

						 // $this.parents('li:not(.is--disabled)').toggleClass('is--selected');
				 });
							
				 $(classBtnFilter).attr(dataDrawerDelay,'').off(clickEvent).on(clickEvent, function(e) {
					 
					 if ($window.width() < 768 && isMobileOffFilterArea) {
						 self.closeFiltersNoAnimation();
						 return;
					 }
								 // console.log('clickEvent') 
					 e.preventDefault();
					 e.stopPropagation();
					 $(this).toggleClass(isClicked);
					 if ( self.isOpened() ) {
										self.closeFilters();
					 } else {
										self.openFilters();
					 }
				 });

						$window.on('resize', function () {
							 if ($window.width() < 768 && isMobileOffFilterArea) $(classBtnFilter).removeAttr(dataDrawerDelay);
						});

					 }

			 T4SThemeSP.Tabs.Accordion();

					 var $wrapperPrice = self.$filter.find('.t4s-price_slider_wrapper'),
					 $wrapperPriceArea = self.$filterArea.find('.t4s-price_slider_wrapper');

					 if ($wrapperPrice.length == 0 && $wrapperPriceArea.length == 0) return;

					$script(T4Sconfigs.script8, function () {
						self.nouisliderLoaded = true;
						 self.initPriceRange( $wrapperPrice );
						 self.initPriceRange( $wrapperPriceArea );
			 });

			},

			filterActionLink: function ($this, disableScroll = false) {
					 this.isReloadFilter = true;

					 this.ntAjaxStart(disableScroll);

				 this.loadPageContent( $this.attr('href') );
				 this.updateURLHash( $this, true );
			},

			setupEventListeners: function () {
				var self = this;
					 
					 // Active filter click
					 self.$container.on(clickEvent, activeFilterSelector, function(e) {
										
								e.preventDefault();
								self.filterActionLink($(this));
			 });

			 if ( mainLinksSelector.find(dataMainLinkSelector).length > 0 ) {

				 mainLinksSelector.on(clickEvent, dataMainLinkSelector, function(e) {
											
									e.preventDefault();

									let $this = $(this);
									self.filterActionLink($this, false);
										$this.closest(dataMainLinksSelector).find('.'+classSelected).removeClass(classSelected);
										$this.addClass(classSelected);
				 });
			 }

					// Sorty by click
					self.$section.on('click', sortbySelector, function(e) {

						 e.preventDefault();
						 
						 self.isReloadFilter = (self.sort_by != self.current_sort_by);
						 if (self.isReloadFilter) self.sort_by = self.current_sort_by;

						 const $this = $(this),
						 FilterSortURl = self.getUrlSortby( $this );
						 // console.log('FilterURl',FilterSortURl); 
							self.ntAjaxStart();

						 self.loadPageContent( FilterSortURl );
					self.updateURLHash( $(this), false, FilterSortURl );

					});

					// Pagination click
					self.$container.on('click', paginationSelector, function(e) {

						 e.preventDefault();
						 self.isReloadFilter = false;

						 const $this =  $(this);

							self.ntAjaxStart();

					self.loadPageContent($this.attr('href') );
					self.updateURLHash( $this, true );

					});

					// Load more click
					self.$section.on('click', loadMoreSelector, function(e) { 

						 e.preventDefault();
						 self.isReloadFilter = false;

				 const $this =  $(this);
							
							$this.addClass(classes.loading);
				 filterUrl = `${$this.attr('href')}&section_id=${self.main}`;

						 self.isbtnLoadMore = !$(this).is('[data-is-prev]');

							//self.ntAjaxStart();

					self.renderSectionFromFetch( filterUrl, self.main, function (data, id) {
									 self[self.typeAjax](data);
									 $this.removeClass(classes.loading);
						 });

							if (self.isbtnLoadMore || self.updateURLPrev) self.updateURLHash( $this, true );
					});

			 // click On Scroll Button
			 self.clickOnScrollButton();
				// console.log(self.$container)
				// self.$container.on('t4s:loadmore', function(e) {
				// 	self.clickOnScrollButton();
				// });
					 //self.$container.on('t4s:loadmore', self.clickOnScrollButton );

			 // window.addEventListener('popstate', function (event) {

			 //   if (!event.state.path) return;

			 //   event.preventDefault();
					//   event.stopImmediatePropagation();
					 //   self.loadPageContent(event.state.path);
			 // });

			 $window.on( popstateEvent, function (event) {
						 
						 try {
								 const evtState = event.originalEvent.state;
							 // console.log(event.originalEvent, evtState.path, evtState.updateFilter)
					 if (!evtState.path) return;

					 event.preventDefault();
							event.stopImmediatePropagation();
							self.isReloadFilter = evtState.updateFilter;
							self.ntAjaxStart();

							 self.loadPageContent(evtState.path);
						 } catch (error) {}
			 });

					self.layoutSwitching();

			},

			 loadPageContent: function(page) { 
					//console.log('page', page)
					var self = this;
					self.renderSection(page, self.main, function (data, id, filterUrl, isFetch) {
				 
				 if (isFetch) {

					 // Update Content main collection
					 var DomHTMl = new DOMParser().parseFromString(data, 'text/html').querySelector('[data-ntajax-container]').innerHTML;
								// Cache filter data
								self.filterData = [...self.filterData, { DomHTMl, filterUrl }];
								// console.log( self.filterData );

				 } else {
					 var DomHTMl = data;
				 }


							// Update Content main collection
							var $elsObservered = self.$container.find(dataResizeobserver+'.flickityt4s-enabled .t4s-product.t4s_observered, '+dataResizeobserver+'.isotopet4s-enabled .t4s-product.t4s_observered');

							if ($elsObservered.length > 0) $elsObservered.trigger('destroy.observered');

				 self.$container.html( DomHTMl );
				 
				 // self.renderAdditionalElements( DomHTMl );
				 self.updateListing();
						if ( self.isProduct )T4SThemeSP.reinitProductGridItem();
						T4SThemeSP.PopupMFP();
						$body.trigger('t4s:hideTooltip');
						$body.trigger('currency:update');

						if ( self.typeAjax == 'AjaxIsotope' || self.typeAjax == 'LmIsotope' ) {
								 T4SThemeSP.Isotopet4s.init( self.$container.find('.isotopet4s') );
								 T4SThemeSP.ProductItem.resizeObserver();
						}
							
							// click On Scroll Button
					self.clickOnScrollButton();
							
				 // remove Loading 
							
							/**
							 *  Update filter data
							 */
							if (self.$filter && self.$filter.length > 0 && !self.isReloadFilter ) self.removeDataDelay();

							if ( !self.$filter || !self.isReloadFilter ) return;
						self.renderSection(page, self.filter, function (data, id, filterUrl, isFetch) {
								 
								 if (isFetch) {

								var DomHTMl = new DOMParser().parseFromString(data, 'text/html').querySelector('[data-filter-links]').innerHTML;
									 // Cache filter data
									 // [ {DomHTMl:'xxxx', filterUrl:'yyyy'},{DomHTMl:'xxxx2', filterUrl:'yyyy2'}]
									 self.filterData = [...self.filterData, { DomHTMl, filterUrl }];

								 } else {
									 var DomHTMl = data;
								 }

					 self.$filter.find('[data-filter-links]').html( DomHTMl );

					 let dataFacetFiltersForm = $( DomHTMl).find('#FacetFiltersForm').parent().html();
					 self.$filterSidebar.html( dataFacetFiltersForm );
					 self.$filterArea.html( dataFacetFiltersForm );
					 if ( self.nouisliderLoaded ) {
						 self.initPriceRange( self.$filter.find('.t4s-price_slider_wrapper') );
						 self.initPriceRange( self.$filterSidebar.find('.t4s-price_slider_wrapper') );
						 self.initPriceRange( self.$filterArea.find('.t4s-price_slider_wrapper') );
					 }
					 self.removeDataDelay();

				 });

			 });

			 },

			 // renderAdditionalElements(html) {
			 // 	 var self = this;
			 // 	 html = new DOMParser().parseFromString(html, 'text/html');
				 // const elementSelectors = ['.t4s-active-filters', '.t4s-products', '.t4s-pagination-wrapper'];

				 // elementSelectors.forEach((selector) => {
				 //   if (!html.querySelector(selector)) {
				 //   	return;
				 //   }
				 //   self.container.querySelector(selector).innerHTML = html.querySelector(selector).innerHTML;
				 // });
			 // },

			 renderSection: function(URL,id,callback) {
					 
			 PageURL       = ( URL.indexOf('?') > -1 ) ? '&' : '/?';
			 filterUrl     = URL + PageURL + 'section_id='+id;
			 filterDataUrl = element => element.filterUrl === filterUrl;
					

					this.filterData.some(filterDataUrl) ?
					 this.renderSectionFromCache(filterUrl, filterDataUrl,id, callback) :
					 this.renderSectionFromFetch(filterUrl,id, callback);

			 },

			 renderSectionFromFetch: function(filterUrl,id,callback) {
						fetch( filterUrl , {
						 method: 'GET',
						 headers: { 'Cache-Control': 'no-cache' }
						})
						.then((response) => response.text())
						.then((response) => {
							callback(response, id, filterUrl, true, true);
							this.ntAjaxEnd();
						})
						.catch((e) => {
							this.ntAjaxEnd();
						});
			 },

			 renderSectionFromCache: function(filterUrl, filterDataUrl ,id ,callback) {
				 
				 const html = this.filterData.find(filterDataUrl).DomHTMl;
				 // console.log('html', html,filterDataUrl)
				 callback(html,id, filterUrl, false, true);
				 this.ntAjaxEnd();
			 },

				debounce: function(fn, wait) {
			 let t;
			 return (...args) => {
				 clearTimeout(t);
				 t = setTimeout(() => fn.apply(this, args), wait);
			 };
			},

			updateURLHash: function($this, updateFilter = true,urlPath) {
				
				// console.log('updateURLHash', urlPath)
			 urlPath = urlPath || $this.attr('href');
			 var title       = $this.text();
					history.pushState( {path: urlPath, updateFilter:updateFilter}, title, urlPath ); 

			},

			initPriceRange: function(_this) {

			 var self        = this,
			 _amount         = _this.find('.t4s-price_slider_amount'),
			 minstr          = _amount.data("minstr"),
			 maxstr          = _amount.data("maxstr"),
			 _minPrice       = _amount.find('.t4s-min_price'),
			 _maxPrice       = _amount.find('.t4s-max_price'),
			 currentUrlPrice = _amount.find('.t4s-url_price').val(),
			 minPrice        = _minPrice.data("min"),
			 maxPrice        = _maxPrice.data("max"),
			 stepPrice       = _amount.data("step") || 1,
			 currentMinPrice = _minPrice.val(),
			 currentMaxPrice = _maxPrice.val(),
			 direction       = $html.hasClass('rtl_true') ? 'rtl' : 'ltr';

					_amount.find("input.t4s-url_price, input.t4s-min_price, input.t4s-max_price").hide();
					_this.find(".t4s-price_slider, .t4s-price_label ,.t4s-price_slider_btn").show();

					var $stepsSlider = _this.find('.t4s-price_steps_slider:not(.noUi-target)'),
						 stepsSlider = $stepsSlider[0],
						 inputs = ["span.t4s-from", "span.t4s-to"],
						 inputs2 = [".t4s-min_price", ".t4s-max_price"],
						 check_dis = true;
					//console.log($stepsSlider)
					if ( $stepsSlider.length < 1 ) return;

					noUiSlider.create(stepsSlider, {
						 start: [currentMinPrice, currentMaxPrice],
						 connect: true,
						 step: stepPrice,
						 direction: direction,
						 //tooltips: [true, wNumb({decimals: 1})],
						 range: {
								 'min': minPrice,
								 'max': maxPrice
						 }
					});

				 stepsSlider.noUiSlider.on('update', function (values, handle) {
						 //console.log(values, handle)
							var value_curent = parseInt(values[handle]);

							_this.find(inputs[handle]).html( T4SThemeSP.Currency.formatMoney(value_curent) );
							//_amount.find(inputs2[handle]).val(value_curent);
							_amount.find(inputs2[handle]).val( T4SThemeSP.Currency.formatMoney(value_curent,'{{amount}}').replaceAll(',','') );
						 
						 // if ( check_dis ) {
						 //    price_slider_create(values);
						 // }
						 $body.trigger('currency:update'); 
							//inputs[handle].value = values[handle];
				 });
					 

					 _this.on('click', '.t4s-price_slider_btn', function (e) {
				 currentMinPrice = _minPrice.val();
				 currentMaxPrice = _maxPrice.val();

						 var filterPriceUrl = self.getUrlPriceFilter(minstr,maxstr,currentMinPrice,currentMaxPrice);
						 // console.log('FilterURl',filterPriceUrl);
						 self.closeFiltersNoAnimation();
							self.ntAjaxStart();
						 self.loadPageContent( filterPriceUrl );
					self.updateURLHash( $(this), true , filterPriceUrl );
					self.closeDrawer( $(this) );
					//self.$filter.find('[data-drawer-close]').trigger('click.drawer');

					 });
				 
			},

			_defineProperty: function(obj, key, value) { 
				if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; 
			},

			layoutSwitching: function(obj, key, value) {

			 var self = this,
					 str_switch = '[data-layout-switch]',
					 $switch = self.$section.find(str_switch),
					 col_mb = $switch.find('.is--mobile .is--active').data('col'),
					 col_tb = $switch.find('.is--tablet .is--active').data('col'),
					 col_dk = $switch.find('.is--desktop .is--active').data('col'),
					 cart_update_url = T4Sroutes.cart_update_url;
			 //console.log(col_mb,col_tb,col_dk)
			 // console.log(self.$section, 'layoutSwitching')
			 if ($switch.length == 0) return;
	 
			 cacheSwitch = col_mb + '.' + col_tb + '.' + col_dk;
			 self.$section.on('click', str_switch + ' button', function(e) {
					 e.preventDefault();
	 
					 var $this = $(this),
							 breakpoint = $this.data('breakpoint'),
							 col = $this.data('col'),
							 $products = self.$container.find('.t4s-products');
	 
					 $this.parent().find('.' + classes.active).removeClass(classes.active);
					 $this.addClass(classes.active);
	 
					 //console.log('click col', col)
					 var action_load = $switch.data('load') || false;
					 if (col !== 'list_bee' && cacheSwitch.indexOf('list_bee') === -1) {
						 action_load = false
					 }
					 
					 if (!action_load){
						 if (col == 'list_t4s') {
							 $products.addClass(classes.listview + ' on--list-' + breakpoint);
		 
						 } else {
							 $products.removeClass(classes.listview + ' on--list-' + breakpoint);
						 }
					 }
	 
					 if (breakpoint == 'mobile') {
						 if (!action_load){
							 $products.removeClass('t4s-row-cols-' + col_mb).addClass('t4s-row-cols-' + col);
						 }
						 col_mb = col;
	 
					 } else if (breakpoint == 'tablet') {
						 if (!action_load){
							 $products.removeClass('t4s-row-cols-md-' + col_tb).addClass('t4s-row-cols-md-' + col);
						 }
						 col_tb = col;		
					 } else {
						 if (!action_load){
							 $products.removeClass('t4s-row-cols-lg-' + col_dk).addClass('t4s-row-cols-lg-' + col);
						 }
						 col_dk = col;		
					 }
	 
					 // update layout isotopet4s if exit
					 if ($products.hasClass('isotopet4s')) {
						 $products.isotopet4s('layout');
					 }
					 // Force lazy sizes to recalculate item sizes
					 lazySizesT4.autoSizer.checkElems();
	 
					 // In order to prevent reflow and provide better user experience, we save into cart attributes (those are removed before the checkout
					 // is submitted) the user choices so they are preserved on page reload, without the need to use JavaScript
	 
					 if (isStorageSpdLocal) {
							 localStorage.setItem('collection_items_per_row_' + breakpoint, col_dk);
					 }
	 
					 cacheSwitch = col_mb + '.' + col_tb + '.' + col_dk;
					 //$switch.attr('data-items', col_mb+'.'+col_tb+'.'+col_dk);
					 if (action_load){
						 if(col === 'list_bee'){
							 cacheSwitch = 'list_bee.list_bee.list_bee';
						 }
						 else if (grid_default !== ''){
							 let cols = grid_default.split('.');
							 if (breakpoint == 'mobile') {
								 cols[0] = col;
							 } else if (breakpoint == 'tablet') {
								 cols[1] = col;
							 } else {
								 cols[2] = col;
							 }
							 cacheSwitch = cols.join('.');
						 }
						 self.closeFiltersNoAnimation();
						 self.ntAjaxStart();
					 }
	 
					 fetch(cart_update_url + '.js', {
							 body: JSON.stringify({
									 attributes: self._defineProperty({}, 'collection_items_per_row', cacheSwitch)
							 }),
							 credentials: 'same-origin',
							 method: 'POST',
							 headers: {
								 'Content-Type': 'application/json',
								 'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
							 }
					 }).then(
						 function(response) {
							 if (response.status !== 200) {
								//  console.log('Error, Code Error ' + response.status);
								 return;
							 }
							 if (action_load){
								 refreshContent = true;
								 self.loadPageContent(window.location.pathname + window.location.search);
							 }
							 else {
								 refreshContent = false;
							 }
						 }
					 ).catch(err => {
						//  console.log('Error :-S', err)
					 });
					 
					 //initReplaceState(true,url);
			 });
	 
			 $window.on('resize', function() {
					 // clearTimeout(resizeTimer);
					 // resizeTimer = setTimeout(
	 
					 // , 500);
					 var $active_visible = $switch.find('.is--active:visible'),
							 active_breakpoint = $active_visible.data('breakpoint'),
							 $products = $switch.find('.t4s-products');
	 
					 if ($products.hasClass('on--list-' + active_breakpoint)) {
							 $products.addClass(classes.listview);
					 } else {
							 $products.removeClass(classes.listview);
					 }
	 
			 });
	 },

			updateListing: function() {
					 // console.log(this.$section, 'updateListing')
					 if ( this.$section.find('.t4s_icon_viewlist').length == 0 ) return;

				 var windowWidth = window.innerWidth,
				 //dataSwitch      = cacheSwitch || this.$section.find('[data-layout-switch]').attr('data-items'),
				 onlistview      = cacheSwitch.split('.'),
				 $product        = this.$container.find('.t4s-products'),
				 classListview   = 'is--listview on--list-',
				 classListview2  = classListview;

				 // console.log(onlistview,$product\
				 // t4s-row-cols-2 t4s-row-cols-md-3 t4s-row-cols-lg-6
				 if (cacheSwitch) {
					 const arrNeedRemove = [ ...$product[0].classList ].filter(cl =>/t4s-row-cols-/g.test(cl));
					 $product.removeClass( arrNeedRemove.join(' ') ).addClass(`t4s-row-cols-${onlistview[0]} t4s-row-cols-md-${onlistview[1]} t4s-row-cols-lg-${onlistview[2]}`);
				 }
				 
				 if ( windowWidth < 768 && onlistview[0] == 'list_t4s' ) {
						 classListview = classListview +'mobile';
				 } else if ( windowWidth < 1025 && onlistview[1] == 'list_t4s' ) {
						 classListview = classListview +'tablet';
				 } else if (onlistview[2] == 'list_t4s') { 
						 classListview = classListview +'desktop';
				 }

				 if (classListview != classListview2) $product.addClass(classListview);

			},
				// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
			initParams: function() {
					// Preserve existing query parameters
					var self = this;
					if (location.search.length) {
							var params = location.search.substr(1).split('&'),
									keyValue;
							 
							 self.queryParams = {}; // Reset var queryParams
							for (var i = 0; i < params.length; i++) {
								keyValue = params[i].split('=');

								if (keyValue.length) {
									//self.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
									self.queryParams[decodeURIComponent(keyValue[0])] = keyValue[1];
								}
							}
					} else {
						self.queryParams = {}; // Reset var queryParams
					}
			},

				getUrlSortby: function($this) {
					 
			 var self = this,
			 value    = $this.data('value'),
			 pathname = window.location.pathname;
			 self.current_sort_by = value;

			 self.initParams();

					 // console.log(pathname, self.queryParams)
					 if (self.queryParams.page) delete self.queryParams.page;
					 self.queryParams.sort_by = value;

					 // Check last characters is /
					 if (pathname.substr(pathname.length - 1) == '/') {
							// Remove / if it exit on last url pathname
							 pathname = pathname.slice(0,-1);
					 }
					 // return `${pathname}/?${ unescape( new URLSearchParams(self.queryParams).toString() ) }`;
					 return `${pathname}/?${ decodeURIComponent( new URLSearchParams(self.queryParams).toString() ) }`;

				},
				// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
				getUrlPriceFilter: function(minstr,maxstr,currentMinPrice,currentMaxPrice) {
					 
			 var self = this,
			 pathname = window.location.pathname;

			 self.initParams();

					 // console.log(pathname, self.queryParams)
					 if (self.queryParams.page) delete self.queryParams.page;
					 self.queryParams[minstr] = currentMinPrice;
					 self.queryParams[maxstr] = currentMaxPrice;
					 // console.log(pathname, self.queryParams, new URLSearchParams(self.queryParams).toString() )

					 // Check last characters is /
					 if (pathname.substr(pathname.length - 1) == '/') {
							// Remove / if it exit on last url pathname
							 pathname = pathname.slice(0,-1);
					 }
					 // return `${pathname}/?${ unescape( new URLSearchParams(self.queryParams).toString() ) }`;
					 return `${pathname}/?${ decodeURIComponent(new URLSearchParams(self.queryParams).toString()) }`;

				},

				onFirstLoadFacets: function() {

					 if (IsDesignMode) { 

				 var self           = this,
				 // SectionLoadEvt     = atob('c2hvcGlmeTpzZWN0aW9uOmxvYWQ='), // shopify:section:load
				 SectionSelectEvt   = atob('c2hvcGlmeTpzZWN0aW9uOnNlbGVjdA=='), // shopify:section:select
				 SectionDeselectEvt = atob('c2hvcGlmeTpzZWN0aW9uOmRlc2VsZWN0'),
				 $filter            = $('#t4s-filter-hidden.is--t4s-filter-native'),
				 $filterTags        = $('#t4s-filter-hidden.is--t4s-filter-tags'); // shopify:section:deselect

							self.filter = 'facets';
						 self.setupEventListenersFacets();
							self.filter = 'facets_tags';
						 self.setupEventListenersFacets();

						 self.filter = self.options.typeFilters; // update filter type connfig

				 var str_facets  = atob('ZmFjZXRz'), // facets
				 str_facets_tags = atob('ZmFjZXRzX3RhZ3M='); // facets_tags

				 // Upate button filter
				 $('.t4s-toolbart-filter > a').removeAttr('data-drawer-options').attr('data-drawer-options', `{ "id":"#shopify-section-${self.filter} #t4s-filter-hidden" }`)

						 $document.on(SectionLoadEvt, function(e) {
								 // console.log(SectionLoadEvt)
							var id = e.detail.sectionId,
							$parentSection = $('#shopify-section-' + id);
							 // console.log(e.detail, $parentSection, $parentSection.find('[data-replace-filter]'))

							if ($parentSection.hasClass('t4s-section-filter')) {

								 if ( $parentSection.hasClass('t4s-section-sidebar') ) {
									 // console.log('ttt2')
									filterDataSidebar = $('#FacetFiltersForm').parent().html();
									//console.log('ttt2')
									self.$filterSidebar = $(dataRepalceFilter);
									self.$filterSidebar.html( filterDataSidebar );
									//console.log('ttt3')
									 self.setupEventListenersSidebarFacets();
										 // $document.trigger('sidebar:updated');
								 }

								 //self.$filterArea = $('[data-filter-area]');
								 // console.log('$filterArea', self.$filterArea)
							 // if (self.$filterArea.length > 0) {
							 //   // console.log('aded:adm22',self.$filterArea)
							 //   self.$filterArea.html( $('#FacetFiltersForm').parent().html() );
							 //   $(classBtnFilter).attr(dataDrawerDelay,'').trigger(clickEvent);
							 // } 
							 // else {
							 //   	// console.log('facets:loaded:admOff')
							 //  	$(classBtnFilter).removeAttr(dataDrawerDelay).off(clickEvent);
							 // }
								 
								 self.filter = id;
								 self.setupEventListenersFacets();		          	
								 self.updateListing();
								 self.layoutSwitching();
								 
								// } else if ($parentSection.hasClass('t4s-section-main') && ( $parentSection.find('[data-replace-filter]').length > 0 || self.$filterArea.length > 0 ) ) {
							} else if ($parentSection.hasClass('t4s-section-main') ) {
										
								 // update options connfig
								 // console.log(self)
								 
								 self.$filterArea = $parentSection.find('[data-filter-area]');
						 self.$section    = $parentSection;
						 self.$container  = $parentSection.find('['+dataNtajaxOptions+']');
						 self.options     = JSON.parse( self.$container.attr(dataNtajaxOptions) );
						 self.filter      = self.options.typeFilters;

						 // Upate button filter
						 $('.t4s-toolbart-filter > a').removeAttr('data-drawer-options').attr('data-drawer-options', `{ "id":"#shopify-section-${self.filter} #t4s-filter-hidden" }`)
						 //console.log( $('.t4s-toolbart-filter').attr('data-drawer-options', `{ "id":"#shopify-section-${self.filter} #t4s-filter-hidden" }`) )
						 //$('.t4s-toolbart-filter')

							 //self.$filterArea = $parentSection.find('[data-filter-area]');
								 //console.log($parentSection,'yy')
							 let htmlFilter = (self.options.typeFilters == str_facets ) ? $filter.find('#FacetFiltersForm').parent().html() : $filterTags.find('#FacetFiltersForm').parent().html();
							 
							 if (self.$filterArea.length > 0) {
								 // console.log('aded:adm',self.$filterArea)
								 // self.$filterArea.html( $('#FacetFiltersForm').parent().html() );
								 self.$filterArea.html( htmlFilter );

							 } else {
									 // console.log('facets:loaded:admOff')
									$(classBtnFilter).removeAttr(dataDrawerDelay).off(clickEvent);
							 }

								 if ($parentSection.find('[data-replace-filter]').length > 0) {
									 $document.trigger('sidebar:updated');
									$parentSection.find('[data-replace-filter]').html( htmlFilter );
								 }

								 if ( $parentSection.find('[data-replace-filter]').length > 0 || self.$filterArea.length > 0 ) self.setupEventListenersFacets();
								 
								 self.updateListing();
								 self.layoutSwitching();
								 
							}

							 });

						 $document.on(SectionSelectEvt, function(e) {
							 // console.log(SectionSelectEvt)
								 let id = e.detail.sectionId,
							 $parentSection = $('#shopify-section-' + id);

							$filter     = $('#t4s-filter-hidden.is--t4s-filter-native');
							$filterTags = $('#t4s-filter-hidden.is--t4s-filter-tags');

						 if ( id != str_facets && id != str_facets_tags ) {
							 if ( (self.$filterArea.length > 0 && $window.width() > 767 || !isMobileOffFilterArea) && $parentSection.hasClass('t4s-section-main') ) {
								 
								 self.$filterArea.html( (self.options.typeFilters == str_facets ) ? $filter.find('#FacetFiltersForm').parent().html() : $filterTags.find('#FacetFiltersForm').parent().html() );
								 self.setupEventListenersFacets();
							}
							 return
						 }
								 
							// $filter     = $('#t4s-filter-hidden.is--t4s-filter-native');
							// $filterTags = $('#t4s-filter-hidden.is--t4s-filter-tags');
							// console.log('xxx',self.$filterArea, id)
							if (self.$filterArea.length > 0 && $window.width() > 767 || !isMobileOffFilterArea) {

										self.closeFiltersNoAnimation();
										if ( id == self.options.typeFilters && id == str_facets && $filter.length > 0) {
								 self.$filterArea.html( $filter.find('#FacetFiltersForm').parent().html() );
								 self.setupEventListenersFacets();
							 } else if (id == self.options.typeFilters && id == str_facets_tags && $filterTags.length > 0) {
								 self.$filterArea.html( $filterTags.find('#FacetFiltersForm').parent().html() );
								 self.setupEventListenersFacets();
							}

							} else if ( id == str_facets && $filter.length > 0) {
								 T4SThemeSP.Drawer.opend($filter)
							} else if (id == str_facets_tags && $filterTags.length > 0) {
								 T4SThemeSP.Drawer.opend($filterTags)
							}

						 });

						 $document.on(SectionDeselectEvt, function(e) {

								 let id = e.detail.sectionId;

						 if ( id != str_facets && id != str_facets_tags ) return
								 
						 if (self.$filterArea.length > 0 && $window.width() > 767 || !isMobileOffFilterArea) {
										$(classBtnFilter+'.'+isClicked).trigger(clickEvent);
						 } else {
								$('.t4s-close-overlay:visible').trigger('click');
						 }

						 });
							
					 if ( self.$filterArea.length > 0 && $window.width() > 767 || !isMobileOffFilterArea ) {
								 
						 self.$filterArea.html( (self.options.typeFilters == str_facets ) ? $filter.find('#FacetFiltersForm').parent().html() : $filterTags.find('#FacetFiltersForm').parent().html() );
						 $(classBtnFilter).removeAttr(dataDrawerDelay).off(clickEvent);
						 self.setupEventListenersFacets();
					}

					 }

					 //listCheck.push(true);

					 this.onFirstLoadFilterSidebar();

					 if ( IsDesignMode || !isSearchOrCollection || !this.$container.is('[data-has-filters]') ) return;
					 // console.log(!isSearchOrCollection, IsDesignMode)
					 this.onFirstFetchFilter();
				},

				onFirstLoadFilterSidebar: function() {
					 var self              = this;
					 
							self.$filterSidebar = $(dataRepalceFilter);

						 if (filterDataSidebar != 'not4s' && self.$filterSidebar.length > 0) {
								 
								self.$filterSidebar.html( filterDataSidebar );
								filterDataSidebar = '';
							 self.setupEventListenersSidebarFacets();

						 } else {

					 var myFunction = function() {

								 self.$filterSidebar = $(dataRepalceFilter);
								 // console.log(self.$filterArea)

								 //console.log('zzz',self.$filterSidebar)
									 if (self.$filterSidebar.length == 0) return;
									 self.onFirstFetchFilter( false );

					 };
								 
							 $document.on('sidebar:updated', myFunction);
							 $document.one('sidebar:facets', myFunction);

								 if (self.$filterSidebar.length > 0) { 
									 //listCheck.push(false); 
									 $document.trigger('sidebar:facets') 
								 }
						 }
					
				},

				onFirstFetchFilter: function(isCahecData = true, idSection) {

			 var self = this,
			 prefix   = '',
			 pathname = window.location.pathname;

			 self.initParams();

					 if (self.queryParams.page) delete self.queryParams.page;

					 const queryParamsStr = decodeURIComponent( new URLSearchParams(self.queryParams).toString() );
					 // console.log(queryParamsStr)

					 if (queryParamsStr.length > 0 ) prefix = '&';

					 // Check last characters is /
					 if (pathname.substr(pathname.length - 1) == '/') {
							// Remove / if it exit on last url pathname
							 pathname = pathname.slice(0,-1);
					 }
					 //listCheck.push(isCahecData);
					 
					 if (filterFetchStatus == '') {

						 filterFetchStatus = 'loading';

						fetch( `${pathname}/?${ queryParamsStr }${prefix}section_id=${ (IsDesignMode && idSection) ? idSection : self.filter }` , {
						 method: 'GET',
						 headers: { 'Cache-Control': 'no-cache' }
						})
						.then((response) => response.text())
						.then((response) => {
							//console.log(response)
							// listCheck.forEach((bl) => {
							// 	console.log(self.$filterSidebar, listCheck, 'facets:loaded')
					 //   $document.trigger('facets:loaded', [true, response]);
					 //   $document.trigger('facets:loaded', [false, response]);
					 // });
					 $document.trigger('facets:loaded', [true, response]);
					 $document.trigger('facets:loaded', [false, response]);
					 $document.off('facets:loaded');

						})
						.catch((e) => { });

							$document.on('facets:loaded', function(event, _isCahecData, _response){
									
								 //console.log('_isCahecData',_isCahecData)
							if (_isCahecData) {
								T4SThemeSP.$appendComponent.after(_response);
								self.$filterArea.html( $(_response).find('#FacetFiltersForm').parent().html() );
								 self.setupEventListenersFacets();
							} else {

								var myFunction2 = function() {
									//console.log('ttt1')
									filterDataSidebar = $(_response).find('#FacetFiltersForm').parent().html();
									// console.log('ttt2')
									self.$filterSidebar.html( filterDataSidebar );
									 //self.$filterArea.html( filterDataSidebar );
									//console.log('ttt3')
									 self.setupEventListenersSidebarFacets();
									 //console.log('ttt4')
								};

								self.$filterSidebar = $(dataRepalceFilter);
								//console.log('xxx 22',self.$filterSidebar)
								if (self.$filterSidebar.length > 0 ) {

									 //console.log('ttt')
									 myFunction2();
									 //console.log('yyy')

								} else {

									$document.on('sidebar:updated', function(event) {
												 //console.log('xxx')
												 self.$filterSidebar = $(dataRepalceFilter);
													if (self.$filterSidebar.length > 0 ) myFunction2();
									});
								}

							}

						});
					 }
					 
					 if (IsDesignMode) {
						 //console.log('onFirstFetchFilter')
						 $document.on('facets:loaded:adm', function(event, _$filterArea, _$section) {
							 // console.log('aded:adm',_$filterArea)
							 self.$section = _$section;
							 self.$filterArea = _$filterArea;
							_$filterArea.html( $('#FacetFiltersForm').parent().html() );
							self.setupEventListenersFacets();
						});
							
							$document.on('facets:loaded:admOff', function(){
								// console.log('facets:loaded:admOff qqq',$(classBtnFilter))
							 $(classBtnFilter).removeAttr(dataDrawerDelay,'').off(clickEvent);
						});
					 }
				},

				ntAjaxStart: function(disableScroll = false) {
					 
					 if (!disableScroll) this.scrollToTop();
					$body.addClass(classes.loadingWrap);
					this.$container.addClass(classes.loading);

				},
				
				ntAjaxEnd: function() {

					$body.removeClass(classes.loadingWrap);
					this.$container.removeClass(classes.loading);
				},

				removeDataDelay: function() {
					if ( this.$filterArea.length > 0 && $window.width() > 767 && !isMobileOffFilterArea ) return;
					 $('[data-drawer-options*="#t4s-filter-hidden"]').removeAttr(dataDrawerDelay);
				},

			 scrollToTop: function () {

					if (this.disableScroll) return;

					$('html, body').stop().animate({
						 scrollTop: this.$container.offset().top - this.scrollOffset
					}, 400);
			 },

			 // Where el is the DOM element you'd like to test for visibility
			 // https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
			 // isHidden: function(el) {
			 //     return (el.offsetParent === null)
			 // },

			 handleIntersect: function(entries, myObserver) {
					entries.forEach(function (entry) {

						 let entry_target = entry.target;
						 //console.log('11', entry_target);

						 if (entry.isIntersecting && !entry_target.classList.contains(classes.loading) ) {
								
								//console.log(entry_target);
								$(entry_target).trigger('click');

						 } else if ( entry_target.offsetParent === null ) {
								// console.log('loaded done')
								myObserver.unobserve(entry_target);
						 }
					});
			 },

			 clickOnScrollButton: function () {
				 var self = this,
						 $els = self.$container.find('[data-load-onscroll]:not(.t4s-lm-onscroll-init)');

				 if ($els.length == 0 || !window.IntersectionObserver) return;

					 $els.each(function( index ) {
							
							let myObserver;
							// myObserver.unobserve(this);
							myObserver = new IntersectionObserver(self.handleIntersect, optionsBtnScroll);
						myObserver.observe(this);
						$(this).addClass('t4s-lm-onscroll-init');

				 });
				},

				LmDefault: function(data) {

			 var $data = $(data),
			 items     = $data.find(str_contentlm_replace).html(),
			 $btnLM    = (this.isbtnLoadMore) ? $data.find(str_wrap_lm) : $data.find(str_wrap_lm_prev),
			 $content  = this.$section.find(str_contentlm_replace);

					 if (this.isbtnLoadMore) {
							$content.append(items);
					 } else {
							$content.prepend(items);
					 }
					 this.initLoamoreUpdate($btnLM);
				},

				LmIsotope: function(data) {
					 //console.log(data);
			 var $data = $(data),
			 items     = $data.find(str_contentlm_replace).html(),
			 $btnLM    = (this.isbtnLoadMore) ? $data.find(str_wrap_lm) : $data.find(str_wrap_lm_prev),
			 $content  = this.$section.find(str_contentlm_replace);
					 //console.log(ArrResults);
					 items = $(items)
					 if (this.isbtnLoadMore) {
							$content.append(items).isotopet4s('appended', items);
					 } else {
							$content.prepend(items).isotopet4s('prepended', items);
					 }
					 this.initLoamoreUpdate($btnLM);
				},

				// AjaxDefault: function(data, isbtnLoadMore) {
				//    var $data      = $(data),
				//    items          = $data.find(str_contentlm_replace).html(),
				//    paginationHTML = $data.find(str_ntjax_wrap).html(),
				//    $content       = this.$section.find(str_contentlm_replace);

				//    $content.html(items);
				//    this.$section.find(str_ntjax_wrap).html( paginationHTML );
				// },

				// AjaxIsotope: function(data, isbtnLoadMore) {

				//    var $data      = $(data),
				//    items          = $data.find(str_contentlm_replace).html(),
				//    paginationHTML = $data.find(str_ntjax_wrap).html(),
				//    $content       = this.$section.find(str_contentlm_replace);
				//    //console.log(this.$section,$content)
				//    $content.html(items);
				//    this.$section.find(str_ntjax_wrap).html( paginationHTML );
				//    $content.isotopet4s('destroy');
				//    T4SThemeSP.Isotopet4s.init($content);

				// },

				initLoamoreUpdate: function($btnLM) {
					 // console.log( ArrResults );
					 
					 // Update count items current
					 // $('[data-current-items]').html(ArrResults[1]);
					 // Update link loadmore next,  update html loadmore bar
					 if ( $btnLM.length > 0 && this.isbtnLoadMore) {
							this.$section.find(str_wrap_lm).html( $btnLM.html() );
					 } else if (this.isbtnLoadMore) {
							this.$section.find(str_wrap_lm).hide();
							//this.$section.find('[data-wrap-lm-bar]').hide();

					 // Update link loadmore prev
					 } else if ( $btnLM.length > 0 && !this.isbtnLoadMore) {
							this.$section.find(str_wrap_lm_prev).html( $btnLM.html() );
					 } else if (!this.isbtnLoadMore) {
							this.$section.find(str_wrap_lm_prev).hide();
					 }

					if ( this.isProduct )T4SThemeSP.reinitProductGridItem();
					$body.trigger('t4s:hideTooltip');
					$body.trigger('currency:update');
					 if (this.isbtnLoadMore) this.clickOnScrollButton();
				}


		});
		 
		 return Facets;

	})();
	
	// https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
	var onlyOne = false;
	T4SThemeSP.initFacets = (function () {
				// console.log('initFacets')
			 $('.t4s-section-main ['+dataNtajaxOptions+']:not(.is--enabled)').each(function() {
				 // console.log('xxx')
				 $(this).addClass('is--enabled');
				 onlyOne = true;
				this.Facets = new Facets(this);
			});
			
	})();
	
	// Refresh fuction initFacets
 if (IsDesignMode && !onlyOne) {
	 $document.on(SectionLoadEvt, function(e) {
				 
				var id = e.detail.sectionId,
				$parentSection = $('#shopify-section-' + id);

				if ( !$parentSection.hasClass('t4s-section-main') || onlyOne ) return;
				// console.log('initFacets Refresh')
			 $('.t4s-section-main ['+dataNtajaxOptions+']:not(.is--enabled)').each(function() {
				 // console.log('yy')
				 $(this).addClass('is--enabled');
				 onlyOne = true;
				this.Facets = new Facets(this);
			});

	 });
 }

})( jQuery_T4NT );

// jQuery_T4NT(document).ready(function($) {
//    //T4SThemeSP.initFacets();
// });