import styles from "../../../Styles/GameSelect.module.scss"
import {useTranslation} from "react-i18next";
import GameSelectCard from "../../../Component/GameSelectCard";
import api from "../../../api";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {ThreeCircles} from "react-loader-spinner";
import {AnimatePresence} from "framer-motion";

export default function GameSelect() {
    const {t} = useTranslation()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    return <div className={styles.CardContainer}>
        <div className={styles.Cards}>
            <AnimatePresence>
                {loading ? <div className={"text-light-secondary dark:text-dark-secondary"}><ThreeCircles
                        visible={true}
                        height="100"
                        width="100"
                        color={"currentColor"}
                        ariaLabel="three-circles-loading"
                    />
                    </div>
                    :
                    [1, 2, 3].map((i) => {
                        return <GameSelectCard
                            key={`game-select-${i}`}
                            Game={i}
                            GameName={t(`configuration:game.${i}.name`)}
                            onClick={() => {
                                setLoading(true)
                                api.game.create({
                                    game_type: i
                                }).then((res) => {
                                    navigate(`?room_id=${res.room_id}`)
                                }).finally(() => {
                                    setLoading(false)
                                })
                            }}
                        />
                    })

                }
            </AnimatePresence>
        </div>
    </div>
}
