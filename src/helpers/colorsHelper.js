import { green } from "@material-ui/core/colors"

export const performancePercentageColor=(number)=>{
    if(number>=80) return "green";
    else if (number>=60 && number <80) return "blue";
    else if (number>=40 && number <60) return "orange";
    else if (number>=0 && number <40) return "red";
}