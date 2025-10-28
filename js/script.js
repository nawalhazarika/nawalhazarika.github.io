
    function openNav() {
    document.getElementById("mySidenav").style.width = "210px";
    /*document.getElementById("bdy").style.marginLeft = "240px";
    document.getElementById("bdy").style.marginRight = "-210px";
    document.getElementById("top").style.marginLeft = "260px";
    document.getElementById("top").style.marginRight = "-260px";*/
    }

    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    /*document.getElementById("bdy").style.marginLeft= "5%";
    document.getElementById("bdy").style.marginRight = "5%";
    document.getElementById("top").style.marginLeft = "10px";
    document.getElementById("top").style.marginRight = "0px";*/
    }

    function darkm() {
    document.getElementById("bdy").className = "black";
    document.getElementById("ltsw").style = "display: flex;margin-left: 2%;color:white;text-decoration: none;cursor:pointer;font-size: 30px;";
    document.getElementById("drksw").style = "display: none;";
    document.getElementById("assamese_name_message").style="color: #fbfbfb";
    localStorage.setItem("bdy", bdy);
    /*
    document.getElementById("ltsw").style = "position: absolute;top: 16px;right: 0px; font-size: 30px; margin-right: 5%; cursor:pointer;visibility:visible;color:white;display:block"*/

    }

    function lightm() {
    document.getElementById("bdy").className = "bg";
    document.getElementById("ltsw").style = "display: none;";
    document.getElementById("drksw").style = "display: flex;margin-left: 2%;color:rgba(27, 27, 27, 1);text-decoration: none;cursor:pointer;font-size: 30px;";
    document.getElementById("assamese_name_message").style="color:rgba(27, 27, 27, 1)";
    localStorage.setItem("bdy", bdy);/*
    document.getElementById("drksw").style = "position: absolute;top: 16px;right: 0px; font-size: 30px; margin-right: 5%; cursor:pointer;visibility:visible;"*/
    }


    

