import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function RoomMatrix() {
    return (
      <div>
        <h1>Maintenance Checklist</h1>
        <p>
          You can access the Maintenance Checklist <a href="https://cms.containers.it.osu.edu/" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <Link href="/">
            <p className = {utilStyles.buttonText}>Back to Home</p>
        </Link>
      </div>
    );
  }
  