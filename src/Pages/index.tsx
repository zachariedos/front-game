import {isMobile} from 'react-device-detect';
import Connection from "./Mobile/Connection";
import WaitingPage from "./Desktop/WaitingPage";
import {useEffect, useMemo, useState} from "react";
import GameSelect from "./Desktop/GameSelect";
import {Route, Routes, useLocation} from "react-router-dom";
import React from 'react';
import Preparing from "./Mobile/Preparing";

export default function Index() {
    const location = useLocation();

    const mobileMode = useMemo(() => isMobile, [isMobile])
    const [room_id, setRoom_id] = useState<string | null>(null);

    useEffect(() => {
        setRoom_id(new URLSearchParams(location.search).get("room_id") ?? null)
    }, [location])

    return <div className={"flex flex-1 w-full h-full items-center justify-center"}>
        <div className={"w-full h-full"}>
        </div>
    </div>
}
