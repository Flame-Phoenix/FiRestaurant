import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization: 'Bearer 3pSDbs3rPMvkPIA37x1L1xcIFQ43Bi9HVbXi5jzJFn8Ar5RPQQqM0zT5loh-3bx-tr5h7qWVVD9uPaYeqoMkjPhxXJ31wR6wg9sVVt0jZLzyomrtP_D5ErYoXbOkX3Yx',
    }
});

