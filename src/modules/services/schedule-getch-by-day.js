import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";

export async function scheduleFetchByDay({date}){
    try{
        //faz a requisicao
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //converte para json
        const data = await response.json()
        //filtra os agendamentos pelo dia selecionado
        const dailySchedules = data.filter((schedule) =>dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules;
    }
    catch(e){
        console.log(e);
        alert("Não foi possivel buscar os agendamentos")
    }
}