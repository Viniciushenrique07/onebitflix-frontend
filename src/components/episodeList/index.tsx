import styles from "./styles.module.scss";
import { CourseType, EpisodeType } from "../../services/courseService";
import { useRouter } from "next/router";

interface props {
    episode: EpisodeType;
    course: CourseType;
}

const EpisodeList = function ({ episode, course }: props) {
    const router = useRouter();

    const handleSecondsToMin = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        function toString(num: number){
            return num.toString().padStart(2, "0");
        };

        const result = `${toString(minutes)}:${toString(seconds)}`;
        
        return result;
    };

    const handleEpisodePlayer = () => {
        router.push(`/course/episode/${episode.order - 1}?courseid=${course.id}`);
    };

    return (
        <>
            <div className={styles.episodeCard} onClick={handleEpisodePlayer}>
                <div className={styles.episodeOrderTime}>
                    <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
                    <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
                </div>
                <div className={styles.episodeTitleDescription}>
                    <p className={styles.episodeTitle}>{episode.name}</p>
                    <p className={styles.episodeDescription}>{episode.synopsis} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos modi cumque corporis maiores soluta! Obcaecati iste dicta doloremque cum quod. Ullam, laudantium sit similique, itaque facere, ut ducimus distinctio vel quis ad nihil labore expedita exercitationem perferendis repellendus quaerat asperiores temporibus? Quisquam temporibus libero repudiandae quia? Consequatur provident voluptatem voluptate. <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, eos.</p>
                </div>
            </div>
        </>
    );
};

export default EpisodeList;