

const paymentMethods = [
    {
        title: 'Sofort',
        code:'sofort',
        img: 'https://pbs.twimg.com/profile_images/917661388822208512/4XX3jcH5_400x400.jpg',
    },
    {
        title: 'Ideal',
        code:'ideal',
        img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0013/5311/brand.gif',
    },
    {
        title: 'Paypal',
        code:'paypal',
        img: 'http://freevectorlogo.net/wp-content/uploads/2016/10/paypal-logo-vector-400x400.png',
    }];




export function paymentMethodsReducer(state= paymentMethods, action) {
    return state;
}
