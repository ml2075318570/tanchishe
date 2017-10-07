/**
 * Created by Administrator on 2017/10/7.
 */
(function(window){
    //创建一个存储 蛇body的数组，用来存往页面中添加的蛇节
    var snakeEles = [];
    function Snake(width, height, direction){
        this.width = width || 20;
        this.height = height || 20;
        this.direction = direction || 'right';
        this.body = [
            {x:3, y:2, color:'green'},
            {x:2, y:2, color:'blue'},
            {x:1, y:2, color:'blue'}
        ];
    }
    // 让蛇产生并且先放置在页面上  渲染方法  render
    Snake.prototype.render = function (map) {
        //将上一步的 旧蛇 删除
        remove();
        console.log('123');
        for (var i = 0; i < this.body.length; i++) {
            //console.log('123');
            var oDiv = document.createElement('div');
            //console.log('oDiv');
            oDiv.style.width = this.width + 'px';
            oDiv.style.height = this.height + 'px';
            //console.log('this.width');
            oDiv.style.left = this.body[i].x*this.width + 'px';
            oDiv.style.top = this.body[i].y*this.height + 'px';
            //console.log(oDiv.style.left);
            oDiv.style.position = 'absolute';
            oDiv.style.backgroundColor = this.body[i].color;
            //将创建好的蛇节 放到页面上
            map.appendChild(oDiv);
            //同时 将创建好的蛇节 存到 数组里
            snakeEles.push(oDiv);
        }
    }
    Snake.prototype.move = function (food,map) {
        for (var i = this.body.length-1; i > 0 ; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //蛇头 方向
        switch (this.direction){
            case 'right':
                this.body[0].x +=1;
                break;
            case 'left':
                this.body[0].x -=1;
                break;
            case 'up':
                this.body[0].y -=1;
                break;
            case 'down':
                this.body[0].y +=1;
                break;
        }
//蛇头坐标=食物坐标
        var headX =  this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        //var headX = this.body[0].x*this.width;
        //var headY = this.body[0].y*this.height;
        var foodX = food.x;
        var foodY = food.y;
        if(headX == foodX && headY == foodY){
            var last = this.body[this.body.length-1];
            var newJie = {
                x:last.x,
                y:last.y,
                color:last.color
            }
            this.body.push(newJie);
            food.render(map);
        }

    }
    function remove(){
        for (var i = 0; i < snakeEles.length; i++) {
            snakeEles[i].parentNode.removeChild(snakeEles[i]);
        }
        snakeEles = [];
    }

    window.Snake = Snake;
})(window);