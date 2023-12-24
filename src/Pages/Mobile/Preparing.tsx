import styles from "../../Styles/Mobile/Connection.module.scss"
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import Input from "../../Component/Input";
import React from "react";
import Dice from "../../Component/Dice";
import {toast} from "react-toastify";
import api from "../../api";
import {useDebounce} from "../../Hooks/useDebounce";
import {useNavigate, useParams} from "react-router-dom";

export default function Preparing() {
    const [inputValue, setInputValue] = useState<string>("");
    const [seed, setSeed] = useState<number>(Date.now());
    const [ready, setReady] = useState<boolean>(false);
    const [player, setPlayer] = useState<number | null>(null);

    const {t} = useTranslation();
    const {room_id} = useParams();
    const navigate = useNavigate();
    const debouncedInputValue = useDebounce(inputValue, 500);
    const debouncedSeedValue = useDebounce(seed, 500);

    let loading = false
    useEffect(() => {
        if (!loading) {
            loading = true
            api.player.createOrUpdate({
                id: player?.toString() ?? undefined,
                name: debouncedInputValue,
                room_id: room_id??"",
                ready: ready,
                avatar: debouncedSeedValue.toString(),
            }).then((res) => {
                if (res?.status === 200) {
                    setPlayer(res.data.player_id);
                    if (!player) {
                        navigate(`?player=${res.data.player_id}`);
                    }
                }}
            ).
                finally(() => {
                    loading = false
                });
            }
        }
    ,
        [ready, debouncedInputValue, debouncedSeedValue]
    )
        ;

        useEffect(() => {
            if (!inputValue) {
                setReady(!!inputValue)
            }
        }, [inputValue]);

        return (
            <div className={styles.PageContainer}>
                <div className={"h-96 w-96 rounded-xl relative"}>
                    <div className={"absolute top-[-10rem] z-50 h-52 w-full flex justify-center"}>
                        <Dice onClick={() => {
                            setSeed(Date.now());
                        }}/>
                    </div>
                    <img src={`https://api.dicebear.com/7.x/micah/svg?seed=${seed}`}/>
                </div>

                <div className={"w-fit flex items-center flex-col gap-2"}>
                    <Input
                        type={"text"}
                        size={"md"}
                        placeholder={t('common:player.name')}
                        value={inputValue ?? ""}
                        onChange={(e) => {
                            setInputValue((e.currentTarget as HTMLInputElement).value);
                        }}
                    />
                    <div className={"w-2/3"}>
                        <button
                            onClick={() => {
                                if (inputValue) {
                                    setReady(!ready);
                                } else {
                                    toast.error(t('common:error.player_name'));
                                }
                            }}
                            className={`pointer-cursor shadow-md ${ready ? "bg-green-500" : "bg-red-500"} p-2 rounded w-full text-white font-bold`}
                            title={t('common:not_ready')}
                        >
                            {ready ? t('common:ready') : t('common:not_ready')}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
