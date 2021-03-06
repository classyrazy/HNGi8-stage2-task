TweenMax.staggerFrom('.anim-first', 1, {
    delay: 0.4,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut
}, 0.08)
// TweenMax.staggerFrom('.about-story', 1, {
//         delay: 0.4,
//         opacity: 0,
//         x: -20,

//         ease: Power4.easeInOut
//     }, 0.08)
TweenMax.from('.classydev-pic', 1, {
    delay: 1,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})
TweenMax.to('.name-headers', 1, {
    delay: 0.2,
    // width: '100%',
    ease: Expo.easeInOut
})


(function () {

    "use strict";

    var win = window
        , doc = document
        , target = doc.getElementsByTagName('body')[0]
        , children = target.childNodes
        , childTag = 'DIV'
        , easing = "ease-out" //css easing
        , duration = "1.2s" //duration ms(millisecond) or s(second)
        , top = 0
        , wrappers = [];

    for (var i = 0; i < children.length; i++) {
        if (children[i].tagName == childTag) {
            wrappers.push(children[i]);
        }
    }

    var mScroll = {
        _init: function () {
            target.style.height = wrappers[0].offsetHeight + 'px';
            target.style.overflow = 'auto';

            wrappers[0].style.transition = 'transform ' + duration + ' ' + easing;
            wrappers[0].style.position = 'fixed';
            wrappers[0].style.top = '0';
            wrappers[0].style.left = '0';
            wrappers[0].style.width = '100%';
            wrappers[0].style.padding = '0';
            wrappers[0].style.zIndex = '2';
            wrappers[0].style.display = 'block';
            wrappers[0].style.backfaceVisibility = 'hidden';
        },
        _scroll: function () {
            top = -(win.pageYOffset || doc.documentElement.scrollTop);
            wrappers[0].style.transform = 'translateY(' + top + 'px)';
        }
    };

    if (typeof window.ontouchstart == 'undefined' && wrappers.length == 1) {
        win.onload = function () {
            mScroll._init();
        };
        win.onscroll = function () {
            mScroll._scroll();
        };
        win.onresize = function () {
            target.style.height = wrappers[0].offsetHeight + 'px';
        };
    }
})();


