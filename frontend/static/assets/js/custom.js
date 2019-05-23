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
      });
  
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
  /*  14. Cargar entradas generales
  /* ----------------------------------------------------------- */

  jQuery( function() {
    if ($.urlParam('reftipo')!=null || $.urlParam('refcat')!=null || $.urlParam('refentrada')!=null) 
      return ;
    $.ajax({
      url : "http://127.0.0.1:8000/api/v1.0/general/",
      dataType: "json",
      success : function (data) {
        var listaProyectos = $("#lista-proyectos");
        var listaEducacion = $("#lista-educacion");
        var listaReflexion = $("#lista-reflexion");
        var listaAccion = $("#lista-accion");
        $.each(data, function(index, elemento){
          var video = "";
          var parrafo = elemento.parrafo;
          if (elemento.youtube) {
           parrafo = 
           '<div class="embed-container">' +
             elemento.parrafo +
           '</div>'+
           '<br>';
          }else {
            if (elemento.video!=null) {
             video = 
             '<video width="100%" controls>'+
               '<source src="'+ elemento.video+'" type="video/mp4">'+
             '</video>'+
             '<br>';
            }
          }
          var imagen = "";
          if (elemento.imagen!=null) {
             imagen = 
             '<figure class="mu-news-img">'+
               '<img src="'+ elemento.imagen +'" alt="img">'+                      
             '</figure>'+
             '<br>';
          }
          switch (elemento.entrada.tipo) {
            case "Proyectos":
              listaProyectos.append(
                '<article class="mu-news-single">' +
                  '<h3>' + elemento.entrada.titulo + '</h3>' +
                  imagen+
                  '<div class="mu-news-single-content">' +
                    '<p>' + elemento.descripcionimagen + '</p>' +
                    '<div class="mu-news-single-bottom">' +
                      '<a href="blog-single.html?refentrada=' + elemento.entrada.id + '" class="mu-readmore-btn">Leer más</a>' +
                    '</div>' +
                  '</div>' +
                '</article>'
              );              
              break;
            
            case "Educación":
              listaEducacion.append(
                '<article class="mu-news-single">' +
                  '<h3>' + elemento.entrada.titulo + '</h3>' +
                  imagen +
                  '<div class="mu-news-single-content">' +
                    '<p>' + elemento.descripcionimagen + '</p>' +
                    '<div class="mu-news-single-bottom">' +
                      '<a href="blog-single.html?refentrada=' + elemento.entrada.id + '" class="mu-readmore-btn">Leer más</a>' +
                    '</div>' +
                  '</div>' +
                '</article>'
              );               
              break;
            
            case "Reflexión":
              listaReflexion.append(
                '<article class="mu-news-single">' +
                  '<h3>' + elemento.entrada.titulo + '</h3>' +
                  imagen +
                  '<div class="mu-news-single-content">' +
                    '<p>' + elemento.descripcionimagen + '</p>' +
                    '<div class="mu-news-single-bottom">' +
                      '<a href="blog-single.html?refentrada=' + elemento.entrada.id + '" class="mu-readmore-btn">Leer más</a>' +
                    '</div>' +
                  '</div>' +
                '</article>'
              );             
              break;
            
            case "Acción":
              listaAccion.append(
                '<article class="mu-news-single">' +
                  '<h3>' + elemento.entrada.titulo + '</h3>' +
                  imagen+
                  '<div class="mu-news-single-content">' +
                    '<p>' + elemento.descripcionimagen + '</p>' +
                    '<div class="mu-news-single-bottom">' +
                      '<a href="blog-single.html?refentrada=' + elemento.entrada.id + '" class="mu-readmore-btn">Leer más</a>' +
                    '</div>' +
                  '</div>' +
                '</article>'
              );               
              break;         
            default:
              break;
          }
        });
      },
      error: function() {
        console.log("No se ha podido obtener la información");
      }
    });
  });

  /*----------------------------------------------------------- */
  /* 15. Load título of entradas
  /*----------------------------------------------------------- */

  //Título
  jQuery( function() {
    if ($.urlParam('refentrada')==null) 
      return ;
    $.ajax({
     url : "http://127.0.0.1:8000/api/v1.0/entradas/"+$.urlParam('refentrada')+"/",
     dataType: "json",
     success : function (data) {
       $("#tituloentrada").append(
         '<h1>'+data.titulo+'</h1>' + 
         '<hr>');
     },
     error: function() {
       console.log("No se ha podido obtener la información");
      }
    });
  });

  //Parrafos 
  jQuery( function() {
    if ($.urlParam('refentrada')==null) 
      return ;
    $.ajax({
    url : "http://127.0.0.1:8000/api/v1.0/parrafovista/?refentrada="+$.urlParam('refentrada'),
    dataType: "json",
    success : function (data) {
      var listaEntradas = $("#lista-parrafos");
      $.each(data, function(index, elemento){
      var video = "";
        var parrafo = "";
        if (elemento.parrafo!=null)
          parrafo = elemento.parrafo;

        if (elemento.youtube) {
          parrafo = 
          '<div class="embed-container">' +
            elemento.parrafo +
          '</div><br>'+
          elemento.descripcionvideo+
          '<br>';
        }else {
          if (elemento.video!=null) {
          video = 
          '<video width="100%" controls>'+
            '<source src="'+ elemento.video+'" type="video/mp4">'+
          '</video><br>'+
          '<center><i>'+elemento.descripcionvideo+'</i></center>' +
          '<br>';
          }
        }
        var imagen = "";
        if (elemento.imagen!=null) {
          imagen = 
          '<figure class="mu-news-img">'+
            '<a href="#"><img src="'+ elemento.imagen +'" alt="img"></a>'+                      
          '</figure><br>'+
          '<center><i>'+elemento.descripcionimagen+'</i></center>' +
          '<br>'; 
        }

        var subtitulo = "";
        if (elemento.subtitulo!=null)
          subtitulo = elemento.subtitulo;

        var editButton = 
        '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#createParrafo-modal" onclick="$.editParrafo('+elemento.id+');">'+
          'Editar el párrafo inferior'+
        '</button>';

        var deleteButton = 
        '<button type="button" class="btn btn-danger" onclick="$.deleteParrafo('+elemento.id+');">'+
          'Eliminar el párrafo inferior'+
        '</button>';

         listaEntradas.append(
          '<br>' +
          editButton + ' ' + deleteButton +
          '<h2>'+ subtitulo +'</h2>'+
          '<br>' +
          parrafo + '<br>' +
          video +
          imagen
         );
       });
     },
     error: function() {
       console.log("No se ha podido obtener la información");
      }
    });
  });

  /* ----------------------------------------------------------- */
  /*  16. Cargar Glosario
  /* ----------------------------------------------------------- */

  jQuery( function() {
    if ($.urlParam('refentrada')==null) 
      return ;
    $.ajax({
      url : "http://127.0.0.1:8000/api/v1.0/glosario/?refentrada="+$.urlParam('refentrada'),
      dataType: "json",
      success : function (data) {
        var listaGlosario = $("#lista-glosario");
        $.each(data, function(index, elemento){

          var editButton = 
          '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#createTermino-modal" onclick="$.editTermino('+elemento.id+');">'+
            'Editar el termino inferior'+
          '</button>';
  
          var deleteButton = 
          '<button type="button" class="btn btn-danger" onclick="$.deleteTermino('+elemento.id+');">'+
            'Eliminar el termino inferior'+
          '</button>';

          listaGlosario.append(
            editButton + deleteButton + '<br>' +
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
  /*  17. Cargar entradas ordenadas.
  /* ----------------------------------------------------------- */

  jQuery( function() {
    if ($.urlParam('reftipo')==null || $.urlParam('refcat')==null) 
      return ;
    var urlLocal = "http://127.0.0.1:8000/api/v1.0/general/?reftipo="+$.urlParam('reftipo')+"&refcat="+$.urlParam('refcat');
    $.ajax({
      url : urlLocal,
      dataType: "json",
      success : function (data) {
        var listaEntradas = $("#lista-entradas");
        $.each(data, function(index, elemento){
          var video = "";
          var parrafo = elemento.parrafo;
          if (elemento.youtube) {
           parrafo = 
           '<div class="embed-container">' +
             elemento.parrafo +
           '</div>'+
           '<br>';
          }else {
            if (elemento.video!=null) {
             video = 
             '<video width="100%" controls>'+
               '<source src="'+ elemento.video+'" type="video/mp4">'+
             '</video>'+
             '<br>';
            }
          }
          var imagen = "";
          if (elemento.imagen!=null) {
             imagen = 
             '<figure class="mu-news-img">'+
               '<img src="'+ elemento.imagen +'" alt="img">'+                      
             '</figure>'+
             '<br>';
          }


          var editButton = 
          '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#createEntrada-modal" onclick="$.editEntrada('+elemento.id+');">'+
            'Editar la entrada inferior'+
          '</button>';
  
          var deleteButton = 
          '<button type="button" class="btn btn-danger" onclick="$.deleteEntrada('+elemento.id+');">'+
            'Eliminar la entrada inferior'+
          '</button>';

          listaEntradas.append(
            '<article class="mu-news-single">' +
              editButton + ' ' + deleteButton +
              '<h3>' + elemento.entrada.titulo + '</h3>' +
              imagen+
              '<div class="mu-news-single-content">' +
                '<p>' + elemento.descripcionimagen+ '</p>' +
                '<div class="mu-news-single-bottom">' +
                  '<a href="blog-single.html?refentrada=' + elemento.entrada.id + '" class="mu-readmore-btn">Leer más</a>' +
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
  /*  18. Obtener parámetros de url
  /* ----------------------------------------------------------- */

  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
  };

  /* ----------------------------------------------------------- */
  /*  19. Lanzar título de las entradas.
  /* ----------------------------------------------------------- */

  jQuery( function() {
    if ($.urlParam('reftipo')==null || $.urlParam('refcat')==null) 
      return ;
    var titulo = $("#titulo");
    titulo.append( 
      '<h1>'+$.urlParam('reftipo')+': '+$.urlParam('refcat')+'</h1>' +
      '<br>');
  });

  /* ----------------------------------------------------------- */
  /*  20. Create parrafo
  /* ----------------------------------------------------------- */

  $.createParrafo = function(entrada = null) {
      var formData = new FormData();
      formData.append("subtitulo", $('#subtitulo').val());
      formData.append("parrafo", $('#parrafo').val());
      $.sendFile(formData, 'video', $('#video'), $.validateCheckbox($('#deleteVideo-submit')));
      $.sendFile(formData, 'imagen', $('#imagen'), $.validateCheckbox($('#deleteImagen-submit')));
      formData.append("descripcionvideo", $('#descripcionvideo').val());
      formData.append("descripcionimagen", $('#descripcionimagen').val());
      formData.append("youtube", $.validateCheckbox($('#youtube')));
      formData.append("esprincipal", false);
      formData.append("entrada", $.urlParam('refentrada'));
      if (entrada == null) {
        $.ajax({
            url: "http://127.0.0.1:8000/api/v1.0/parrafoedit/",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function() { 
              alert('¡Párrafo agregado exitosamente!');
              location.reload(); },
        });
    }else{
      $.ajax({
          url: "http://127.0.0.1:8000/api/v1.0/parrafoedit/"+entrada+"/",
          type: "PUT",
          data: formData,
          contentType: false,
          processData: false,
          success: function() { 
            alert('¡Párrafo modificado exitosamente!');
            location.reload(); },
      });
    }
  };

  $.sendFile = function(formData, fileUpload, fileSend, borrar){
    if(fileSend.val()==null || fileSend.val()==""){
      if(borrar){
        formData.append(fileUpload, new File([""], ""));
      }
      return;
    }
    formData.append(fileUpload, fileSend[0].files[0]);
  };

  $.validateCheckbox = function(cb){
    if (cb.is(':checked'))
      return true;
    return false;
  };

  /* ----------------------------------------------------------- */
  /*  20. Update párrafo
  /* ----------------------------------------------------------- */


  //Function that loads the previous form values.
  $.editParrafo = function(entrada){
    $.ajax({
      url : "http://127.0.0.1:8000/api/v1.0/parrafoedit/"+entrada+"/",
      dataType: "json",
      success : function (data) {

        $('#subtitulo').attr('value', data.subtitulo);
        $('#parrafo').append(data.parrafo);
        $('#descripcionvideo').append(data.descripcionvideo);


        var video = " ";
        var imagen = " ";

        if (data.video!=null)
          video = data.video.split("/");

        if (data.imagen!=null)
          imagen = data.imagen.split("/");

        $('#deleteVideo').append("Eliminar " + video[video.length-1]);
        $('#deleteImagen').append("Eliminar " + imagen[imagen.length-1]);
        
        $('#descripcionimagen').append( data.descripcionimagen);
        $('#createParrafo-submit').attr('onclick', "$.createParrafo("+entrada+"); return false;");
        data.youtube ? $('#youtube').attr('checked', 'checked') : $('#youtube').removeAttr('checked');
      },
      error: function() {
        console.log("No se ha podido obtener la información");
      }
    });
  };


  /* ----------------------------------------------------------- */
  /*  20. Delete párrafo
  /* ----------------------------------------------------------- */


  //Function that loads the previous form values.
  $.deleteParrafo = function(entrada){
    var c = confirm("¿Está seguro de querer eliminar este párrafo");
    if(!c)
      return;

    $.ajax({
      url: "http://127.0.0.1:8000/api/v1.0/parrafoedit/"+entrada+"/",
      type: "DELETE",
      contentType: false,
      processData: false,
      success: function() { 
        alert('¡Párrafo eliminado exitosamente!');
        location.reload(); },
    });
  };

  /* ----------------------------------------------------------- */
  /*  20. Create entrada
  /* ----------------------------------------------------------- */

  $.createEntrada = function(entrada = null) {
      var formData = new FormData();

      formData.append("entrada.titulo", $('#tituloEntrada').val());
      formData.append("entrada.categoria", $.urlParam('refcat'));
      formData.append("entrada.tipo", $.urlParam('reftipo'));
      $.sendFile(formData, 'imagen', $('#imagen'), $.validateCheckbox($('#deleteImagen-submit')));

      if ($('#imagen').val()=="" && $.validateCheckbox($('#deleteImagen-submit')))
        formData.delete('entrada.titulo');

      formData.append("descripcionimagen", $('#descripcionimagen').val());
      formData.append("esprincipal", true);
      if (entrada == null) {
        $.ajax({
            url: "http://127.0.0.1:8000/api/v1.0/general/",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function() { 
              alert('¡Párrafo agregado exitosamente!');
              location.reload(); },
        }).fail( function() {
            alert( "¡Error! Ningún campo se puede dejar en blanco." );
          });
    }else{
      $.ajax({
          url: "http://127.0.0.1:8000/api/v1.0/general/"+entrada+"/",
          type: "PUT",
          data: formData,
          contentType: false,
          processData: false,
          success: function() { 
            alert('¡Párrafo modificado exitosamente!');
            location.reload(); },
      });
    }
  };

  /* ----------------------------------------------------------- */
  /*  20. Update entrada
  /* ----------------------------------------------------------- */


  //Function that loads the previous form values.
  $.editEntrada = function(entrada){
    $.ajax({
      url : "http://127.0.0.1:8000/api/v1.0/general/"+entrada+"/",
      dataType: "json",
      success : function (data) {

        $('#tituloEntrada').attr('value', data.entrada.titulo);
        $('#descripcionimagen').append(data.descripcionimagen);

        imagen = data.imagen.split("/");

        $('#deleteImagen').append("Eliminar " + imagen[imagen.length-1]);
        
        $('#descripcionimagen').append( data.descripcionimagen);
        $('#createEntrada-submit').attr('onclick', "$.createEntrada("+entrada+"); return false;");
      },
      error: function() {
        console.log("No se ha podido obtener la información");
      }
    });
  };

  /* ----------------------------------------------------------- */
  /*  20. Delete entrada
  /* ----------------------------------------------------------- */


  //Function that loads the previous form values.
  $.deleteEntrada = function(entrada){
    var c = confirm("¿Está seguro de querer eliminar esta entrada?");

    if (!c)
      return;

    $.ajax({
      url: "http://127.0.0.1:8000/api/v1.0/general/"+entrada+"/",
      type: "DELETE",
      contentType: false,
      processData: false,
      success: function() { 
        alert('¡Párrafo eliminado exitosamente!');
        location.reload(); },
    });
  };

  /* ----------------------------------------------------------- */
  /*  20. Create término glosario
  /* ----------------------------------------------------------- */

  $.createTermino= function(entrada = null) {
      var formData = new FormData();
      formData.append("termino", $('#termino').val());
      formData.append("definicion", $('#definicion').val());
      formData.append("entrada", $.urlParam('refentrada'));
      if (entrada == null) {
        $.ajax({
            url: "http://127.0.0.1:8000/api/v1.0/glosariowrite/",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function() { 
              alert('¡Término agregado exitosamente!');
              location.reload(); },
        });
    }else{
      $.ajax({
          url: "http://127.0.0.1:8000/api/v1.0/glosariowrite/"+entrada+"/",
          type: "PUT",
          data: formData,
          contentType: false,
          processData: false,
          success: function() { 
            alert('¡Término modificado exitosamente!');
            location.reload(); },
      });
    }
  };

  
  /* ----------------------------------------------------------- */
  /*  20. Update termino 
  /* ----------------------------------------------------------- */


  //Function that loads the previous form values.
  $.editTermino = function(entrada){
    $.ajax({
      url : "http://127.0.0.1:8000/api/v1.0/glosariowrite/"+entrada+"/",
      dataType: "json",
      success : function (data) {

        $('#termino').attr('value', data.termino);
        $('#definicion').append(data.definicion);
        
        $('#descripcionimagen').append( data.descripcionimagen);
        $('#createTermino-submit').attr('onclick', "$.createTermino("+entrada+"); return false;");
      },
      error: function() {
        console.log("No se ha podido obtener la información");
      }
    });
  };

    /* ----------------------------------------------------------- */
  /*  20. Delete entrada
  /* ----------------------------------------------------------- */


  //Function that loads the previous form values.
  $.deleteTermino = function(entrada){
    var c = confirm("¿Está seguro de querer eliminar este término?");
    if (!c)
      return ;
    $.ajax({
      url: "http://127.0.0.1:8000/api/v1.0/glosariowrite/"+entrada+"/",
      type: "DELETE",
      contentType: false,
      processData: false,
      success: function() { 
        alert('¡Término eliminado exitosamente!');
        location.reload(); },
    });
  };

});

/* ----------------------------------------------------------- */
/*  21. Cambiar vistas de entradas.
/* ----------------------------------------------------------- */

function cambiarCategoria(nuevoParametro){
  var urlActual = window.location;
  urlActual = urlActual.toString();
  var urlNueva = "";

  for (var index = 0; index < urlActual.length; index++) {
    urlNueva += urlActual[index];
    if (urlActual[index]=="&") {
      urlNueva += nuevoParametro;
      break;
    }
  }
  window.location = urlNueva;
}

/* ----------------------------------------------------------- */
/*  21. Boton para añadir contenido
/* ----------------------------------------------------------- */
