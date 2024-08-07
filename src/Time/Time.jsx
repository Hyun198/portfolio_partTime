import React from 'react'
import { useState } from 'react';
import moment from 'moment';

import './time.css'
function Time() {
    const [selectedWeek, setSelectedWeek] = useState(null);
    //주4
    const [inputTime4, setInputTime4] = useState({ hour: "", minute: "" });
    const [resultTime4, setResultTime4] = useState("");
    //주2
    const [inputTime2, setInputTime2] = useState({ hour: "", minute: "" });
    const [resultTime2, setResultTime2] = useState("");

    const handleWeekSelect = (week) => {
        setSelectedWeek(week);
    }

    const handleTimeChange = (event, week) => {
        const { id, value } = event.target;
        if (value.match(/^\d+$/)) {
            if (week === 'week4') {
                setInputTime4(prev => ({
                    ...prev,
                    [id]: value,
                }));
            } else {
                setInputTime2(prev => ({
                    ...prev,
                    [id]: value,
                }));
            }
        }
    }

    const calculateEndTime = (hour, minute, hourDiff, minuteDiff) => {
        if (!hour || !minute) return "";
        const inputMoment = moment({ hour, minute });
        const result = inputMoment.subtract({ hours: hourDiff, minutes: minuteDiff });
        return result.format("HH:mm");
    }

    const calculateTimeWeek4End = () => {
        setResultTime4(calculateEndTime(inputTime4.hour, inputTime4.minute, 8, 0));
    };

    const calculateTimeWeek4End2 = () => {
        setResultTime4(calculateEndTime(inputTime4.hour, inputTime4.minute, 7, 20));
    };

    const calculateTimeWeek2End = () => {
        setResultTime2(calculateEndTime(inputTime2.hour, inputTime2.minute, 7, 30));
    };

    const calculateTimeWeek2End2 = () => {
        setResultTime2(calculateEndTime(inputTime2.hour, inputTime2.minute, 6, 50));
    };


    const handleGoBack = () => {
        setSelectedWeek(null);
        setInputTime2({ hour: "", minute: "" }); // 주 선택이 변경되면 입력도 초기화합니다.
        setInputTime4({ hour: "", minute: "" });
        setResultTime2(""); // 결과도 초기화합니다.
        setResultTime4("");
    }



    return (
        <div>
            {!selectedWeek && (
                <div className="time-card-content-header" >
                    <button onClick={() => handleWeekSelect('week2')}>주/2</button>
                    <button onClick={() => handleWeekSelect('week4')}>주/4</button>
                </div>
            )}

            <div className="time-card">
                {selectedWeek === "week4" && (
                    <>
                        <div className='time-card-content-input'>
                            <input type="text" className='Timeinput' placeholder='hour' id="hour" value={inputTime4.hour} onChange={(e) => handleTimeChange(e, 'week4')} required />
                            <input type="text" className='Timeinput' placeholder='minute' id="minute" value={inputTime4.minute} onChange={(e) => handleTimeChange(e, 'week4')} required />
                        </div>
                        <div className='time-card-content-select'>
                            <button onClick={calculateTimeWeek4End}>마감</button>
                            <button onClick={calculateTimeWeek4End2}>마감2</button>
                        </div>
                        <div className="time-card-content-result">
                            <p style={{ color: "black" }}>출근 시간</p>
                            <p className="time" style={{ color: "black" }}>{resultTime4}</p>
                        </div>
                        {selectedWeek && (
                            <div className="goback-btn" onClick={handleGoBack}>뒤로 가기</div>
                        )}
                    </>
                )}
                {selectedWeek === "week2" && (
                    <>
                        <div className='time-card-content-input'>
                            <input type="text" className='Timeinput' placeholder='hour' id="hour" value={inputTime2.hour} onChange={(e) => handleTimeChange(e, 'week2')} required />
                            <input type="text" className='Timeinput' placeholder='minute' id="minute" value={inputTime2.minute} onChange={(e) => handleTimeChange(e, 'week2')} required />
                        </div>
                        <div className='time-card-content-select'>
                            <button onClick={calculateTimeWeek2End}>마감</button>
                            <button onClick={calculateTimeWeek2End2}>마감2</button>
                        </div>
                        <div className="time-card-content-result">
                            <p>
                                출근 시간
                            </p>
                            <p className="time">{resultTime2}</p>
                        </div>
                        {selectedWeek && (
                            <div className="goback-btn" onClick={handleGoBack}>뒤로 가기</div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Time