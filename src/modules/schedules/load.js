import {hoursLoad} from "../form/hours-load.js"
import {scheduleFetchByDay} from "../services/schedule-getch-by-day.js"
import {scheduleShow} from "./show.js"

const selectedDate = document.querySelector("#date")
export async function schedulesDay(){
    const date = selectedDate.value

    //busca na api os agendamentos
    const dailySchedules = await scheduleFetchByDay({date});
    
    //exibe os agendamentos
    scheduleShow({dailySchedules});

    //horas disponiveis
    hoursLoad({date,dailySchedules});
}