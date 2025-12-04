"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { BallotRow, type Candidate } from "./BallotRow";
import allConfigs from "../data/ballot-config.json";

const TOTAL_ROWS = 10;

type SegmentKey = "ward" | "block" | "district";

type Config = {
  ward: Candidate[];
  block: Candidate[];
  district: Candidate[];
};

type AllConfigs = Record<string, Config>;

const configs = allConfigs as AllConfigs;

type BallotUnitProps = {
  slug?: string;
};

export function BallotUnit({ slug }: BallotUnitProps) {
  const [segment, setSegment] = useState<SegmentKey>("ward");
  const [sessionState, setSessionState] = useState<"ready" | "voted">("ready");
  const [activeVoteRow, setActiveVoteRow] = useState<number | null>(null);
  const [votedCandidate, setVotedCandidate] = useState<Candidate | null>(null);

  const currentConfig = useMemo<Config>(() => {
    const key = slug ?? "default";
    return configs[key] ?? configs.default;
  }, [slug]);

  const segmentCandidates = useMemo(
    () => currentConfig?.[segment] ?? [],
    [segment, currentConfig],
  );

  const rows = useMemo(() => {
    const mapped: { rowNumber: number; candidate?: Candidate }[] = [];
    for (let i = 1; i <= TOTAL_ROWS; i += 1) {
      const candidate = segmentCandidates.find((c) => c.rowNumber === i);
      mapped.push({ rowNumber: i, candidate });
    }
    return mapped;
  }, [segmentCandidates]);

  const resetSession = useCallback(() => {
    setActiveVoteRow(null);
    setVotedCandidate(null);
    setSessionState("ready");
  }, []);

  const handleVote = useCallback(
    (rowNumber: number) => {
      if (sessionState === "voted") return;
      const candidate = segmentCandidates.find((c) => c.rowNumber === rowNumber) ?? null;
      setActiveVoteRow(rowNumber);
      setVotedCandidate(candidate);
      setSessionState("voted");
    },
    [sessionState, segmentCandidates],
  );

  useEffect(() => {
    if (sessionState !== "voted") return;

    const timer = setTimeout(() => {
      resetSession();
    }, 2000);

    return () => clearTimeout(timer);
  }, [sessionState, resetSession]);

  return (
    <div className="min-h-screen bg-zinc-300/60  text-zinc-900">
      <div className="relative mx-auto flex h-full w-full max-w-sm flex-col gap-3 bg-zinc-100">
        <header className="bg-zinc-50 px-4 py-3">
          <div className="mb-2 flex items-center justify-between text-[13px] font-semibold">
            <div className="flex items-center gap-2">
              <span>Ready</span>
              <span
                className={`h-3 w-3 rounded-full border border-zinc-600 shadow-[0_0_0_1px_rgba(0,0,0,0.3)] ${
                  sessionState === "ready"
                    ? "bg-green-400"
                    : "bg-green-900/60"
                }`}
              />
            </div>
            <span className="text-[12px] font-semibold text-zinc-700">Ballot</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[11px] font-medium">
            <button
              type="button"
              onClick={() => {
                setSegment("ward");
                resetSession();
              }}
              className={`h-8 rounded-full px-3 text-[11px] font-medium transition ${
                segment === "ward"
                  ? "bg-white text-slate-900 shadow-inner border border-slate-300"
                  : "bg-slate-100 text-slate-600 shadow-[0_3px_6px_rgba(15,23,42,0.3)] border border-slate-200"
              }`}
            >
              Ward
            </button>
            <button
              type="button"
              onClick={() => {
                setSegment("block");
                resetSession();
              }}
              className={`h-8 rounded-full px-3 text-[11px] font-medium transition ${
                segment === "block"
                  ? "bg-white text-slate-900 shadow-inner border border-slate-300"
                  : "bg-slate-100 text-slate-600 shadow-[0_3px_6px_rgba(15,23,42,0.3)] border border-slate-200"
              }`}
            >
              Block
            </button>
            <button
              type="button"
              onClick={() => {
                setSegment("district");
                resetSession();
              }}
              className={`h-8 rounded-full px-3 text-[11px] font-medium transition ${
                segment === "district"
                  ? "bg-white text-slate-900 shadow-inner border border-slate-300"
                  : "bg-slate-100 text-slate-600 shadow-[0_3px_6px_rgba(15,23,42,0.3)] border border-slate-200"
              }`}
            >
              District
            </button>
          </div>
        </header>

        <div className="flex-1 bg-zinc-200/80 px-2 py-2 shadow-inner">
          <div className="h-full overflow-hidden rounded-sm border border-zinc-300 bg-white">
            {rows.map((row) => (
              <BallotRow
                key={row.rowNumber}
                rowNumber={row.rowNumber}
                candidate={row.candidate}
                sessionState={sessionState}
                activeVoteRow={activeVoteRow}
                onVote={handleVote}
              />
            ))}
          </div>
        </div>

        {sessionState === "voted" && (
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60 px-4">
            <div className="w-full max-w-xs rounded-2xl bg-white px-4 py-4 text-center shadow-xl">
              <h2 className="mb-2 text-base font-semibold text-zinc-900">Thank you for voting</h2>
              {votedCandidate ? (
                <div className="mb-3 flex items-center justify-center gap-3">
                  {votedCandidate.photoUrl && (
                    <div className="relative h-12 w-12 overflow-hidden rounded border border-zinc-200 bg-zinc-100">
                      <img
                        src={votedCandidate.photoUrl}
                        alt={votedCandidate.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-zinc-900">
                      {votedCandidate.name}
                    </span>
                    {votedCandidate.symbolUrl && (
                      <div className="mt-1 flex items-center gap-1.5">
                        <img
                          src={votedCandidate.symbolUrl}
                          alt={`${votedCandidate.name} symbol`}
                          className="h-6 w-6 rounded bg-zinc-50 object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <p className="mb-3 text-xs text-zinc-600">Your vote has been recorded.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

