/**
 * Created by Administrator on 2017/10/7.
 */
function bind(obj,evType,evFn) {
    if(obj.addEventListener){
        obj.addEventListener(evType,evFn,false);
    }else if(obj.attachEvent) {
        obj.attachEvent("on"+evType,evFn);
    }else {
        obj["on"+evType] = evFn;
    }

}

(function (window) {
    function Game(map){
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }
    Game.prototype.start = function () {
        this.food.render(this.map);
        this.snake.render(this.map);
//            this.snake.move();
        runSnake(this);
        bindKey(this);
    }
    function runSnake(that){
        var timer = setInterval(function () {
            that.snake.move(that.food,that.map);

            //that.snake.render(that.map);

            var headX=that.snake.body[0].x*that.snake.width;
            var headY=that.snake.body[0].y*that.snake.height;
            var maxX = that.map.offsetWidth;
            var maxY = that.map.offsetHeight;
            if(headX <0 || headX >=maxX){
                clearInterval(timer);
                alert('game over');
                return;
            }
            if(headY <0 || headY >=maxY){
                clearInterval(timer);
                alert('game over');
                return;
            }
            that.snake.render(that.map);

        },200)
    }
    function bindKey(that){
        bind(document,'keydown',function(ev){
            ev = ev || event;
            switch (ev.keyCode){
                case 37:
                    that.snake.direction = 'left';
                    break;
                case 39:
                    that.snake.direction = 'right';
                    break;
                case 38:
                    that.snake.direction = 'up';
                    break;
                case 40:
                    that.snake.direction = 'down';
                    break;
            }
        })

    }
    window.Game = Game;
})(window);
