fetch('https://api.covid19api.com/summary')
    .then((apidata) => {
        return apidata.json();
    })

    .then((actualdata) => {

            console.log(actualdata);

            //confirm case in morocco
            const mydata = actualdata.Countries[116].TotalConfirmed;
            document.getElementById('conf-ma').innerHTML = mydata;
            //recovered
            const recdata = actualdata.Countries[116].TotalRecovered;
            document.getElementById('recov-ma').innerHTML = recdata;
            //deaths
            const detdata = actualdata.Countries[116].TotalDeaths;
            document.getElementById('death-ma').innerHTML = detdata;

            //global data 
            const globco = actualdata.Global.TotalConfirmed;
            document.getElementById('globco').innerHTML = globco;
            //global recover
            const globro = actualdata.Global.TotalRecovered;
            document.getElementById('globro').innerHTML = globro;
            //global deaths
            const globdo = actualdata.Global.TotalDeaths;
            document.getElementById('globdo').innerHTML = globdo;

            var temp = "";
            actualdata.Countries.forEach(res => {
                temp+= "<tr>";
                temp+= "<th scope='row'>"+res.Country+"</th>";
                temp+= "<td>"+res.NewConfirmed+"</td>";
                temp+= "<td class='text-primary'>"+res.TotalConfirmed+"</td>";
                temp+= "<td>"+res.NewDeaths+"</td>";
                temp+= "<td class='text-danger'>"+res.TotalDeaths+"</td>";
                temp+= "<td>"+res.NewRecovered+"</td>";
                temp+= "<td class='text-success'>"+res.TotalRecovered+"</td>";
                temp+= "<tr>";
            });
            document.getElementById("data").innerHTML = temp;
        }

    )
    .catch((error) => {
        console.log(`the error: ${error}`);
    });


