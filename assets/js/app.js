class App {
    constructor() {
        this.listen = (episodeId) => {
            var playerPath = "/listen?e=" + episodeId;
            this.popOut(playerPath);
        };

        this.popOut = (href) => {
            open(href, 'targetWindow',`toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,width=320,height=611`);
            return true;
        }
    }
}

app = new App();
