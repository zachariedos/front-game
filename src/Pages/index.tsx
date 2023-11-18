import Switcher from "../Component/Switcher";
import GameSelect from "./Desktop/GameSelect";
import { BrowserView, MobileView } from 'react-device-detect';
import Connection from "./Mobile/Connection";
import WaitingPage from "./Desktop/WaitingPage";

export default function Index() {
    return <div className={"flex flex-1 w-full h-full items-center justify-center"}>
        <BrowserView className={"w-full h-full"}>
            {/*<GameSelect/>*/}
            <WaitingPage/>
        </BrowserView>
        <MobileView className={"w-full h-full"}>
            <Connection />
        </MobileView>

    </div>
}
//