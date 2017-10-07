/**
 * Created by Administrator on 2017/10/7.
 */
(function (window) {
    //定义一个变量 存食物
    var oldFood = [];
    function Food(width, height, x, y, color) {
        //食物（绝对定位）有的属性：宽 高 背景色  left  right
        //宽 高 背景色  left  right 可以用户输入 ，还有默认值
        this.width = width || 20;
        this.height = height || 20;
        this.x = x || 0;
        this.y = y || 0;
        this.color = color || 'red';
    }

    // 渲染到页面上  render方法           把方法放在原型上
    Food.prototype.render = function(map)
    {
        if(oldFood[0]){
            remove();
        }
        //食物在map上的位置  （map的宽/食物的宽）随机 在取整  在乘上 食物的宽
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        var oDiv = document.createElement('div');
       //console.log(oDiv);
        oDiv.style.width = this.width + 'px';
        oDiv.style.height = this.height + 'px';
        oDiv.style.position = 'absolute';
        oDiv.style.left = this.x + 'px';
        oDiv.style.top = this.y + 'px';
        oDiv.style.backgroundColor = this.color;
        map.appendChild(oDiv);
        oldFood.push(oDiv);
    };
    function remove(){
        oldFood[0].parentNode.removeChild(oldFood[0]);
        // 将内存中的数组里面清除那个食物数据
        oldFood.splice(0,1);
    }
    window.Food = Food;
})(window);