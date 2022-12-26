//debut  menu 
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
// fin de menu

// faire apparaitre et cacher le bouton 'Retour menu Principal' de menu lors du scroll
 $('body').append('<a href="#menu"  title="Retour menu principal"> <img class="pictoRetourMenuPrincipal" src="assets/Pictos/pictos/Pictos_menubar_boutons/pictoMaisonRondDD3726.png" alt="Retour menu principal"> </a>');
 $('.pictoRetourMenuPrincipal').css({
   
     'position'			:	'fixed',
     'left'					:	'5px',
     'bottom'				:	'260px',
     'display'			:	'none',
     'border-radius':	'30px',
     'padding'			:	'0px',
     'width'        :'40px',
     'height'       :'40px',
     'opacity'			:	'0.9',
     'z-index'			:	'2000'
 });
    $(document).ready(function(){
    $(window).scroll(function(){
     posScroll = $(document).scrollTop();
     if(posScroll >=550) 
       $('.pictoRetourMenuPrincipal').fadeIn(600);
     else
       $('.pictoRetourMenuPrincipal').fadeOut(600);
   });
    }); 


   
// faire apparaitre et cacher le bouton 'A propos' de menu lors du scroll
$('body').append('<a href="#moi"  title="A Propos"> <img class="pictoAPropos" src="assets/Pictos/pictos/Pictos_menubar_boutons/PictoPersonaRondDD3726.png" alt="Page à propos"> </a> ');
$('.pictoAPropos').css({
  
    'position'			:	'fixed',
    'left'					:	'5px',
    'bottom'				:	'210px',
    'display'				:	'none',
    'padding'				:	'0px',
    'border-radius'	:	'30px',
    'width'         :'40px',
    'height'        :'40px',
    'opacity'				:	'0.9',
    'z-index'				:	'2000'
});
   $(document).ready(function(){
   $(window).scroll(function(){
    posScroll = $(document).scrollTop();
    if(posScroll >=550) 
      $('.pictoAPropos').fadeIn(600);
    else
      $('.pictoAPropos').fadeOut(600);
  });
   }); 


// faire apparaitre et cacher le bouton 'réalisations' de menu lors du scroll
$('body').append('<a href="#realisations"  title="Menu Réalisations"> <img class="pictoMenuRealisations" src="assets/Pictos/pictos/Pictos_menubar_boutons/pictoRealisationsRondDD3726.png" alt="Sous-menu réalisations"> </a> ');
$('.pictoMenuRealisations').css({
  
    'position'			:	'fixed',
    'left'					:	'5px',
    'bottom'				:	'160px',
    'display'				:	'none',
    'padding'				:	'0px',
    'border-radius'	:	'30px',
    'width'         :'40px',
    'height'        :'40px',
    'opacity'				:	'0.9',
    'z-index'				:	'2000'
});
   $(document).ready(function(){
   $(window).scroll(function(){
    posScroll = $(document).scrollTop();
    if(posScroll >=550) 
      $('.pictoMenuRealisations').fadeIn(600);
    else
      $('.pictoMenuRealisations').fadeOut(600);
  });
   });

// faire apparaitre et cacher le bouton 'compétences' de menu lors du scroll
$('body').append('<a href="#competences"  title="Compétences"> <img class="pictoPageCompetences" src="assets/Pictos/pictos/Pictos_menubar_boutons/PictoCompetencesRondDD3726.png" alt="Page compétences"> </a> ');
$('.pictoPageCompetences').css({
  
    'position'			:	'fixed',
    'left'					:	'5px',
    'bottom'				:	'110px',
    'display'				:	'none',
    'padding'				:	'0px',
    'width'         :'40px',
    'height'        :'40px',
    'border-radius'	:	'30px',
    'opacity'				:	'0.9',
    'z-index'				:	'2000'
});
   $(document).ready(function(){
   $(window).scroll(function(){
    posScroll = $(document).scrollTop();
    if(posScroll >=550) 
      $('.pictoPageCompetences').fadeIn(600);
    else
      $('.pictoPageCompetences').fadeOut(600);
  });
   });


// faire apparaitre et cacher le bouton 'contact' de menu lors du scroll
$('body').append('<a href="#contact"  title="Contact"> <img class="pictoPageContact" src="assets/Pictos/pictos/Pictos_menubar_boutons/pictoEnveloppeRondDD3726.png" alt="Page contact"> </a>');
$('.pictoPageContact').css({

    'position'			:	'fixed',
    'left'					:	'5px',
    'bottom'				:	'60px',
    'display'				:	'none',
    'padding'				:	'0px',
    'width'         :'40px',
    'height'        :'40px',
    'border-radius'	:	'30px',
    'opacity'				:	'0.9',
    'z-index'				:	'2000'
});

   $(document).ready(function(){
   $(window).scroll(function(){
    posScroll = $(document).scrollTop();
    if(posScroll >=550) 
      $('.pictoPageContact').fadeIn(600);
    else
      $('.pictoPageContact').fadeOut(600);
  });
   });
// fin de mise en place des bouton de menu scroll
  /*principal
    apropos
    réalisations
    compétences
    contact */

