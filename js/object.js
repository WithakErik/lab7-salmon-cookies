class Cookie {

    constructor(location, min, max, avg) {
        this.location = location;
        this.min = min;
        this.max = max;
        this.avg = avg;
    }

    cookieData() {
        this.cookies = [];
        this.cookies.push(this.location);
        for(let i = 0; i < 15; i++) {
            this.cookies.push(Math.floor(Math.random() * (this.max - this.min)) + this.min)
        }
        return this.cookies;
    }

    renderMe() {
        // console.log('should render an object', tempArray);
        render(this.cookies, 'body', 'body-data');
    }
}