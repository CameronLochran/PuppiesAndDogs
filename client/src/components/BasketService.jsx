const baseURL = "https://dog.ceo/api/breeds/image/random";

export const getBasket = () => {
    return fetch(baseURL).then((res) => res.json())
}

export const postBasket = (payLoad) => {
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(payLoad),
        headers: {"Content-Type": "application/json" },
    }).then((res) => res.json());
};

export const deleteBasketItem = (id) => {
    return fetch(baseURL + id, {
        method: "DELETE",
    });
};