define(['lib/news_special/bootstrap', 'VideoLoader', 'Carousel', 'WindowResizeEvent', 'WorldService', 'iStatsController'], function (news, VideoLoader, Carousel, WindowResizeEvent, WorldService) {

    return {
        init: function () {
            WorldService.checkLanguageDirection();
            Carousel.getReady({
                maxWidth: 976,
                minWidth: 900
            });
            VideoLoader.getReady();
            WindowResizeEvent.trigger();
        }
    };

});