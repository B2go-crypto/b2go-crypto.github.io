const Pi = {
    init: function(config) {
        console.log("Pi SDK initialized");
    },
    authenticate: function(scopes, onIncompletePayment) {
        return new Promise((resolve) => {
            resolve({ user: { uid: "demo-user" } });
        });
    }
};
