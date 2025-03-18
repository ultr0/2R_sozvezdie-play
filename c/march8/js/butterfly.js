(function (window) {

    Butterfly = function (leftImg, rightImg) {
        this.initialize();
        this.initButterfly(leftImg, rightImg);
    }

    var p = Butterfly.prototype = new Container();

    p.lWing = null;
    p.rWing = null;
    p.angle = 0;
    p.direction = 0;
    p.speed = 0;

    p.steps = 0;
    p.step = -1;

    p.initButterfly = function (leftImg, rightImg) {
        // create wings
        this.lWing = new Bitmap(leftImg);
        this.rWing = new Bitmap(rightImg);

        // change wings registration point inside container
        this.lWing.regX = this.lWing.image.width;
        this.lWing.regY = this.lWing.image.height / 2;
        this.rWing.regX = 0;
        this.rWing.regY = this.rWing.image.height / 2;

        // initial rotation
        this.lWing.rotation = this.rWing.rotation = this.angle = 360 * Math.random() | 0;
        // initial scale
        this.scale = this.lWing.scaleX = this.lWing.scaleY = this.rWing.scaleX = this.rWing.scaleY = 0.5 + 0.2 * Math.random();

        // assembling batterfly
        this.addChild(this.lWing);
        this.addChild(this.rWing);

        this.mouseEnabled = true;
        this.onMouseOver = function (e) { this.reset(); };
    };

    p.reset = function () {
        // animation steps
        this.step = this.steps = 40 + 60 * Math.random();
        // movement direction
        this.direction = 8 * Math.random() - 4.0;
        // movement speed
        this.speed = 5 * Math.random() + 5;
    };

    p.move = function () {
        // update rotation
        this.angle += this.direction + (5.0 * Math.random() - 2.5);
        this.lWing.rotation = this.rWing.rotation = this.angle;

        // update wings
        var wingAngle = (this.steps - this.step) / this.steps * Math.PI;
        this.lWing.scaleX = this.rWing.scaleX = this.scale * (0.4 + 0.6 * Math.abs(Math.cos(wingAngle * 4)));

        // update position
        this.x += (this.speed * Math.sin((this.angle) / 180.0 * Math.PI));
        this.y -= (this.speed * Math.cos((this.angle) / 180.0 * Math.PI));
        this.step--;
    };

    p.isActive = function () {
        return this.step >= 0;
    };

    window.Butterfly = Butterfly;
} (window));