$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric",
    method: "get",
    success: function (data) {

            $("#date").html(data.list[0].dt_txt);
            $("#temp").html(data.list[0].main.temp + "<sup>o</sup>C");
            $("#icon").html("<img src='https://openweathermap.org/img/wn/" +
                data.list[0].weather[0].icon + ".png' width='90px' height='90px'/>");
            $("#desc").html(data.list[0].weather[0].description);

            $("#date2").html(data.list[1].dt_txt);
            $("#temp2").html(data.list[1].main.temp + "<sup>o</sup>C");
            $("#icon2").html("<img src='https://openweathermap.org/img/wn/" +
                data.list[1].weather[0].icon + ".png' width='90px' height='90px'/>");
            $("#desc2").html(data.list[1].weather[0].description);

        $("#date3").html(data.list[2].dt_txt);
        $("#temp3").html(data.list[2].main.temp + "<sup>o</sup>C");
        $("#icon3").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[2].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc3").html(data.list[2].weather[0].description);

        $("#date4").html(data.list[3].dt_txt);
        $("#temp4").html(data.list[3].main.temp + "<sup>o</sup>C");
        $("#icon4").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[3].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc4").html(data.list[3].weather[0].description);

        $("#date5").html(data.list[4].dt_txt);
        $("#temp5").html(data.list[4].main.temp + "<sup>o</sup>C");
        $("#icon5").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[4].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc5").html(data.list[4].weather[0].description);

        $("#date6").html(data.list[5].dt_txt);
        $("#temp6").html(data.list[5].main.temp + "<sup>o</sup>C");
        $("#icon6").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[5].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc6").html(data.list[5].weather[0].description);

        $("#date7").html(data.list[6].dt_txt);
        $("#temp7").html(data.list[6].main.temp + "<sup>o</sup>C");
        $("#icon7").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[6].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc7").html(data.list[6].weather[0].description);

        $("#date8").html(data.list[7].dt_txt);
        $("#temp8").html(data.list[7].main.temp + "<sup>o</sup>C");
        $("#icon8").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[7].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc8").html(data.list[7].weather[0].description);

        $("#date9").html(data.list[8].dt_txt);
        $("#temp9").html(data.list[8].main.temp + "<sup>o</sup>C");
        $("#icon9").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[8].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc9").html(data.list[8].weather[0].description);

        $("#date10").html(data.list[9].dt_txt);
        $("#temp10").html(data.list[9].main.temp + "<sup>o</sup>C");
        $("#icon10").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[9].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc10").html(data.list[9].weather[0].description);

        $("#date11").html(data.list[10].dt_txt);
        $("#temp11").html(data.list[10].main.temp + "<sup>o</sup>C");
        $("#icon11").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[10].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc11").html(data.list[10].weather[0].description);

        $("#date12").html(data.list[11].dt_txt);
        $("#temp12").html(data.list[11].main.temp + "<sup>o</sup>C");
        $("#icon12").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[11].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc12").html(data.list[11].weather[0].description);

        $("#date13").html(data.list[12].dt_txt);
        $("#temp13").html(data.list[12].main.temp + "<sup>o</sup>C");
        $("#icon13").html("<img src='https://openweathermap.org/img/wn/" +
            data.list[12].weather[0].icon + ".png' width='90px' height='90px' />");
        $("#desc13").html(data.list[12].weather[0].description);


    }
})