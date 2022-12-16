import React, { useEffect, useState } from 'react'
import "./header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
    const min_adult = 1;
    const min_children = 0;
    const min_room = 1;

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);

    
    const handleOption = (name, operation) => {
        const newOptions = {
            ...options,
            [name]: operation == "inc" ? options[name] + 1 : options[name] - 1,
        }
        console.log(newOptions)
        setOptions(newOptions);
    }

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } })
    }

    return (
        <div className='header'>
            <div className={type == "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>

                {type !== "list" &&
                    <>
                        <h2 className="headerTitle">A lifetime of discounts? It's Genius.</h2>
                        <p className="headerDesc">
                            Get rewarded for your travels – unlock instant savings of 10% or
                            more with a free Lamabooking account
                        </p>
                        <button className="headerBtn">Sign In/ Register</button>

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />
                                }
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult - $${options.children} children - ${options.room} rooms`}</span>

                                {openOptions &&
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button className="optionCounterButton" onClick={() => handleOption("adult", "inc")}>+</button>
                                                <span className="optionCounterNumber">{options.adult}</span>
                                                <button disabled={options.adult <= min_adult} className="optionCounterButton" onClick={() => handleOption("adult", "dec")}>-</button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button className="optionCounterButton" onClick={() => handleOption("children", "inc")}>+</button>
                                                <span className="optionCounterNumber">{options.children}</span>
                                                <button disabled={options.children <= min_children} className="optionCounterButton" onClick={() => handleOption("children", "dec")}>-</button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="optionText">Rooms</span>
                                            <div className="optionCounter">
                                                <button className="optionCounterButton" onClick={() => handleOption("room", "inc")}>+</button>
                                                <span className="optionCounterNumber">{options.room}</span>
                                                <button disabled={options.room <= min_room} className="optionCounterButton" onClick={() => handleOption("room", "dec")}>-</button>
                                            </div>
                                        </div>
                                    </div>}

                            </div>

                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>


                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header