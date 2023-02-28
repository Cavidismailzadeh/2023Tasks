



$(document).ready(function () {

    let newList = $(`<li class = "list-group-item">${JSON.parse(localStorage.getItem(".name"))}</li>`);
    
    for (let i = 0; i <= newList; i++) {
    
        $("ul").append(newList[i])
        
    }

   




    $("button").click(function () {

        let name = $(".name")
        let surname = $(".surname")

        let Getdata = () => {

            getName = name;
            getSurname = surname;

            let res = [];

            res.push("Name " + ": " + getName.val(), "   Surname" + ": " + getSurname.val());

            localStorage.setItem(".name", JSON.stringify(res));

            let newList = $(`<li class = "list-group-item">${JSON.parse(localStorage.getItem(".name"))}</li>`);

            $("ul").append(newList)
        }


        Getdata();

    })

})


