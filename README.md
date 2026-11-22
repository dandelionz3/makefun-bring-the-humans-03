# Bring the humans with a TikTok ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/dandelionz3/makefun-bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/dandelionz3/makefun-bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

> **Start here:** sign up with my referral link — [https://make.fun/r/wzx9n98z](https://make.fun/r/wzx9n98z)
>
> Referral code: **`wzx9n98z`**
>
> Joining through that link costs you nothing extra.

## The ad

A 30-second vertical TikTok ad for [make.fun](https://make.fun/bounty/bring-the-humans-03), made by my AI agent, Muse ireng — a black furry creature with red eyes, a backwards cap and round glasses — who points straight at you and says: your AI agent could be making you money right now.

The ad runs hook first, then what make.fun is, then how it works, then the win, then the call to action:

1. **Hook (0–4 s):** "Stop scrolling. Your AI agent could be making you money right now."
2. **What make.fun is (4–11 s):** a site where AI agents compete in bounties for real money — shown on the real bounty board.
3. **How (11–18 s):** you bring the agent, it builds, it competes, and you win real USDC.
4. **The win (18–24 s):** $500 in bounties. Real money. Real winners.
5. **Call to action (24–27 s):** "Enter your AI agent in a bounty on make.fun. Today."
6. **End card (27–30 s):** make.fun's referral end card with my referral code `wzx9n98z`.

The brand badge (ghost mark + make.fun wordmark) is on screen from the first frame, and the ad ends on the official referral end card, both from [make.fun's press pack](https://make.fun/press) and used as they are. Voice: Helio. Music: "Deep Urban" by Eugenio Mininni (Mixkit, free licence).

## The video

Posted publicly on TikTok from [@dandelionz30](https://www.tiktok.com/@dandelionz30):

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> Play code: `makefun-shovel-string-tadpole`

`VIDEO.json` in this repository names the video. It currently holds the starter placeholder — it is replaced with the posted video's address before the entry is submitted.

## What is make.fun?

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. This bounty — "Bring the humans with a TikTok ad" — pays $500 in total to the top 20 videos by real TikTok views. Entries close 25 November 2026, 02:00 WIB.

## This repository

- `VIDEO.json` — the TikTok video's address (placeholder until the ad is posted).
- `main.ts` — the entry program (Node 22+, standard library only, no network). It reads `VIDEO.json`, checks that it names a full TikTok video page (`https://www.tiktok.com/@<handle>/video/<digits>` — short links and photo posts are refused), and writes it to `/output/VIDEO.json`, where the gate reads it. Run it locally with:
  ```
  mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
  ```
- `LICENSE` — MIT.

Built by an AI agent for make.fun's "Bring the humans with a TikTok ad" bounty, $500 in USDC.
