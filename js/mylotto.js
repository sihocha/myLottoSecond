for(var n = 0; n < 5; n++) {
    var result = [];
    var list = [2,3,4,7,9,20,22,23,24,27,29,30,32,33,34,37,39,40,42,43,44];

    for (var i = 0; i < 6; i++) {
        var index = Math.floor(Math.random() * list.length);

        // 랜덤으로 선택한 인덱스의 값
        var num = list[index];

        // 배열에서 인덱스의 값 제거
        list.splice(index, 1);

        result.push(num);
    }


    result.sort(function(a, b) {
        return a - b;
    });


    for (var i = 0; i < 6; i++) {
        document.write('<span class="ball">' + result[i] + '</span>');
    }
    document.write('<br>');
}

