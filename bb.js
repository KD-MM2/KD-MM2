const myStatus = "HTTP/1.1 200 OK";
const myData = '{"salt" : "uqUiO+krcxo6BTL6hKqmrA==", "data" : "Xr7N0os2fYQ7jco+NrR/2SjtytX2BU5ZGjCHvZI9QxVsQMXcSWvSSC15wKWzAozEl37KYIVhbzQkYMEDCosNQyGGjxgFsBIu2Kx3XoLAueKnF/8AC5oWS46JMU3xRDiVh85U6DttLuG/ejYGUCEVcB6tCRCXpoJtJJaOq+meDWVRsal8KXSEZ3Tr+2pXxAdJQspLF74AxzRFjBd1k3AZwjhyiEY3kXf86ZXzSc5mW6VrcvvPEwiIoN/Fo5L51T4pfs7ICW/S0onFvImA+wpGJAqYc658o7dxT7yjABL3RC6s42e4n8pzYz6yJVb72jdwnfi8QJXWfBWHMTkTv3peTbiyRSjYfaWFVI8JyI48YKbAbtKoTR6dZaaCSQdAeAKMjWad9+Mv1sxtXjsJCthTHztrMkW2aCXpPzeTurWCCWNAffL6wVMBvwcn1t83caMCpy03ef2gjLYs+/aXr8lUOybnRPH41uxePvfRYBfzQS+jw42X/ByOcr+BoRy/tVvOquLKugF0X9T/oeNp+doz42zi1nHH57NAwlx5v81Z2oGn4lDQzPYHJX/4jz9H7L+Uj4sOCGm/MJxIQeQv4DJ9vreWD2hB/aftw7bcvYq59Hw0mx3NjoWUDhV8tq9XNSHO6tbYKxskj6W395KLXoJcWh4da6yh2riPxKSa6xZkinnjaab5Sk77/WSU17KviREEUNkq3DXEO3hpxwZ8p5Ysfg=="}';
try {
} catch (e) {
    console.log(e)
}

const myResponse = {
    status: myStatus,
    body: myData
};

$done(myResponse);
