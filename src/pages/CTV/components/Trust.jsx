export default function Trust() {
  const logos = [
    'STREAMING NETWORKS',
    'INDEPENDENT AGENCIES',
    'DSP PLATFORMS',
    'BRAND MEDIA TEAMS',
    'VERIFICATION FIRMS',
  ];

  return (
    <section id="trust">
      <div className="trust-label">TRUSTED BY TEAMS AT</div>
      <div className="trust-logos">
        {logos.map(l => (
          <span key={l} className="trust-logo">{l}</span>
        ))}
      </div>
    </section>
  );
}
