/**
 * Created by Administrator on 2017/10/7.
 */
/*1ʳ�����  ���Ժͷ���
 ʳ����ʲô����?
 ( ��̬�� )����: ʳ�� ���(width height)  ��ɫ(color)  λ��(x y) �����Է��ڹ��캯����
 ���� ����:  ��Ҫ��ʳ��������� ���ҷ�����ҳ����   ��Ⱦ��ҳ����  render����           �ѷ�������ԭ����*/

// ����һ������������ִ�б��ʽ
// ���㿪����ʳ����� ���幦�ܴ�����������������ִ�еĺ������� �ﵽ����ȫ��������ͻ
// �൱���趨һ�������ռ�  �γ�һ��������ģ�黯��һ�δ���
(function(window){
      var oldFood = [];
    /*ʳ�����
     1 �������캯�� ����ʳ��*/
    // �û��������д���һЩ�Զ�������
    function Food(width,height,x,y,color){
        // ��һЩ���Խ������  ���Ҹ�һдĬ�ϵĳ�ʼ������
        this.width = width || 20;
        this.height = height || 20;
        //�������ȹ��ص����캯����this��ʽ������
        this.x = x || 0;
        this.y = y || 0;
        // ��ɫĬ�ϸ�һ����ɫ
        this.color = color || "green";

    }
    // ��Ⱦ��ҳ����  render����           �ѷ�������ԭ����
    Food.prototype.render = function(map){
        if(oldFood[0]){
            remove();
        }

        this.x = parseInt(Math.random()*( map.offsetWidth/this.width))*this.width;
        // ����y���������
        this.y = parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;

        var oDiv = document.createElement("div");
        // ��div��ӿ��
        oDiv.style.width = this.width + "px";
        oDiv.style.height = this.height + "px";
        // ��div���λ��
        oDiv.style.left = this.x + "px";
        oDiv.style.top = this.y + "px";
        // ��Ҫ��ʳ����ҳ���ϸ���leftֵ��topֵ������������� ����Ҫ��������ڵ�ͼ���о��Զ�λ
        oDiv.style.position = "absolute";
        // �����ɫ
        oDiv.style.background = this.color;

        map.appendChild(oDiv);
        oldFood.push(oDiv);
    }
    function remove(){
        oldFood[0].parentNode.removeChild(oldFood[0]);
        oldFood.splice(0,1);
    }
    // ��ʳ��Ĺ��캯������windowȫ�ֶ����һ���������� ������ Ȼ�������������ֱ�ӷ���window �����ͬʱ�Ϳ��Է���window.food
    // �Ӷ����˶���¶��ȥ
    window.Food = Food;

})(window);