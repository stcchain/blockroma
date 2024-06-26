import * as React from "react";
import { shortenHash } from "@/shared/common/shorten-hash";
import { TickingTs } from "@/shared/explorer-components/ticking-ts";

import { assetURL } from "@/shared/common/asset-url";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export type Blk = {
  consensus: boolean | null;
  difficulty: string | null;
  gasLimit: string | null;
  gasUsed: string | null;
  hash: any | null;
  miner: any | null;
  nonce: any | null;
  number: number | null;
  parentHash: any | null;
  size: number | null;
  timestamp: any | null;
  numTxs: number | null;
  totalDifficulty: string | null;
};

type Props = {
  blk: Blk | null | undefined;
};

export function BlkTile({ blk }: Props): JSX.Element {
  const { t } = useTranslation("common");
  if (!blk) {
    return <></>;
  }
  return (
    <div
      className="col-lg-3 fade-up-blocks-chain"
      data-selector="chain-block"
      data-block-number={blk.number}
    >
      <div className="tile tile-type-block n-p d-flex flex-column">
        <Link
          className="tile-title"
          data-selector="block-number"
          href={assetURL(`block/${blk.number}`)}
        >
          {blk.number}
        </Link>
        <div className="tile-bottom-contents">
          <div className="tile-transactions">
            <span className="mr-2">
              {blk.numTxs} {t("nav.txs")}
            </span>
            <TickingTs className="text-nowrap" timestamp={blk.timestamp} />
          </div>
          <div className="text-truncate">
            Validator{" "}
            <Link
              data-test="address_hash_link"
              href={assetURL(`address/${blk.miner}`)}
            >
              <span data-address-hash={blk.miner}>
                <span
                  data-toggle="tooltip"
                  data-placement="top"
                  title={blk.miner}
                  data-custom-class="miner-address-tooltip"
                >
                  {/*
                        TODO(dora) validator name
                        */}
                  <span>{shortenHash(blk.miner)}</span>
                </span>
              </span>
            </Link>
          </div>
          {/*
          TODO(dora) reward

                    <div className="text-truncate">Reward 2 BMO</div>


          */}
        </div>
      </div>
    </div>
  );
}
