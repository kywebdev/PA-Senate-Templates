/**
* PSRC Base JS
*
*/

( function( $ ) {

 // Remove widows from senator header info
 $('.hero .senator-info .district').widowFix();

 
 $('#menu').slicknav();

 // back to top smooth scrolling
 $('a[href^="#"]').on('click',function (e) {
   e.preventDefault();

   var target = this.hash;
   var $target = $(target);

   $('html, body').stop().animate({
       'scrollTop': -50 + $target.offset().top
   }, 900, 'swing', function () {
   });
 });

} )( jQuery );