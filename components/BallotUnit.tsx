"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
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
  const [showShareModal, setShowShareModal] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const contactRef = useRef<HTMLAnchorElement>(null);

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

  // Track when Contact Us button is visible
  useEffect(() => {
    const contact = contactRef.current;
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

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

        {/* Make Your Own Button (in document flow) */}
        <div className="flex justify-center bg-zinc-100 px-4 py-4">
          <a
            ref={contactRef}
            href="https://wa.me/919562695758?text=Hi%2C%20I%20want%20to%20make%20my%20own%20EVM%20Ballot%20Unit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-700 active:scale-95"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Make Your Own
          </a>
        </div>

        {/* Sticky Share Button - hidden when Contact Us is visible */}
        {!isContactVisible && (
          <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-center pb-4">
            <button
              type="button"
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
              Share
            </button>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && (
          <div 
            className="fixed inset-0 z-30 flex items-end justify-center bg-black/50"
            onClick={() => setShowShareModal(false)}
          >
            <div 
              className="w-full max-w-md rounded-t-2xl bg-white px-4 pb-8 pt-4 animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-900">Share via</h3>
                <button
                  type="button"
                  onClick={() => setShowShareModal(false)}
                  className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent("Check out this EVM Ballot Unit! " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                  onClick={() => setShowShareModal(false)}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500">
                    <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-zinc-600">WhatsApp</span>
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                  onClick={() => setShowShareModal(false)}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
                    <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-zinc-600">Facebook</span>
                </a>

                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Check out this EVM Ballot Unit!")}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                  onClick={() => setShowShareModal(false)}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
                    <svg viewBox="0 0 24 24" fill="white" className="h-6 w-6">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-zinc-600">X</span>
                </a>

                {/* Copy Link */}
                <button
                  type="button"
                  onClick={async () => {
                    const shareUrl = window.location.href;
                    try {
                      if (navigator.clipboard && navigator.clipboard.writeText) {
                        await navigator.clipboard.writeText(shareUrl);
                      } else {
                        const textArea = document.createElement("textarea");
                        textArea.value = shareUrl;
                        textArea.style.position = "fixed";
                        textArea.style.left = "-9999px";
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand("copy");
                        document.body.removeChild(textArea);
                      }
                      alert("Link copied!");
                    } catch (err) {
                      alert("Could not copy link");
                    }
                    setShowShareModal(false);
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.193-9.193a4.5 4.5 0 00-6.364 0l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  </div>
                  <span className="text-xs text-zinc-600">Copy Link</span>
                </button>
              </div>
            </div>
          </div>
        )}

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

