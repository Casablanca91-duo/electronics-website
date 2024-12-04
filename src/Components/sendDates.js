'use strict'

import React, { useState } from "react";


function SendDates() {
    let [datesOutput, setDatesOutput] = useState(false)
    let [saveName, setSaveName] = useState("")
    let [submitName, setSubmitName] = useState("")
    return (
        <form onSubmit ={(e) => {
            e.preventDefault(); // предотвращает перезагрузку страницы при отправки формы
            setSubmitName(saveName)
            setDatesOutput(!datesOutput);
            {setSaveName("")}
        }}>
            <button type="submit">Отправить</button>
            <input type="text" placeholder="Введите сообщение" value={saveName} onChange={(e) => setSaveName(e.target.value)} />
            {datesOutput &&<p>Заявка на "{submitName}"отправлена</p>}
        </form>
    )        
    
}

export default SendDates