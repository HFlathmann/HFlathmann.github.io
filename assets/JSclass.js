/*
all class for projects
*/


class _Main {
    static Init(filename) {
    }
    

    static Today() {
        day = "";
        let date = new Date().getDay();
        
        switch (date) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case  6:
            day = "Saturday";
        } // end of switch
        
        document.getElementById("demo").innerHTML= "Heute ist " + day;
        return "Today is " + day;

    }// end of Today
}// end of class
// globale klassen
const Main = _Main;