import {openingHours} from "../../utils/opening-hours.js"
import {hoursClick} from "./hours-click.js"
import dayjs from "dayjs";

const hours = document.getElementById("hours")

export function hoursLoad({date, dailySchedules}){
    //limpa a lista de horarios
    hours.innerHTML = ""

    const unavailableHours = dailySchedules.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    )

    const opening = openingHours.map((hour)=>{
        //recupera somente a hora
        const [scheduleHour] = hour.split(":");
        
        //verifica se ja passou o horario
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast

        //horario disponivel
        return{
            hour,
            available: available
        }
    })

    opening.forEach(({hour,available})=>{
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if(hour==="9:00"){
            hourHeaderAdd("Manhã")
        }
        else if(hour === "13:00"){
            hourHeaderAdd("Tarde")
        }
        else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li);
    })

    hoursClick();
}

function hourHeaderAdd(title){
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title;

    hours.append(header);
}