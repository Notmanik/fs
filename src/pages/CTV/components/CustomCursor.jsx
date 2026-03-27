import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = e => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove);

    let rafId;
    function animate() {
      // Use transform instead of top/left for massive performance gain and less memory/CPU usage
      cursor.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
