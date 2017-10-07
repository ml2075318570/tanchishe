/**
 * Created by Administrator on 2017/10/7.
 */
(function (window) {

    var snakeEles = [];

    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        this.body = [
            {x: 3, y: 2, color: 'red'},
            {x: 2, y: 2, color: 'orange'},
            {x: 1, y: 2, color: 'orange'}
        ];
        this.direction = direction || "right";
    }

    Snake.prototype.render = function (map) {
        remove();
        for (var i = 0; i < this.body.length; i++) {
            var oDiv = document.createElement('div');
            oDiv.style.width = this.width + 'px';
            oDiv.style.height = this.height + 'px';
            oDiv.style.left = this.body[i].x * this.width + 'px';
            oDiv.style.top = this.body[i].y * this.height + 'px';
            oDiv.style.position = 'absolute';
            oDiv.style.backgroundColor = this.body[i].color;
            map.appendChild(oDiv);
            snakeEles.push(oDiv);
        }
        Snake.prototype.move = function (food,map) {
            //console.log('123');
            for (var i = this.body.length - 1; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }
            switch (this.direction) {
                case 'right':
                    this.body[0].x += 1;
                    break;
                case 'left':
                    this.body[0].x -= 1;
                    break;
                case 'up':
                    this.body[0].y -= 1;
                    break;
                case 'down':
                    this.body[0].y += 1;
                    break;
            }
            var headX = this.body[0].x * this.width;
            var headY = this.body[0].y * this.height;
            var foodX = food.x;
            var foodY = food.y;
            //console.log(foodX);
            //console.log(foodY);
            //console.log(headX);
            //console.log(headY);

            if (headX == foodX && headY == foodY) {
            console.log('123');
            var last = this.body[this.body.length - 1];
            var newJie = {
                x: last.x,
                y: last.y,
                color: last.color
            };
            console.log('123');
            this.body.push(newJie);
            // console.log(this.body);

            food.render(map);
        }
    };
        function remove() {
            for (var i = 0; i < snakeEles.length; i++) {
                snakeEles[i].parentNode.removeChild(snakeEles[i]);
            }
            snakeEles = [];
        }
    }
    window.Snake = Snake;
})(window);
