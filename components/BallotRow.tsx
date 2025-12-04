"use client";

import Image from "next/image";
import { useCallback } from "react";

export type Candidate = {
  rowNumber: number;
  name: string;
  photoUrl?: string;
  symbolUrl?: string;
};

type BallotRowProps = {
  rowNumber: number;
  candidate?: Candidate;
  sessionState: "ready" | "voted";
  activeVoteRow: number | null;
  onVote: (rowNumber: number) => void;
};

function playBeep() {
  if (typeof window === "undefined") return;
  const AudioContext =
    window.AudioContext || (window as unknown as { webkitAudioContext?: typeof window.AudioContext }).webkitAudioContext;
  // Fallback: if AudioContext is not available, do nothing
  if (!AudioContext) return;

  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = "square";
  oscillator.frequency.value = 2000; // ~2kHz, more piercing
  gain.gain.value = 0.4; // louder beep

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
    ctx.close();
  }, 300);
}

export function BallotRow({
  rowNumber,
  candidate,
  sessionState,
  activeVoteRow,
  onVote,
}: BallotRowProps) {
  const hasCandidate = Boolean(candidate);
  const isButtonDisabled = !hasCandidate || sessionState === "voted";
  const isLedOn = activeVoteRow === rowNumber;

  const handleClick = useCallback(() => {
    if (!hasCandidate || isButtonDisabled) return;
    onVote(rowNumber);
    playBeep();
  }, [hasCandidate, isButtonDisabled, onVote, rowNumber]);

  return (
    <div className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,6fr)_minmax(0,1fr)_minmax(0,2fr)] items-stretch border-b border-zinc-300 px-1 text-xs last:border-b-0 ${hasCandidate ? 'py-3' : 'py-2'}`}>
      <div className={`flex items-center justify-center border-r border-zinc-300 font-semibold text-zinc-700 ${hasCandidate ? 'text-base' : 'text-sm'}`}>
        {rowNumber}
      </div>

      <div className={`flex items-center border-r border-zinc-300 bg-white px-2 ${hasCandidate ? 'min-h-16 py-2' : 'min-h-12 py-1'}`}>
        {hasCandidate ? (
          <div className="flex w-full items-center gap-3">
            {candidate?.photoUrl ? (
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded border border-zinc-200 bg-zinc-100">
                <Image
                  src={candidate.photoUrl}
                  alt={candidate.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
            ) : (
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded border border-dashed border-zinc-300 text-[10px] text-zinc-400">
                Photo
              </div>
            )}

            <div className="flex flex-1 flex-col justify-center">
              <span className="text-[15px] font-semibold leading-tight text-zinc-800 break-words">
                {candidate?.name}
              </span>
            </div>

            {candidate?.symbolUrl ? (
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded bg-zinc-50">
                <Image
                  src={candidate.symbolUrl}
                  alt={`${candidate.name} symbol`}
                  fill
                  className="object-contain p-0.5"
                  sizes="40px"
                />
              </div>
            ) : (
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-dashed border-zinc-300 text-[9px] text-zinc-400">
                Symbol
              </div>
            )}
          </div>
        ) : (
          <div className="h-8 w-full rounded bg-zinc-100/60" />
        )}
      </div>

      <div className="flex items-center justify-center">
        <div
          className={`h-3 w-3 rounded-full border border-zinc-600 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] ${
            isLedOn ? "bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.9)]" : "bg-red-900/60"
          }`}
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="button"
          disabled={isButtonDisabled}
          onClick={handleClick}
          className={`h-8 w-full max-w-[80px] rounded-lg border border-blue-900 bg-blue-700 text-[11px] font-semibold text-white shadow-[0_3px_0_0_rgba(15,23,42,0.9),0_0_0_1px_rgba(15,23,42,0.7)] transition-transform active:translate-y-[1px] active:shadow-[0_1px_0_0_rgba(15,23,42,0.9),0_0_0_1px_rgba(15,23,42,0.7)] ${
            isButtonDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
        >
          Vote
        </button>
      </div>
    </div>
  );
}


