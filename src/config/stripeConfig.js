import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
	'pk_test_51QPWqxJCOjvMBaIQnhcKM5yyp5Wynw7wwTtd4rcJ1aM2PaOQPiOMyv41ftbM4ya2AacA5MLPKwy44lvpUDK400Yt00Qn8TcDA8',
);

export default stripePromise;
