$(document).ready(function() {
  

  // Start by defining our main variables
  let $wrapper = $('.tab-container'),
      $allTabs = $wrapper.find('.tab-inhalt > div'),
      $tabMenu = $wrapper.find('.tab-auswahl li'),
      $line = $('<div class="line"></div>').appendTo($tabMenu);
  
  // Hide t tabs that are not first-of-type
  $allTabs.not(':first-of-type').hide();  
  // change the widt of first to 100%
  $tabMenu.filter(':first-of-type').find(':first').width('100%')

  // Each is the jquery version of forEach!
  // for every tab menu we chage the data attribute of the li
  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  // same for the tabs themselves but for div and not the li
  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  // when we click one of the munus
  $tabMenu.on('click', function() {
    
    let dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);
    
    // We remove the active class of all tabs and add it to the one clicked
    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');
    
    // Change the width of the line for the animation
    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({'width':'100%'}, 'fast');
    // and animate it to 100% to create the line effect
    // We need to hide all tabs
    $getWrapper.find($allTabs).hide();
    // and then show the stab which was clicked using the data attribute of the clicked menut item
    $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
  });

});//end ready