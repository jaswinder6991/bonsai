import { NextResponse } from 'next/server';

import { createAccount } from '@/mb-ai-bos/utils/near/meta-transactions';

export async function POST(req: Request) {
  const body = await req.json();

  const { publicKey, accountId } = body;

  await createAccount(accountId, publicKey, "mainnet");//process.env.NEXT_PUBLIC_NETWORK_ID!);

  return NextResponse.json(
    { status: 'ok' },
    {
      status: 200,
      headers: {
        'content-type': 'text/plain',
      },
    },
  );
}
