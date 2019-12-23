created() {
  await preloadVideo('/videos/office.mp4')
    // .then((video: HTMLVideoElement) => {
    //   console.log(video)
    //   const type = 'video/mp4; codecs="avc1.640828"';
    //   const src = '/videos/office.mp4';
    //   const duration = video.duration;
    //   const image = video.poster;

    //   log('видео', src);

    //   if (DetachedSourceBuffer.isSupported(type)) {
    //     log('полноформатное видео на mediasource');
    //     this.buffer = new DetachedSourceBuffer({ src, type, duration }, 'http', 'main');
    //     console.log(this.buffer)
    //     // this.createVideoFromBuffer({ src, type, image });
    //   } else {
    //     // log('упрощеное видео с video тегом');
    //     // this.createVideoFromScratch({ src, image });
    //   }
    // })
}
