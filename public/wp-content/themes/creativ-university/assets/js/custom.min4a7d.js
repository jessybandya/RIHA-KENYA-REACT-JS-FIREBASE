jQuery(document).ready(function(i){i(window).scrollTop();var n=i(".backtotop"),e=i(".menu-toggle"),t=i(".main-navigation ul.nav-menu"),o=i(".featured-slider-wrapper"),s=i(".team-slider");i(window).scroll(function(){1<i(this).scrollTop()?n.css({bottom:"25px"}):n.css({bottom:"-100px"})}),n.click(function(){return i("html, body").animate({scrollTop:"0px"},800),!1}),i(window).scroll(function(){49<i(window).scrollTop()?i(".menu-sticky #masthead").addClass("nav-shrink"):i(".menu-sticky #masthead").removeClass("nav-shrink")}),e.click(function(){i(this).toggleClass("active"),t.slideToggle()}),i(".main-navigation .nav-menu .menu-item-has-children > a").after(i('<button class="dropdown-toggle"><i class="fas fa-caret-down"></i></button>')),i("button.dropdown-toggle").click(function(){i(this).toggleClass("active"),i(this).parent().find(".sub-menu").first().slideToggle()}),o.slick(),s.slick({responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1}}]}),i(window).width()<1024?t.find("li").last().bind("keydown",function(n){9===n.which&&(n.preventDefault(),i("#masthead").find(".menu-toggle").focus())}):t.find("li").unbind("keydown"),i(window).resize(function(){i(window).width()<1024?t.find("li").last().bind("keydown",function(n){9===n.which&&(n.preventDefault(),i("#masthead").find(".menu-toggle").focus())}):t.find("li").unbind("keydown")}),e.on("keydown",function(n){tabKey=9===n.keyCode,shiftKey=n.shiftKey,e.hasClass("active")&&shiftKey&&tabKey&&(n.preventDefault(),t.slideUp(),e.removeClass("active"))})});