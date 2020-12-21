import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey =
		'pk_test_51HtkGSADqw09Vdl2JUYXbXp3gOTCOeyQRCtYxeLscVRkv3tfTbK9g4RzbzboSXjjYXqmJ6PF8NpZjRQITdfK8bag00fCAWo4Q8'

	const onToken = (token) => {
		console.log(token)
		alert('Payment Successful')
	}
	return (
		<StripeCheckout
			lanel='Pay now'
			name='CRWn Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your Total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton
