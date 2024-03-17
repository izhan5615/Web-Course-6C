$(document).ready(function() {
    const api_Key = 'd4db621d6ffe2c5acfd0e15212a9f30d';
    $('.body input').on('input', function() {
        const city = $('.body input').val()
        constcity = $(this).val()
        let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_Key + "&units=metric";
    $.getJSON(apiUrl, function(result) {
        let get_city = result.name
        if (get_city!="")
        {
            $('.container').css('display', 'block');
        }

        let weather_description = result.weather[0].description
        let temp = result.main.temp
        let humidity = result.main.humidity
        let get_country = result.sys.get_country
        let feels_like = result.main.feels_like   
        let icon = "https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png" 
        $('#temp').text(temp)
        $('#desc').text(weather_description)
        $('#city-country').text(get_city + ', ' + get_country)
        $('#feels-like').html('<i class="fa fa-thermometer" style="font-size:24px">&nbsp;&nbsp;</i>' + feels_like + "° C" + '<br> <span>Feels Like</span>')
        $('#feels-like span').css('font-size', '12px');
        $('#humidity').html('<img src="humidity.png" alt="" srcset="">&nbsp;&nbsp;' + humidity + '%' + '<br> <span>Humidity</span>')
        $('#humidity span').css('font-size', '12px');
        
        $('#image').attr('src', icon)
    })
    const apiUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + api_Key + "&units=metric"
    let date = ""
    let count = 0
    $.getJSON(apiUrl2, function(result) {
        result.list.forEach((day_data, index) => {
            let city = result.city.name
            let weather_description = day_data.weather[0].description
            let temp = day_data.main.temp
            let humidity = day_data.main.humidity
            let country = result.city.country
            let feels_like = day_data.main.feels_like
            
            let icon = "https://openweathermap.org/img/wn/" + day_data.weather[0].icon + "@2x.png" 
            check_date = day_data.dt_txt.slice(0, 10)
            if (check_date != date) {
                id = "day-" + count
                count = count + 1
                $("#" + id).html(day_data.dt_txt.slice(0, 10) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<img src=" + icon + ">" + temp + "° C")
                date = check_date
            }
            if (count >= 5)
                return false
        });

    });
    });
});

