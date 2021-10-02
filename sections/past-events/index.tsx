import { Event } from "@components/event/";
import { EventModel } from "@components/event/event.model";
import styles from './past-events.module.scss';

let test: EventModel = {
  title: "test strign",
  location: "event location",
  date: "today",
  imagePath: "/images/perks/giveaways.jpg"
}
export const PastEvent = () => {
  return <div className={styles["past-events"]}>
    <Event {...test}/>
    <Event {...test}/>
    <Event {...test}/>
    <Event {...test}/>
    <Event {...test}/>
  </div>
}