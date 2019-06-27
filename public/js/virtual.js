function enable1() {
  enableKey('#emailp1', "");
   $('#k2').addClass('hide');
   $('#k1').removeClass('hide');
   $('#k3').addClass('hide');
}

function enable2() {
   
  enableKey('#namep1', 1);
   $('#k1').addClass('hide');
   $('#k2').removeClass('hide');
   $('#k3').addClass('hide');
   isEnable = true;
}

function enable3() {
    enableKey('#company', "2");
    $('#k3').removeClass('hide');
    $('#k1').addClass('hide');
    $('#k2').addClass('hide');
    
    isEnable = true;
}

// function enable4() {
//     enableKey('#namep2', 3);
//     $('#k3').addClass('hide');
//     $('#k4').removeClass('hide');
//     isEnable = true;
// }

// function enable5() {
//     enableKey('#emailp3', 4);
//     $('#k5').removeClass('hide');
//     $('#k6').addClass('hide');
// }

// function enable6() {
//     enableKey('#namep3', 5);
//     $('#k5').addClass('hide');
//     $('#k6').removeClass('hide');
//     isEnable = true;
// }

// function enable7() {
//     enableKey('#emailp4', 6);
//     $('#k7').removeClass('hide');
//     $('#k8').addClass('hide');
// }

// function enable8() {
//     enableKey('#namep4', 7);
//     $('#k7').addClass('hide');
//     $('#k8').removeClass('hide');
//     isEnable = true;
// }

function enableKey(key, k) {
    $('#keyboard' + k).jkeyboard({
        layout: "english",
        input: $(key),
        // customLayouts: {
        //     selectable: ["english", "numeric", "symbolic"],
        //     english: [
        //         ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ],
        //         ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ],
        //         ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
        //         ['numeric_switch', 'layout_switch', 'space', 'return']
        //     ],
        //     numeric: [
        //         ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        //         ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
        //         ['symbol_switch', '.', ',', '?', '!', "'", 'backspace'],
        //         ['character_switch', 'layout_switch', 'space', 'return'],
        //     ],
        //     symbolic: [
        //         ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
        //         ['_', '\\', '|', '~', '<', '>'],
        //         ['numeric_switch', '.', ',', '?', '!', "'", 'backspace'],
        //         ['character_switch', 'layout_switch', 'space', 'return'],
        //     ],
        // },


    });
    
}