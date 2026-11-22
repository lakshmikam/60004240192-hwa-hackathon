type DogMascotProps = {
  size?: number;
  mood?: 'happy' | 'sniffing';
  className?: string;
  title?: string;
};

export default function DogMascot({
  size = 180,
  mood = 'happy',
  className,
  title,
}: DogMascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <ellipse cx="100" cy="181" rx="58" ry="10" fill="#2a241f" opacity=".08" />
      <path
        d="M55 70C36 72 23 90 26 112c2 17 14 25 25 17 10-7 10-25 13-39z"
        fill="#C46A45"
      />
      <path
        d="M145 70c19 2 32 20 29 42-2 17-14 25-25 17-10-7-10-25-13-39z"
        fill="#C46A45"
      />
      <path
        d="M60 76c-11 5-17 17-16 30 1 8 6 12 11 8 5-4 5-13 6-22z"
        fill="#A95636"
        opacity=".45"
      />
      <path
        d="M140 76c11 5 17 17 16 30-1 8-6 12-11 8-5-4-5-13-6-22z"
        fill="#A95636"
        opacity=".45"
      />
      <path
        d="M64 142c8-16 24-24 36-24s28 8 36 24c6 11 2 24-10 28-16 5-36 5-52 0-12-4-16-17-10-28z"
        fill="#F2A65A"
      />
      <ellipse cx="100" cy="96" rx="57" ry="53" fill="#F2A65A" />
      <path
        d="M57 76c6-22 28-35 54-34-16 5-29 17-35 33z"
        fill="#E39145"
        opacity=".7"
      />
      {mood === 'sniffing' ? (
        <>
          <path
            d="M68 94c4-5 10-5 14 0"
            stroke="#22333B"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M118 94c4-5 10-5 14 0"
            stroke="#22333B"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
        </>
      ) : (
        <>
          <circle cx="75" cy="93" r="7" fill="#22333B" />
          <circle cx="125" cy="93" r="7" fill="#22333B" />
          <circle cx="77.5" cy="90.5" r="2.6" fill="#FFFDF7" />
          <circle cx="127.5" cy="90.5" r="2.6" fill="#FFFDF7" />
        </>
      )}
      <path
        d="M63 80c4-4 11-5 16-3"
        stroke="#a44f38"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M121 77c5-2 12-1 16 3"
        stroke="#a44f38"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="100" cy="118" rx="36" ry="28" fill="#FFE3C2" />
      <ellipse cx="100" cy="107" rx="11" ry="8.5" fill="#2E211D" />
      <ellipse cx="96" cy="104" rx="3" ry="2" fill="#FFFDF7" opacity=".55" />
      <path
        d="M100 116v7"
        stroke="#2E211D"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M100 123c-6 6-13 5-17 1"
        stroke="#2E211D"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 123c6 6 13 5 17 1"
        stroke="#2E211D"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {mood === 'happy' && (
        <path d="M93 130c0 8 14 8 14 0z" fill="#e5988b" />
      )}
      <path
        d="M66 144c20 12 48 12 68 0"
        stroke="#a44f38"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="100"
        cy="154"
        r="9"
        fill="#f3ded4"
        stroke="#a44f38"
        strokeWidth="3"
      />
      <circle cx="98" cy="152" r="2" fill="#FFFDF7" opacity=".8" />
    </svg>
  );
}
