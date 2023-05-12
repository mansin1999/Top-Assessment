$(document).ready(function () {
    $('#password').keyup(function () {
        $('#result').html(cheStrength($('#password').val()))
    })
    function cheStrength(password) {
        var strength = 0
        if (password.length < 6) {
            
        }
        if (password.length > 7) strength + - 1
        
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1  //weak =a to z ,A TO Z

        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1  //weak = to z ,A TO Z , 0-9

        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1  // medium = to z ,A TO Z , 0-9 ,1 special characters

        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1 // strong = to z ,A TO Z , 0-9 ,2 special characters
        
        if (strength < 2) {
            $('#result').removeClass()
            $('#result').addClass('weak')
            return 'weak'
        } else if (strength == 2) {
            $('#result').removeClass()
            $('#result').addClass('medium')
            return 'medium'
        } else {
            $('#result').removeClass()
            $('#result').addClass('strong')
            return 'strong'
        }

    }
})




//     // Calculated strength value, we can return messages
//     // If value is less than 2
//     if (strength < 2) {
//     $('#result').removeClass()
//     $('#result').addClass('weak')
//     return 'weak'
//     } else if (strength == 2) {
//     $('#result').removeClass()
//     $('#result').addClass('medium')
//     return 'medium'
//     } else {
//     $('#result').removeClass()
//     $('#result').addClass('strong')
//     return 'strong'
//     }
//     }
//     });