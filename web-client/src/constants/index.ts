export const CONSTANTS = {
    ENVIRONMENTS: {
        PRODUCTION: "production"
    },
    ACTIONS: {
        POCKETS: {
            ADD: "ADD",
            SET_POCKETS: "SET_POCKETS",
        },
        CURRENCIES: {
            GET_CURRENCIES_SUCCESS: "GET_CURRENCIES_SUCCESS",
            GET_CURRENCIES_REQUEST: "GET_CURRENCIES_REQUEST",
            GET_CURRENCIES_FAILURE: "GET_CURRENCIES_FAILURE",
            GET_EXCHANGE_RATE_REQUEST: "GET_EXCHANGE_RATE_REQUEST",
            GET_EXCHANGE_RATE_SUCCESS: "GET_EXCHANGE_RATE_SUCCESS",
            GET_EXCHANGE_RATE_FAILURE: "GET_EXCHANGE_RATE_FAILURE",
            START_POLL_WATCHER: "START_POLL_WATCHER",
            END_POLL_WATCHER: "END_POLL_WATCHER",
        },
        EXCHANGE: {
            EXCHANGE_SUCCESS: "EXCHANGE_SUCCESS",
            EXCHANGE_REQUEST: "EXCHANGE_REQUEST",
            EXCHANGE_FAILURE: "EXCHANGE_FAILURE",
        }
    },
    URLS: {
        CHARACTERS: "/character",
        EXCHANGE: "latest.json",
    }
};
