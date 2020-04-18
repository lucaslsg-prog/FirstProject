$(function(){

    var v1, v2 ,op;

    $("input[name=btn]").click(function(){
        $("#result").val($("#result").val()+ $(this).val());
    });

    $("input[name=ce]").click(function(){
        $("#result").val('');
        $("#op").text('');
    });

    $("input[name=soma]").click(function(){

        if($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "soma";
            $("#op").text($(this).val());

        } else {
            alert('insira um valor para efetuar a soma');
        }
    });

    $("input[name=subtracao]").click(function(){

        if($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "subtracao";
            $("#op").text($(this).val());

        } else {
            alert('insira um valor para efetuar a subtracao');
        }
    });

    $("input[name=multiplicacao]").click(function(){

        if($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "multiplicacao";
            $("#op").text($(this).val());

        } else {
            alert('insira um valor para efetuar a multiplicacao');
        }
    });

    $("input[name=divisao]").click(function(){

        if($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "divisao";
            $("#op").text($(this).val());

        } else {
            alert('insira um valor para efetuar a divisao');
        }
    });
    $("input[name=porcentagem]").click(function(){

        if($("#result").val() != ''){
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "porcentagem";
            $("#op").text($(this).val());

        } else {
            alert('insira um valor para efetuar a porcentagem');
        }
    });

    $("input[name=igual]").click(function(){
        
        if($("#result").val() != ''){
            v2 = parseFloat($("#result").val());
            
            if(op == "soma"){
                
                $("#result").val(v1 + v2);
            }
            if(op == "subtracao"){
                
                $("#result").val(v1 - v2);
            }
            if(op == "multiplicacao"){
                
                $("#result").val(v1 * v2);
            }
            if(op == "divisao"){
                
                $("#result").val(v1 / v2);
            }
            if(op == "porcentagem"){
                //v2 = $("#result").val('');
                $("#result").val(v1*(v2/100));
            }

        } else {
            alert('insira um valor para efetuar o calculo');
        }
    });

    $("input[name=c]").click(function(){
        var len = $("#result").val().length;

        var valor = $("#result").val();

        valor = valor.replace(valor.charAt(len - 1),"");

        $("#result").val(valor);
    });
});