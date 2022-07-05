import MainSlider from './modules/sliders/slider-main.js';
import MiniSlider from './modules/sliders/slider-mini.js';
import VideoPlayer from './modules/playVideo.js';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        btns: '.next',
        container: '.page'
    });
    slider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next'
    });
    showUpSlider.init();

    const moduleSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next'
    });
    moduleSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next'
    });
    feedSlider.init();

    const player = new VideoPlayer('.showup .play', '.overlay' );
    player.init();
});