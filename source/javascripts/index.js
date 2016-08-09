// This is where it all goes :)

$(document).ready(() => {

  $('.double-burger').on('click', () => {
    $('.double-burger').toggleClass('open');
    $('.nyu-site-nav').toggleClass('open');
  });

  $('.location-nav__search-icon').on('click', (e) => {
    e.preventDefault();
    $('.location-nav__search-bar').toggleClass('open');

        setTimeout(() => {$('.location-nav__search-bar input').focus() }, 300);

  });

  $('.location-nav__search-bar input').on('keyup', (e) => {
    var currentValue = $('.location-nav__search-bar input').val();
    $('.location-nav__search-bar input').removeClass('error');
    $('.location-nav__search-bar .filtered-list').removeClass('open');

    if (currentValue === '') {
      $('.location-nav__search-bar .full-list').addClass('open');
    } else if(currentValue.toLowerCase() == 'lung c'){
      $('.location-nav__search-bar .full-list').removeClass('open');
      $('.location-nav__search-bar .filtered-list').addClass('open');
    } else if (currentValue.length >= 7) {
      $('.location-nav__search-bar .full-list').removeClass('open');
      $('.location-nav__search-bar input').addClass('error');
    }
  });

  $('.location-nav__search-bar input').on('focus', (e) => {
    if($('.location-nav__search-bar input').val() === '') {
        $('.location-nav__search-bar .full-list').addClass('open');
    }
  });

  $(document).on('click', (e) => {
    let isSearchBarOpen = $('.location-nav__search-bar').hasClass('open');
    let isInsideSearchBar = $(e.target).parent().hasClass('location-nav__search-bar') || $(e.target).parent().hasClass('location-nav__search-icon');
    if(isSearchBarOpen && !isInsideSearchBar) {
      $('.location-nav__search-bar').toggleClass('open');
      $('.location-nav__search-bar .full-list').removeClass('open');
      $('.location-nav__search-bar .filtered-list').removeClass('open');
    }
  });
});
