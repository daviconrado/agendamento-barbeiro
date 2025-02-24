import dayjs from "dayjs";
import { scheduleNew } from "../services/schedule-new.js";
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")
const inputName = document.querySelector("#client")

//data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual e define data minima
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) =>{
    event.preventDefault();

    try{
        const id = new Date().getTime()

        const hourSelected = document.querySelector(".hour-selected")
        const [hour] = hourSelected.innerText.split(":")

        const when = dayjs(selectedDate.value).add(hour,"hour")
        const name = inputName.value;

        await scheduleNew({id,name,when});
        await schedulesDay();
    }
    catch(e){
        console.log(e);
    }
}