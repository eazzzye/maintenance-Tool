import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

export default function RoomMatrix() {
  return (
    <div>
      <h1>OSU Room Matrix</h1>
      <p>
        You can access the OSU Room Matrix <a href="https://courses.erppub.osu.edu/psp/ps/EMPLOYEE/PUB/c/OSR_CUSTOM_MENU.OSR_ROOM_MATRIX.GBL" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      {/* Back to Home Button */}
      <Link href="/">
        <p className = {utilStyles.buttonText}>Back to Home</p>
      </Link>
    </div>
  );
}
