import { NextApiRequest, NextApiResponse } from 'next';

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }
    try {
        const line_items = req.body;

        const params: Stripe.Checkout.SessionCreateParams = {
            mode: 'payment',
            submit_type: 'pay',
            payment_method_types: ['card'],
            line_items,
            success_url: `${req.headers.origin}`,
            cancel_url: `${req.headers.origin}`,
        };

        const checkoutSession: Stripe.Checkout.Session =
            await stripe.checkout.sessions.create(params);

        return res.status(200).json(checkoutSession);
    } catch (err) {
        const errorMessage =
            err instanceof Error ? err.message : 'Internal server error';
        res.status(500).json({ statusCode: 500, message: errorMessage });
    }
}
