import styles from "../../Styles/Mobile/Connection.module.scss";
import {useTranslation} from "react-i18next";
import {QrScanner} from '@yudiel/react-qr-scanner';
import {useEffect, useState} from "react";
import Input from "../../Component/Input";
import Button from "../../Component/Button";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import React from "react";
import api from "../../api";

export default function Connection() {
    const [theme, setTheme] = useState<string>(localStorage?.theme || "");

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
    }, []);

    const [inputValue, setInputValue] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {t} = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={styles.PageContainer}>
            <div className={"h-80 w-80 rounded-xl relative"}>
                <div id={"qr_container_reader"} className={styles.qrContainer}>
                    <QrScanner
                        onDecode={(result) => {
                            if (result.includes("game_room_id=")) {
                                setIsLoading(true)
                                api.game.show(result.split("game_room_id=")[1]).then((res) => {
                                    if (res?.status === 200) {
                                        navigate(`${inputValue}`);
                                    } else {
                                        toast.error(t('common:error.room_not_found'), {
                                            toastId: "failRoomNotFound"
                                        });
                                    }
                                }).finally(() => {
                                    setIsLoading(false)
                                })
                            } else {
                                toast.error(t('common:error.qr_code'), {
                                    toastId: "failQrCode"
                                });
                            }
                        }}
                        onError={() => {
                        }}
                        containerStyle={{borderRadius: "0.75rem"}}
                        tracker={false}
                        viewFinderBorder={0}
                        viewFinder={() => null}
                    />
                </div>
                <div
                    id={"qr_container_border"}
                    className={`
            ${theme === "light" ? styles.QrScannerContainerLight : styles.QrScannerContainerDark} 
            ${styles.qrContainer}
          `}
                ></div>
            </div>
            <div className={"w-fit flex items-center flex-col gap-2"}>
                <Input
                    type={"text"}
                    size={"md"}
                    placeholder={t('connection:login.placeholder')}
                    value={inputValue || ""}
                    onChange={(e) => {
                        setInputValue(e.currentTarget.value);
                    }}
                />
                <div className={"w-2/3"}>
                    <Button
                        size={"lg"}
                        title={t('common:enter')}
                        disabled={isLoading}
                        onClick={() => {
                            setIsLoading(true)
                            api.game.show(inputValue).then((res) => {
                                if (res?.status === 200) {
                                    navigate(`${inputValue}`);
                                } else {
                                    toast.error(t('common:error.room_not_found'), {
                                        toastId: "failRoomNotFound"
                                    });
                                }
                            }).catch(() => {
                                toast.error(t('common:error.room_not_found'), {
                                    toastId: "failRoomNotFound"
                                });
                            })
                                .finally(() => {
                                setIsLoading(false)
                            })
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
