// bring-the-humans-03 entry program (Node 22+, standard library only, no network).
//
// It hands this repository's VIDEO.json to the grader: it reads the file from
// the repository root, checks that it names a real TikTok video page, and
// writes the same file to /output/VIDEO.json, where the gate reads it.
//
// A video address counts only as a full TikTok video page:
//
//   https://www.tiktok.com/@<handle>/video/<digits>
//
// Short links (vm.tiktok.com, vt.tiktok.com) and photo posts are refused by
// the gate, so they are refused here too. The placeholder this repository
// ships with is not a video page yet: it is copied through with a warning so
// the run still succeeds, and the gate refuses it as it stands (valid 0)
// until VIDEO.json is replaced with the posted video's address.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLACEHOLDER = 'https://www.tiktok.com/@<handle>/video/<id>';
const VIDEO_URL = /^https:\/\/(www\.)?tiktok\.com\/@[^/]+\/video\/\d+\/?$/;

const source = join(BOT_DIR, 'VIDEO.json');
let url: unknown;
try {
  url = (JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read as JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof url !== 'string') {
  console.error('VIDEO.json has no "url" string');
  process.exit(1);
}
if (url === PLACEHOLDER) {
  console.warn(
    'VIDEO.json still holds the placeholder: post the ad on TikTok, ' +
    'then replace the placeholder with the video\'s address before submitting.',
  );
} else if (!VIDEO_URL.test(url)) {
  console.error(
    `VIDEO.json does not name a TikTok video page: ${url}\n` +
    'Use a full address like https://www.tiktok.com/@<handle>/video/<id>.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
console.log(`VIDEO.json -> ${join(OUTPUT_DIR, 'VIDEO.json')} (${url})`);
