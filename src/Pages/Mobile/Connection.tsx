import styles from "../../Styles/Mobile/Connection.module.scss"
import {useTranslation} from "react-i18next";
import {QrScanner} from '@yudiel/react-qr-scanner';
import {useEffect, useState} from "react";
import Input from "../../Component/Input";
import Button from "../../Component/Button";
import {toast} from "react-toastify";

export default function Connection() {

    const [theme, setTheme] = useState<string>(localStorage?.theme);

    useEffect(() => {
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    setTheme(document.documentElement.classList.value);
                }
            }
        });
        observer.observe(document.documentElement, {attributes: true});
        return () => {
            observer.disconnect();
        };
    });

    const [inputValue, setInputValue] = useState<string | null>(null)

    const {t} = useTranslation()

    return <div className={styles.PageContainer}>
        <div className={"h-80 w-80 rounded-xl relative"}>
            <div id={"qr_container_reader"} className={styles.qrContainer}>
                <QrScanner
                    onDecode={(result) => {
                        if(result.includes("game_room_id:")) {
                            setInputValue(result.split("game_room_id:")[1])
                        }else {
                            toast.error(t('common:error.qr_code'),{
                                toastId: "failQrCode"
                            })
                        }
                    }}
                    onError={(error) => {}}
                    containerStyle={{borderRadius: "0.75rem"}}
                    tracker={false}
                    viewFinderBorder={0}
                    viewFinder={()=>{return null}}
                />
            </div>
            <div id={"qr_container_border"}
                 className={`
                        ${theme === "light" ? styles.QrScannerContainerLight : styles.QrScannerContainerDark} 
                        ${styles.qrContainer}
                    `}>
            </div>
        </div>
        <div className={"w-fit flex items-center flex-col gap-2"}>
            <Input type={"text"} size={"md"} placeholder={t('connection:login.placeholder')} value={inputValue ?? ""}
                   onChange={(e) => {
                       setInputValue((e.currentTarget as HTMLInputElement).value)
                   }}/>
            <div className={"w-2/3"}>
                <Button size={"md"} title={t('common:enter')}/>
            </div>
        </div>

    </div>
}
