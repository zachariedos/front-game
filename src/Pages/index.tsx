import {BrowserView, MobileView, isMobile} from 'react-device-detect';
import Connection from "./Mobile/Connection";
import WaitingPage from "./Desktop/WaitingPage";
import {useState} from "react";
import GameSelect from "./Desktop/GameSelect";

export default function Index() {
    const [mobileMode, setMobileMode] = useState(isMobile);
    return <div className={"flex flex-1 w-full h-full items-center justify-center"}>
        <div className={"w-full h-full"}>
            {!mobileMode ?
                <>
                    <GameSelect/>
                    {/*<WaitingPage/>*/}
                </>
                :
                <Connection/>
            }
        </div>


    </div>
}
//