


function something()
{
    var x = window.localStorage.getItem('bbb');//equal: x = hh['bbb']

	x = x * 1 + 1; //string to int and +1

	window.localStorage.setItem('bbb', x);//hh['bbb'] = x

	alert(x);
}

function add_to_cart(id)
{
	var key = 'product_' + id

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1; // 1 button [Add to cart] click
	window.localStorage.setItem(key, x);//new hash value
	update_orders_input();
	update_orders_button()

}

function cart_get_number_of_items() {
    //Обьявляем перемунную в которой будем считать общее количество заказов в корзине
    let count = 0;

    for(let i=0; i<localStorage.length; i++) {

        //Получаем ключ по индексу массива, мы же проходим как в массиве, с 0 элемента
        let key = localStorage.key(i);

        //Получаем значение(количествой пиццы) по ключу
        let value = localStorage.getItem(key);
        
//Провреряем чтоб ключ начинался на (product_) так как в localstorage  могут другие значения хранится 
//indexof возвращает индекс вхождения элемента, в нашем случае нужно чтою 0. И превращаем в true
        //
        if(key.indexOf('product_') == 0)
        {
            //Считаем и с помощщью + приводим value к числу
            count += (+value);
        }
        
    }
    return count;
}


function cart_get_orders() {
    //Здесь будет строка формата product_1=2,  и тд....
    let orders = '';

    for(let i=0; i<localStorage.length; i++) {

        //Получаем ключ по индексу массива, мы же проходим как в массиве, с 0 элемента
        let key = localStorage.key(i);

        //Получаем значение(количествой пиццы) по ключу
        let value = localStorage.getItem(key);
        
//Провреряем чтоб ключ начинался на (product_) так как в localstorage  могут другие значения хранится 
//indexof возвращает индекс вхождения элемента, в нашем случае нужно чтою 0. И превращаем в true
        //
        if(key.indexOf('product_') == 0)
        {
            //складываем каждый ключ значения корзины в строку одну
            orders = orders + key + '=' + value + ',';
        }
        
    }
    return orders;
}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function update_orders_button(){
    //Это число (количество товара в корзине) отображаетсяв в navbar
    let text = 'Cart (' + cart_get_number_of_items() + ')';

    $('#orders_button').val(text);
}

