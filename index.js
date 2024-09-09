/*let val = 20
if (val < 5) {
    console.log("Tiny");
}
else if (val < 10) {
    console.log("small");
     
}
else if (val < 15) {
    console.log("medium");
    
}
else if (val < 20) {
    console.log("Large");
    
}
else  {
    console.log("Huge");
    
}*/

let Application = "admin"
switch (Application) {
    case "admin":
        console.log("gets full access");
        break;
        case "subAdmin":
            console.log("gets access to create and delete courses");
            break;
            case "testprep":
            console.log("gets access to create and delete tests");
            break;
            case "user":
                console.log("gets access to consume contents");
                break;
             
            default :
            console.log("wrong choice");
            
            break;
             }


