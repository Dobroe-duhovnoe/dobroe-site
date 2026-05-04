import { useId, useMemo, useRef } from 'react';

const clamp01 = (v) => Math.min(1, Math.max(0, v));

function MuteIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path d="M11 5 7 9H4v6h3l4 4V5Z" fill="currentColor" />
      <path
        d="M16.2 8.8 21 13.6m0-4.8-4.8 4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VolumeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path d="M11 5 7 9H4v6h3l4 4V5Z" fill="currentColor" />
      <path
        d="M15.5 8.5a5 5 0 0 1 0 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M18.5 6a8.5 8.5 0 0 1 0 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

const iconBtnBase =
  'absolute top-1/2 z-[3] flex h-[44px] w-[46px] -translate-y-1/2 items-center justify-center border-0 bg-transparent transition-transform duration-150 ease-out disabled:cursor-not-allowed enabled:cursor-pointer enabled:active:-translate-y-1/2 enabled:active:scale-[0.96]';

/**
 * @param {{
 *   value: number;
 *   onChange: (value: number) => void;
 *   disabled?: boolean;
 *   ariaLabel?: string;
 * }} props
 */
function VolumeSlider({ value, onChange, disabled, ariaLabel = 'Громкость' }) {
  const id = useId();
  const progressRef = useRef(null);
  const percent = useMemo(() => clamp01(value) * 100, [value]);
  const minIconOnFill = percent > 1;
  const maxIconOnFill = percent >= 96;

  const setFromClientX = (clientX) => {
    const progress = progressRef.current;
    if (!progress) return;
    const rect = progress.getBoundingClientRect();
    const next = rect.width ? (clientX - rect.left) / rect.width : 0;
    onChange(clamp01(next));
  };

  return (
    <div
      className={`w-full max-w-[240px] min-w-0 shrink-0 rounded-full bg-white ${
        disabled ? 'opacity-60' : ''
      }`}
      aria-disabled={disabled || undefined}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="relative box-border h-[36px] w-full touch-none overflow-hidden rounded-full bg-white"
        role="presentation"
      >
        <div
          className="pointer-events-none absolute top-1 bottom-1 left-1 z-[1] max-w-full rounded-full bg-[var(--color-button-primary)]"
          style={{
            width: `calc((100% - 8px) * ${percent / 100})`,
          }}
        />

        <button
          type="button"
          className={`${iconBtnBase} left-1 ${
            minIconOnFill ? 'text-white' : 'text-[var(--color-button-primary)]'
          }`}
          onClick={() => onChange(0)}
          disabled={disabled}
          aria-label="Громкость: минимум"
        >
          <MuteIcon className="block h-[30px] w-[30px]" />
        </button>

        <div
          ref={progressRef}
          className="absolute top-0 right-[50px] bottom-0 left-[50px] z-[2] touch-none"
          onPointerDown={(event) => {
            if (disabled) return;
            event.currentTarget.setPointerCapture(event.pointerId);
            setFromClientX(event.clientX);
          }}
          onPointerMove={(event) => {
            if (disabled) return;
            if (event.buttons === 0) return;
            setFromClientX(event.clientX);
          }}
        >
          <input
            id={id}
            className="absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
            type="range"
            min={0}
            max={100}
            step={1}
            value={Math.round(percent)}
            onChange={(e) => onChange(Number(e.target.value) / 100)}
            disabled={disabled}
            aria-label={ariaLabel}
          />
        </div>

        <button
          type="button"
          className={`${iconBtnBase} right-1 ${
            maxIconOnFill ? 'text-white' : 'text-[var(--color-button-primary)]'
          }`}
          onClick={() => onChange(1)}
          disabled={disabled}
          aria-label="Громкость: максимум"
        >
          <VolumeIcon className="block h-[30px] w-[30px]" />
        </button>
      </div>
    </div>
  );
}

export default VolumeSlider;
