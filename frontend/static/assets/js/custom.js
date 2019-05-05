/** 
  * Template Name: SpicyX
  * Version: 1.0  
  * Template Scripts
  * Author: MarkUps
  * Author URI: http://www.markups.io/

  Custom JS
  

  1. FIXED NAVBAR 
  2. TOP SLIDER
  3. ABOUT US (SLICK SLIDER) 
  4. DATEPICKER
  5. SHEF SLIDER (SLICK SLIDER)
  6. TESTIMONIAL SLIDER (SLICK SLIDER)
  7. COUNTER
  8. MIXIT FILTER (FOR GALLERY)
  9. FANCYBOX (FOR PORTFOLIO POPUP VIEW) 
  10. MENU SMOOTH SCROLLING
  11. HOVER DROPDOWN MENU
  12. SCROLL TOP BUTTON
  13. PRELOADER  

  
**/

jQuery(function($){


  /* ----------------------------------------------------------- */
  /*  1. FIXED NAVBAR 
  /* ----------------------------------------------------------- */
  
  /* ----------------------------------------------------------- */
  /*  2. TOP SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.mu-top-slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,     
      autoplay: true,
      fade: true,
      cssEase: 'linear'
    });

  /* ----------------------------------------------------------- */
  /*  3. ABOUT US (SLICK SLIDER)
  /* ----------------------------------------------------------- */      

    jQuery('.mu-abtus-slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      fade: true,      
      cssEase: 'linear'
    });

  /* ----------------------------------------------------------- */
  /*  4. DATEPICKER
  /* ----------------------------------------------------------- */      

    jQuery('#datepicker').datepicker();

  /* ----------------------------------------------------------- */
  /*  5. SHEF SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.mu-chef-nav').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

  /* ----------------------------------------------------------- */
  /*  6. TESTIMONIAL SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.mu-testimonial-slider').slick({
      dots: true,      
      infinite: true,
      arrows: false,
      autoplay: true,
      speed: 500,      
      cssEase: 'linear'
    });       

  /* ----------------------------------------------------------- */
  /*  7. COUNTER
  /* ----------------------------------------------------------- */

    jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  /* ----------------------------------------------------------- */
  /*  8. MIXIT FILTER (FOR GALLERY) 
  /* ----------------------------------------------------------- */  

    jQuery(function(){
      jQuery('#mixit-container').mixItUp();
    });

  /* ----------------------------------------------------------- */
  /*  9. FANCYBOX (FOR PORTFOLIO POPUP VIEW) 
  /* ----------------------------------------------------------- */ 
      
    jQuery(document).ready(function() {
      jQuery(".fancybox").fancybox();
    }); 
	
  /* ----------------------------------------------------------- */
  /*  10. MENU SMOOTH SCROLLING
  /* ----------------------------------------------------------- */ 

    //MENU SCROLLING WITH ACTIVE ITEM SELECTED

      // Cache selectors
      var lastId,
      topMenu = $(".mu-main-nav"),
      topMenuHeight = topMenu.outerHeight()+13,
      // All list items
      menuItems = topMenu.find('a[href^=\\#]'),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

      // Bind click handler to menu items
      // so we can get a fancy scroll animation
      menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
        jQuery('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 1500);           
         jQuery('.navbar-collapse').removeClass('in');  
        e.preventDefault();
      });

      // Bind to scroll
      jQuery(window).scroll(function(){
         // Get container scroll position
         var fromTop = $(this).scrollTop()+topMenuHeight;
         
         // Get id of current scroll item
         var cur = scrollItems.map(function(){
           if ($(this).offset().top < fromTop)
             return this;
         });
         // Get the id of the current element
         cur = cur[cur.length-1];
         var id = cur && cur.length ? cur[0].id : "";
         
         if (lastId !== id) {
             lastId = id;
             // Set/remove active class
             menuItems
               .parent().removeClass("active")
               .end().filter("[href=\\#"+id+"]").parent().addClass("active");
         }           
      })
  
  /* ----------------------------------------------------------- */
  /*  11. HOVER DROPDOWN MENU
  /* ----------------------------------------------------------- */ 
  
  // for hover dropdown menu
    jQuery('ul.nav li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

    
  /* ----------------------------------------------------------- */
  /*  12. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });
     
    //Click event to scroll to top

    jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });
  
  /* ----------------------------------------------------------- */
  /*  13. PRELOADER
  /* ----------------------------------------------------------- */

   jQuery(window).load(function() { // makes sure the whole site is loaded      
      jQuery('#aa-preloader-area').delay(300).fadeOut('slow'); // will fade out      
    })
  
  /* ----------------------------------------------------------- */
  /*  14. Cargar entradas
  /* ----------------------------------------------------------- */

  jQuery( function() {
    $.ajax({
      url : "http://127.0.0.1:8000/api/v1.0/entradas/",
      dataType: "json",
      success : function (data) {
        var listaEntradas = $("#lista-entradas");
        $.each(data, function(index, elemento){
          listaEntradas.append(
            '<article class="mu-news-single">' +
              '<h3><a href="#">' + elemento.titulo + '</a></h3>' +
              '<figure class="mu-news-img">' +
                '<a href="#"><img src="' + elemento.primerparrafo.imagen + '" alt="img"></a>' +
              '</figure>' +
              '<div class="mu-news-single-content">' +
                '<p>' + elemento.primerparrafo.parrafo + '</p>' +
                '<div class="mu-news-single-bottom">' +
                  '<a href="blog-single.html/id='+ elemento.id +'" class="mu-readmore-btn">Leer más</a>' +
                '</div>' +
              '</div>' +
            '</article>'
          );
        });
      },
      error: function() {
        console.log("No se ha podido obtener la información");
      }
    });
  });

    /* ----------------------------------------------------------- */
  /*  14. Cargar proyectos
  /* ----------------------------------------------------------- */

  jQuery( function() {
    $.ajax({
      url : "http://127.0.0.1:8000/api/v1.0/proyectos/",
      dataType: "json",
      success : function (data) {
        var listaEntradas = $("#lista-proyectos");
        $.each(data, function(index, elemento){
          listaEntradas.append(
            '<article class="mu-news-single">' +
              '<h3><a href="#">' + elemento.titulo + '</a></h3>' +
              '<figure class="mu-news-img">' +
                '<a href="#"><img src="' + elemento.parrafos[0].imagen + '" alt="img"></a>' +
              '</figure>' +
              '<div class="mu-news-single-content">' +
                '<p>' + elemento.parrafos[0].parrafo + '</p>' +
                '<div class="mu-news-single-bottom">' +
                  '<a href="blog-single.html/id='+ elemento.id +'" class="mu-readmore-btn">Leer más</a>' +
                '</div>' +
              '</div>' +
            '</article>'
          );
        });
      },
      error: function() {
        console.log("No se ha podido obtener la información");
      }
    });
  });

    /* ----------------------------------------------------------- */
  /*  15. Cargar Glosario
  /* ----------------------------------------------------------- */

  jQuery( function() {
    $.ajax({
      url : "http://127.0.0.1:8000/api/v1.0/glosario/",
      dataType: "json",
      success : function (data) {
        var listaGlosario = $("#lista-glosario");
        $.each(data, function(index, elemento){
          listaGlosario.append(
            '<b>' + elemento.termino + ': </b>' + elemento.definicion + '<hr>'
          );
        });
      },
      error: function() {
        console.log("No se ha podido obtener la información");
      }
    });
  });

    /* ----------------------------------------------------------- */
  /*  16. Cargar párrafos
  /* ----------------------------------------------------------- */

  function cargarParrafos(entrada) {
    $.ajax({
      url : "http://127.0.0.1:8000/api/v1.0/parrafos/",
      dataType: "json",
      success : function (data) {
        var listaEntradas = $("#lista-parrafos");
        $.each(data, function(index, elemento){
          listaEntradas.append(
            '<article class="mu-news-single">' +
              '<h3><a href="#">' + elemento.titulo + '</a></h3>' +
              '<figure class="mu-news-img">' +
                '<a href="#"><img src="static/assets/img/news/1.jpg" alt="img"></a>' +
              '</figure>' +
              '<div class="mu-news-single-content">' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio est quaerat magnam exercitationem voluptas, voluptatem sed quam ab laborum voluptatum tempore dolores itaque, molestias vitae.</p>' +
                '<div class="mu-news-single-bottom">' +
                  '<a href="#" class="mu-readmore-btn">Leer más</a>' +
                '</div>' +
              '</div>' +
            '</article>'
          );
        });
      },
      error: function() {
        console.log("No se ha podido obtener la información");
      }
    });
  };

});

