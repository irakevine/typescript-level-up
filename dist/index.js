"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birtday: new Date() };
}
let Customer = getCustomer(1);
console.log(Customer === null || Customer === void 0 ? void 0 : Customer.birtday);
//# sourceMappingURL=index.js.map