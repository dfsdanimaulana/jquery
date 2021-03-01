$(document).ready(() => {
  const beranda = $(".beranda").html();
  $('.beranda').after(beranda);
  $('button').click(()=>$('.beranda').after(beranda))
});
