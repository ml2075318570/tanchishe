/**
 * Created by Administrator on 2017/10/7.
 */
(function (window) {
    //����һ������ ��ʳ��
    var oldFood = [];
    function Food(width, height, x, y, color) {
        //ʳ����Զ�λ���е����ԣ��� �� ����ɫ  left  right
        //�� �� ����ɫ  left  right �����û����� ������Ĭ��ֵ
        this.width = width || 20;
        this.height = height || 20;
        this.x = x || 0;
        this.y = y || 0;
        this.color = color || 'red';
    }

    // ��Ⱦ��ҳ����  render����           �ѷ�������ԭ����
    Food.prototype.render = function(map)
    {
        if(oldFood[0]){
            remove();
        }
        //ʳ����map�ϵ�λ��  ��map�Ŀ�/ʳ��Ŀ���� ��ȡ��  �ڳ��� ʳ��Ŀ�
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
        // ���ڴ��е�������������Ǹ�ʳ������
        oldFood.splice(0,1);
    }
    window.Food = Food;
})(window);