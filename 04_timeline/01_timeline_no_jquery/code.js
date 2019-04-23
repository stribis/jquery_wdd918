$(document).ready(() =>{
  $('.point').click((e)=>{
    if(!$(e.target).hasClass('point-content')){
      $(e.target).toggleClass('active')
      $(e.target).siblings().removeClass('active');
    }
  })
})