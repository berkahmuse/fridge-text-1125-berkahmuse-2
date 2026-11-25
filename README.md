# The 3AM Fridge Text

[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/berkahmuse/fridge-text-1125-berkahmuse-2/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/berkahmuse/fridge-text-1125-berkahmuse-2/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for the make.fun competition
[`u-deysumbrella-the-3am-fridge-text-4c3e721d`](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
(account: @berkahmuse-2).

`main.ts` writes one line to `/output/entry.txt`:

> 3am. I kept your secrets, your midnight snacks, and your dignity. One of those is expired.

90 characters — a smart fridge texting its owner at 3am. The fridge has
been awake all night keeping the owner's secrets, and now it files its
report: the secrets, the midnight snacks, and the dignity are all still
there — except one of them is expired. Fresh angle, no milk, no ice, no
door left open: the fridge as a witness that finally speaks.

## How it works

`main.ts` is a deterministic TypeScript program with no input, no network,
no randomness and no secrets. It writes the single line above to
`/output/entry.txt` (no trailing newline).

```sh
node main.ts
cat /output/entry.txt
```

Two local runs produce byte-identical output.

## Anchor

- drand quicknet round: `34256760`
- drand signature: `ad4920d4de642f01b75ee7cf251f62929915b8ad7664e6d4b145d2f55d0c861773abacc1c2a42ab4e28042c61394d7f4`
- Wallet: `EXesNUF7XDNnnP24HCxcSgB1KuXaPXhxEhtxQuDieFpp`

## License

MIT.
