import { Button } from '@/components/button';
import styles from './style.module.css';

interface HubStepsSectionProps {
  signUpLink?: string;
}

export const HubStepsSection = ({ signUpLink }: HubStepsSectionProps) => {
  return (
    <div className={styles.hub_steps_section}>
      <div className={styles.steps_wrapper}>
        <h2>What to do...</h2>
        <div className={styles.section}>
          <h3>Register Yourself</h3>
          <p>
            Sign up to participate in this year&apos;s UNIHACK event - this is
            the important bit.
          </p>
          <div className="links">
            <Button
              href="https://manage.unihack.net/auth/signup"
              text="Sign Up"
            />
          </div>
        </div>
        <div className={styles.section}>
          <h3>Create/Join Your Team</h3>
          <p>
            Create your team, or get your friends to add you to their team.
            Teams must be 4-6 people.
          </p>
          <div className="links">
            <Button href="https://manage.unihack.net" text="Manage My Team" />
          </div>
        </div>
        <div className={styles.section}>
          <h3>Let us know...</h3>
          <p>
            Once your team is created, book your spot at the Hub so we know you
            and your team are coming!
          </p>
          <div className="links">
            {signUpLink && (
              <Button href={signUpLink} text="Register for the Hub" />
            )}
            {!signUpLink && <Button href="#" text="Coming Soon" />}
          </div>
        </div>
      </div>
    </div>
  );
};
