$(document).ready(function () {
    $(".my-unique-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoWidth: true,
        items: 8,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'cMz1wWtGfUA',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onError
        }
    });
}

function onPlayerReady(event) {
    var playButton = document.getElementById("playButton");
    playButton.addEventListener("click", togglePlayPause);
}

function togglePlayPause() {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
        document.querySelector("#playButton i").classList.replace("fa-pause", "fa-play");
    } else {
        player.playVideo();
        document.querySelector("#playButton i").classList.replace("fa-play", "fa-pause");
    }
}

function onPlayerStateChange(event) {
    var icon = document.querySelector("#playButton i");
    if (event.data === YT.PlayerState.PLAYING) {
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
}

function onError(event) {
    alert("Ошибка загрузки видео: " + event.data);
}



document.addEventListener('DOMContentLoaded', function () {
    const images = [
        "images/scooter.jpg",
        "images/madbull_zawita_tela_cherepaha_zhenskaya_turtle_woman_night_chernaya.jpg"
    ];

    // Выбор всех слайдеров
    const sliders = document.querySelectorAll('.electricscooters_choice_slider');

    sliders.forEach(function (slider) {
        let currentImageIndex = 0;

        // Функция для обновления фонового изображения
        function updateBackgroundImage(index) {
            slider.style.backgroundImage = `url('${images[index]}')`;
        }

        // Выбор кнопок внутри каждого слайдера
        const leftArrow = slider.querySelector('.electricscooters_choice_arrows_left');
        const rightArrow = slider.querySelector('.electricscooters_choice_arrows_right');

        // События клика для кнопок
        leftArrow.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
            updateBackgroundImage(currentImageIndex);
        });

        rightArrow.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
            updateBackgroundImage(currentImageIndex);
        });

        // Инициализация первого фона
        updateBackgroundImage(currentImageIndex);
    });
});


$(document).ready(function () {
    var owlCarousel = $(".youtube-carousel").owlCarousel({
        loop: true, // зацикливание карусели
        margin: 10,
        autoWidth: true,
        autoplay: false, // автопрокрутка
        //autoplayTimeout: 5000, // время до следующего переключения
        //autoplayHoverPause: true, // остановка при наведении
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Добавляем обработчик клика на кнопку с классом youtube-carousel_review-button
    $(".youtube-carousel_review-button").click(function () {
        owlCarousel.trigger('next.owl.carousel'); // При клике прокручиваем карусель на один элемент вперед
    });
});



$(document).ready(function () {
    var owl = $('.loop');
    owl.owlCarousel({
        center: false,
        items: 2,
        loop: true,  // Включаем бесконечную прокрутку
        margin: 30,
        responsive: {
            768: {
                items: 3
            }
        }
    });

    var isForward = true; // Флаг для определения направления прокрутки

    $('.next-button').click(function () {
        if (isForward) {
            owl.trigger('next.owl.carousel');
        } else {
            owl.trigger('prev.owl.carousel');
        }
    });

    // Подписываемся на события изменения карусели
    owl.on('changed.owl.carousel', function (event) {
        if (event.item.index === event.item.count - event.page.size) {
            isForward = false; // Если достигнут конец, меняем направление на обратное
        } else if (event.item.index === 0) {
            isForward = true; // Если достигнуто начало, снова вперёд
        }
    });
});



function toggleAccordion(element) {
    var content = element.nextElementSibling;
    if (content.style.maxHeight) {
        // Аккордеон закрыт
        content.style.maxHeight = null;
        element.classList.remove('active');
    } else {
        // Аккордеон открыт
        content.style.maxHeight = content.scrollHeight + "px";
        element.classList.add('active');
    }
}



$(document).ready(function(){
    var myCarousel = $(".about_store_slider .owl-carousel").owlCarousel({
        items: 1, // Показывать по одному слайду
        loop: true, // Включить зацикливание слайдов
        nav: false, // Управление стрелками внешними
        dots: false // Без точек навигации
    });

    // Список фоновых изображений для каждого слайда
    var backgroundImages = [
        "url('images/yellowback.jpg')",
        "url('image/background2.jpg')",
        "url('image/background3.jpg')"
        // Добавьте столько изображений, сколько у вас слайдов
    ];

    // Событие, вызываемое при изменении слайда
    myCarousel.on('changed.owl.carousel', function(event) {
        var currentItem = event.item.index; // Текущий индекс слайда
        
        // Обновляем фоновое изображение для элемента .about_store_back
        $('.about_store_back').css('background-image', backgroundImages[currentItem]);
        
        // Обновляем значение ползунка и текстовый индикатор
        var slider = $('#myRange');
        var sliderValue = $('#slider-value');
        slider.val(currentItem + 1);
        sliderValue.text(currentItem + 1);
    });

    $(".about_store_slider_left").click(function() {
        myCarousel.trigger('prev.owl.carousel');
    });

    $(".about_store_slider_right").click(function() {
        myCarousel.trigger('next.owl.carousel');
    });
});


$(document).ready(function() {
    $("#uniqueCarousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000, // Интервал смены слайдов
        autoplayHoverPause: true,
        animateOut: 'fadeOut', // Эффект исчезновения
        animateIn: 'fadeIn', // Эффект появления
        dots: true, // Показывать точки навигации
        nav: true // Показывать кнопки навигации
    });
});


