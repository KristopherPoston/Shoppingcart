# Shopping Cart Application README

This is a shopping cart application built with React and Stripe for processing payments. The app provides a simple e-commerce store where users can browse products, add them to a cart, and proceed to checkout.

## Features

- **Product Store**: Displays a list of products with their names and prices.
- **Cart**: Users can add or remove items to/from their cart.
- **Checkout**: Users can view the contents of their cart, calculate the total price, and proceed to checkout using Stripe's payment gateway.
- **Modal Interface**: Cart items are displayed in a modal when the user clicks the cart button in the navigation bar.
- **Payment Processing**: Integrates with Stripe for secure payment processing.

## Getting Started

Follow these steps to get the project up and running locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-repo-name/shopping-cart-app.git
cd shopping-cart-app
```

### 2. Install dependencies

In the root directory, install the necessary dependencies for the front-end:

```bash
npm install
```

Also, install dependencies for the back-end in the server directory:

```bash
cd server
npm install
```

### 3. Set up the server

In the `server` directory, you need to set up an Express server with Stripe integration for payment processing.

1. Create a `.env` file to store your Stripe secret key:
    ```bash
    STRIPE_SECRET_KEY=your-stripe-secret-key
    ```

2. Run the server:

    ```bash
    node index.js
    ```

The server will listen on port 4000 and handle the checkout requests.

### 4. Run the React app

In the root directory, run the following command to start the React development server:

```bash
npm start
```

This will run the app on `http://localhost:3000`.

## Project Structure

### 1. **`src/components/`**
   - **`CartProduct.js`**: Component to display a product in the cart.
   - **`ItemCard.js`**: Displays individual product items with options to add or remove from the cart.
   - **`Navbar.js`**: Contains the navigation bar and the cart modal for displaying cart contents and proceeding to checkout.

### 2. **`src/pages/`**
   - **`Cancel.js`**: Page shown when the user cancels the payment during checkout.
   - **`Store.js`**: Displays all available products in the store.
   - **`Success.js`**: Page shown upon successful payment.

### 3. **`src/CartContext.js`**
   - Provides the global context for managing cart state, including adding/removing products, getting total price, etc.

### 4. **`src/productStore.js`**
   - Contains the product data (name, price, and unique ID) and helper functions for getting product details.

### 5. **`src/App.js`**
   - Main entry point of the React application where routes and context providers are set up.

### 6. **`server/index.js`**
   - Back-end server using Express and Stripe to handle checkout requests and redirect users to Stripe’s payment page.

## Dependencies

- **React**: Front-end library for building the user interface.
- **React-Bootstrap**: UI components for building the interface.
- **React-Router-Dom**: For handling routing in the app.
- **Stripe**: For handling payment processing.
- **Express**: Server-side framework for handling requests.
- **CORS**: Middleware to enable cross-origin requests between front-end and back-end.

## How it Works

1. **Viewing Products**: The products are displayed on the Store page (`Store.js`). The user can click on any product to add it to the cart. Each product has an "Add To Cart" button.
  
2. **Managing Cart**: When a user adds a product to the cart, it is stored in the global state using React's Context API (`CartContext.js`). The user can view the cart by clicking on the cart icon in the navigation bar (`Navbar.js`), which opens a modal displaying the cart contents.

3. **Checkout Process**: The user can proceed to checkout, which communicates with the Express server. The server uses the Stripe API to create a checkout session. Upon success or failure, users are redirected to either the Success or Cancel page.

## API Integration

- **POST `/checkout`**: This API handles the checkout process, receiving the cart items and creating a Stripe session. The response includes a URL to redirect users to Stripe's checkout page.

## Testing

Unit and integration tests can be written using `jest` and `@testing-library/react`. Basic tests have been set up for rendering components.

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Future Enhancements

- Add user authentication to track orders.
- Improve error handling for payment failures.
- Enhance UI/UX design with better animations and responsiveness.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Stripe](https://stripe.com/docs)
- [React Bootstrap](https://react-bootstrap.github.io/)

---

Feel free to contact me at KristopherPoston@gmail.com
