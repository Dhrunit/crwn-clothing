import React from 'react'
import { connect } from 'react-redux'
import { cleartItemFromCart } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'
const CheckoutItem = ({ cartItem, cleartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>{quantity}</span>
			<span className='price'>{price} $</span>
			<span
				className='remove-button'
				onClick={() => cleartItem(cartItem)}>
				&#10005;
			</span>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	cleartItem: (item) => dispatch(cleartItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
