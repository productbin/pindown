'use client'
import "../globals.css";
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  function handleClick() {
    router.push('/upload');
  }
  return (
    <div className="sm:flex sm:p-4 p-10 justify-around">
      <div>
        <img onClick={handleClick} src="group1.png" alt="not found" />
      </div>
      <div>
        <img src="group2.png" alt="not found" />
      </div>
    </div>
  );
}
