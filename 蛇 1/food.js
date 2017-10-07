/**
 * Created by Administrator on 2017/10/7.
 */
/*1食物对象  属性和方法
 食物有什么属性?
 ( 静态的 )属性: 食物 宽高(width height)  颜色(color)  位置(x y) 把属性放在构造函数中
 功能 方法:  需要将食物随机产生 并且放置在页面上   渲染到页面上  render方法           把方法放在原型上*/

// 这是一个函数的立即执行表达式
// 把你开发的食物对象 整体功能代码放在这个包的立即执行的函数壳中 达到避免全局命名冲突
// 相当于设定一个命名空间  形成一个独立的模块化的一段代码
(function(window){
      var oldFood = [];
    /*食物对象
     1 创建构造函数 构造食物*/
    // 用户可以自行传入一些自定义设置
    function Food(width,height,x,y,color){
        // 把一些属性进行添加  并且给一写默认的初始化数据
        this.width = width || 20;
        this.height = height || 20;
        //将坐标先挂载到构造函数的this隐式对象上
        this.x = x || 0;
        this.y = y || 0;
        // 颜色默认给一个绿色
        this.color = color || "green";

    }
    // 渲染到页面上  render方法           把方法放在原型上
    Food.prototype.render = function(map){
        if(oldFood[0]){
            remove();
        }

        this.x = parseInt(Math.random()*( map.offsetWidth/this.width))*this.width;
        // 进行y坐标的设置
        this.y = parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;

        var oDiv = document.createElement("div");
        // 给div添加宽高
        oDiv.style.width = this.width + "px";
        oDiv.style.height = this.height + "px";
        // 给div添加位置
        oDiv.style.left = this.x + "px";
        oDiv.style.top = this.y + "px";
        // 想要让食物在页面上根据left值和top值来进行随机放置 就需要让它相对于地图进行绝对定位
        oDiv.style.position = "absolute";
        // 添加颜色
        oDiv.style.background = this.color;

        map.appendChild(oDiv);
        oldFood.push(oDiv);
    }
    function remove(){
        oldFood[0].parentNode.removeChild(oldFood[0]);
        oldFood.splice(0,1);
    }
    // 将食物的构造函数放在window全局对象的一个属性下面 挂载着 然后这样外面可以直接访问window ，与此同时就可以访问window.food
    // 从而将此对象暴露出去
    window.Food = Food;

})(window);