const animation = bodymovin.loadAnimation({
    container: document.getElementById('video-playContainer'),
    path: 'assets/animations/play.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Play animation",
});