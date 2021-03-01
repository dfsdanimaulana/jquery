$(document).ready(() => {
  const beranda = $(".beranda").html();
  $('button').click(()=>$('.beranda').after(beranda))
});
