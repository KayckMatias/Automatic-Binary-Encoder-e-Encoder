var encode = $("#text_encode");
var decode = $("#text_decode");
$("#update").prop("checked", true);

$(document).ready(function(){
    if($("#update").is(":checked")){
        decode.removeAttr("disabled");
        encode.attr("disabled", true);
    }else{
        encode.removeAttr("disabled");
        decode.attr("disabled", true);
    }  

});
function changedEncode(){
    if($("#update").is(":checked")){
        encode.val(encodeBinary($("#text_decode").val()));
    }else{
        decode.val(decodeBinary($("#text_encode").val()));
    }
}

function changedSwitch(){
    if($("#update").is(":checked")){
        decode.removeAttr("disabled");
        encode.attr("disabled", true);
    }else{
        encode.removeAttr("disabled");
        decode.attr("disabled", true);
    }  
}

function encodeBinary(string, spaceSeparatedOctets){
    function zeroPad(num) {
        return "00000000".slice(String(num).length) + num;
    }

    return string.replace(/[\s\S]/g, function(string) {
        string = zeroPad(string.charCodeAt().toString(2));
        return !1 == spaceSeparatedOctets ? string : string + " "
    });

}

function decodeBinary(string){
    string = string.replace(/\s+/g, '');
    // Adicionar um binário correto (Adicionar um espaço a cada 8 números.)
    string = string.match(/.{1,8}/g).join(" ");

    var newBinary = string.split(" ");
    var binaryCode = [];

    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    
    return binaryCode.join("");
}