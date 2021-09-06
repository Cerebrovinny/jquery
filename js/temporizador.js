(function ($) {
    $.fn.temporizador = function (params) {
        const finalOptions = $.extend({
            mensagem: 'Soon',
            hour: '23:59:59'
        }, params)

        const hourDezen = $('<span class="digito">').html('0')
        const hourUnity = $('<span class="digito">').html('0')
        const minuteDezen = $('<span class="digito">').html('0')
        const minuteUnity = $('<span class="digito">').html('0')
        const secondDezen = $('<span class="digito">').html('0')
        const secondUnity = $('<span class="digito">').html('0')

        const separatorHour = $('<span class="separador">').html(':')
        const separatorMinutes = $('<span class="separador">').html(':')
        const message = $('<div class="message">').html(finalOptions.mensagem)

        $(this).addClass('temporizador')
        $(this).append(hourDezen, hourUnity, separatorHour,
            minuteDezen, minuteUnity, separatorMinutes,
            secondDezen, secondUnity, message)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const setTime = regex.exec(finalOptions.hour)
        //console.log(setTime)
        
        let temporizador = setInterval(() => {
            const now = new Date()
            const set = new Date()
            set.setHours(setTime[1])
            set.setMinutes(setTime[2])
            set.setSeconds(setTime[3])
            
            const diferenceInMili = set.getTime() - now.getTime()
            if (diferenceInMili >= 0) {
                const diference = regex.exec(new Date(diferenceInMili).toISOString())
                //console.log(diference)

                hourDezen.html(diference[1][0])
                hourUnity.html(diference[1][1])
                minuteDezen.html(diference[2][0])
                minuteUnity.html(diference[2][1])
                secondDezen.html(diference[3][0])
                secondUnity.html(diference[3][1])
            } else {
                clearInterval(temporizador)
            }
        }, 1000)
        return this
    }

})(jQuery)