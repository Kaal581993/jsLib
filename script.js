$('#toggle').click(function() {
  $(this).toggleClass('is-active');
  $('#navbarCollapse').toggleClass('is-active');
});

var carousalV = document.getElementById('verticalWrapperId'),
    carousalH = document.getElementById('horizontalWrapperId'),
    cardsLength = 6; // Should always be equal to cards length

document.getElementById('leftBtnId').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = carousalH.scrollLeft,
      ssH = carousalH.scrollWidth / cardsLength,

      st = carousalV.scrollTop,
      ssV = carousalV.scrollHeight / cardsLength;

  if ((sl - ssH) <= 0) {
    carousalH.scrollTo({ left: 0, behaviour: 'smooth' });
  } else {
    carousalH.scrollTo({ left: sl - ssH, behaviour: 'smooth' });
  }

  if ((st - ssV) <= 0) {
    carousalV.scrollTo({ top: 0, behaviour: 'smooth' });
  } else {
    carousalV.scrollTo({ top: st - ssV, behaviour: 'smooth' });
  }
});

document.getElementById('rightBtnId').addEventListener('click', function(e) {
  e.preventDefault();
  let sl = carousalH.scrollLeft,
      cw = carousalH.scrollWidth,
      ssH = cw / cardsLength,

      st = carousalV.scrollTop,
      ch = carousalV.scrollHeight,
      ssV = ch / cardsLength;

  if ((sl + ssH) >= cw) {
    carousalH.scrollTo({ left: cw, behaviour: 'smooth' });
  } else {
    carousalH.scrollTo({ left: sl + ssH, behaviour: 'smooth' });
  }

  if ((st + ssV) >= ch) {
    carousalV.scrollTo({ top: ch, behaviour: 'smooth' });
  } else {
    carousalV.scrollTo({ top: st + ssV, behaviour: 'smooth' });
  }
});

//Container 1
jQuery(document).ready(function() {
    var pannellist = $('.panales');
        panel = pannellist.find('li');
        items = $('.animator').find('.item');
        $(panel).on('click',function(e){
            var selfpos = $(this).index();
            itemhighlite = items[selfpos];
            setpos=0;
             e.preventDefault();
                $(items).removeClass('active');
                $(itemhighlite).addClass('active');
                if(selfpos == 1)
                {                           $(items[setpos]).css({"left":"30px","z-index":"10"});
                }
                else if(selfpos == 2)
                {                $(items[setpos]).css({"left":"0px","z-index":"9"});
                }
                 else
                {
                   $(items[setpos]).css({"left":"60px","z-index":"12"});
                }
                setpos=selfpos;
        });

});
