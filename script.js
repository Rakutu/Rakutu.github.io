window.addEventListener('DOMContentLoaded', function () {

  // BURGER  

  document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('.header__nav').classList.add('is-active')
  })

  document.querySelector('#burger-close').addEventListener('click', () => {
    document.querySelector('.header__nav').classList.remove('is-active')
  })

  // SEARCH

  function searchBlock() {

    document.querySelector('#search').addEventListener('click', () => {
      document.querySelector('.header__search-block--md').classList.add('on-active')
    })
    

    // document.querySelector('#burger-search-close').addEventListener('click', () => {
    //   document.querySelector('.header__search-block-x').classList.remove('header__search-x--active')
    // })

    document.querySelector('.header__search-burger').addEventListener('click', () => {
      document.querySelector('.header__search-block--md').classList.remove('on-active')
    })

  }

  searchBlock()



  //SWIPER
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 20000,
        },
        effect: 'fade',
        speed: 3500,
    });

    const gallerySwiperParams = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      // autoHeight: false,
      slidesPerView: 1,
      slidesPerColumn: 1,
      // slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 100,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          centeredSlides: false,
          spaceBetween: 34,
        },
        691: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          // slidesPerGroup: 2,
          centeredSlides: false,
          spaceBetween: 34,
        },
        1400: {
          spaceBetween: 50,
          slidesPerView: 3,
          // slidesPerGroup: 3,
          slidesPerColumn: 2,
          centeredSlides: false,
        },
      }

    };

    let gallerySwiper = new Swiper('.gallery__swiper-container', gallerySwiperParams);

    const eventsSwiper = new Swiper ('.events__cards-list--mobile', {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 51,
      pagination: {
        el: '.events__swiper-pagination',
        type: 'bullets',
      }
    })

    // const editionSwiper = new Swiper ('.edition__swiper-container', {
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'fraction',
    //   },
    //   breakpoints:{
    //     691: {
    //       slidesPerView: 2,
    //       spaceBetween: 50,
    //     },
    //     1360: {
    //       slidesPerView: 3,
    //       spaceBetween: 50,
    //     }
    //   }
    // })

    let editionSwiper;
    const slider = document.querySelector('.editions__swiper-container')
    const editionParams = {
      enabled: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      breakpoints:{
        691: {
          enabled: true,
          slidesPerView: 2,
          spaceBetween: 34,
        },
        1450: {
          enabled: true,
          slidesPerView: 3,
          spaceBetween: 50,
        }
      }
    }

    function descSwiper() {
      if (window.innerWidth > 691 && (!editionSwiper || editionSwiper.destroyed)) {
        editionSwiper = new Swiper (slider, editionParams);
      } else if (window.innerWidth < 691 && editionSwiper) {
        if (!editionSwiper.destroyed) {
          editionSwiper.destroy();
        }
      }
    }

    descSwiper();

    window.addEventListener('resize', () => {
      descSwiper();
      searchBlock(); 

      gallerySwiper.destroy();
      gallerySwiper = new Swiper('.gallery__swiper-container', gallerySwiperParams);
    })

    const projectsSwiper = new Swiper ('.projects__swiper', {
      spaceBetween: 2,
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        520: {
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 34,
        },
        769: {
          centeredSlides: false,
          spaceBetween: 50,
          slidesPerView: 2,
        },
        1300: {
          centeredSlides: false,
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
    })


    // CHOICES

    Choices 
    const element = document.querySelector('.select');
    const choices = new Choices(element, {
      position: 'bottom',
      searchEnabled: false,
    });

    const select = () => {
      
      const elements = document.querySelectorAll('.select');
      elements.forEach(el => {
        const choices = new Choices(el, {
          position: 'bottom',
          searchEnabled: false,
        })
      })
    }

    // element.closest('.choices').querySelector('#choices--sel-21-item-choice-6').style.display = 'none';

    // select();


    // document.querySelectorAll('.main__item-btn').forEach((ev) => {
    //   ev.addEventListener('click', (dropdawn) => {
    //     const path = dropdawn.currentTarget.dataset.path

    //     document.querySelectorAll('.main__dropdawn').forEach((openDropwdawn) => {
    //       openDropwdawn.classList.remove('main__dropdawn--active')
    //     })

    //     const drop = document.querySelector(`[data-target="${path}"]`)

    //     if (drop.classList.contains('main__dropdawn--active')) {
    //       drop.classList.remove('main__dropwdawn--active')
    //     } else {
    //       drop.classList.add('main__dropdawn--active')
    //     }

    //   })
    // })

    
    // MAIN_MENU

    // function setMenuListener () {
    //   const btnDropdawn = 'header__select-item-btn'
    //   const activeDropdawn = 'header__select-dropdawn--active'
    //   const activeBtnClass = 'header__select-item-btn--active'

    //   document.body.addEventListener('click', (ev) => {
    //     const openDropdawns = document.querySelectorAll(`.${activeDropdawn}`)
    //     const activeBtns = document.querySelectorAll(`.${activeBtnClass}`)

    //     if (ev.target.closest(`.${btnDropdawn}`)) {
    //       const btn = ev.target.closest(`.${btnDropdawn}`)
    //       const path = ev.target.closest(`.${btnDropdawn}`).dataset.path
    //       const drop = document.querySelector(`[data-target="${path}"]`)

    //       btn.classList.toggle(activeBtnClass)
    //       drop.classList.toggle(activeDropdawn)
    //     } 

    //     if (openDropdawns.length && !ev.target.closest(`.${activeDropdawn}`)) {
    //       activeBtns.forEach((current) => {
    //         current.classList.remove(activeBtnClass)
    //       })

    //       openDropdawns.forEach((current) => {
    //         current.classList.remove(activeDropdawn)
    //       })
    //     }
    //   })
    // }

    // setMenuListener ()

    const params = {
      btnClassName: "header__select-item-btn",
      activeClassName: "active",
      disabledClassName: "close"
    }
    
    function onDisable(evt) {
      if (evt.target.classList.contains(params.disabledClassName)) {
        evt.target.classList.remove(params.disabledClassName, params.activeClassName);
        evt.target.removeEventListener("animationend", onDisable);
      }
    }
    
    function setMenuListener() {
      document.body.addEventListener("click", (evt) => {
        const activeElements = document.querySelectorAll(`.${params.activeClassName}`);
    
        if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
          activeElements.forEach((current) => {
            if (current.classList.contains(params.btnClassName)) {
              current.classList.remove(params.activeClassName);
            } else {
              current.classList.add(params.disabledClassName);
            }
          });
        }
    
        if (evt.target.closest(`.${params.btnClassName}`)) {
          const btn = evt.target.closest(`.${params.btnClassName}`);
          const path = btn.dataset.path;
          const drop = document.querySelector(`[data-target="${path}"]`);
    
          btn.classList.toggle(params.activeClassName);
    
          if (!drop.classList.contains(params.activeClassName)) {
            drop.classList.add(params.activeClassName);
            drop.addEventListener("animationend", onDisable);
          } else {
            drop.classList.add(params.disabledClassName);
          }
        }
      });
    }
    
    setMenuListener();

    
    // CATALOG LANG

    // document.querySelectorAll('.cattalog__nav-btn').forEach((lang) => {
    //   lang.addEventListener('click', (langActive) => {
    //     const langPath = langActive.currentTarget.dataset.path

    //     document.querySelectorAll('.catalog__authors').forEach((langRemove) => {
    //       langRemove.classList.remove('catalog__authors--active')
    //     })
    //     document.querySelectorAll('.cattalog__nav-btn').forEach((langLinkRemove) => {
    //       langLinkRemove.classList.remove('cattalog__nav-btn--active')
    //     })

    //     document.querySelector(`[data-target="${langPath}"]`).classList.add('catalog__authors--active')
    //     document.querySelector(`[data-path="${langPath}"]`).classList.add('cattalog__nav-btn--active')

    //   })
    // })

    // CATALOG_AUTHORS
    // CATALOG_ACC

    // document.querySelectorAll('.catalog__authors-btn').forEach((acc) => {
    //   acc.addEventListener('click', (accActive) => {
    //     const accPath = accActive.currentTarget.dataset.path

    //     document.querySelectorAll('.catalog__authors-all').forEach((accRemove) => {
    //       accRemove.classList.remove('catalog__authors-all--active')
    //     })

    //     document.querySelector(`[data-target="${accPath}"]`).classList.add('catalog__authors-all--active')

    //   })
    // })

      // France

      document.querySelectorAll('.catalog__authors-all-link-fr').forEach((authors) => {
        authors.addEventListener('click', (authorsActive) => {
          const authorsPath = authorsActive.currentTarget.dataset.path
  
          document.querySelectorAll('.catalog__author-info-fr').forEach((authorRemove) => {
            authorRemove.classList.remove('catalog__author-info-fr--active')
          })
          document.querySelectorAll('.catalog__authors-all-link-fr').forEach((authorLinkRemove) => {
            authorLinkRemove.classList.remove('catalog__authors-all-link-fr--active')
          })
  
          document.querySelector(`[data-target="${authorsPath}"]`).classList.add('catalog__author-info-fr--active')
          document.querySelector(`[data-path="${authorsPath}"]`).classList.add('catalog__authors-all-link-fr--active')
  
        })
      })

      // Germany
      
      document.querySelectorAll('.catalog__authors-all-link-ger').forEach((authors) => {
        authors.addEventListener('click', (authorsActive) => {
          const authorsPath = authorsActive.currentTarget.dataset.path
  
          document.querySelectorAll('.catalog__author-info-ger').forEach((authorRemove) => {
            authorRemove.classList.remove('catalog__author-info-ger--active')
          })
          document.querySelectorAll('.catalog__authors-all-link-ger').forEach((authorLinkRemove) => {
            authorLinkRemove.classList.remove('catalog__authors-all-link-ger--active')
          })
  
          document.querySelector(`[data-target="${authorsPath}"]`).classList.add('catalog__author-info-ger--active')
          document.querySelector(`[data-path="${authorsPath}"]`).classList.add('catalog__authors-all-link-ger--active')
  
        })
      })

      // Italy

    document.querySelectorAll('.catalog__authors-all-link-it').forEach((authors) => {
      authors.addEventListener('click', (authorsActive) => {
        const authorsPath = authorsActive.currentTarget.dataset.path

        document.querySelectorAll('.catalog__author-info-it').forEach((authorRemove) => {
          authorRemove.classList.remove('catalog__author-info-it--active')
        })
        document.querySelectorAll('.catalog__authors-all-link-it').forEach((authorLinkRemove) => {
          authorLinkRemove.classList.remove('catalog__authors-all-link-it--active')
        })

        document.querySelector(`[data-target="${authorsPath}"]`).classList.add('catalog__author-info-it--active')
        document.querySelector(`[data-path="${authorsPath}"]`).classList.add('catalog__authors-all-link-it--active')

      })
    })

      // Russia

      document.querySelectorAll('.catalog__authors-all-link-ru').forEach((authors) => {
        authors.addEventListener('click', (authorsActive) => {
          const authorsPath = authorsActive.currentTarget.dataset.path
  
          document.querySelectorAll('.catalog__author-info-ru').forEach((authorRemove) => {
            authorRemove.classList.remove('catalog__author-info-ru--active')
          })
          document.querySelectorAll('.catalog__authors-all-link-ru').forEach((authorLinkRemove) => {
            authorLinkRemove.classList.remove('catalog__authors-all-link-ru--active')
          })
  
          document.querySelector(`[data-target="${authorsPath}"]`).classList.add('catalog__author-info-ru--active')
          document.querySelector(`[data-path="${authorsPath}"]`).classList.add('catalog__authors-all-link-ru--active')
  
        })
      })

       // Belgium

       document.querySelectorAll('.catalog__authors-all-link-belg').forEach((authors) => {
        authors.addEventListener('click', (authorsActive) => {
          const authorsPath = authorsActive.currentTarget.dataset.path
  
          document.querySelectorAll('.catalog__author-info-belg').forEach((authorRemove) => {
            authorRemove.classList.remove('catalog__author-info-belg--active')
          })
          document.querySelectorAll('.catalog__authors-all-link-belg').forEach((authorLinkRemove) => {
            authorLinkRemove.classList.remove('catalog__authors-all-link-belg--active')
          })
  
          document.querySelector(`[data-target="${authorsPath}"]`).classList.add('catalog__author-info-belg--active')
          document.querySelector(`[data-path="${authorsPath}"]`).classList.add('catalog__authors-all-link-belg--active')
  
        })
      })


    // EVENTS 

    // document.querySelector('.events__btn-all').addEventListener('click', (allEvents) => {
    //   document.querySelectorAll('.events__card').forEach((eventCard) => {
    //     eventCard.classList.add('events__card--active')
    //   })
    //   document.querySelector('.events__btn-all').classList.add('events__btn-all--inactive')
    // })

    // if (screen.width <= 1023) {
    //   document.querySelectorAll('.events__card')[2].classList.remove('events__card--active')
    // } else {
    //   document.querySelectorAll('.events__card')[2].classList.add('events__card--active')
    // }


    function setCards() {
      // создаем главную функцию для всего этого дела, чтоб объединить весь нужный код внутрь нее
  
      /* эти константы меняйте под себя, в зависимости от того, где будет граница десктопа и мобильника */
      const MIN_DESKTOP = 1023;
      const MIN_TABLET = 581;
  
      let isOpened = false;
      const cardsWrap = document.querySelector(".js-cards-wrap");
      const hidden = "is-hidden";
      const interaction = "is-interaction";
      const openAnimation = "fade-in";
      const closeAnimation = "fade-out";
      const showText = "Все события"; // текст кнопки в закрытом состоянии
      const hideText = "Скрыть События"; // текст кнопки в открытом состоянии
      let btn = cardsWrap.querySelector(".events__btn-all");
      const cards = Array.from(cardsWrap.querySelectorAll(".events__card"));
      /* Функция устанавливающая количество карточек к изначальному просмотру и скрывающая остальные */
      function setHiddenCards(quantity, isResize) {
        if (quantity) {
          cards.forEach((el, i) => {
            el.classList.remove(hidden, interaction);
  
            if (i >= quantity) {
              el.classList.add(hidden, interaction);
            }
  
            if (isResize !== "resize") {
              el.addEventListener("animationend", function (evt) {
                if (
                  !isOpened &&
                  isResize !== "resize" &&
                  evt.target.classList.contains(interaction)
                ) {
                  evt.target.classList.add(hidden);
                  evt.target.classList.remove(closeAnimation);
                }
              });
            } else {
              isOpened = false;
              btn.textContent = showText;
            }
          });
  
          btn.classList.remove(hidden);
        } else {
          cards.forEach((el, i) => {
            el.classList.remove(hidden);
          });
  
          btn.classList.add(hidden);
        }
  
        function setBtnListener(quantity) {
          btn.outerHTML = btn.outerHTML;
          btn = cardsWrap.querySelector(".events__btn-all");
          btn.addEventListener("click", function () {
            isOpened = !isOpened;
  
            if (isOpened) {
              btn.textContent = hideText;
  
              cards.forEach((el, i) => {
                el.classList.remove(hidden, closeAnimation);
                el.classList.add(openAnimation);
              });
  
              cards[quantity].scrollIntoView({
                block: "start",
                behavior: "smooth"
              });
            } else {
              btn.textContent = showText;
  
              cards.forEach((el, i) => {
                if (el.classList.contains(interaction)) {
                  el.classList.add(closeAnimation);
                }
              });
  
              cards[0].scrollIntoView({ block: "start", behavior: "smooth" });
            }
          });
        }
  
        setBtnListener(quantity, isOpened);
      }
  
      /* функция для проверки ширины страницы, она же обработчик события resize */
      function checkDisplay(evt) {
        let isResize;
  
        if (evt) {
          isResize = evt.type;
        }
  
        const width = Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.body.clientWidth,
          document.documentElement.clientWidth
        );
  
        switch (true) {
          case width > MIN_DESKTOP:
            setHiddenCards(3, isResize); // цифра означает количество карточек, которые будут показаны изначально
            break;
          case width > MIN_TABLET && width <= MIN_DESKTOP:
            setHiddenCards(2, isResize);
            break;
          default:
            setHiddenCards(false, isResize);
        }
      }
  
      checkDisplay(); // проверяем ширину экрана при первой загрузке страницы
      window.addEventListener("resize", checkDisplay); // проверяем ширину при ресайзе без перезагрузки
    }
  
    setCards(); // вызываем главную функцию для всего этого дела
  

    
    // let dropdownsAll = document.querySelectorAll('.main__dropdawn')
    // let activeDropdown

    // dropdownsAll.forEach(dropdown => {
    //   dropdown.addEventListener('click', e => {
    //     if(activeDropdown) {
    //       activeDropdown.classList.remove('.main__dropdawn--active')
    //     }
    //     if(e.target.classList.contains('.main__dropdawn--active')) {
    //       e.target.classList.remove('.main__dropdawn--active')
    //     } else {
    //       e.target.classList.add('.main__dropdawn--active')
    //       activeDropdown = e.target
    //     }
    //   })
    // })

    // document.body.addEventListener("click", function (evt) {  
    //   const openDropwdawn = document.querySelector(".main__dropdawn--active")

    //   if (evt.currentTarget.classList.contains(".main__item-btn")) {
    //     const path = evt.target.dataset.path
    //     const list = document.querySelector(`[data-target="${path}"]`)

    //     if (openDropwdawn) {
    //       openDropwdawn.classList.remove("main__dropdawn--active")
    //     }
    //     list.classList.add("main__dropdawn--active")
    //   } else if (openDropwdawn) {
    //     openDropwdawn.classList.remove("main__dropdawn--active")
    //   }
    // })

    $ (function() {
      $( ".accordion" ).accordion({
        animate: 300,
        active: 0,
        icons: false,
        heightStyle: 'content',
      });

    });

    
    $( function() {
      $( "#tabs" ).tabs( {
        show: { effect: "fadeIn", duration: 300 },
        hide: { effect: "fadeOut", duration: 300 },
        active: 2,
      });
    });

    $ (function() {
      $( ".edition-accordion" ).accordion({
        animate: 200,
        active: false,
        collapsible: true,
        icons: false,
        heightStyle: "content",
      });
    });

    


    
    // simplebar

    // Array.prototype.forEach.call(
    //   document.querySelectorAll('.main__dropdawn'),
    //   el => new SimpleBar()
    // );

    // edition Checks 

    document.querySelectorAll('.editions__check-item-m').forEach((categories) => {
      categories.addEventListener('click', (categoriesActive) => {
        const categoriesPath = categoriesActive.currentTarget.dataset.path

        categories.classList.add('is-hidden')
        document.querySelectorAll(`[data-target="${categoriesPath}"]`).forEach((categoriesAdd) => {
          categoriesAdd.classList.add('editions__check-item--mobile--active')
        })

      })
    })

    document.querySelectorAll('.editions__check-item--mobile').forEach((categoriesDel) => {
      categoriesDel.addEventListener('click', (e) => {
        const categoriesPathRemove = e.currentTarget.dataset.target
        
        categoriesDel.classList.remove('editions__check-item--mobile--active')
        document.querySelector(`[data-path="${categoriesPathRemove}"]`).classList.remove('is-hidden')
      })
    })

    // const checkItemsOn = document.querySelectorAll('.edition__check-item-m')
    // const checkItemsOff = document.querySelectorAll('.edition__check-item--mobile')

    // checkItemsOn.forEach((categories) => {
    //   categories.addEventListener('click', function () {
    //     const categoriesPath = this.dataset.path
    //     const tergetElem = document.querySelector(`[data-target="${categoriesPath}"]`)

    //     this.style.display = "none";

    //     tergetElem.classList.add('edition__check-item--mobile--active');
    //     targetElem.querySelector('input[type="checkbox"]').checked = true
    //   }) 
    // })

    // checkItemsOff.forEach((categoriesDel) => {
    //   categoriesDel.addEventListener(`click`, () => {
    //     const path = this.dataset.target
    //     const targetElem = document.querySelector(`[data-path="${path}"]`)

    //     this.classList.remove('edition__check-item--mobile--active')

    //     targetElem.style.display = '';
    //     targetElem.querySelector('inout[type="checkbox"]').checked = false
    //   })
    // })

    // document.querySelectorAll('.edition__check-item--mobile').forEach((categoriesDel) => {
    //   categoriesDel.addEventListener('click', () => {
    //     categoriesDel.classList.remove('edition__check-item--mobile--active')
    //   })
    // })

    // TOOLTIP

    tippy('#tooltip--one', {
      content: 'Пример современных тенденций - современная методология разработки',
      maxWidth: 264,
      theme: 'main',
      arrow: false,
    })

    tippy('#tooltip--two', {
      content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
      theme: 'main',
      maxWidth: 264,
      arrow: false,
    })

    tippy('#tooltip--three', {
      content: 'В стремлении повысить качество',
      theme: 'main',
      arrow: false,
    })

    ymaps.ready(init);
    function init(){
        // Создание карты. 
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758532, 37.601082],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
            controls: []
        });

        var myCircle = new ymaps.Circle([
          // Координаты центра круга.
          [55.758532, 37.601082],
          // Радиус круга в метрах.
          15
      ], {
          // Описываем свойства круга.
          // Содержимое балуна.
          // balloonContent: "Радиус круга - 10 км",
          // Содержимое хинта.
          hintContent: "Подвинь меня"
      }, {
          // Задаем опции круга.
          // Включаем возможность перетаскивания круга.
          draggable: false,
          // Цвет заливки.
          // Последний байт (77) определяет прозрачность.
          // Прозрачность заливки также можно задать используя опцию "fillOpacity".
          fillColor: "#9D5CD0",
          // Цвет обводки.
          strokeColor: "#9D5CD0",
          // Прозрачность обводки.
          strokeOpacity: 1,
          // Ширина обводки в пикселях.
          strokeWidth: 0
      });
  
      // Добавляем круг на карту.
      myMap.geoObjects.add(myCircle);

    }

    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);
    
    new JustValidate('.contacts__form', {
      colorWrong: 'red',
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 30,
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          }
        },
      },

      messages: {
        name: {
          required: 'Как Вас зовут?',
          minLength: 'Минимальное количество символов 2',
        },
        tel: {
          required: 'Укажите Ваш телефон'
        },
      },
    })

});